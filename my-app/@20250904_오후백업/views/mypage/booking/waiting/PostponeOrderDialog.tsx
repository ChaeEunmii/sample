import React from 'react';
import {
  Box,
  Button,
  Dialog,
  FormArea,
  FormItem,
  Heading,
  Line,
  RadioGroup,
  Stack,
  Text,
  TextList,
  TitleArea,
  TitleBar,
} from '@shared/ui';
// 스타일
import styles from './PostponeOrder.module.scss';

interface UpcomingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PostponeOrderDialog({ isOpen, onClose }: UpcomingDialogProps) {
  const options = Array.from({ length: 7 }, (_, i) => ({
    label: `${i + 1}팀에게 양보하기`,
    value: `${i + 1}`,
  }));

  return (
    <Dialog
      title="미루기 순서 선택"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <>
          <Button size="large" onClick={onClose}>
            닫기
          </Button>
          <Button variant="primary" size="large">
            웨이팅 미루기
          </Button>
        </>
      }
    >
      <TitleArea
        title="웨이팅을 미루시겠어요?"
        subTitle={
          <Text size="4" color="gray2">
            미루기는 한 번만 가능합니다.
          </Text>
        }
        level="2"
      />
      <Stack type="between">
        {/* 폰트 사이즈 28이라서 heading에 사이즈 추가 해야 하는지 확인 필요 */}
        <Heading as="strong" weight="bold" size="9">
          <Text as="span" color="point">
            1
          </Text>{' '}
          번째
        </Heading>
        <Button iconOnly="refresh" variant="ghost">
          새로고침
        </Button>
      </Stack>
      <Box size="3">
        <div className={styles.waitingInfo}>
          <Text weight="medium" size="4">
            현재 <span className={styles.underline}>456팀</span>이 대기중입니다
          </Text>
          <Text as="span" color="gray3" size="4">
            오후 10:33 등록
          </Text>
        </div>
      </Box>
      <FormArea type="vertical" className="ncp-mt-xl">
        <FormItem label="미루기 할 순서를 선택해 주세요" labelType="heading">
          <RadioGroup
            name="postpone"
            defaultValue="1"
            options={options}
            vertical
            className="ncp-mt-m"
          />
        </FormItem>
      </FormArea>
      <Line variant="bold" margin="4" />
      <TitleBar level="3" title="미루기 주의사항" />
      <TextList
        data={[
          '미루기 순서 변경은 단 한 번만 가능합니다.',
          '직원 호출 후 바로 입장이 어려우시다면, 기다리시는 다른 고객님들께 양보를 부탁드립니다.',
          '매장 상황에 따라 정확한 입장 시간을 안내하기 어려운 점 양해 부탁드립니다.',
        ]}
        variant="level2"
      />
    </Dialog>
  );
}
