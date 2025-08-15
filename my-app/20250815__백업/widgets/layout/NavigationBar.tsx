// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Link, Text } from '@shared/ui';
// 스타일
import styles from './NavigationBar.module.scss';
import clsx from 'clsx';

// prettier-ignore
const navBarItems = [
  {
    id: 'find',
    label: '발견',
    iconOff: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.74902 13.4688C5.4579 14.285 7.94966 15.4418 9.85426 16.7679H10.1454C12.05 15.4418 14.4677 14.285 17.2506 13.4688"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2.74902 10.084C5.4579 10.9002 7.94966 12.0571 9.85426 13.3831H10.1454C12.05 12.0571 14.4677 10.9002 17.2506 10.084"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2.74902 6.53153C5.4579 5.74962 8.02368 4.55847 9.8592 3.23242H10.1454C11.976 4.55847 14.4677 5.74962 17.2506 6.53153V6.70072C14.4677 7.51692 12.05 8.67379 10.1454 9.99983H9.85426C7.94966 8.67379 5.4579 7.51692 2.74902 6.70072V6.53153Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    iconOn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M2.74902 13.4688C5.4579 14.285 7.94966 15.4418 9.85426 16.7679H10.1454C12.05 15.4418 14.4677 14.285 17.2506 13.4688"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2.74902 10.084C5.4579 10.9002 7.94966 12.0571 9.85426 13.3831H10.1454C12.05 12.0571 14.4677 10.9002 17.2506 10.084"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M2.74902 6.53153C5.4579 5.74962 8.02368 4.55847 9.8592 3.23242H10.1454C11.976 4.55847 14.4677 5.74962 17.2506 6.53153V6.70072C14.4677 7.51692 12.05 8.67379 10.1454 9.99983H9.85426C7.94966 8.67379 5.4579 7.51692 2.74902 6.70072V6.53153Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: 'category',
    label: '카테고리',
    iconOff: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <line
          x1="2.18359"
          y1="3.97656"
          x2="17.7911"
          y2="3.97656"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M11.4506 15.4569C13.8749 15.4569 15.8402 13.4916 15.8402 11.0673C15.8402 8.64303 13.8749 6.67773 11.4506 6.67773C9.02633 6.67773 7.06104 8.64303 7.06104 11.0673C7.06104 13.4916 9.02633 15.4569 11.4506 15.4569Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M17.8183 16.9391L14.1885 13.7031" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M2.18164 8.76172V7.26172H6.38072C6.01111 7.73433 5.6758 8.50524 5.59959 8.76172H2.18164Z"
          fill="currentColor"
        />
        <path
          d="M2.18164 12.668V11.168H5.11566C5.09661 11.7436 5.21473 12.4265 5.28713 12.668H2.18164Z"
          fill="currentColor"
        />
      </svg>
    ),
    iconOn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <line
          x1="2.18359"
          y1="3.97656"
          x2="17.7911"
          y2="3.97656"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M11.4506 15.4569C13.8749 15.4569 15.8402 13.4916 15.8402 11.0673C15.8402 8.64303 13.8749 6.67773 11.4506 6.67773C9.02633 6.67773 7.06104 8.64303 7.06104 11.0673C7.06104 13.4916 9.02633 15.4569 11.4506 15.4569Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M17.8183 16.9391L14.1885 13.7031" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M2.18164 8.76172V7.26172H6.38072C6.01111 7.73433 5.6758 8.50524 5.59959 8.76172H2.18164Z"
          fill="currentColor"
        />
        <path
          d="M2.18164 12.668V11.168H5.11566C5.09661 11.7436 5.21473 12.4265 5.28713 12.668H2.18164Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  
  {
    id: 'shop',
    label: '샵',
    iconOff: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M3 7.08333V16.75H8.25V11.4167H11.75V16.75H17V7.08333L10 1.75L3 7.08333Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    iconOn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M3 7.08333V16.75H8.25V11.4167H11.75V16.75H17V7.08333L10 1.75L3 7.08333Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: 'gem',
    label: '젬',
    iconOff: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M3.104 9.82727C5.68038 8.2337 8.12067 5.80606 9.86642 3.10352H10.1386C11.8797 5.80606 14.2495 8.2337 16.8963 9.82727V10.1721C14.2495 11.8355 11.95 14.1933 10.1386 16.8958H9.86172C8.05028 14.1933 5.68038 11.8355 3.104 10.1721V9.82727Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    iconOn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M3.104 9.82727C5.68038 8.2337 8.12067 5.80606 9.86642 3.10352H10.1386C11.8797 5.80606 14.2495 8.2337 16.8963 9.82727V10.1721C14.2495 11.8355 11.95 14.1933 10.1386 16.8958H9.86172C8.05028 14.1933 5.68038 11.8355 3.104 10.1721V9.82727Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: 'my',
    label: '마이페이지',
    iconOff: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.79004 13.6564C5.36097 12.6864 6.87244 11.3705 8.17487 9.86897C7.27513 9.27645 6.68143 8.25831 6.68143 7.10174C6.68143 5.2722 8.16704 3.78906 9.9996 3.78906C11.8322 3.78906 13.3179 5.2722 13.3179 7.10174C13.3179 8.26191 12.7205 9.28279 11.816 9.8745C13.1021 11.3745 14.5974 12.6872 16.2099 13.6564V16.2089H3.79004V13.6564Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    iconOn: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M3.79004 13.6564C5.36097 12.6864 6.87244 11.3705 8.17487 9.86897C7.27513 9.27645 6.68143 8.25831 6.68143 7.10174C6.68143 5.2722 8.16704 3.78906 9.9996 3.78906C11.8322 3.78906 13.3179 5.2722 13.3179 7.10174C13.3179 8.26191 12.7205 9.28279 11.816 9.8745C13.1021 11.3745 14.5974 12.6872 16.2099 13.6564V16.2089H3.79004V13.6564Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

// 하단 네비게이션 컴포넌트
export const NavigationBar = () => {
  // path기준 상태관리 시 삭제
  const [activeItem, setActiveItem] = useState('shop');

  return (
    <nav id="navBar" className={styles.root}>
      <ul className={styles.nav}>
        {navBarItems.map((item) => (
          <li key={item.id}>
            <Link
              href="#"
              className={clsx(styles.link, item.id === activeItem && styles.active)}
              onClick={() => setActiveItem(item.id)}
            >
              <span className={styles.icon}>
                {item.id === activeItem ? item.iconOn : item.iconOff}
              </span>
              <Text as="span" size="1" align="center">
                {item.label}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
