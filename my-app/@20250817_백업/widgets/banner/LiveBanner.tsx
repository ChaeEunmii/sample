// 컴포넌트
import { Image, Flag, Link, Video, Text, Icon } from '@shared/ui';
import { BannerTitle, BannerTitleProps } from './BannerTitle';
import { formatViewCount } from '@shared/utils/ui';
import { ProdBar } from '../product/ProdBar';
// 스타일
import styles from './LiveBanner.module.scss';
import clsx from 'clsx';

interface ProdBarProps {
  image: string;
  title: string;
  brand?: string;
  price?: number;
  href?: string;
}

type LiveStatus = 'live' | 'upcoming' | 'replay'; // 라이브 상태 타입 정의
interface LiveProps {
  status: LiveStatus;
  value: string | number;
}

export interface LiveBannerProps {
  /** 배너 이미지 */
  video?: {
    src: string;
    label?: string;
    poster?: string;
  };
  /** 배너 타이틀 */
  title?: React.ReactNode;
  /** 배너 서브 타이틀 */
  subtitle?: React.ReactNode;
  /** 텍스트 정렬 */
  align?: BannerTitleProps['align'];
  /** 배너 클릭 이벤트 */
  onClick: () => void;
  /** 타이틀 사이즈 */
  textSize?: NonNullable<BannerTitleProps['title']>['size'];
  /** 텍스트 위치 */
  textInside?: boolean;
  /* 타이틀 옵션 */
  titleProps?: {
    titleLine?: number;
    subtitleLine?: number;
  };
  /** 좌우 여백 제거 */
  flush?: boolean;
  /** 브랜드 정보 */
  brand?: {
    image: string;
    name: string;
  };
  /** 라이브 정보 */
  live?: LiveProps;
  /** 연관상품 */
  product?: ProdBarProps;
  prodInside?: boolean;
  /** 추가 클래스명 */
  className?: string;
  /** 영상 자동재생 여부 */
  autoPlay?: boolean;
}

export const LiveBanner = ({
  title,
  subtitle,
  video,
  onClick,
  align,
  textSize,
  textInside,
  titleProps,
  flush,
  brand,
  live,
  product,
  prodInside,
  className,
  autoPlay = true,
  ...props
}: LiveBannerProps) => {
  // 라이브 상태에 따른 Flag 데이터 생성
  const getLiveFlag = () => {
    if (!live) return null;

    const baseFlags = [];

    // 라이브 상태 플래그
    switch (live.status) {
      case 'live':
        baseFlags.push({
          color: 'red' as const,
          label: (
            <>
              <span className={styles.liveDot}></span>
              LIVE
            </>
          ),
        });
        if (live.value) {
          baseFlags.push({
            color: 'black30' as const,
            label: live.value,
          });
        }
        break;
      case 'upcoming':
        baseFlags.push({
          color: 'black' as const,
          label: 'COMMING SOON',
        });
        if (live.value) {
          baseFlags.push({
            color: 'black30' as const,
            label: live.value,
          });
        }
        break;
      case 'replay':
        baseFlags.push({
          color: 'black' as const,
          label: 'REPLAY',
        });
        if (typeof live.value === 'number') {
          baseFlags.push({
            color: 'black30' as const,
            label: (
              <>
                <Icon name="eyeOn" size="small" />
                {formatViewCount(live.value)} 시청
              </>
            ),
          });
        }
        break;
    }

    return baseFlags;
  };
  const liveFlags = getLiveFlag();

  return (
    <div
      className={clsx(styles.root, flush && styles.flush, textInside && styles.inside, className)}
      {...props}
    >
      <Link href="#" className={styles.link} type="block" onClick={onClick}>
        <div className={styles.thumb}>
          {video && <Video {...video} autoPlay={autoPlay} loop className={styles.video} />}
          {liveFlags && liveFlags.length > 0 && (
            <Flag data={liveFlags} className={styles.flag} radius="br" size="large" />
          )}
        </div>
        {(title || subtitle) && (
          <div className={styles.detail}>
            {brand && (
              <div className={styles.brand}>
                <Image className={styles.brandImg} src={brand?.image} />
                <Text as="span" size="3">
                  {brand.name}
                </Text>
              </div>
            )}

            <BannerTitle
              title={{
                text: title,
                size: textSize ?? '3',
                weight: textInside ? 'bold' : 'semibold',
                line: titleProps?.titleLine ?? 2,
              }}
              subtitle={{
                text: subtitle,
                size: '1',
                line: titleProps?.subtitleLine ?? 2,
              }}
              align={align}
            />
          </div>
        )}
      </Link>

      {product && (
        <ProdBar
          {...product}
          className={clsx(styles.product)}
          variant={prodInside ? 'boxed' : undefined}
        />
      )}
    </div>
  );
};

LiveBanner.displayName = 'LiveBanner';
