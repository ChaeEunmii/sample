'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
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
  IconButton,
} from '@shared/ui';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import CarPolicyAgreeDialog from '@/views/mypage/info/carregister/components/CarPolicyAgreeDialog';
import { CarNumManage, CarItem } from '@/views/mypage/info/carregister/components/CarNumManage';
import { mockCarList } from '@mocks/myinfo';
import styles from './CarRegisterManage.module.scss';

export default function CarRegisterManage() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isCase2 = searchParams.has('case2');

  // 차량번호 데이터
  const [cars, setCars] = useState<CarItem[]>(mockCarList);
  // 개인정보(차량번호) 수집이용 동의 (L)
  const [isCarPolicyAgreeDialog, setIsCarPolicyAgreeDialog] = useState(false);

  // 대표 변경/삭제 저장 시 호출됨
  const handleSaveCars = (next: CarItem[]) => {
    console.log('cars:', next);
    setCars(next);
  };

  // 체크 아이템들
  const checkItems = [
    {
      id: 'policy',
      label: (
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
      ),
    },
    {
      id: 'primary',
      label: (
        <Text as="span" size="4" className={styles.agreeTit}>
          대표 차량으로 등록
        </Text>
      ),
    },
  ];

  return (
    <Container showBack title="차량 등록 관리">
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
              <Input size="large" placeholder="ex)234무3456" />
              <Button variant="primary" size="large">
                등록
              </Button>
            </Stack>
          </FormItem>
        </FormArea>
        {/* 동의 체크 */}
        <div className={styles.checks}>
          {checkItems.map((item) => (
            <Checkbox key={item.id} label={item.label} size="small" />
          ))}
        </div>
        {/* 등록된 차량 있을경우 노출*/}
        {isCase2 && (
          <>
            {/* 차량번호 관리 */}
            <CarNumManage items={cars} onChange={handleSaveCars} />
          </>
        )}
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
