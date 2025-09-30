'use client';

// 라이브러리
import { useState, useRef, useEffect } from 'react';
import Hls from 'hls.js';
// 컴포넌트
import { IconButton } from './IconButton';
// 스타일
import styles from './Video.module.scss';
import clsx from 'clsx';

interface VideoProps {
  /** 영상 주소 */
  src: string;
  /** 썸네일 이미지 경로 */
  poster?: string;
  /** 자동재생 사용 여부 */
  autoPlay?: boolean;
  /** 플레이어 노출 여부 */
  showPlayer?: boolean;
  /** 스크린 리더를 위한 영상 설명 */
  label?: string;
  /** 동영상 반복재생 여부 */
  loop?: boolean;
  /** 추가 클래스명 */
  className?: string;
  /** 뷰 영역 내에서만 재생(autoPlay 사용 시) */
  playOnView?: boolean;
}

export const Video = ({
  src,
  poster,
  autoPlay = false,
  showPlayer = false,
  label,
  loop,
  className,
  playOnView = true,
  ...props
}: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControl, setShowControl] = useState(false);
  const [controlHasFocus, setControlHasFocus] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideCtrlTimeout = useRef<NodeJS.Timeout | null>(null);

  // Hls 덮어쓰기
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src.endsWith('.m3u8')) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }
  }, [src]);

  // app 화면 진입 감지 및 재생여부 판별
  useEffect(() => {
    if (!playOnView || !autoPlay || !videoRef.current) return;

    const videoEl = videoRef.current;
    const wrap = document.querySelector('#wrap');

    if (!wrap) return;

    const checkInViewX = () => {
      const videoRect = videoEl.getBoundingClientRect();
      const wrapRect = wrap.getBoundingClientRect();

      // video가 wrap의 가로 범위 안에 있는지 확인
      const inViewX = videoRect.left < wrapRect.right && videoRect.right > wrapRect.left;

      return inViewX;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inViewY = entry.isIntersecting;
        const inViewX = checkInViewX();

        if (inViewY && inViewX) {
          videoEl.muted = true;
          videoEl.play().catch((e) => console.warn('playOnView failed:', e));
        } else {
          videoEl.pause();
        }
      },
      {
        root: null, // viewport 기준
        threshold: 0.8,
      }
    );

    observer.observe(videoEl);

    return () => {
      observer.unobserve(videoEl);
      observer.disconnect();
    };
  }, [playOnView, autoPlay]);

  // autoPlay시 음소거 상태에서 실행
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (autoPlay && !playOnView) {
      video.muted = true;
      setIsMuted(true);
      video.play().catch((error) => {
        console.warn('AutoPlay failed:', error);
        setIsPlaying(false);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }

    return () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, [autoPlay]);

  // 컨트롤 숨김 타이머
  const hideControl = () => {
    if (hideCtrlTimeout.current) {
      clearTimeout(hideCtrlTimeout.current);
    }

    hideCtrlTimeout.current = setTimeout(() => {
      if (!controlHasFocus) setShowControl(false);
    }, 3000);
  };

  // 언마운트시 타이머 정리
  useEffect(() => {
    return () => {
      if (hideCtrlTimeout.current) {
        clearTimeout(hideCtrlTimeout.current);
      }
    };
  }, []);

  // 재생 시작 후 3초 뒤 컨트롤 숨김
  useEffect(() => {
    if (controlHasFocus) {
      if (hideCtrlTimeout.current) {
        clearTimeout(hideCtrlTimeout.current);
      }
      setShowControl(true);
    } else if (showPlayer && isPlaying) {
      hideControl();
    }
  }, [controlHasFocus, showPlayer, isPlaying]);

  // 비디오 영역에서 이벤트 발생 시 일정시간 버튼 표시
  const handleTouchStart = () => {
    if (showPlayer && isPlaying) setShowControl(true);
  };

  const handleMouseEnter = () => {
    if (showPlayer && isPlaying) {
      if (hideCtrlTimeout.current) {
        clearTimeout(hideCtrlTimeout.current);
      }
      setShowControl(true);
    }
  };

  const handleMouseLeave = () => {
    if (showPlayer && isPlaying) setShowControl(false);
  };

  // 재생/정지 토글 이벤트
  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }

    if (!isPlaying && showPlayer) setShowControl(true);

    if (containerRef.current) containerRef.current.focus();
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      // NaN 체크 추가
      setProgress(isNaN(progress) ? 0 : progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const clickTime = (clickX / width) * videoRef.current.duration;
      videoRef.current.currentTime = clickTime;
    }
  };

  // 키보드 이벤트
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!videoRef.current) return;

    switch (e.code) {
      case 'Space':
        e.preventDefault();
        handlePlayPause(e as any);
        break;
      case 'KeyM':
        e.preventDefault();
        handleMuteToggle(e as any);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
        break;
      case 'ArrowRight':
        e.preventDefault();
        videoRef.current.currentTime = Math.min(
          videoRef.current.duration,
          videoRef.current.currentTime + 10
        );
        break;
    }
  };

  // showPlayer에 따른 조건부 속성
  const containerProps = showPlayer
    ? {
        onTouchStart: handleTouchStart,
        onMouseEnter: handleMouseEnter,
        onMouseMove: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        role: 'region' as const,
        'aria-label': '비디오 플레이어',
      }
    : {};

  const videoProps = showPlayer
    ? {
        onTimeUpdate: handleTimeUpdate,
        onPlay: () => setIsPlaying(true),
        onPause: () => setIsPlaying(false),
      }
    : {};

  return (
    <div className={clsx(styles.root, className)} ref={containerRef} {...containerProps} {...props}>
      <video
        ref={videoRef}
        className={styles.video}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={isMuted}
        playsInline
        loop={loop}
        aria-label={label}
        // onMouseDown={(e) => e.preventDefault()}
        {...videoProps}
      />

      {showPlayer && (
        <>
          {/* 재생/정지 버튼 */}
          <button
            type="button"
            className={clsx(styles.control, isPlaying && !showControl && styles.hidden)}
            onClick={handlePlayPause}
            aria-label={isPlaying ? '정지' : '재생'}
            data-playing={isPlaying ? true : false}
            onFocus={() => setControlHasFocus(true)}
            onBlur={() => setControlHasFocus(false)}
          />

          {/* 툴바(음소거, 진행상태 등) */}
          <div className={styles.player}>
            <IconButton name={isMuted ? 'mute' : 'unmute'} onClick={handleMuteToggle}>
              {isMuted ? '음소거 해제' : '음소거'}
            </IconButton>
            <div className={styles.progress} onClick={handleProgressClick}>
              <span className={styles.progressFill} style={{ width: `${progress}%` }}></span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Video.displayName = 'Video';
