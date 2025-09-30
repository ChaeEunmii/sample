'use client';

import { useState, useRef } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  Text,
  Box,
  Heading,
  InfoList,
  InfoItem,
  Empty,
  Icon,
  Input,
  FormArea,
  FormItem,
  ButtonArea,
  Button,
  Radio,
} from '@shared/ui';
import styles from './SearchAddress.module.scss';
import SearchAddressDialog from '@/views/mypage/info/delivery/search/SearchAddressDialog';

// TIP 안내문구 목록
const tipItems = [
  { label: '도로명 + 건물번호', content: '예) 판교역로 266, 제주 첨단로 242' },
  { label: '지역명(동/리) + 번지', content: '예) 백현동 532, 제주 영평동 2181' },
  { label: '지역명(동/리) + 건물명(아파트명)', content: '예) 분당 주공, 연수동 주공3차' },
  { label: '사서함명 + 번호', content: '예) 분당우체국사서함 1~100' },
];

export default function SearchAddress() {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchAddressDialog, setIsSearchAddressDialog] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 검색 중인지 확인
  const isSearching = value.trim().length > 0;
  // const hasSearchResults = autoCompleteBrands.length > 0;
  // 검색 목록이 있는지 확인 (조건넣어야댐)
  const hasSearchResults = true;

  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 주소반복 테스트
  const testLength = [{}, {}, {}];

  return (
    <Container showBack title="주소찾기">
      <Contents className={styles.layout}>
        {/* 검색 */}
        <Input
          ref={inputRef}
          type="search"
          placeholder="주소를 검색해주세요."
          size="large"
          value={value}
          clearable={false}
          className={styles.search}
          suffix={!isSearching && <Icon name="search" size="large" />}
          onChange={handleSearchChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className={styles.content}>
          {isSearching ? (
            <>
              {hasSearchResults ? (
                <>
                  <Text as="span" size="4" color="gray2">
                    검색결과 총 N건
                  </Text>
                  <div className={styles.result}>
                    <ul className={styles.list}>
                      {testLength.map((item, idx) => (
                        <li key={idx}>
                          <Radio
                            label={
                              <>
                                <div className={styles.radioItem}>
                                  <Text as="span" size="4" color="gray1" weight="medium">
                                    06181
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
                                          서울특별시 강남구 테헤란로98길 12
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
                                          서울특별시 강남구 대치동 945-11 현대백화점 본사
                                        </Text>
                                      }
                                    />
                                  </InfoList>
                                </div>
                              </>
                            }
                            name="default"
                            value={`option-${idx}`}
                            className={styles.radio}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* 상세 주소 */}
                  <FormArea type="vertical" className="ncp-mt-xl">
                    <FormItem label="상세 주소">
                      <Input placeholder="상세 주소 입력" size="large" />
                    </FormItem>
                  </FormArea>
                  <ButtonArea>
                    <Button variant="primary" size="large">
                      배송지 저장
                    </Button>
                  </ButtonArea>
                </>
              ) : (
                <>
                  <div className={styles.empty}>
                    <Empty title={`검색결과가 없습니다.\n검색어를 2자 이상 입력해 보세요.`} />
                  </div>
                </>
              )}
            </>
          ) : (
            <>검색상태 아닐 때</>
          )}
          {/* 아예 검색안했거나, 검색어가 없는경우 노출 */}
          {/* TIP 안내 */}
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
        </div>
        <Button onClick={() => setIsSearchAddressDialog(true)} className="ncp-mt-xl">
          테스트용
        </Button>
        {/* 주소 찾기 테스트 (L)*/}
        <SearchAddressDialog
          isOpen={isSearchAddressDialog}
          onClose={() => setIsSearchAddressDialog(false)}
        />
      </Contents>
    </Container>
  );
}
