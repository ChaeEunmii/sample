// 유틸
import { textColor } from '@shared/utils/ui';
// 컴포넌트
import { Heading, Text, Link, Icon } from '@shared/ui';
// 스타일
import styles from './TextBanner.module.scss';
import clsx from 'clsx';
// 타입
import { TextWithColor } from './bannerType';

export interface TextBannerProps {
  data: {
    /** 배너 타이틀 */
    title: string | TextWithColor;
    subtitle?: string | TextWithColor;
    /** 배너 링크 */
    href: string;
  }[];
  variant?: 'default' | 'boxed' | 'arrow';
  color?: 'white' | 'gray';
  reverse?: boolean; // 타이틀 순서변경
  maxItems?: number; // 최대노출 갯수설정
  className?: string;
}
export const TextBanner = ({
  data,
  variant = 'default',
  color,
  reverse = false,
  maxItems,
  className,
}: TextBannerProps) => {
  // 배경 컬러 스타일 적용 조건
  const useColorStyle = variant === 'boxed' || variant === 'arrow';
  // maxItems 지정시 최대 개수 제한
  const items = maxItems ? data.slice(0, maxItems) : data;

  return (
    <ul
      className={clsx(
        styles.root,
        styles[variant],
        color && useColorStyle && styles[color],
        className
      )}
    >
      {items.map(({ title, subtitle, href }, idx) => {
        // 타이틀 노드
        const titleNode = (
          <Heading
            className={styles.title}
            style={typeof title === 'string' ? undefined : textColor(title.color)}
          >
            {typeof title === 'string' ? title : title.text}
          </Heading>
        );
        // 서브타이틀 노드
        const subtitleNode = subtitle ? (
          <Text
            as="span"
            size="3"
            className={styles.subtitle}
            style={typeof subtitle === 'string' ? undefined : textColor(subtitle.color)}
          >
            {typeof subtitle === 'string' ? subtitle : subtitle.text}
          </Text>
        ) : null;

        return (
          <li key={idx}>
            <Link href={href} className={styles.link}>
              {!reverse ? (
                <>
                  {titleNode}
                  {subtitleNode}
                </>
              ) : (
                <>
                  {subtitleNode}
                  {titleNode}
                </>
              )}
              {variant === 'arrow' && (
                <Icon name="arrowRight" size="small" className={styles.icon} />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

TextBanner.displayName = 'TextBanner';
