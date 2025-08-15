'use client';

import { Collapse, Heading, Link, Select, Table, Text, TextList } from '@/shared/ui';
import {
  mockProdCsData,
  mockProdCsSellerDataList,
  mockProdEssentialDataList,
} from '@/mocks/detail';

import styles from './EssentialInfo.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

interface SellerDataType {
  label: string;
  value: string;
}
interface SellerType {
  [key: string]: SellerDataType;
}
interface EssentialInfoProps {
  code: string;
  seller?: SellerType;
}

export const EssentialInfo = ({ code, seller }: EssentialInfoProps) => {
  const { prodType } = useProdDetail();

  /** 여러개의 정보를 가진 상품인지 여부 */
  const isMultiProd = prodType === 'hamper';

  /** 필수정보 상태 */
  const [essentialSelected, setEssentialSelected] = useState(mockProdEssentialDataList[0].id);
  const essentialActiveItem = isMultiProd
    ? mockProdEssentialDataList.find((item) => item.id === essentialSelected) ||
      mockProdEssentialDataList[0]
    : mockProdEssentialDataList[0];

  /** 판매자 정보 상태 */
  const [sellerSelected, setSellerSelected] = useState(mockProdCsSellerDataList[0].id);
  const sellerActiveItem = isMultiProd
    ? mockProdCsSellerDataList.find((item) => item.id === sellerSelected) ||
      mockProdCsSellerDataList[0]
    : mockProdCsSellerDataList[0];

  /** TEL: 브랜드매장 전화번호 / 협력사 대표번호 */
  const mainNumber = seller ? (seller.csNumber.value ?? '-') : '02-6390-8000';
  /** TEL: CS번호 / 협력사 번호 */
  const csNumber = seller ? (seller.csNumber.value ?? '-') : '1800-2800';

  return (
    <div className={clsx(styles.root)}>
      {/* 상품필수정보 */}
      <Collapse variant="normal" className={styles.collapse}>
        <Collapse.Control className={styles.controller}>
          <Heading as="h2" size="5" weight="semibold" className={styles.title}>
            상품필수정보
          </Heading>
        </Collapse.Control>
        <Collapse.Content className={styles.content}>
          <Table direction="vertical" className={styles.table}>
            <Table.Caption>상품 코드 테이블로 항목명과 값을 보여줍니다.</Table.Caption>
            <Table.Body>
              {/* 상품 코드 */}
              <Table.Row>
                <Table.Cell rowHeader>상품코드</Table.Cell>
                <Table.Cell>{code}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          {isMultiProd && (
            <Select
              className="ncp-mt-l"
              options={mockProdEssentialDataList.map((item) => ({
                label: item.title,
                value: item.id,
              }))}
              onChange={setEssentialSelected}
              value={essentialSelected}
            />
          )}

          <Table direction="vertical" className={styles.table}>
            <Table.Caption>상품의 필수 정보 테이블로 항목명과 값을 보여줍니다.</Table.Caption>
            <Table.Body>
              {/* 상품 코드 외 나머지 필수 정보 */}
              {essentialActiveItem.data.map((row, idx) => (
                <Table.Row key={idx}>
                  <Table.Cell rowHeader>{row.label}</Table.Cell>
                  <Table.Cell>
                    {Array.isArray(row.value)
                      ? row.value.map((item, subIdx) => <p key={subIdx}>{item}</p>)
                      : row.value}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Collapse.Content>
      </Collapse>

      {/* 배송/교환/반품 안내 (판매자 optional) */}
      <Collapse variant="normal" className={styles.collapse}>
        <Collapse.Control className={styles.controller}>
          <Heading as="h2" size="5" weight="semibold" className={styles.title}>
            배송/교환/반품{seller && '/판매자'} 안내
          </Heading>
        </Collapse.Control>
        <Collapse.Content className={styles.content}>
          <Heading as="strong" size="3" weight="medium">
            상품설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음 안내사항보다 우선적용
            됩니다.
          </Heading>
          <dl className={styles.notice}>
            {mockProdCsData.map((data) => (
              <div key={data.id} className={styles.row}>
                <dt>{data.title}</dt>
                <dd>{data.cont.map((cont) => cont)}</dd>
              </div>
            ))}
          </dl>
          {seller && (
            <>
              <Heading as="strong" size="3" weight="medium" className="ncp-mt-x10">
                판매자 정보
              </Heading>
              {isMultiProd && (
                <Select
                  className="ncp-mt-x6"
                  options={mockProdCsSellerDataList.map((item) => ({
                    label: item.title,
                    value: item.id,
                  }))}
                  onChange={setSellerSelected}
                  value={sellerSelected}
                />
              )}
              <Table direction="vertical" className={clsx(styles.table, 'ncp-mt-x6')}>
                <Table.Caption>판매자 정보 테이블로 항목명과 값을 보여줍니다.</Table.Caption>
                <Table.Body>
                  {Object.entries(sellerActiveItem.data).map(([key, row]) => (
                    <Table.Row key={key}>
                      <Table.Cell rowHeader>{row.label}</Table.Cell>
                      <Table.Cell>{row.value}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <Text size="4" color="gray3" className="ncp-mt-x6">
                본 상품정보(상품상세정보, 상품기본정보 등)의 내용은 판매자가 직접 등록한 정보입니다.
              </Text>
            </>
          )}
        </Collapse.Content>
      </Collapse>

      {/* 상품정보 문의 */}
      <Heading as="h2" size="5" weight="semibold" color="black" className="ncp-mt-m">
        상품정보 문의
      </Heading>
      <TextList
        className="ncp-mt-x6"
        variant="level2"
        data={[
          {
            text: (
              <span>
                브랜드 매장 :&nbsp;
                <Link href={`tel:${mainNumber}`} variant="underline">
                  {mainNumber}
                </Link>
              </span>
            ),
            textProps: { color: 'gray2' },
          },
          {
            text: (
              <span>
                배송/교환/반품/AS문의 :&nbsp;
                <Link href={`tel:${csNumber}`} variant="underline">
                  {csNumber}
                </Link>
              </span>
            ),
            textProps: { color: 'gray2' },
          },
        ]}
      />
    </div>
  );
};

EssentialInfo.displayName = 'EssentialInfo';
