import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ProdGem.module.scss';

const activeIcons = [
  '/images/gem_darkgreen.png',
  '/images/gem_sky.png',
  '/images/gem_yellow.png',
  '/images/gem_pink.png',
  '/images/gem_green.png',
];

const inactiveIcon = '/images/gem_inactive.png';

interface ProdGemProps {
  isActive: boolean;
  onChange: (value: boolean) => void;
  className?: string;
}

export const ProdGem = ({ isActive = false, onChange, className }: ProdGemProps) => {
  const [currentIcon, setCurrentIcon] = useState(inactiveIcon);

  useEffect(() => {
    if (isActive) {
      const random = activeIcons[Math.floor(Math.random() * activeIcons.length)];
      setCurrentIcon(random);

      // 이전과 겹치지 않게 선택
      // setCurrentIcon((prevIcon) => {
      //   const filteredIcons = activeIcons.filter((icon) => icon !== prevIcon);
      //   const newIcon = filteredIcons[Math.floor(Math.random() * filteredIcons.length)];
      //   return newIcon;
      // });
    } else {
      setCurrentIcon(inactiveIcon);
    }
  }, [isActive]);

  const handleClick = () => {
    onChange(!isActive);
  };

  return (
    <button
      type="button"
      className={clsx(styles.root, className)}
      onClick={handleClick}
      aria-pressed={isActive}
    >
      <img src={currentIcon} alt="젬하기" className={styles.icon} />
    </button>
  );
};

ProdGem.displayName = 'ProdGem';
