'use client';
// 라이브러리
import { useState } from 'react';
// 컴포넌트
import {
  Text,
  TextButton,
  Flag,
  IconButton,
  Heading,
  Stack,
  Icon,
  Carousel,
  Box,
  InfoList,
  InfoItem,
} from '@shared/ui';
import { formatDate } from '@shared/utils/ui';
import { PhotoCard } from '@widgets/review/PhotoCard';
import { ProdBar } from '@widgets/product';
// 스타일
import styles from './QnACard.module.scss';
import clsx from 'clsx';

interface Answer {
  id: string;
  content: React.ReactNode;
  date: Date | string;
}

export interface QnACardProps {
  /** 고유 id */
  id?: string;
  /** 사용자 id */
  userId?: string;
  /** 등록 날짜 */
  date: Date | string;
  /** 질문 내용 */
  question: {
    title: string;
    content?: React.ReactNode;
  };
  /** 답변(여러 개 등록 가능) */
  answers?: Answer[];
  /** 비밀글 여부 */
  isSecret?: boolean;
  /** 내 글 여부 */
  isMyPost?: boolean;
  /** 질문 수정 */
  onEdit?: (qnaId: string) => void;
  /** 질문 삭제 */
  onDelete?: (qnaId: string) => void;
  /** 추가 클래스명 */
  className?: string;
  /** 리뷰 상품 정보 */
  product?: {
    image: string;
    title: string;
    brand?: string;
    href?: string;
  };
  /** 배경색 위에 있는지 여부 */
  withBg?: boolean;
  /** 수정 버튼 숨김 여부 */
  hideEdit?: boolean;
  /** 제품 사진 */
  photos?: { src: string; alt: string }[];
  /** 사진 클릭 시 호출되는 콜백 */
  onPhotoClick?: (qnaId: string) => void;
  /** 문의 유형 */
  qnaType?: {
    type: string;
    detail?: string;
  };
  /** QNA 추가정보 */
  addInfo?: { label: string; value: string }[];
  /** 토글 가능 여부 (true면 타이틀, 컨텐츠 영역 토글가능)*/
  toggleable?: boolean;
  /** 비밀글이어도 내용/답변을 표시 */
  revealSecret?: boolean;
  /** 답변 없을 때 펼치면 안내 문구 표시 */
  showPendingNotice?: boolean;
  /** 답변 없을 때 안내 문구 콘텐츠 (수정 시) */
  pendingNoticeText?: string;
  /** 액션 버튼 숨김 여부 (답변이 있을 때) */
  hideActionButtons?: boolean;
}

