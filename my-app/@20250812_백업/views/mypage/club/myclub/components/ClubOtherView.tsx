import clsx from 'clsx';
import { TitleBar, Avatar, Heading, Link, Icon } from '@shared/ui';
import styles from './ClubView.module.scss';

export interface ClubOtherData {
  /** ID */
  id: string;
  /** 클럽명 */
  name: string;
  /** 클럽 링크 */
  href?: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt?: string;
  };
}

interface ClubOtherViewProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ClubOtherData[];
  /** 추가 클래스명 */
  className?: string;
}

export const ClubOtherView = ({ data, className }: ClubOtherViewProps) => {
  return (
    <>
      <div className={clsx(styles.otherView, className)}>
        <TitleBar type="docs" title="다른 클럽 둘러보기" className={styles.title} />
        <ul className={styles.list}>
          {data.map((club) => (
            <li key={club.id}>
              <Link href={club.href ?? '#'} type="block" className={styles.link}>
                <Avatar src={club.image.src} alt={club.image.alt} className={styles.thumb} />
                <Heading as="strong" className={styles.name}>
                  {club.name}
                </Heading>
                <Icon name="arrowRight" size="small" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
