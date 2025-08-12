import { Heading, Text } from '@shared/ui';
import clsx from 'clsx';
import styles from './TitleArea.module.scss';

interface TitleAreaProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** 스타일변영 */
  variant?: 'default' | 'event' | string;
  /** 레벨 (24, 32, 18)*/
  level?: 'default' | '1' | '2';
  /** 정렬 */
  align?: 'left' | 'center';
  /** 타이틀 상단 slot */
  topSlot?: React.ReactNode;
  /** 타이틀 하단 slot */
  bottomSlot?: React.ReactNode;
  /** 타이틀 텍스트 */
  title?: React.ReactNode;
  /** 설명 텍스트 */
  description?: React.ReactNode;
  /** 설명 텍스트 자간 옵션 기본: true */
  reading?: boolean;
  /** 문단 좌우 들여쓰기 */
  indent?: boolean;
  /** 하단에 section 구분용 border 추가 여부: false */
  sectionBorder?: boolean;
  /** 추가 클래스 */
  className?: string;
  /** 자식노드 */
  children?: React.ReactNode;
}

export const TitleArea = ({
  variant = 'default',
  level = 'default',
  align = 'left',
  topSlot,
  bottomSlot,
  title,
  description,
  reading = true,
  indent = true,
  sectionBorder = false,
  className,
  children,
  ...props
}: TitleAreaProps) => {
  // level에 따른 Heading 설정
  const getHeadingProps = () => {
    const headingMap = {
      default: { as: 'h2', size: '8', weight: 'bold' }, // 24
      '1': { as: 'h2', size: '9', weight: 'bold' }, // 32
      '2': { as: 'h2', size: '6', weight: 'bold' }, // 18
    } as const;

    return level in headingMap
      ? headingMap[level as keyof typeof headingMap]
      : headingMap['default'];
  };

  const heading = getHeadingProps();

  return (
    <div
      className={clsx(
        styles.root,
        align && align !== 'left' && styles[align],
        variant && styles[variant],
        indent && styles.indent,
        sectionBorder && styles.sectionBorder,
        className
      )}
      {...props}
    >
      {(topSlot || title) && (
        <div className={styles.head}>
          {topSlot && topSlot}
          {title && (
            <Heading
              as={heading.as}
              size={heading.size}
              weight={heading.weight}
              className={styles.heading}
            >
              {title}
            </Heading>
          )}
        </div>
      )}
      {description && (
        <Text className={styles.desc} reading={reading}>
          {description}
        </Text>
      )}
      {bottomSlot && bottomSlot}
      {children}
    </div>
  );
};

TitleArea.displayName = 'TitleArea';
