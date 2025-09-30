'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { AddressFinder } from '@widgets/form';
import styles from './SearchAddress.module.scss';

// 검색결과 샘플 데이터
const searchResults = [
  {
    zipcode: '06181',
    roadAddress: '서울특별시 강남구 테헤란로98길 12',
    jibunAddress: '서울특별시 강남구 대치동 945-11 현대백화점 본사',
  },
  {
    zipcode: '06181',
    roadAddress: '서울특별시 강남구 테헤란로98길 12',
    jibunAddress: '서울특별시 강남구 대치동 945-11 현대백화점 본사',
  },
  {
    zipcode: '06181',
    roadAddress: '서울특별시 강남구 테헤란로98길 12',
    jibunAddress: '서울특별시 강남구 대치동 945-11 현대백화점 본사',
  },
  {
    zipcode: '06181',
    roadAddress: '서울특별시 강남구 테헤란로98길 12',
    jibunAddress: '서울특별시 강남구 대치동 945-11 현대백화점 본사',
  },
  {
    zipcode: '06181',
    roadAddress: '서울특별시 강남구 테헤란로98길 12',
    jibunAddress: '서울특별시 강남구 대치동 945-11 현대백화점 본사',
  },
];

export default function SearchAddress() {
  return (
    <Container showBack title="주소찾기">
      <Contents className={styles.layout}>
        <AddressFinder
          data={searchResults}
          onSave={(payload) => {
            console.log('선택/저장된 주소:', payload);
            /**
             * payload 구조:
             * {
             *   selectedId: "06181-0",
             *   selectedItem: { zipcode, roadAddress, jibunAddress },
             *   detailAddress: "사용자가 입력한 상세주소",
             *   keyword: "사용자가 검색한 키워드"
             * }
             */
          }}
          className="ncp-mt-s"
        />
      </Contents>
    </Container>
  );
}
