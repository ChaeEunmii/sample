import { TitleBar, InfoBanner } from '@shared/ui';
import { formatDate } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './ClubView.module.scss';

// type 매핑
const typeMap: Record<
  string,
  {
    title: string;
    titleKor: string;
    signupDate: string;
    desc?: React.ReactNode;
    image: {
      href?: string;
      src: string;
      alt?: string;
    };
  }
> = {
  beauty: {
    title: 'CLUB BEAUTY',
    titleKor: '클럽뷰티',
    signupDate: '20250525',
    desc: (
      <>
        맞춤 상품 추천을 위해 고객님의 정보를 알려주세요.
        <br />
        (모든 항목 필수)
      </>
    ),
    image: {
      href: '#',
      src: '/images/club/club_banner_01.png',
      alt: '클럽뷰티 가입하시고 정보부터 혜택까지 가득 누리세요',
    },
  },
  moms: {
    title: 'CLUB MOM’S',
    titleKor: '클럽맘스',
    signupDate: '20250525',
    desc: (
      <>
        맞춤 상품 추천을 위해 고객님의 정보를 알려주세요.
        <br />
        (모든 항목 필수, 최대 5명까지 등록 가능)
      </>
    ),
    image: {
      href: '#',
      src: '/images/club/club_banner_02.png',
      alt: '클럽맘스 가입하시고 정보부터 혜택까지 가득 누리세요',
    },
  },
  outdoor: {
    title: 'CLUB OUTDOOR',
    titleKor: '클럽아웃도어',
    signupDate: '20250525',
    desc: <>맞춤 상품 추천을 위해 고객님의 정보를 알려주세요.</>,
    image: {
      href: '#',
      src: '/images/club/club_banner_03.png',
      alt: '클럽아웃도어 가입하시고 정보부터 혜택까지 가득 누리세요',
    },
  },
  pet: {
    title: 'CLUB P.E.T',
    titleKor: '클럽펫',
    signupDate: '20250525',
    desc: (
      <>
        맞춤 상품 추천을 위해 고객님의 정보를 알려주세요.
        <br />
        (모든 항목 필수, 최대 5마리까지 등록가능)
      </>
    ),
    image: {
      href: '#',
      src: '/images/club/club_banner_04.png',
      alt: '클럽펫 가입하시고 정보부터 혜택까지 가득 누리세요',
    },
  },
  healthy: {
    title: 'CLUB HEALTHY',
    titleKor: '클럽헬시',
    signupDate: '20250525',
    desc: <>맞춤 상품 추천을 위해 고객님의 정보를 알려주세요.</>,
    image: {
      href: '#',
      src: '/images/club/club_banner_05.png',
      alt: '클럽헬시 가입하시고 정보부터 혜택까지 가득 누리세요',
    },
  },
  modern: {
    title: 'CLUB MODERN',
    titleKor: '클럽모던',
    signupDate: '20250525',
    desc: (
      <>
        맞춤 상품 추천을 위해 고객님의 정보를 알려주세요.
        <br />
        (모든 항목 필수)
      </>
    ),
    image: {
      href: '#',
      src: '/images/club/club_banner_06.png',
      alt: '클럽모던 가입하시고 정보부터 혜택까지 가득 누리세요',
    },
  },
  ezwel: {
    title: 'CLUB EZWEL',
    titleKor: '클럽이지웰',
    signupDate: '20250525',
    image: {
      href: '#',
      src: '/images/club/club_banner_07.png',
      alt: '클럽이지웰 가입하시고 정보부터 혜택까지 가득 누리세요',
    },
  },
  friends: {
    title: 'CLUB FRIENDS',
    titleKor: '클럽프렌즈',
    signupDate: '20250525',
    image: {
      href: '#',
      src: '/images/club/club_banner_08.png',
      alt: '직장 생활에 힘이 되는 CLUB FRIENDS의 혜택을 알아보세요!',
    },
  },
};

interface ClubTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** default: 메인 / Join: 클럽 가입 / edit: 관심정보 수정 */
  variant?: 'default' | 'join' | 'edit';
  /** 타입*/
  type?: keyof typeof typeMap;
}

export const ClubTitle = ({ variant = 'default', type = 'beauty' }: ClubTitleProps) => {
  const { title, titleKor, desc, signupDate, image } = typeMap[type];
  // 클럽화면별 디자인 여부
  const isJoin = variant === 'join';
  const isEdit = variant === 'edit';
  const isJoinEdit = variant === 'join' || variant === 'edit';

  return (
    <div className={clsx(styles.clubTitle, variant && styles[variant])}>
      <TitleBar
        type="docs"
        title={
          <>
            {title} {isJoinEdit && <br />}
            {titleKor}
          </>
        }
        side={
          !isJoinEdit && <span className={styles.date}>가입일 {formatDate(signupDate, 'dot')}</span>
        }
        description={isJoin && desc}
        className={styles.title}
      />
      {!isEdit && (
        <InfoBanner href={image.href} src={image.src} alt={image.alt} className={styles.image} />
      )}
    </div>
  );
};
