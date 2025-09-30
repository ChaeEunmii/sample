// 라이브러리
import { useState, useRef, useEffect } from 'react';
// 컴포넌트
import { Video, IconButton, Image, Flag, Icon, Link } from '@shared/ui';
// 스타일
import styles from './FlickingBanner.module.scss';
import clsx from 'clsx';

interface FlickingBannerProps {
  title?: string;
  image: {
    src: string;
    alt?: string;
  };
  video: {
    src: string;
    poster?: string;
    label?: string;
  };
  href: string;
  ad?: boolean;
}
export const FlickingBanner = ({ title, image, video, href, ad = true }: FlickingBannerProps) => {
  const [currentX, setCurrentX] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [touchStarted, setTouchStarted] = useState(false);
  const [bannerWidth, setBannerWidth] = useState(0);
  const [playing, setPlaying] = useState<boolean | null>(null); //ios video 이슈 대응 - 초기 null 설정
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const autoPlayTimeout = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  //ios video 이슈 대응 - 마운트 후 초기값 세팅
  useEffect(() => setPlaying(false), []);

  // 드래그 시작
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    // 터치 이벤트가 이미 시작되었으면 마우스 이벤트 무시
    if ('touches' in e) setTouchStarted(true);
    else if (touchStarted) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setIsDragging(true);
    setBannerWidth(bannerRef.current?.offsetWidth || 0);
  };

  // 드래그중
  const handleTouchSlide = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX;

    if (deltaX < 0) {
      setCurrentX(deltaX);
    }
  };

  // 드래그 끝
  const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    if (touchStarted && !('touches' in e)) return;

    const containerWidth = containerRef.current?.offsetWidth || 0;
    const originalWidth = containerWidth * (314 / 343);
    const currentWidth = Math.max(bannerWidth + currentX, 16);
    const dragPercent = (currentWidth / originalWidth) * 100;

    if (dragPercent <= 20) {
      setIsVideoVisible(true);
      autoPlayTimeout.current = setTimeout(() => setPlaying(true), 500);
    } else {
      setCurrentX(0);
    }

    setIsDragging(false);
  };

  const handleClose = () => {
    if (autoPlayTimeout.current) {
      clearTimeout(autoPlayTimeout.current);
      autoPlayTimeout.current = null;
    }
    setIsVideoVisible(false);
    setPlaying(false);
    setCurrentX(0);
    setBannerWidth(0);
  };

  // 키보드 대응
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isVideoVisible) {
        setIsVideoVisible(true);
        autoPlayTimeout.current = setTimeout(() => setPlaying(true), 500);
      }
    } else if (e.key === 'ArrowRight' || e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    }
  };

  // 타이머 정리
  useEffect(() => {
    return () => {
      if (autoPlayTimeout.current) {
        clearTimeout(autoPlayTimeout.current);
      }
    };
  }, []);

  return (
    <div
      className={styles.root}
      role="region"
      tabIndex={0}
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchSlide}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchSlide}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      data-banner-type={isVideoVisible ? 'video' : 'image'}
    >
      <div
        className={styles.banner}
        ref={bannerRef}
        style={{
          width: isDragging ? Math.max(bannerWidth + currentX, 16) : undefined,
        }}
        data-dragging={isDragging || isVideoVisible}
      >
        <Image className={styles.image} {...image} />
        <div className={styles.flick}>
          <Icon
            name="arrowLeft"
            size="xsmall"
            label="좌우 화살표 키 또는 드래그로 콘텐츠를 탐색할 수 있습니다."
          />
        </div>
      </div>
      {ad && (
        <Flag
          data={{ label: 'AD', color: 'black70' }}
          className={styles.flag}
          radius={isVideoVisible ? 'br' : 'tl'}
        />
      )}

      <Video
        className={clsx(styles.video, isVideoVisible && styles.visible)}
        {...video}
        autoPlay={playing !== null ? playing : true}
        showPlayer={playing !== null ? playing : false}
      />

      {playing && (
        <>
          <Link href={href || '#'} className={styles.more}>
            보러가기
          </Link>
          <IconButton name="close" className={styles.close} onClick={handleClose}>
            닫기
          </IconButton>
        </>
      )}
    </div>
  );
};
FlickingBanner.displayName = 'FlickingBanner';
