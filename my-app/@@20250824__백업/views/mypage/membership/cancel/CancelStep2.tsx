'use client';

import { useState } from 'react';
import {
  ButtonArea,
  Button,
  TitleArea,
  Box,
  InfoList,
  InfoItem,
  Text,
  TitleBar,
  CheckboxGroup,
  Checkbox,
  Textarea,
} from '@shared/ui';
import { Contents } from '@widgets/layout/Container';
import styles from './CancelStep2.module.scss';

// 해지 이유 선택옵션
const options = [
  {
    label: '멤버십 월 구독료가 부담돼요.',
    value: 'option1',
  },
  {
    label: '혜택이 적어요.',
    value: 'option2',
  },
  {
    label: '최근 이용 횟수가 줄었어요.',
    value: 'option3',
  },
];

export default function CancelStep2() {
  // 체크그룹 상태
  const [selected, setSelected] = useState<string[]>(['']);
  // 해지이유 직접입력 체크박스상태
  const [reasonChecked, setReasonChecked] = useState(false);

  // 체크그룹 핸들러
  const handleCheckChange = (value: string[]) => {
    setSelected(value);
  };

  return (
    <>
      <Contents className={styles.layout}>
        <TitleArea
          topSlot={
            <>
              <Text as="strong" size="5" weight="semibold">
                오늘 해지해도
              </Text>
            </>
          }
          title={
            <>
              7월 3일까지는
              <br />
              혜택을 이용할 수 있어요
            </>
          }
        />
        <TitleBar type="docs" level="2" title={<>상세 정보</>} />
        <Box className="ncp-w-full">
          <InfoList variant="stacked" className={styles.info}>
            <InfoItem
              title={<Text color="gray2">멤버십명</Text>}
              content={<Text>HiHi 멤버십 플러스</Text>}
            />
            <InfoItem
              title={<Text color="gray2">이용 기간</Text>}
              content={<Text>2025.04.04~2025.05.03</Text>}
            />
            <InfoItem
              title={<Text color="gray2">해지 신청일</Text>}
              content={<Text>2025.06.04</Text>}
            />
          </InfoList>
        </Box>
        <TitleBar type="docs" level="2" title={<>해지하는 이유를 선택해 주세요 (중복 가능)</>} />
        <div className={styles.checks}>
          <CheckboxGroup
            name="cancel-reason"
            className={styles.check}
            vertical
            options={options}
            value={selected}
            onChange={handleCheckChange}
          />
          <Checkbox
            label="직접 입력 해주세요"
            checked={reasonChecked}
            onChange={(e) => setReasonChecked(e.target.checked)}
          />
        </div>
        {reasonChecked && (
          <>
            <Textarea
              placeholder="남겨주신 의견을 참고하여 더 좋은 서비스를 만들겠습니다."
              maxLength={200}
              className="ncp-mt-xs"
            />
          </>
        )}
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">해지하기</Button>
        <Button variant="primary" size="large">
          계속 이용하기
        </Button>
      </ButtonArea>
    </>
  );
}