export const QnACard = ({
  id,
  userId,
  date,
  question,
  answers = [],
  isSecret = false,
  isMyPost = false,
  onEdit,
  onDelete,
  className,
  product,
  withBg,
  hideEdit,
  photos,
  onPhotoClick,
  qnaType,
  addInfo,
  toggleable = false,
  revealSecret = false,
  showPendingNotice = false,
  pendingNoticeText,
  hideActionButtons = false,
}: QnACardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => setIsExpanded((prev) => !prev);

  const InfoBar = () => {
    const metaData = [
      <>
        {answers.length === 0 ? (
          <Flag
            data={{
              color: 'gray' as const,
              label: '답변대기',
            }}
          />
        ) : (
          <Flag
            data={{
              color: 'green2' as const,
              label: '답변완료',
            }}
          />
        )}
      </>,
      ...(userId
        ? [
            <>
              <span className="ncp-blind">아이디</span>
              <Text as="span">{userId}</Text>
            </>,
          ]
        : []),
      ...(qnaType
        ? [
            <>
              <span className="ncp-blind">문의유형</span>
              <Text as="span">{qnaType?.type}</Text>
            </>,
            <>
              <span className="ncp-blind">세부유형</span>
              <Text as="span">{qnaType?.detail}</Text>
            </>,
          ]
        : []),
      <>
        <span className="ncp-blind">날짜</span>
        <Text
          as="time"
          color="gray3"
          dateTime={typeof date === 'string' ? date : date.toISOString()}
        >
          {typeof date === 'string' ? date : formatDate(date, 'dot')}
        </Text>
      </>,
    ];

    return (
      <ul className={styles.info}>
        {metaData.map((item, index) => (
          <li key={index} className={styles.infoItem}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const handleEdit = () => {
    const qnaId = id || `${userId}-${date}`;
    onEdit?.(qnaId);
  };

  const handleDelete = () => {
    const qnaId = id || `${userId}-${date}`;
    onDelete?.(qnaId);
  };

  const hasAnswer = (!isSecret || revealSecret) && answers.length > 0;

  const handlePhotoClick = () => {
    const qnaId = id || `${userId}-${date}`; // id 사용
    onPhotoClick?.(qnaId);
  };

  const renderPhotos = () => {
    return photos?.map(({ src, alt }) => (
      <PhotoCard src={src} alt={alt} onClick={handlePhotoClick} />
    ));
  };

  // 타이틀과 내용 렌더
  const renderTitleAndContent = () => (
    <>
      <Text size="4" as="strong" weight="medium" reading>
        {question.title}
      </Text>
      {question.content && isExpanded && (
        <Text size="4" color="gray2" reading>
          {question.content}
        </Text>
      )}
    </>
  );
  const isHidden = isSecret && !revealSecret;
  const isRevealedSecret = isSecret && revealSecret;

  // 답변 없을 때 안내 문구 표시 조건
  const showPendingMessage = showPendingNotice && isExpanded && !hasAnswer && !isHidden;

  // hideActionButtons 옵션이 true이고 답변이 있을 때 액션 버튼 숨김
  const hideActions = hideActionButtons && answers.length > 0;

  return (
    <div
      className={clsx(
        styles.root,
        !isExpanded && styles.collapse,
        toggleable && styles.toggleable,
        className
      )}
    >
      {/* 문의 섹션 */}
      <div className={styles.question}>
        <div className={styles.summary}>
          <InfoBar />
          {(hasAnswer || toggleable) && (
            <IconButton
              name={isExpanded ? 'arrowUp' : 'arrowDown'}
              size="small"
              className={styles.toggle}
              onClick={handleExpand}
            >
              {isExpanded ? '접기' : '펼치기'}
            </IconButton>
          )}
        </div>

        <div className={styles.detail}>
          {isHidden ? (
            <Text size="4" className={styles.secret}>
              <Icon name="lock" size="small" />
              비밀글입니다.
            </Text>
          ) : isRevealedSecret ? (
            <div className={styles.reveal}>
              <Icon name="lock" size="small" />
              <div className={styles.revealCon}>{renderTitleAndContent()}</div>
            </div>
          ) : (
            renderTitleAndContent()
          )}
        </div>

        {/* QNA 관련 제품 정보 */}
        {product && (
          <ProdBar
            {...product}
            variant="qna"
            color={withBg ? 'white' : 'gray'}
            className="ncp-mt-xs"
          />
        )}

        {isExpanded && (
          <>
            {/* 추가정보 */}
            {addInfo && (
              <Box className={styles.addInfo}>
                <InfoList variant="stacked" gap="row8" gridColumns="auto">
                  {addInfo?.map((info, index) => {
                    return (
                      <InfoItem
                        key={index}
                        title={
                          <Text size="4" color="gray2">
                            {info.label}
                          </Text>
                        }
                        content={<Text size="4">{info.value}</Text>}
                      />
                    );
                  })}
                </InfoList>
              </Box>
            )}
            {/* 상품평 이미지 */}
            {photos && (
              <Carousel
                slides={renderPhotos() as any}
                slidesPerView={3.5}
                spaceBetween={6}
                className="ncp-mt-xs"
              />
            )}
          </>
        )}
        {isMyPost && !hideActions && (
          <Stack type="end">
            {!hideEdit && (
              <TextButton size="1" color="gray3" variant="underline" onClick={handleEdit}>
                수정
              </TextButton>
            )}
            <TextButton size="1" color="gray3" variant="underline" onClick={handleDelete}>
              삭제
            </TextButton>
          </Stack>
        )}
        {/* 답변 없을 때 조건에 따른 안내박스 */}
        {showPendingMessage && (
          <Box size="3" className="ncp-mt-xs">
            <Text color="gray1" size="4" reading>
              {pendingNoticeText ?? (
                <>
                  곧 답변드리겠습니다.
                  <br />
                  부적절한 게시물 등록 시 ID이용 제한 및 게시물이 삭제될 수 있습니다.
                </>
              )}
            </Text>
          </Box>
        )}
      </div>

      {/* 답변 섹션 */}
      {hasAnswer && (
        <div className={styles.answers}>
          {answers.map((answer) => (
            <div key={answer.id} className={styles.answer}>
              <Stack type="between">
                <Heading size="2" weight="medium" color="point">
                  답변
                </Heading>
                <span className="ncp-blind">날짜</span>
                <Text
                  as="time"
                  color="gray3"
                  size="3"
                  dateTime={
                    typeof answer.date === 'string' ? answer.date : answer.date.toISOString()
                  }
                >
                  {typeof answer.date === 'string' ? answer.date : formatDate(answer.date, 'dot')}
                </Text>
              </Stack>

              <Text size="4" reading>
                {answer.content}
              </Text>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

QnACard.displayName = 'QnACard';
