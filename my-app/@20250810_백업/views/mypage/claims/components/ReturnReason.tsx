'use client';

import { useState } from 'react';
import { Section, Box, InfoList, InfoItem, Text, Grid, Image, ImageViewer, Link } from '@shared/ui';
import clsx from 'clsx';
import styles from './ReturnReason.module.scss';

interface ThumbImage {
  src: string;
  alt: string;
  poster?: string;
}

interface ReturnReasonData {
  /** 요청일시 */
  requestedAt?: string;
  /** 사유 제목 */
  reason: string;
  /** 상세 사유 */
  detailReason: string;
  /** 사유 이미지들 */
  images?: ThumbImage[];
}

interface ReasonCommonProps {
  /** 반품 또는 교환 */
  type?: 'return' | 'exchange';
  /** 사유 관련 데이터 */
  data: ReturnReasonData;
}

const REASON_TITLES = {
  return: '반품 사유',
  exchange: '교환 사유',
};

export const ReturnReason = ({
  type = 'return',
  data: { requestedAt, reason, detailReason, images },
}: ReasonCommonProps) => {
  const [currentThumbIdx, setCurrentThumbIdx] = useState(0); // 이미지 크게보기 팝업 상태
  const [isImageViewer, setIsImageViewer] = useState(false);

  // 반품이냐 교환이냐 타이틀
  const sectionTitle = REASON_TITLES[type];

  return (
    <>
      <Section
        variant="normal"
        title={sectionTitle}
        level="1"
        borderTop
        flush
        className={clsx(styles.root)}
      >
        <Box margin="0">
          <InfoList variant="stacked" gridColumns="auto">
            {requestedAt && (
              <InfoItem
                title={
                  <Text color="gray2" size="4">
                    요청일시
                  </Text>
                }
                content={<Text size="4">{requestedAt}</Text>}
              />
            )}
            <InfoItem
              title={
                <Text color="gray2" size="4">
                  {sectionTitle}
                </Text>
              }
              content={
                <Text color="gray2" size="4">
                  {reason}
                </Text>
              }
            />
            <InfoItem
              title={
                <Text color="gray2" size="4">
                  상세사유
                </Text>
              }
              content={<Text size="4">{detailReason}</Text>}
            />
          </InfoList>
          {images && (
            <>
              {/* 이미지 썸네일 (최대 5개) */}
              {images.length > 0 && (
                <Grid columns={5} gutter={8} margin="1">
                  {images.slice(0, 5).map((src, idx) => (
                    <Link
                      href="#"
                      type="block"
                      key={idx}
                      onClick={() => {
                        setIsImageViewer(true);
                        setCurrentThumbIdx(idx);
                      }}
                    >
                      <Image
                        src={images[idx].src}
                        alt={`${sectionTitle} 이미지 ${idx + 1}`}
                        className={styles.img}
                      />
                    </Link>
                  ))}
                </Grid>
              )}
            </>
          )}
        </Box>
      </Section>
      {/* 이미지 크게보기 (L) - 공통 */}
      {images && (
        <ImageViewer
          images={images}
          isOpen={isImageViewer}
          onClose={() => setIsImageViewer(false)}
          activeSlide={currentThumbIdx}
        />
      )}
    </>
  );
};
