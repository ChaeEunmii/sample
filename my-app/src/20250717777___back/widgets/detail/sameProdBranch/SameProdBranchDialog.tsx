'use client';

import React, { useState } from 'react';
import { Carousel, Dialog, Flag, Heading, Link, Text } from '@shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import { mockSameProdBranch } from '@/mocks/detail';
import styles from './SameProdBranchDialog.module.scss';
import clsx from 'clsx';

interface SameProdBranchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SameProdBranchDialog({ isOpen, onClose }: SameProdBranchDialogProps) {
  const [branchId, setBranchId] = useState('branch-1'); // 기본 선택 지점 id
  const data = mockSameProdBranch;
  const selectedBranch = data.find((item) => item.id === branchId) ?? data[0];

  return (
    <Dialog
      title="지점 별 재고 현황"
      isOpen={isOpen}
      onClose={onClose}
      bodyClassName={styles.root}
      showClose
      maximize
      flush
    >
      <div className={styles.content}>
        {/* 지점 슬라이더 */}
        <Carousel
          className={styles.carousel}
          slideClassName={styles.slide}
          slidesPerView="auto"
          spaceBetween={8}
          autofit
          slides={data.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={clsx(styles.branch, item.id === branchId && styles.active)}
              onClick={(e) => {
                e.preventDefault();
                setBranchId(item.id);
              }}
            >
              <Text size="4">{item.branch}</Text>
              <Text size="5" weight="semibold" className={styles.price}>
                {formatPrice(item.price)}
              </Text>
              {item.storePick && (
                <Flag
                  data={{ label: '스토어픽', color: 'gray' }}
                  radius="all"
                  className={styles.flag}
                />
              )}
            </Link>
          ))}
        />

        {/* 재고수량 목록 테이블 */}
        <div className={styles.inventorys}>
          <Heading size="5">{selectedBranch.branch}</Heading>
          <table className={styles.table}>
            <caption>지점 별 재고 수량 목록</caption>
            <colgroup>
              <col style={{ width: '50%' }} />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <Text size="5" weight="semibold">
                    {selectedBranch.column}
                  </Text>
                </th>
                <th scope="col">
                  <Text size="5" weight="semibold">
                    재고수량
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedBranch.data.map((row, idx) => (
                <tr key={idx}>
                  <td>
                    <Text size="5" color="gray2" align="center">
                      {row.item}
                    </Text>
                  </td>
                  <td>
                    <Text size="5" color="gray2" align="center">
                      {row.qty}
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Text size="4" color="gray2" className={styles.note}>
          매장에서 실시간 판매중인 상품으로 실제 재고와 차이가 있을 수 있습니다.
        </Text>
      </div>
    </Dialog>
  );
}
