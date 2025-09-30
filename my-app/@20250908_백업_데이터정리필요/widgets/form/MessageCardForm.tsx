'use client';

import clsx from 'clsx';
import { formatDate } from '@/shared/utils/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Tabs, TextButton, Textarea, Text, Button } from '@shared/ui';
import styles from './MessageCardForm.module.scss';

// 배경 컬러(#F3F8F7, #333333, #F7F7F7)
type background = '1' | '2' | '3';

export interface MessageCardItem {
  /** 고유 ID */
  id: string;
  /** 이미지 */
  image?: {
    src: string;
    alt: string;
  };
  /** 배경 컬러 */
  bg?: background;
}

export interface SentMessageCardData {
  cardId?: string; // 보낸 카드 id
  message?: string; // 보낸 메시지
  receiver?: string; // 받는 사람 이름
  orderDate?: string; // 주문 날짜
}

interface MessageCardFormProps {
  /** 좌우 여백 제거(여백 없이 채워지게) */
  marginXReset?: boolean;
  /** 메세지 카드 영역만 보여주는지 체크 */
  isMessageCard?: boolean;
  /** 수정 불가 모드 (버튼 숨김 + 편집 불가) */
  disableEdit?: boolean;
  /** 보낸 카드 전체 정보 */
  sentData?: SentMessageCardData;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const MessageCardForm = ({
  marginXReset = false,
  isMessageCard = false,
  disableEdit = false,
  sentData,
  className,
}: MessageCardFormProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null); // 스와이퍼
  const [activeIndex, setActiveIndex] = useState(0); // 현재 active된 스와이퍼 index
  const [isEditing, setIsEditing] = useState(false); // 수정하기 버튼
  const [height, setHeight] = useState<string>(''); // textarea 높이
  const [message, setMessage] = useState('감사의 마음을 담아 보냅니다.');

  // 메세지 카드 목록
  const messageCardList = [
    {
      id: 'card-1',
      image: {
        src: '/images/message/img_message_01.png',
        alt: '생일 축하해!',
      },
      bg: '1',
    },
    {
      id: 'card-2',
      image: {
        src: '/images/message/img_message_02.png',
        alt: 'thank you so much for your help!',
      },
      bg: '2',
    },
    {
      id: 'card-3',
      image: {
        src: '/images/message/img_message_03.png',
        alt: '너의 새로운 시작을 응원해',
      },
      bg: '3',
    },
    {
      id: 'card-4',
      image: {
        src: '/images/message/img_message_04.png',
        alt: 'congratulations!',
      },
      bg: '3',
    },
    {
      id: 'card-5',
      image: {
        src: '/images/message/img_message_01.png',
        alt: '생일 축하해!',
      },
      bg: '1',
    },
    {
      id: 'card-6',
      image: {
        src: '/images/message/img_message_02.png',
        alt: 'thank you so much for your help!',
      },
      bg: '2',
    },
  ];

  // isMessageCard 모드에서 표시할 카드 (보낸 cardId 기준, 없으면 activeIndex)
  const resolvedCard = sentData
    ? (messageCardList.find((c) => c.id === sentData.cardId) ?? messageCardList[activeIndex])
    : messageCardList[activeIndex];

  // 메타 영역 렌더 조건
  const hasMeta = Boolean(sentData?.receiver && sentData?.orderDate);

  // 현재 active된 카드의 bg 추출
  const currentBg = isMessageCard ? resolvedCard?.bg : messageCardList[activeIndex]?.bg;

  // activeIndex 바뀔 때 썸네일 슬라이드 이동
  useEffect(() => {
    if (!isMessageCard && thumbsSwiper) {
      thumbsSwiper.slideTo(activeIndex);
    }
  }, [activeIndex, thumbsSwiper, isMessageCard]);

