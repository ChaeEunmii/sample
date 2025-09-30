import clsx from 'clsx';
import styles from './InfoBanner.module.scss';

interface InfoBannerProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** 배너이미지 링크 */
  href?: string;
  /** 배너이미지 경로 */
  src: string;
  /** 배너이미지 대체텍스트 */
  alt?: string;
  /** 둥글기 (0, 4, 8) - default : 2 */
  radius?: '0' | '1' | '2';
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const InfoBanner = ({
  href,
  src,
  alt,
  radius = '2',
  className,
  ...props
}: InfoBannerProps) => {
  const Tag = href ? 'a' : 'div';

  return (
    <Tag
      href={href ? href : undefined}
      className={clsx(styles.root, radius && styles[`radius-${radius}`], className)}
    >
      <img src={src} alt={alt} className={styles.image} {...props} />
    </Tag>
  );
};

InfoBanner.displayName = 'InfoBanner';
