'use client';

import { Collapse, Checkbox, Text, Box, InfoList, InfoItem } from '@/shared/ui';
import clsx from 'clsx';

interface AgreeListProps {
  /** 추가적인 클래스 이름 */
  className?: string;
}
/** 동의 목록 */
export const AgreeList = ({ className }: AgreeListProps) => {
  return (
    <Collapse variant="section" marginTop="1" className={clsx(className)}>
      <Collapse.Control border>
        <Checkbox
          label={
            <span>
              개인정보 수집 및 이용 동의
              <Text as="span" color="gray1">
                (필수)
              </Text>
            </span>
          }
        />
      </Collapse.Control>
      <Collapse.Content>
        <Text color="gray1" size="4" reading>
          개인정보 처리에 대한 동의를 거부할 권리가 있으나, 거부할 경우 경품 수령에 제한을 받을 수
          있습니다.
        </Text>
        <Box>
          <InfoList gap="row16">
            <InfoItem
              title={
                <Text color="gray1" size="4" weight="semibold">
                  목적
                </Text>
              }
              content={
                <Text color="gray2" size="4" weight="regular">
                  이벤트 당첨자 확인 및 경품 배송
                </Text>
              }
            />
            <InfoItem
              title={
                <Text color="gray1" size="4" weight="semibold">
                  항목
                </Text>
              }
              content={
                <Text color="gray2" size="4" weight="regular">
                  이름, 연락처
                </Text>
              }
            />
            <InfoItem
              title={
                <Text color="gray1" size="4" weight="semibold">
                  보유기간
                </Text>
              }
              content={
                <Text color="gray2" size="4" weight="regular">
                  이벤트 당첨/공지일로부터 30일
                </Text>
              }
            />
          </InfoList>
        </Box>
      </Collapse.Content>
    </Collapse>
  );
};
