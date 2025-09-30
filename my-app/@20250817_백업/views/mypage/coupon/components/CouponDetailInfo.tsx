'use client';

import clsx from 'clsx';
import { Text, TitleBar, InfoList, InfoItem } from '@shared/ui';
import styles from './CouponDetailInfo.module.scss';

interface DetailInfoItemProps {
  /** 정보명 */
  title: string;
  /** 정보 내용 */
  content: string;
  /** content에 bold 스타일 적용 여부 */
  isbold?: boolean;
  /** 정보 내용에 대한 설명 */
  desc?: string;
}

interface CouponDetailInfoProps {
  /** 상세 정보 데이터 */
  data: DetailInfoItemProps[];
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const CouponDetailInfo = ({ data, className }: CouponDetailInfoProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <TitleBar title="상세 정보" level="2" className="ncp-mt-x0" />
      <InfoList variant="stacked" gridColumns="auto" gap="row12">
        {data.map((info, index) => (
          <InfoItem
            key={index}
            title={
              <Text as="span" size="4" color="gray3">
                {info.title}
              </Text>
            }
            content={
              <>
                <Text as="span" size="4" weight={info.isbold ? 'medium' : 'regular'}>
                  {info.content}
                  {info.desc && (
                    <>
                      <br />
                      <Text
                        as="span"
                        size="3"
                        color="gray3"
                        weight="regular"
                        className={styles.desc}
                      >
                        {info.desc}
                      </Text>
                    </>
                  )}
                </Text>
              </>
            }
          />
        ))}
      </InfoList>

      {/* <Heading>stacked</Heading>
      <InfoList variant="stacked" gridColumns="auto" gap="row12" size="1">
        {data.map((info, index) => (
          <InfoItem key={index} title={info.title} content={info.content} />
        ))}
      </InfoList> */}
    </div>
  );
};

CouponDetailInfo.displayName = 'CouponDetailInfo';
