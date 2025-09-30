'use client';

import React from 'react';
import { TitleArea, ButtonArea, Button, Text } from '@shared/ui';
import styles from './SellerApplyHeader.module.scss';

// 입점 신청 상태 : 비로그인 | 입점신청 | 입점반려 | 입점승인
export type ApplyStatus = 'none' | 'pending' | 'rejected' | 'approved';

// 헤더 노출 화면 타입: 'center'(판매자센터) / 'guide'(입점안내)
type Variant = 'center' | 'guide';

interface Props {
  /** 헤더가 사용되는 화면 구분 (기본값: 'center') */
  variant?: Variant;
  /** 현재 입점 신청 상태 */
  status: ApplyStatus;
  /** 판매자명 (상태 메시지에 출력) */
  sellerName?: string;
  /** 반려 사유(guide·rejected에서 노출). ReactNode 허용 */
  rejectReason?: React.ReactNode;
  /** 주요 CTA 버튼 클릭 핸들러 */
  onPrimaryClick?: () => void;
}

export function SellerApplyHeader({
  variant = 'center',
  status,
  sellerName = '',
  rejectReason,
  onPrimaryClick,
}: Props) {
  const copy = {
    // 판매자센터
    center: {
      none: {
        title: (
          <>
            HiHi 오픈마켓
            <br />
            판매자 센터입니다
          </>
        ),
        desc: (
          <Text color="gray2" reading>
            판매자 가입하고 입점신청을 해보세요!
          </Text>
        ),
        cta: '입점 신청 바로가기',
      },
      pending: {
        title: (
          <>
            {sellerName}님<br />
            판매자님은 입점신청 상태입니다
          </>
        ),
        desc: null,
        cta: '심사 진행 상태 확인하기',
      },
      rejected: {
        title: (
          <>
            {sellerName}님<br />
            입점신청이 반려 되었습니다
          </>
        ),
        desc: (
          <>
            <Text color="gray2" reading>
              반려 사유 확인 부탁드립니다.
            </Text>
          </>
        ),
        cta: '심사 진행 상태 확인하기',
      },
      approved: {
        title: (
          <>
            {sellerName}님<br />
            입점신청이{' '}
            <Text as="strong" color="point">
              승인
            </Text>{' '}
            되었습니다
          </>
        ),
        desc: (
          <Text color="gray2" reading>
            담당MD가 연락 예정입니다.
          </Text>
        ),
        cta: '',
      },
    },
    // 입점 안내
    guide: {
      none: {
        title: (
          <>
            HiHi 오픈마켓
            <br />
            판매자 센터입니다
          </>
        ),
        desc: (
          <Text color="gray2" reading>
            판매자 가입하고 입점신청을 해보세요!
          </Text>
        ),
        cta: '입점 신청 바로가기',
      },
      pending: {
        title: (
          <>
            {sellerName}님<br />
            판매자님은 입점신청 상태입니다
          </>
        ),
        desc: (
          <Text color="gray2" reading>
            아직 서류 심사중입니다. 조금만 더 기다려주세요.
          </Text>
        ),
        cta: '',
      },
      rejected: {
        title: (
          <>
            {sellerName}님<br />
            입점신청이 반려 되었습니다
          </>
        ),
        desc: (
          <>
            <Text color="gray2" reading>
              반려사유를 참고하여 재신청 해주시면 심사가 다시 진행됩니다.
            </Text>
            {rejectReason && (
              <Text color="alert" reading>
                반려사유: {rejectReason}
              </Text>
            )}
          </>
        ),
        cta: '가입 신청 내역 수정하기',
      },
      approved: {
        title: (
          <>
            {sellerName}님<br />
            입점신청이{' '}
            <Text as="strong" color="point">
              승인
            </Text>{' '}
            되었습니다
          </>
        ),
        desc: (
          <Text color="gray2" reading>
            운영 안내를 위해 MD가 연락 드릴 예정입니다.
          </Text>
        ),
        cta: '',
      },
    },
  }[variant][status];

  return (
    <>
      <TitleArea
        title={copy.title}
        bottomSlot={copy.desc && <div className={styles.desc}>{copy.desc}</div>}
        className={styles.title}
      />
      {copy.cta && (
        <ButtonArea margin="2">
          <Button variant="primary" onClick={onPrimaryClick}>
            {copy.cta}
          </Button>
        </ButtonArea>
      )}
    </>
  );
}
