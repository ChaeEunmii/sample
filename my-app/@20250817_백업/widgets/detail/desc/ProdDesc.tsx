'use client';

import { Button, Heading, Image, Line, Table, Text } from '@/shared/ui';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  mockActualSize,
  mockCertificationInfo,
  mockDescTextList,
  mockHtmlContent,
  mockPenalty,
} from '@/mocks/detail';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { ProdTextList } from './ProdTextList';

import styles from './ProdDesc.module.scss';
import clsx from 'clsx';
import { ProdDealList } from '@/widgets/product/ProdDealList';
import { mockProdDeal } from '@/mocks/product';

type DescInputMethodType = 'html' | 'text';

interface ActualSizeType {
  /** 이미지 경로 */
  image?: string;
  /** 사이즈 테이블 데이터 */
  table?: {
    columns: string[];
    rows: string[][];
  };
}

interface PenaltyType {
  /** 위약금 구분 [고정] 여부 */
  isFix: boolean;
  /** 환불 기준 데이터 */
  refund: { startDate?: number; endDate?: number; percent: number }[];
}

export const ProdDesc = () => {
  const { item, prodType, prodDetailType } = useProdDetail();

  // 임시 데이터
  const mainThumb = 'https://placehold.co/600x800'; // 상품 대표 이미지
  const singleItemGuide = 'https://placehold.co/700x400'; // 단품 사이즈 가이드
  const koreanInfo = 'https://placehold.co/500x750'; // 한글표시사항
  const actualSize: ActualSizeType = mockActualSize; // 실측사이즈
  const qualityTag = `<h2>상품품질표시태그 임시데이터</h2>`; // 품질표시 TAG
  const certificate = mockCertificationInfo; // 상품인증정보
  const penalty: PenaltyType = mockPenalty; // 위약금 안내

  /** 상품설명입력방식 */
  const [descInputMethod] = useState<DescInputMethodType>('html');

  /** START --- 상세 접힘/펼침 */
  const [expanded, setExpanded] = useState(false); // 접힘, 펼침 상태
  const [isOverflow, setIsOverflow] = useState(false); // desc 데이터가 긴 데이터인지 여부 확인
  const [maxDescHeight, setMaxDescHeight] = useState(0); // "펼치기 전" 최대 노출 높이
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLImageElement>(null);
  const scrollYBeforeExpand = useRef<number>(0);
  const descChanging = useRef(false);

  const handleToggleExpand = () => {
    if (!expanded) {
      scrollYBeforeExpand.current = window.scrollY || document.documentElement.scrollTop;
      descChanging.current = true;
    }
    setExpanded((v) => !v);
  };

  const updateHeight = useCallback(() => {
    if (!descRef.current) return;
    let maxHeight = window.innerHeight * 1.5;
    // 썸네일이 있으면: 접힌 상태의 상세 최대 길이 - 썸네일 길이를 maxHeight로 함
    if (thumbRef.current) {
      maxHeight -= thumbRef.current.offsetHeight;
    }
    setMaxDescHeight(maxHeight);

    // 컨텐츠 전체 길이
    const descH = descRef.current.scrollHeight;
    setIsOverflow(descH > maxHeight);
  }, []);

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [updateHeight]);

  // 상세정보 접기 시 버튼을 화면 중앙에 맞추기
  const prevExpanded = useRef(expanded);
  useEffect(() => {
    // 펼치기 스크롤 튀는 현상 방지
    if (expanded && descChanging.current) {
      window.scrollTo({ top: scrollYBeforeExpand.current, behavior: 'auto' });
      descChanging.current = false;
    }
    // 열린 상태에서 접힘 상태로 "변경" 된 경우만 (이전값이 true, 지금 false)
    if (prevExpanded.current === true && expanded === false && isOverflow && toggleBtnRef.current) {
      // 버튼 위치(화면 위에서부터)
      const btnRect = toggleBtnRef.current.getBoundingClientRect();
      // 현재 스크롤 위치(문서 상단에서부터)
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // 버튼의 중앙점(Y)
      const btnCenterY = btnRect.top + btnRect.height / 2 + scrollTop;
      // 윈도우의 중앙
      const windowCenterY = window.innerHeight / 2;
      // 버튼 중앙을 윈도우 중앙에 오도록 새 위치 계산
      const targetScrollY = btnCenterY - windowCenterY;

      window.scrollTo({ top: Math.max(targetScrollY, 0), behavior: 'smooth' });
    }
    prevExpanded.current = expanded;
  }, [expanded, isOverflow]);
  /* END --- 상세 접힘/펼침 */

  /** 인증 이미지  */
  const getCertificateImage = (id: string) => {
    switch (id) {
      // 각 case는 임의의 값이므로 실제 데이터에 맞게 수정 필요
      case 'certifi-1':
        return '/images/detail/img_certificate_kc.png';
      case 'certifi-2':
        return '/images/detail/img_certificate_ce.png';
      default:
        return '';
    }
  };

  /** 위약금 내용 리스트 */
  const getPenaltyList = (penalty: PenaltyType) => {
    if (!penalty || !penalty.refund) return [];

    if (penalty.isFix) {
      // 임시 데이터를 기준으로 isFix의 경우 데이터로 재가공
      const first = penalty.refund[0];
      return [`결제 후 취소 시 결제금액의 ${first.percent}% 의 위약금을 제외하고 환불 처리됩니다.`];
    }

    return [
      '아래 기준에 따라 위약금을 제외하고 환불 처리됩니다.',
      // 임시 데이터를 기준으로 !isFix의 경우 데이터로 재가공 (slice(1))
      ...penalty.refund.slice(1).map((item: PenaltyType['refund'][number]) => {
        // 이용 당일
        if (item.startDate === item.endDate) {
          return `이용일 당일 취소 시, 위약금 ${item.percent}%`;
        }
        // 시작일과 종료일이 하루 차이날 경우
        if (item.startDate && item.startDate + 1 === item.endDate) {
          return `이용일로부터 ${item.startDate}, ${item.endDate}일 전 취소 시, 위약금 ${item.percent}%`;
        }
        // 그 외
        return `이용일로부터 ${item.startDate} ~ ${item.endDate}일 전 취소 시, 위약금 ${item.percent}%`;
      }),
    ];
  };

  return (
    <div className={styles.root}>
      {/* 딜 상품 목록 */}
      {prodType === 'deal' && (
        <>
          <ProdDealList data={mockProdDeal} />
          <ProdDealList data={mockProdDeal} type="list" />
        </>
      )}

      {/* 대표 사진 */}
      {mainThumb && (
        <div ref={thumbRef}>
          <Image src={mainThumb} alt="상품 대표 이미지" className={styles.thumb} />
        </div>
      )}
      <div
        ref={descRef}
        className={clsx(styles.desc, expanded && isOverflow && styles.show)}
        style={
          !expanded && isOverflow
            ? ({ '--prod-desc-max-height': `${maxDescHeight}px` } as React.CSSProperties)
            : undefined
        }
      >
        {/* 상품기술서 */}
        {descInputMethod === 'html' && (
          <div className={styles.html} dangerouslySetInnerHTML={{ __html: mockHtmlContent }} />
        )}
        {mockDescTextList.length > 1 &&
          mockDescTextList.map((desc, idx) => (
            <ProdTextList
              key={idx}
              title={desc.title}
              list={desc.list}
              className={styles.prodtextlist}
            />
          ))}

        {/* 단품사이즈 가이드 */}
        {singleItemGuide && (
          <div className={styles.boImages}>
            <Image src={'https://placehold.co/600x550'} alt="단품 사이즈 가이드" />
          </div>
        )}

        {/* 한글표시사항 */}
        {koreanInfo && (
          <div className={styles.boImages}>
            <Image src={'https://placehold.co/400x280'} alt="한글표시사항" />
          </div>
        )}

        {/* 실측사이즈 */}
        {actualSize && prodDetailType !== 'subscription' && (
          <div className={styles.actualSize}>
            <Heading as="h3" size="3" weight="semibold" className={styles.title}>
              실측 사이즈
            </Heading>
            {/* 이미지 노출 */}
            {actualSize.image && (
              <Image
                src="https://placehold.co/550x820"
                alt="실측 사이즈 가이드 이미지"
                className={styles.img}
              />
            )}
            {/* 테이블 노출 */}
            {actualSize.table && (
              <Table variant="borderless">
                <Table.Head>
                  <Table.Row>
                    <Table.Cell colHeader>구분</Table.Cell>
                    {actualSize.table.columns.map((col, idx) => (
                      <Table.Cell colHeader key={`${col}-${idx}`}>
                        {col}
                      </Table.Cell>
                    ))}
                  </Table.Row>
                </Table.Head>
                <Table.Body>
                  {actualSize.table.rows.map((row, idx) => (
                    <Table.Row key={`${row}-${idx}`}>
                      {row.map((value, j) => (
                        <Table.Cell key={j}>{value}</Table.Cell>
                      ))}
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            )}
          </div>
        )}

        {/* 품질 표시 Tag (HTML) */}
        {qualityTag && (
          <div className={styles.qualityTag} dangerouslySetInnerHTML={{ __html: qualityTag }} />
        )}
      </div>

      {/* 접기, 펼치기 버튼 */}
      {isOverflow && (
        <Button
          ref={toggleBtnRef}
          suffixIcon={expanded ? 'arrowUp' : 'arrowDown'}
          onClick={handleToggleExpand}
          className={styles.toggleBtn}
        >
          {expanded ? '상세정보 접기' : '상세정보 펼치기'}
        </Button>
      )}

      {/* 상품 인증정보 */}
      {certificate && (
        <div className={styles.certificate}>
          <Heading as="h3" size="4" weight="semibold" className={styles.title}>
            상품 인증정보
          </Heading>

          {certificate.map(({ id, ...rest }) => (
            <div className={styles.infos} key={id}>
              <div className={styles.textArea}>
                <Text color="gray3" size="3" className={styles.infoNoti}>
                  본 상품은 국가통합인증(KC마크)대상품목으로 <br />
                  국가통합인증(KC마크)을(를) 필 하였습니다.
                </Text>

                <ul className={styles.lists}>
                  {rest.selectType && <li>안전확인유형: {rest.selectType}</li>}
                  {rest.item && <li>인증항목: {rest.item}</li>}
                  {rest.agency && <li>인증기관: {rest.agency}</li>}
                  {rest.date && <li>인증일자: {rest.date}</li>}
                  {rest.type && <li>인증구분: {rest.type}</li>}
                  {rest.number && <li>인증번호: {rest.number}</li>}
                </ul>
              </div>
              <Image className={styles.img} src={getCertificateImage(id)} alt={rest.selectType} />
            </div>
          ))}
          <Text className={styles.note} color="gray3" size="3">
            해당 인증정보는 판매자가 등록한 것으로 등록 정보에 대한 책임은 판매자에게 있습니다.
          </Text>
        </div>
      )}

      {/* 위약금 안내 */}
      {item.afterConsultation && penalty && (
        <ProdTextList title="위약금 안내" list={getPenaltyList(penalty).filter(Boolean)} />
      )}

      {/* 마지막 구분선 */}
      <Line variant="bold" margin="4" color="bg1" />
    </div>
  );
};

ProdDesc.displayName = 'ProdDesc';
