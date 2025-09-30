'use client';

import { useMemo, useState, useEffect } from 'react';
import { Box, Text, Heading, TextButton, Flag, IconButton, Radio, Stack } from '@shared/ui';
import { formatDate } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './CarNumManage.module.scss';

/**
 * 차량번호 관리 영역
 *
 */
export type CarItem = {
  id: string;
  number: string;
  createdAt: string; // YYYYMMDD
  isPrimary?: boolean; // 대표 차량 여부
};

type Mode = 'view' | 'edit';

// 마스킹처리 - 임시
const maskPlate = (plate: string) => {
  if (!plate) return plate;
  const chars = Array.from(plate);
  const n = chars.length;
  if (n >= 2) chars[1] = '*';
  if (n >= 1) chars[n - 1] = '*';
  if (n >= 2) chars[n - 2] = '*';

  return chars.join('');
};

export interface CarNumManageProps {
  /** 아이템 배열 */
  items: CarItem[];
  /** 최대선택 (기본 3) */
  max?: number; //
  /** 기본 마스킹 여부 */
  defaultMasked?: boolean;
  /** 저장 시 부모로 반영 */
  onChange?: (next: CarItem[]) => void; //
}

export function CarNumManage({
  items,
  max = 3,
  defaultMasked = true,
  onChange,
}: CarNumManageProps) {
  // 현재 화면 모드: view | edit
  const [mode, setMode] = useState<Mode>('view');

  // 차량번호 마스킹 여부
  const [masked, setMasked] = useState<boolean>(defaultMasked);

  // 편집 중 임시 목록 (라디오/삭제 반영용)
  const [editList, setEditList] = useState<CarItem[]>(items);

  // 현재 대표 차량 id (보기 모드 기준)
  const currentPrimaryId = useMemo(() => items.find((i) => i.isPrimary)?.id ?? null, [items]);

  // 편집 중 선택된 대표 차량 id */
  const [selectedPrimaryId, setSelectedPrimaryId] = useState<string | null>(currentPrimaryId);

  // props 변화 동기화
  useEffect(() => {
    setEditList(items);
    setSelectedPrimaryId(currentPrimaryId);
  }, [items, currentPrimaryId]);

  // 편집 모드 진입
  const enterEdit = () => {
    setEditList(items); // 현재 데이터로 임시 리스트 초기화
    setSelectedPrimaryId(currentPrimaryId); // 대표 차량 id 초기화
    setMode('edit');
  };

  // 편집 취소
  const cancelEdit = () => {
    setEditList(items); // 임시 리스트 원복
    setSelectedPrimaryId(currentPrimaryId); // 대표 차량 id 원복
    setMode('view');
    setMasked(true);
  };

  // 편집 저장
  const saveEdit = () => {
    const next = editList.map((i) => ({
      ...i,
      isPrimary: i.id === selectedPrimaryId, // 대표 차량 갱신
    }));
    onChange?.(next); // 부모에 전달
    setMode('view');
    setMasked(true);
  };

  // 삭제 (편집 모드에서만 노출)
  const removeDraftItem = (id: string) => {
    console.log('삭제 id:', id);
    // 삭제 기능 로직
  };

  // 뷰/편집에 따라 보여줄 소스
  const list = mode === 'view' ? items : editList;

  return (
    <div className={styles.manage}>
      {/* 상단 타이틀 영역 */}
      <div className={styles.top}>
        <div className={styles.tit}>
          <Heading size="3" weight="medium">
            차량번호 관리
          </Heading>
          <Text as="span" size="3" color="gray2">
            등록된 차량 중 대표 차량을 선택해주세요. (최대 {max}대)
          </Text>
        </div>
        {/* 상단 버튼: 모드별로 분기 */}
        {mode === 'view' ? (
          <div className={styles.btns}>
            {masked ? (
              <TextButton
                size="1"
                color="gray3"
                variant="underline"
                // onClick={() => setMasked(false)}
              >
                마스킹 해제
              </TextButton>
            ) : null}

            <TextButton size="1" color="gray3" variant="underline" onClick={enterEdit}>
              편집
            </TextButton>
          </div>
        ) : (
          <div className={styles.btns}>
            <TextButton size="1" color="gray3" variant="underline" onClick={saveEdit}>
              저장
            </TextButton>
            <TextButton size="1" color="gray3" variant="underline" onClick={cancelEdit}>
              취소
            </TextButton>
          </div>
        )}
      </div>
      {/* 하단 목록 영역 */}
      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.id} className={styles.item}>
            <Box className={styles.box}>
              <Stack type="between">
                {/* 왼쪽 영역 */}
                <div className={clsx(styles.car, mode === 'edit' && styles.editCar)}>
                  {mode === 'view' ? (
                    <>
                      <Text weight="medium" color="primary">
                        {masked ? maskPlate(item.number) : item.number}
                      </Text>
                      {item.isPrimary && <Flag data={{ color: 'green3', label: '대표차량' }} />}
                    </>
                  ) : (
                    <Radio
                      name="primaryCar"
                      value={item.id}
                      label={item.number}
                      checked={selectedPrimaryId === item.id}
                      onChange={(e) => setSelectedPrimaryId(e.target.value)}
                    />
                  )}
                </div>
                {/* 오른쪽 영역 */}
                <div className={styles.side}>
                  <Text color="gray3" size="3" weight="regular">
                    {formatDate(item.createdAt, 'dot', true)} 등록
                  </Text>
                  {/* 편집 모드에서만 삭제 노출 */}
                  {mode === 'edit' && (
                    <IconButton name="close" size="small" onClick={() => removeDraftItem(item.id)}>
                      삭제
                    </IconButton>
                  )}
                </div>
              </Stack>
            </Box>
          </li>
        ))}
      </ul>
    </div>
  );
}
