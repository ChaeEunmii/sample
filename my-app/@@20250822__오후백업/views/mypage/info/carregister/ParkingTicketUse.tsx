'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  Box,
  TextList,
  Text,
  FormArea,
  FormItem,
  Input,
  Stack,
  Button,
  Checkbox,
  Heading,
  TextButton,
  Flag,
  IconButton,
  Radio,
} from '@shared/ui';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import CarPolicyAgreeDialog from '@/views/mypage/info/carregister/CarPolicyAgreeDialog';
import styles from './ParkingTicketUse.module.scss';

export default function ParkingTicketUse() {
  // 개인정보(차량번호) 수집이용 동의 (L)
  const [isCarPolicyAgreeDialog, setIsCarPolicyAgreeDialog] = useState(false);
  // 라디오 옵션
  const [selected, setSelected] = useState('option1');

  return (
    <Container showBack title="주차권 사용하기">
      <Contents>
        <Box>
          <TextList
            variant="level2"
            data={[
              '테이블오더 이용 시 무료주차 서비스가 제공됩니다.',
              '최대 3대까지 등록 가능합니다.',
            ]}
          />
        </Box>
        <FormArea type="vertical">
          <FormItem label="차량번호 등록">
            <Stack type="field">
              <Input size="large" placeholder="차량번호 입력" />
              <Button variant="primary" size="large">
                등록
              </Button>
            </Stack>
          </FormItem>
        </FormArea>
        <div className={styles.checks}>
          <Checkbox
            label={
              <>
                <Text as="span" size="4" className={styles.agreeTit}>
                  개인정보(차량번호) 수집이용 동의<em>(필수)</em>
                </Text>
                <IconButton
                  name="arrowRight"
                  size="small"
                  onClick={() => setIsCarPolicyAgreeDialog(true)}
                >
                  약관 상세 열기
                </IconButton>
              </>
            }
            size="small"
          />
          <Checkbox
            label={
              <>
                <Text as="span" size="4" className={styles.agreeTit}>
                  대표 차량으로 등록
                </Text>
              </>
            }
            size="small"
          />
        </div>
        <div className={styles.manage}>
          <div className={styles.top}>
            <div className={styles.tit}>
              <Heading size="3" weight="medium">
                차량번호 관리
              </Heading>
              <Text as="span" size="3" color="gray2">
                등록된 차량 중 대표 차량을 선택해주세요.
              </Text>
            </div>
            <div className={styles.btns}>
              <TextButton size="1" color="gray3" variant="underline">
                마스킹 해제
              </TextButton>
              <TextButton size="1" color="gray3" variant="underline">
                편집
              </TextButton>
              <TextButton size="1" color="gray3" variant="underline">
                저장
              </TextButton>
              <TextButton size="1" color="gray3" variant="underline">
                취소
              </TextButton>
            </div>
          </div>
          <ul className={styles.numberList}>
            <li>
              <Box className={styles.box}>
                <Stack type="between">
                  <div className={styles.car}>
                    <Text weight="medium" color="primary">
                      1**가34**
                    </Text>
                    <Flag
                      data={{
                        color: 'green3',
                        label: '대표차량',
                      }}
                    />
                  </div>
                  <div className={styles.side}>
                    <Text color="gray3" size="3" weight="regular">
                      2025.12.25 등록
                    </Text>
                    <IconButton name="close" size="small">
                      삭제
                    </IconButton>
                  </div>
                </Stack>
              </Box>
            </li>
            <li>
              <Box className={styles.box}>
                <Stack type="between">
                  <div className={styles.car}>
                    <Text weight="medium" color="primary">
                      123가 3456
                    </Text>
                  </div>
                  <div className={styles.side}>
                    <Text color="gray3" size="3" weight="regular">
                      2025.12.25 등록
                    </Text>
                    <IconButton name="close" size="small">
                      삭제
                    </IconButton>
                  </div>
                </Stack>
              </Box>
            </li>
            <li>
              <Box className={styles.box}>
                <Stack type="between">
                  <div className={styles.car}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                      }}
                    >
                      <Radio
                        name="controlled"
                        value="option1"
                        label="123가 3456"
                        checked={selected === 'option1'}
                        onChange={(e) => setSelected(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className={styles.side}>
                    <Text color="gray3" size="3" weight="regular">
                      2025.12.25 등록
                    </Text>
                    <IconButton name="close" size="small">
                      삭제
                    </IconButton>
                  </div>
                </Stack>
              </Box>
            </li>
          </ul>
        </div>
        {/* 확인해주세요 */}
        <ConfirmInfo>
          <TextList
            data={[
              <>
                테이블오더 이용 시 무료주차를 원하는 경우 하단 개인정보(차량정보) 수집이용 동의가
                필요합니다.
                <br />
                (식당가 예약, 웨이팅 서비스는 해당되지 않음)
              </>,
              '차량은 최대 3대까지 등록 가능합니다.',
              '등록된 차량번호는 직접 삭제하거나 회원 탈퇴 시 삭제됩니다.',
            ]}
            variant="info"
          />
        </ConfirmInfo>
        {/* 개인정보(차량번호) 수집이용 동의 (L)*/}
        <CarPolicyAgreeDialog
          isOpen={isCarPolicyAgreeDialog}
          onClose={() => setIsCarPolicyAgreeDialog(false)}
        />
      </Contents>
    </Container>
  );
}
