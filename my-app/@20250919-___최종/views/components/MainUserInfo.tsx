'use client';

import { Box, Heading, Image, Text, Avatar, Icon, InfoList, InfoItem, Link } from '@shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import { MeBadge } from '@widgets/mespace/MeBadge';
import styles from './MainUserInfo.module.scss';

// 미스페이스 유저타입
type userType = 'influencer' | 'manager' | 'seller' | 'normal';

// 등급
type GradeKey = 'fan' | 'collector' | 'lover' | 'mania';
// 등급이미지 매핑
const GRADE_META: Record<GradeKey, { src: string; alt: string }> = {
  fan: { src: '/images/promotion/img_grade1.png', alt: '팬' },
  collector: { src: '/images/promotion/img_grade2.png', alt: '컬렉터' },
  lover: { src: '/images/promotion/img_grade3.png', alt: '러버' },
  mania: { src: '/images/promotion/img_grade4.png', alt: '마니아' },
};

export interface MainUserInfoProps {
  /** 상단 정보 */
  header: {
    /** ID */
    id?: string;
    /** 이름 */
    name: string;
    /** 등급 */
    grade: GradeKey;
    /** 멤버십 */
    membership: string;
    /** 임직원 | 비즈 */
    position?: string;
  };
  /** 미스페이스 정보 */
  mespace: {
    href: string;
    nickname: string;
    avatar: { src: string; alt: string };
    userType: userType;
    gem: string;
  };
  /** 하단 요약(쿠폰/바우처/포인트/예치금) */
  summary: {
    coupon?: number;
    myvoucher?: number;
    hpoint?: number;
    rsvppoint?: number;
    deposit?: number;
  };
}

export function MainUserInfo({ header, mespace, summary }: MainUserInfoProps) {
  const grade = GRADE_META[header.grade];

  // 단일 항목(쿠폰, 마이바우처)
  const renderSummaryItem = (label: string, value?: number, unit?: string) => {
    if (!value) return null;
    return (
      <Box size="3" margin="0">
        <InfoList variant="between" gap="row16">
          <InfoItem
            title={
              <Text color="gray2" weight="medium">
                {label}
              </Text>
            }
            content={
              <Text color="primary" weight="semibold">
                {value}
                {unit}
              </Text>
            }
          />
        </InfoList>
      </Box>
    );
  };

  // 금액/포인트형(H.Point/RSVP.Point/예치금): formatNumber 적용, 한 Box에 묶음
  const renderPointsGroup = (items: Array<{ label: string; value?: number; unit: string }>) => {
    const filtered = items.filter((it) => !!it.value);
    if (!filtered.length) return null;

    return (
      <Box size="3" margin="0">
        <InfoList variant="between" gap="row16">
          {filtered.map(({ label, value, unit }, idx) => (
            <InfoItem
              key={idx}
              title={
                <Text color="gray2" weight="medium">
                  {label}
                </Text>
              }
              content={
                <Text color="primary" weight="semibold">
                  {formatNumber(value!)}
                  {unit}
                </Text>
              }
            />
          ))}
        </InfoList>
      </Box>
    );
  };

  return (
    <>
      {/* 상단 이름/등급/멤버십/고객형태 */}
      <div className={styles.info}>
        <div className={styles.my}>
          <Heading as="h3" size="8" color="black" weight="bold">
            {header.name}님
          </Heading>
          <span className="ncp-blind">등급 {header.grade}</span>
          <Image src={grade.src} alt={grade.alt} className={styles.gradeImg} />
        </div>
        <div className={styles.state}>
          <Text as="strong" size="4" weight="semibold" color="point">
            {header.membership}
          </Text>
          {header.position && (
            <Text as="span" size="4" weight="semibold">
              {header.position}
            </Text>
          )}
        </div>
      </div>

      {/* MeInfo */}
      <Box size="6" className={styles.meInfo}>
        <Link href={mespace.href ?? '#'} as="route" type="block" className={styles.link}>
          <div className={styles.left}>
            <div className={styles.thumb}>
              <Avatar
                size="3"
                src={mespace.avatar.src}
                alt={mespace.avatar.alt}
                className={styles.avatar}
              />
              <MeBadge userType={mespace.userType} size="small" className={styles.badge} />
            </div>
            <Heading size="3" weight="bold" className={styles.name}>
              {mespace.nickname}
            </Heading>
          </div>
          <div className={styles.gemInfo}>
            <Icon name="gem" size="xsmall" className={styles.icon} />
            <Text as="span" size="4" weight="medium" color="gray2">
              {mespace.gem}
            </Text>
          </div>
        </Link>
      </Box>

      {/* 하단 요약 */}
      <div className={styles.box}>
        {renderSummaryItem('쿠폰', summary.coupon, '장')}
        {renderSummaryItem('마이바우처', summary.myvoucher, '장')}
      </div>

      <div className={styles.box}>
        {renderPointsGroup([
          { label: 'H.Point', value: summary.hpoint, unit: 'P' },
          { label: 'RSVP.Point', value: summary.rsvppoint, unit: 'P' },
          { label: '예치금', value: summary.deposit, unit: '원' },
        ])}
      </div>
    </>
  );
}
