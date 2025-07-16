import { useState } from 'react';
import { Flag, Heading, Icon, IconButton, Link, Text, TextButton } from '@/shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import { useToast } from '@/shared/contexts/ToastContext';
import { DetailPrice } from '@/widgets/detail';
import { ProdGem } from '@widgets/product/ProdGem';
import SelectCollectionDrawer from '@/views/gem/mycollection/components/SelectCollectionDrawer';

import { mockProdDetailItem } from '@/mocks/detail';
import { mockCollectionSelectList } from '@/mocks/mycollection';

import styles from './DetailTop.module.scss';

export const DetailTop = () => {
  // 임시 데이터
  const item = mockProdDetailItem;

  const { showToast } = useToast();

  // 컬렉션 선택 상태
  const [isSelectCollectionDrawerOpen, setIsSelectCollectionDrawerOpen] = useState(false);

  // ---------------- GEM 토글 ---------------- //
  const [userGems, setUserGems] = useState<string[]>([]);
  const handleGemToggle = (productId: string, isActive: boolean) => {
    if (isActive) {
      setUserGems((prev) => [...prev, productId]);
      showToast('상품을 GEM 했어요.', {
        label: 'MY COLLECTION에 추가',
        onClick: () => setIsSelectCollectionDrawerOpen(true),
      });
    } else {
      setUserGems((prev) => prev.filter((id) => id !== productId));
    }
  };

  // ---------------- 컬렉션 선택 ---------------- //
  const [selectedCollectionIds, setSelectedCollectionIds] = useState<(string | number)[]>([]);
  // 선택 변경 콜백
  const handleSelectionChange = (newSelectedIds: (string | number)[]) => {
    setSelectedCollectionIds(newSelectedIds);
  };

  return (
    <>
      {/* 브랜드명/지점명 + GEM/공유 영역 */}
      <div className={styles.brandWrap}>
        {/* 브랜드명 / 지점명 */}
        <div className={styles.info}>
          <Link as="route" href="/about" type="inline" className={styles.brand}>
            {item.brand}
          </Link>
          <Icon name="arrowRight" size="xsmall" />
          <Text as="span" size="3" className={styles.branch}>
            {item.branch}
          </Text>
        </div>

        {/* GEM/공유 */}
        <div className={styles.icons}>
          <ProdGem
            isActive={userGems.includes(item.id)}
            onChange={(active) => handleGemToggle(item.id, active)}
            className={styles.gem}
          />
          <IconButton name="share" className={styles.share}>
            공유
          </IconButton>
        </div>
      </div>

      {/* 타이틀, 짧은설명, 혜택Flag */}
      <Heading as="h2" size="5" className={styles.title}>
        {item.title}
      </Heading>

      {item.shortDesc && (
        <Text as="p" size="3" className={styles.shortDesc}>
          {item.shortDesc}
        </Text>
      )}

      {item.benefits.length > 0 && (
        <Flag data={item.benefits} color="gray" className={styles.benefits} />
      )}

      {/* 가격 정보 영역 */}
      <DetailPrice
        salePeriod={item.salePeriod}
        price={item.price}
        unit={item.unit}
        qty={item.qty}
      />

      {/* 상단 리뷰 */}
      {item.review && (
        <Text size="3" className={styles.review}>
          <Icon name="rating" size="small" />
          <b className={styles.rating}>{item.review.rating}</b>
          <span className={styles.divider}></span>
          <TextButton color="gray1" size="1" variant="underline" className={styles.reviewButton}>
            상품평 {formatNumber(item.review.count)}
          </TextButton>
        </Text>
      )}

      {/* MY Collection 추가 팝업 */}
      <SelectCollectionDrawer
        data={mockCollectionSelectList}
        isOpen={isSelectCollectionDrawerOpen}
        onClose={() => setIsSelectCollectionDrawerOpen(false)}
        selection={{
          activeIds: selectedCollectionIds,
          onChange: handleSelectionChange,
        }}
      />
    </>
  );
};

DetailTop.displayName = 'DetailTop';
