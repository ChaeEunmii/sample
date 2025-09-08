'use client';

import { useRef, useState } from 'react';
import {
  Text,
  Box,
  Heading,
  InfoList,
  InfoItem,
  Empty,
  IconButton,
  Input,
  FormArea,
  FormItem,
  ButtonArea,
  Button,
  Radio,
} from '@shared/ui';
import clsx from 'clsx';
import styles from './AddressFinder.module.scss';

// TIP 안내문구
const tipItems = [
  { label: '도로명 + 건물번호', content: '예) 판교역로 266, 제주 첨단로 242' },
  { label: '지역명(동/리) + 번지', content: '예) 백현동 532, 제주 영평동 2181' },
  { label: '지역명(동/리) + 건물명(아파트명)', content: '예) 분당 주공, 연수동 주공3차' },
  { label: '사서함명 + 번호', content: '예) 분당우체국사서함 1~100' },
];

// 개별 주소 아이템
export type AddressItem = {
  zipcode: string; // 우편번호
  roadAddress: string; // 도로명주소
  jibunAddress: string; // 지번
};

// 저장 시 상위로 전달할 데이터 구조
export type AddressSavePayload = {
  selectedId: string;
  selectedItem: AddressItem;
  detailAddress: string;
  keyword: string;
};

interface AddressFinderProps {
  /** 검색 대상 주소 데이터 */
  data: AddressItem[];
  /** 검색 최소글자 수(기본2) */
  minLen?: number;
  /** 추가적인 클래스 */
  className?: string;
  /** 저장 시 호출되는 콜백 */
  onSave?: (payload: AddressSavePayload) => void;
}

export const AddressFinder = ({ data, minLen = 2, className, onSave }: AddressFinderProps) => {
  const inputRef = useRef<HTMLInputElement>(null); // 검색 input DOM 참조용 ref
  const [value, setValue] = useState(''); // 검색어
  const [selectedValue, setSelectedValue] = useState<string | null>(null); // 선택된 라디오
  const [detail, setDetail] = useState(''); // 상세주소

  // 검색어
  const trimmed = value.trim();

  // 검색 중인지 확인
  const isSearching = trimmed.length > 0;

  // 필터링된 결과
  const filteredResults =
    trimmed.length >= minLen
      ? data.filter((r) =>
          [r.zipcode, r.roadAddress, r.jibunAddress].some((f) => String(f ?? '').includes(trimmed))
        )
      : [];

  // 검색 목록이 있는지 확인
  const hasSearchResults = filteredResults.length > 0;

  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSelectedValue(null);
    setDetail('');
  };

  // 결과 목록 선택 핸들러
  const handleSelectResult = (id: string) => {
    setSelectedValue(id);
  };

  // 배송지 저장 핸들러
  const handleSave = () => {
    // 선택된 ID와 일치하는 주소 찾기
    const selectedItem =
      selectedValue && filteredResults.find((r, i) => `${r.zipcode}-${i}` === selectedValue);
    if (!selectedItem) return; // 없으면 중단

    // 상위 콜백으로 전달
    onSave?.({
      selectedId: selectedValue, // 선택된 ID
      selectedItem, // 선택된 주소 객체
      detailAddress: detail, // 상세주소
      keyword: trimmed, // 검색 키워드
    });
  };

  return (
    <div className={clsx(styles.root, className)}>
      {/* 검색 */}
      <Input
        ref={inputRef}
        type="search"
        placeholder="주소를 검색해주세요."
        size="large"
        value={value}
        clearable={false}
        suffix={<IconButton name="search">주소 검색</IconButton>}
        onChange={handleSearchChange}
        className={styles.search}
      />

      <div className={styles.content}>
        {/* 검색 중: 결과 or 빈 상태 */}
        {isSearching && (
          <>
            {hasSearchResults ? (
              <>
                <Text as="span" size="4" color="gray2">
                  검색결과 총 {filteredResults.length}건
                </Text>

                <div className={styles.result}>
                  <ul className={styles.list}>
                    {filteredResults.map((result, idx) => {
                      const optionId = `${result.zipcode}-${idx}`;
                      return (
                        <li key={optionId}>
                          <Radio
                            name="address"
                            value={optionId}
                            checked={selectedValue === optionId}
                            onChange={() => handleSelectResult(optionId)}
                            className={styles.radio}
                            label={
                              <div className={styles.radioItem}>
                                <Text as="span" size="4" color="gray1" weight="medium">
                                  <em className="ncp-blind">우편번호</em>
                                  {result.zipcode}
                                </Text>
                                <InfoList
                                  variant="stacked"
                                  gap="row4"
                                  gridColumns="auto"
                                  className="ncp-mt-x0"
                                >
                                  <InfoItem
                                    title={
                                      <Text as="span" size="4" color="gray3">
                                        도로명
                                      </Text>
                                    }
                                    content={
                                      <Text as="span" size="4" color="gray1">
                                        {result.roadAddress}
                                      </Text>
                                    }
                                  />
                                  <InfoItem
                                    title={
                                      <Text as="span" size="4" color="gray3">
                                        지번
                                      </Text>
                                    }
                                    content={
                                      <Text as="span" size="4" color="gray1">
                                        {result.jibunAddress}
                                      </Text>
                                    }
                                  />
                                </InfoList>
                              </div>
                            }
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* 상세 주소 */}
                {selectedValue && (
                  <>
                    <FormArea type="vertical" className="ncp-mt-xl">
                      <FormItem label="상세 주소">
                        <Input
                          placeholder="상세 주소 입력"
                          size="large"
                          value={detail}
                          onChange={(e) => setDetail(e.target.value)}
                        />
                      </FormItem>
                    </FormArea>
                    <ButtonArea>
                      <Button
                        variant="primary"
                        size="large"
                        disabled={!selectedValue}
                        onClick={handleSave}
                      >
                        배송지 저장
                      </Button>
                    </ButtonArea>
                  </>
                )}
              </>
            ) : (
              <div className={styles.empty}>
                <Empty title={`검색결과가 없습니다.\n검색어를 ${minLen}자 이상 입력해 보세요.`} />
              </div>
            )}
          </>
        )}
        {/* TIP: 검색 전 or 결과 없음 */}
        {(!isSearching || !hasSearchResults) && (
          <Box size="3" margin="0">
            <Heading size="2" color="gray3" weight="semibold">
              TIP
            </Heading>
            <Text size="4" color="gray3" reading>
              아래와 같은 조합으로 검색을 하시면 더욱 정확한 결과가 검색됩니다.
            </Text>
            <InfoList gap="row16">
              {tipItems.map(({ label, content }, idx) => (
                <InfoItem
                  key={`${label}-${idx}`}
                  title={
                    <Text size="4" weight="semibold">
                      {label}
                    </Text>
                  }
                  content={
                    <Text size="4" color="gray2">
                      {content}
                    </Text>
                  }
                />
              ))}
            </InfoList>
          </Box>
        )}
      </div>
    </div>
  );
};

AddressFinder.displayName = 'AddressFinder';
