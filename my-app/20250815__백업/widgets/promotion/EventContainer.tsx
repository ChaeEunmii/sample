import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Collapse, Image, Heading } from '@/shared/ui';
import { Flag, TextList, Heading as CustomHeading, Text } from '@/shared/ui/custom';
import { CustomTextItem } from '@/shared/ui/custom/TextList';
import { CustomFlagItemType } from '@/shared/ui/custom/Flag';
import { Container, Contents } from '@/widgets/layout/Container';

import styles from './EventContainer.module.scss';
import clsx from 'clsx';

interface EventContainerProps {
  /** 타이틀 배경 이미지 */
  titleBackground?: string;
  /** 타이틀 말풍선 */
  titleSpeech?: CustomFlagItemType | CustomFlagItemType[];
  /** 타이틀 */
  title: {
    text: string | string[];
    color?: string;
  };
  /** 타이틀 */
  subtitle?: {
    text: string;
    color?: string;
  };
  /** 타이틀 하단 슬롯 (체험단: 이미지) */
  titleBottomSlot?: React.ReactNode;
  /** 메인 타이틀 영역 클래스명 */
  topClassName?: string;
  /** 자식 노드 */
  children: React.ReactNode;
  /** 하단부 유의 사항 영역 */
  noticeData: (CustomTextItem | string)[];
  /** 코멘트 슬롯 */
  commentSlot?: React.ReactNode;
}

export default function EventContainer({
  titleBackground,
  titleSpeech,
  title,
  subtitle,
  titleBottomSlot,
  topClassName,
  children,
  noticeData,
  commentSlot,
}: EventContainerProps) {
  const searchParams = useSearchParams();

  /** 어드민 : 공유하기 여부 */
  const isShare = searchParams.get('share') !== 'false';

  return (
    <Container title="이벤트" type={isShare ? 'share' : undefined} showBack>
      <Contents className={styles.root}>
        <div>
          {/* 상단부 공통 - 타이틀 영역 */}
          <div
            className={clsx(
              styles.titleWrap,
              titleBackground && styles.hasBg,
              topClassName && styles[topClassName]
            )}
          >
            {titleBackground && <Image className={styles.bgImage} src={titleBackground} alt="" />}
            <div className={styles.titleArea}>
              {titleSpeech && <Flag size="xlarge" data={titleSpeech} className={styles.speech} />}
              <CustomHeading
                as="h2"
                size={24}
                weight="bold"
                color={title.color}
                className={styles.title}
              >
                {/* 타이틀 입력 필드를 2개 받는다고 하여, string[]로 들어오게 될 경우 <br/> 처리 */}
                {Array.isArray(title.text)
                  ? title.text.map((text, idx) => (
                      <React.Fragment key={idx}>
                        {text}
                        {idx < title.text.length - 1 && <br />}
                      </React.Fragment>
                    ))
                  : title.text}
              </CustomHeading>
              {subtitle && (
                <Text
                  as="p"
                  size={15}
                  weight="medium"
                  color={subtitle.color ?? '#575757'}
                  className={styles.subtitle}
                >
                  {subtitle.text}
                </Text>
              )}
            </div>
            {titleBottomSlot && titleBottomSlot}
          </div>

          {/* 각 이벤트 컨텐츠 */}
          {children}
        </div>

        {/* 하단부 공통 - 꼭! 읽어주세요 영역 */}
        <Collapse variant="event" defaultOpen>
          <Collapse.Control>
            <Heading as="h2" size="5" weight="semibold">
              꼭! 읽어주세요
            </Heading>
          </Collapse.Control>
          <Collapse.Content>
            <TextList className={styles.noticeList} data={noticeData} />
          </Collapse.Content>
        </Collapse>

        {/* 코멘트 슬롯 */}
        {commentSlot && <div className={styles.commentSlot}>{commentSlot}</div>}
      </Contents>
    </Container>
  );
}
