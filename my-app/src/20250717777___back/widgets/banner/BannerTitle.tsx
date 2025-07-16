// 유틸
import { textColor } from '@shared/utils/ui';
// 컴포넌트
import { Heading, Text } from '@shared/ui';
// 스타일
import styles from './BannerTitle.module.scss';
import clsx from 'clsx';

export interface BannerTitleBaseProps {
  /** 배너 타이틀 */
  title?: {
    text?: React.ReactNode;
    size?: '1' | '2' | '3' | '4';
    color?: string;
    weight?: 'medium' | 'semibold' | 'bold';
  };
  /** 배너 서브 타이틀 */
  subtitle?: {
    text?: React.ReactNode;
    size?: '1' | '2';
    color?: string;
  };
  /** 텍스트 정렬 */
  align?: 'left' | 'center' | 'right';
}

export interface BannerTitleExtraProps {
  /** 타이틀 위치 반전 */
  reverse?: boolean;
  /** 상단 여백 */
  margin?: boolean;
  /** 타이틀 한줄처리 */
  oneLine?: boolean;
  /** 문단 좌우 들여쓰기 */
  indent?: boolean;
}

export interface BannerTitleProps extends BannerTitleBaseProps, BannerTitleExtraProps {}

export const BannerTitle = ({
  title,
  subtitle,
  align,
  reverse,
  margin,
  oneLine,
  indent,
}: BannerTitleProps) => {
  const hasTitle = !!title?.text;
  const hasSubTitle = !!subtitle?.text;

  if (!hasTitle && !hasSubTitle) return null;
  return (
    <div className={clsx(styles.root, margin && styles.mt)}>
      {reverse ? (
        <>
          {hasSubTitle && (
            <Text
              as="span"
              className={styles.subtitle}
              size="3"
              align={align}
              indent={indent}
              style={textColor(subtitle.color)}
            >
              {subtitle.text}
            </Text>
          )}
          {hasTitle && (
            <Heading
              className={styles.title}
              weight="medium"
              align={align}
              indent={indent}
              style={textColor(title.color)}
            >
              {title.text}
            </Heading>
          )}
        </>
      ) : (
        <>
          {hasTitle && (
            <Heading
              className={clsx(
                styles.title,
                title.size && styles[`size${title.size}`],
                oneLine && styles.oneLine,
                title.weight && `ncp-weight-${title.weight}`
              )}
              align={align}
              indent={indent}
              style={textColor(title.color)}
            >
              {title.text}
            </Heading>
          )}
          {hasSubTitle && (
            <Text
              className={styles.subtitle}
              align={align}
              indent={indent}
              size={subtitle.size === '1' ? '4' : undefined}
              style={textColor(subtitle.color)}
            >
              {subtitle.text}
            </Text>
          )}
        </>
      )}
    </div>
  );
};

BannerTitle.displayName = 'BannerTitle';
