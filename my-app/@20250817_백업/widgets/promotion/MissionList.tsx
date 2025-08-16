import React from 'react';

import { Text } from '@/shared/ui/custom';
import { Text as CustomText } from '@/shared/ui/custom';
import { CustomTextItem } from '@/shared/ui/custom/TextList';
import styles from './MissionList.module.scss';
import clsx from 'clsx';

interface MissionListProps {
  /** 형태 : ul(일반형-15개), ol(숫자 채번형-10개) */
  type?: 'ul' | 'ol';
  data: (string | CustomTextItem)[];
}

function Wrap({ type, children }: { type: 'ul' | 'ol'; children: React.ReactNode }) {
  if (type === 'ol') return <ol className={clsx(styles.root, styles[type])}>{children}</ol>;
  if (type === 'ul') return <ul className={clsx(styles.root, styles[type])}>{children}</ul>;
}

export default function MissionList({ type = 'ol', data }: MissionListProps) {
  // 1개면 일반 텍스트로 출력
  if (data.length === 1) {
    const item = data[0];
    if (typeof item === 'string') {
      return <CustomText key={0}>{item}</CustomText>;
    }
    return (
      <CustomText
        weight={item.weight ?? 'regular'}
        size={item.size ?? 14}
        color={item.color ?? '#575757'}
      >
        {item.text}
      </CustomText>
    );
  }
  // 배열 길이가 2 이상일 때 리스트로 출력
  return (
    <Wrap type={type}>
      {data.map((item, idx) => {
        // string인 경우
        if (typeof item === 'string') {
          return <li key={idx}>{item}</li>;
        }
        // CustomTextItem인 경우
        return (
          <Text
            as="li"
            key={idx}
            weight={item.weight ?? 'regular'}
            size={item.size ?? 14}
            color={item.color ?? '#222222'}
          >
            {item.text}
          </Text>
        );
      })}
    </Wrap>
  );
}
