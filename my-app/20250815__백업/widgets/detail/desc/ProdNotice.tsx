'use client';

import {
  mockBookData,
  mockNoticeList,
  mockCateFood,
  mockWarningtList,
  mockSubscriptionNoticeList,
} from '@/mocks/detail';
import { formatDate } from '@/shared/utils/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { ProdTextList } from './ProdTextList';
import { Table } from '@/shared/ui';

import styles from './ProdNotice.module.scss';

export const ProdNotice = () => {
  const { item, prodDetailType } = useProdDetail();

  // 임시 데이터
  const notice = mockNoticeList;
  const mockTexts = mockWarningtList;
  const book = mockBookData;
  const food = mockCateFood;

  return (
    <>
      {/* 공지사항 */}
      <ProdTextList
        title="공지사항"
        list={prodDetailType === 'subscription' ? mockSubscriptionNoticeList : notice}
      />

      {/* 문화비 소득공제 안내 */}
      {item.prodCategory === 'book' && (
        <ProdTextList
          title="문화비 소득공제 안내"
          link={{
            label: 'FAQ 바로가기',
            href: '#',
          }}
          list={[
            '도서/공연 상품 결제 시 구입비에 대한 추가 소득공제가 가능합니다.',
            book.isbn &&
              book.publicationDate &&
              `ISBN ${book.isbn} | 도서발행일 ${formatDate(book.publicationDate, 'dot')}`,
          ].filter(Boolean)}
        />
      )}

      {/* 식품 정보 */}
      {item.prodCategory === 'food' && (
        <Table direction="vertical" variant="plain" className={styles.table}>
          <Table.Caption>
            식품 정보를 담은 테이블로 원산지/제조국, 주원료원산지, 주원료명 등을 나타냅니다.
          </Table.Caption>
          <Table.ColGroup>
            <col style={{ width: '76px' }} />
            <col />
          </Table.ColGroup>
          <Table.Body>
            {food.info.map((row: { label: string; cont: string }, idx: number) => (
              <Table.Row key={idx}>
                <Table.Cell rowHeader>{row.label}</Table.Cell>
                <Table.Cell>{row.cont}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}

      {/* 유의사항 */}
      {prodDetailType !== 'subscription' && <ProdTextList title="유의사항" list={mockTexts} />}
    </>
  );
};

ProdNotice.displayName = 'ProdNotice';
