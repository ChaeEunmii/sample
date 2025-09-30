'use client';

import React, { useState } from 'react';
import { Carousel, Dialog, Flag, Heading, Link, Table, Text } from '@shared/ui';
import { formatNumber, formatPrice } from '@/shared/utils/ui';
import { mockSameProdBranch } from '@/mocks/detail';

import styles from './SameProdBranch.module.scss';
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
      <div className={styles.dialog}>
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
        <div className="ncp-mt-l">
          <Heading size="5">{selectedBranch.branch}</Heading>
          <Table className="ncp-mt-s">
            <Table.Caption>
              지점 별 재고 수량 목록 테이블로 상품, 재고수량을 나타냅니다.
            </Table.Caption>
            <Table.ColGroup>
              <col style={{ width: '50%' }} />
              <col />
            </Table.ColGroup>
            <Table.Head>
              <Table.Row>
                <Table.Cell colHeader>{selectedBranch.column}</Table.Cell>
                <Table.Cell colHeader>재고수량</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {selectedBranch.data.map((row, idx) => (
                <Table.Row key={idx}>
                  <Table.Cell>{row.item}</Table.Cell>
                  <Table.Cell>{formatNumber(row.stock, 'count')}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <Text size="4" color="gray2" className="ncp-mt-m">
          매장에서 실시간 판매중인 상품으로 실제 재고와 차이가 있을 수 있습니다.
        </Text>
      </div>
    </Dialog>
  );
}
