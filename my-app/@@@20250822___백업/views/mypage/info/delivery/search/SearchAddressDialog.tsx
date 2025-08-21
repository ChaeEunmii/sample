'use client';

import { useState } from 'react';
import {
  ButtonArea,
  Button,
  FormArea,
  Input,
  Dialog,
  Text,
  TextList,
  Select,
  Link,
  Stack,
  RadioGroup,
  FormItem,
  Heading,
} from '@shared/ui';
import styles from './SearchAddressDialog.module.scss';

interface SearchAddressDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchAddressDialog({ isOpen, onClose }: SearchAddressDialogProps) {
  const [isSearchResultsVisible, setIsSearchResultVisible] = useState<boolean>(false);
  const [isAddressSelected, setIsAddressSelected] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');

  const cityOptions = [{ value: '1', label: '서울특별시' }];
  const districtOptions = [{ value: '1', label: '강남구' }];
  const searchResults = [
    {
      roadAddress: '서울특별시 강남구 논현로 508',
      lotAddress: '101동 101호',
      zipcode: '123456',
    },
    {
      roadAddress: '서울특별시 강남구 논현로 508',
      lotAddress: '101동 101호',
      zipcode: '123456',
    },
    {
      roadAddress: '서울특별시 강남구 논현로 508',
      lotAddress: '101동 101호',
      zipcode: '123456',
    },
  ];

  const handleSearch = () => {
    setIsSearchResultVisible(true);
  };

  const handleSelectResult = () => {
    setIsAddressSelected(true);
  };

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleConfirm = () => {};

  return (
    <Dialog title="주소 검색" isOpen={isOpen} onClose={handleClose} showClose maximize>
      <FormArea>
        <Text>찾고자 하는 주소를 입력하신 후 검색을 누르세요.</Text>
        <FormItem>
          <Stack type="field">
            <Input
              title="주소 검색"
              placeholder="찾고자 하는 주소를 입력하세요"
              errorMessageBy="search-error"
              invalid
            />
            <Button onClick={handleSearch}>검색</Button>
          </Stack>
          <Text id="search-error" variant="error">
            지역명을 입력해주세요.
          </Text>
          <TextList
            data={[
              '예: 동(읍/면)명 또는 도로명주소(건물번호/건물명)',
              '일부 군사지역은 배송이 불가능할 수 있습니다.',
            ]}
          />
        </FormItem>
      </FormArea>
      {isSearchResultsVisible && !isAddressSelected && (
        <>
          <Stack type="field" className="ut-mt-m">
            <Select
              title="시/도 선택"
              options={cityOptions}
              value={selectedCity}
              onChange={setSelectedCity}
            />
            <Select
              title="군/구 선택"
              options={districtOptions}
              value={selectedDistrict}
              onChange={setSelectedDistrict}
            />
          </Stack>

          <ul className={styles.list}>
            {searchResults.map((result, index) => (
              <li key={index} className={styles.item}>
                <Link
                  href="#"
                  className={styles.itemLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectResult();
                  }}
                >
                  <span className={styles.addrInfo}>
                    <strong>도로명</strong>
                    <span>{result.roadAddress}</span>
                    <strong>지번</strong>
                    <span>{result.lotAddress}</span>
                  </span>
                  <span className={styles.addrZipcode}>
                    <strong className="ut-blind">우편번호</strong>
                    <span>{result.zipcode}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {isAddressSelected && (
        <>
          <Heading size="2" className="ut-mt-l">
            상세주소 입력
          </Heading>
          <Text>저장하고 싶은 방식의 주소를 선택하시고 나머지 주소를 입력해 주세요.</Text>
          <FormArea className="ut-mt-s">
            <FormItem>
              <RadioGroup
                name="address"
                label="주소 유형 선택"
                defaultValue={'road'}
                options={[
                  {
                    value: 'road',
                    label: (
                      <>
                        <span className={styles.chooseType}>도로명</span>
                        <span>서울특별시 강남구 논현로 508</span>
                      </>
                    ),
                  },
                  {
                    value: 'lot',
                    label: (
                      <>
                        <span className={styles.chooseType}>지번</span>
                        <span>서울특별시 강남구 개포동 1165</span>
                      </>
                    ),
                  },
                ]}
                className={styles.choose}
              />
            </FormItem>
            <FormItem>
              <Input title="상세주소 입력를 입력해주세요." />
            </FormItem>
          </FormArea>
          <ButtonArea>
            <Button onClick={() => setIsAddressSelected(false)}>취소</Button>
            <Button variant="primary" onClick={handleConfirm}>
              확인
            </Button>
          </ButtonArea>
        </>
      )}
    </Dialog>
  );
}
