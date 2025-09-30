'use client';

import { useState, useEffect } from 'react';
import { formatViewCount } from '@shared/utils/ui';
import styles from './Gem.module.scss';
import clsx from 'clsx';

interface GemProps {
  initialGems: number;
  isActive?: boolean;
  onToggle?: (isActive: boolean, newCount: number) => void;
  size?: 'small' | 'large';
  className?: string;
}

export const Gem = ({
  initialGems = 0,
  isActive,
  onToggle,
  size = 'large',
  className,
}: GemProps) => {
  const activeIcons = [
    '/images/gem_darkgreen.png',
    '/images/gem_sky.png',
    '/images/gem_yellow.png',
    '/images/gem_pink.png',
    '/images/gem_green.png',
  ];
  const inactiveIcon = '/images/gem_inactive.png';

  const [internalActive, setInternalActive] = useState(isActive ?? false);
  const [gemCount, setGemCount] = useState(initialGems);
  const [currentIcon, setCurrentIcon] = useState(inactiveIcon);

  useEffect(() => {
    if (isActive !== undefined) {
      setInternalActive(isActive);
    }
  }, [isActive]);

  useEffect(() => {
    if (internalActive) {
      const random = activeIcons[Math.floor(Math.random() * activeIcons.length)];
      setCurrentIcon(random);
    } else {
      setCurrentIcon(inactiveIcon);
    }
  }, [internalActive]);

  const handleGemToggle = () => {
    const newActiveState = !internalActive;
    const newLikeCount = newActiveState ? gemCount + 1 : gemCount - 1;

    if (isActive === undefined) {
      setInternalActive(newActiveState);
      setGemCount(newLikeCount);
    }

    onToggle?.(newActiveState, newLikeCount);
  };

  return (
    <div className={clsx(styles.root, size !== 'large' && styles[size], className)}>
      <button
        type="button"
        className={clsx(styles.gem)}
        onClick={handleGemToggle}
        aria-pressed={internalActive}
      >
        <img src={currentIcon} alt="젬하기" className={styles.icon} />
      </button>
      <span>{formatViewCount(gemCount, 'en')}</span>
    </div>
  );
};

Gem.displayName = 'Gem';