  // 사용자가 입력할 때마다 textarea 높이를 scrollHeight만큼 자동으로 늘려줌
  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // 높이 초기화
      textarea.style.height = textarea.scrollHeight + 'px'; // 실제 내용 높이만큼 재설정
    }
  };

  // textarea가 다시 렌더링될 때(수정 모드로 전환 시) 기존 메시지 줄 수에 맞춰 높이 설정
  useLayoutEffect(() => {
    if (isEditing && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto'; // 초기화
      textarea.style.height = `${textarea.scrollHeight}px`; // 내용 기반 재설정
    }
  }, [isEditing]); // 수정 모드로 진입할 때 실행

  return (
    <div className={clsx(styles.root, marginXReset && styles.marginXReset, className)}>
      {!isMessageCard && (
        <>
          <Tabs
            data={[
              {
                label: '축하해요',
              },
              {
                label: '감사해요',
              },
              {
                label: '응원해요',
              },
              {
                label: '사랑해요',
              },
              {
                label: '카테고리명',
              },
            ]}
            variant="buttons"
            className={styles.categoryTab}
          />

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView="auto"
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={clsx(styles.thumbs, styles.swiper)}
          >
            {messageCardList.map((card, index) => (
              <SwiperSlide
                key={card.id}
                className={clsx(
                  styles.thumbItem,
                  styles.swiperSlide,
                  card.bg && styles[`bg${card.bg}`],
                  index === activeIndex && styles.active
                )}
                style={{ width: 'calc(100% / 4.4)' }}
              >
                <img src={card.image.src} alt={card.image.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}

      <div className={styles.inner}>
        <div className={clsx(styles.cardArea, currentBg && styles[`bg${currentBg}`])}>
          {/* 카드 영역: 
            - 기본 : Swiper
            - isMessageCard : 보낸 카드 단일 이미지 + 메타 정보 */}
          {!isMessageCard ? (
            <Swiper
              spaceBetween={16}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className={clsx(styles.cards, styles.swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {messageCardList.map((card) => (
                <SwiperSlide key={card.id} className={styles.swiperSlide}>
                  <img src={card.image.src} alt={card.image.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className={clsx(styles.cards)}>
              {/* 보낸 카드 메타 정보 (받는 사람, 주문일자) */}
              {hasMeta && (
                <div className={styles.sentMeta}>
                  {sentData?.receiver && (
                    <strong className={styles.receiver}>TO: {sentData.receiver}</strong>
                  )}
                  {sentData?.orderDate && (
                    <span className={styles.metaDate}>{formatDate(sentData.orderDate, 'dot')}</span>
                  )}
                </div>
              )}
              {/* 선택된 카드 이미지 */}
              {resolvedCard && (
                <img src={resolvedCard.image?.src} alt={resolvedCard.image?.alt ?? ''} />
              )}
            </div>
          )}

          <div className={styles.messageArea}>
            {!isEditing ? (
              <div className={styles.messageBox}>
                {(isMessageCard && sentData?.message ? sentData.message : message)
                  .split('\n')
                  .map((line, index) => (
                    <Text key={index} weight="medium" align="center" className={styles.message}>
                      {line}
                    </Text>
                  ))}
              </div>
            ) : (
              <Textarea
                ref={textareaRef}
                rows={1}
                value={message}
                maxLength={400}
                onInput={handleInput}
                border="none"
                onChange={(e) => {
                  setMessage(e.target.value);
                  handleInput();
                }}
                style={{ height }}
                className={clsx(styles.textarea, isEditing && styles.edit)}
              />
            )}
            {!disableEdit && (
              <div className={styles.buttonArea}>
                {!isEditing ? (
                  <TextButton
                    color="gray3"
                    size="1"
                    variant="underline"
                    onClick={() => setIsEditing(true)}
                    className={styles.editButton}
                  >
                    수정하기
                  </TextButton>
                ) : (
                  <Button
                    size="small"
                    variant="tertiary"
                    onClick={() => setIsEditing(false)}
                    className={clsx(isEditing && styles.edit)}
                  >
                    완료하기
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

MessageCardForm.displayName = 'MessageCardForm';
