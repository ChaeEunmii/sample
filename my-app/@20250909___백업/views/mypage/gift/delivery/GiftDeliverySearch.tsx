'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Select, Text, Empty, TextButton } from '@shared/ui';
import { GiftDeliveryItem } from '@/views/mypage/gift/delivery/GiftDeliveryItem';
import DeliveryStatusDialog from '@views/mypage/order/components/DeliveryStatusDialog';
import styles from './GiftDeliverySearch.module.scss';
import { mockGiftDeliverList } from '@mocks/myactivity';

export default function GiftDeliverySearch() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 가져오기
  const productData = isNoData ? [] : mockGiftDeliverList;

  const [isDeliveryStatusDialog, setIsDeliveryStatusDialog] = useState(false); // 배송조회 (L)
  const [selected, setSelected] = useState('option1');

  return (
    <Container showBack title="기프트 배송조회">
      <Contents className={styles.layout}>
        {/* 상단 정렬 */}
        <div className={styles.top}>
          <Select
            options={[
              { value: 'option1', label: '이*대님  [본인]  [쟈스민 블랙]' },
              { value: 'option2', label: '이*백님  [가족]  [세이지]' },
              { value: 'option3', label: '김*디님  [가족]  [자스민]' },
            ]}
            value={selected}
            onChange={setSelected}
            size="large"
          />
          <Text as="span" size="3" color="gray3" indent>
            본인 및 가족(가족카드 소지 시)의 기프트 배송현황을 조회할 수 있습니다.
          </Text>
        </div>
        {/* 기프트 배송조회 목록 */}
        {productData.length > 0 ? (
          <>
            <ul className={styles.list}>
              {productData.map((item, idx) => (
                <li key={`${item.id}-${idx}`} className={styles.item}>
                  <GiftDeliveryItem
                    data={item}
                    onTrackDelivery={(id) => {
                      console.log(id, '배송 조회');
                      setIsDeliveryStatusDialog(true);
                    }}
                  />
                </li>
              ))}
            </ul>
            <div className="ncp-text-center ncp-mt-l">
              <TextButton suffixIcon="arrowDown" iconSize="xsmall" size="1">
                더보기
              </TextButton>
            </div>
          </>
        ) : (
          <Empty title={'배송 내역이 없어요.'} />
        )}

        {/* 배송 조회 (L) - 마이페이지-주문 공통으로 사용 */}
        <DeliveryStatusDialog
          type={'parcel'} // 배송타입별 다르게 렌더링
          isOpen={isDeliveryStatusDialog}
          onClose={() => setIsDeliveryStatusDialog(false)}
        />
      </Contents>
    </Container>
  );
}
