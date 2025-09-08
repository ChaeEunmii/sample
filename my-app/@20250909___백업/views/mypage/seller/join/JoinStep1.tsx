'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TitleBar, Steps, Chip, Heading, Box, Text, Icon } from '@shared/ui';
import SellerCenterMenuBtn from '@/views/mypage/seller/components/SellerCenterMenuBtn';
import clsx from 'clsx';
import styles from './Join.module.scss';
import { JOIN_STEPS, SELLER_TYPE_OPTIONS } from './Join';

export default function JoinStep1() {
  // 현재 단계
  const currentStep = 0;

  // 판매자 유형 선택 상태
  const [selectedSellerType, setSelectedSellerType] = useState<string>('');
  // 판매자 유형 선택 핸들러
  const handleSelectedSellerType = (value: string) => {
    console.log('선택된 값:', value);
    setSelectedSellerType((prev) => (prev === value ? '' : value));
  };

  return (
    <Container
      showBack
      title="판매자 유형선택"
      actions={[
        {
          type: 'custom' as const,
          component: <SellerCenterMenuBtn />,
        },
      ]}
    >
      <Contents className={styles.layout}>
        <Steps steps={JOIN_STEPS} activeStep={currentStep} title="판매자 가입 진행단계" />
        <TitleBar type="docs" title="판매자 유형" description="판매자 유형을 선택해주세요." />
        <Text size="4" color="gray2" indent className={styles.desc}>
          <Icon name="info" size="small" />
          판매자 가입을 위해서는 통신판매업 신고가 필수 입니다.
        </Text>
        <Chip
          selected={selectedSellerType}
          onChange={handleSelectedSellerType}
          columns={1}
          className={styles.chips}
          name="seller-select"
          data={SELLER_TYPE_OPTIONS.map((item) => {
            const isSelected = [selectedSellerType].flat().includes(item.value);
            return {
              value: item.value,
              label: (
                <div className={clsx(styles.chipCont, { [styles.isSelect]: isSelected })}>
                  <Heading size="3" weight="semibold" color="black" className={styles.head}>
                    <span className={styles.icon} aria-hidden="true" />
                    {item.title}
                  </Heading>
                  <Text size="4" color="gray2" weight="regular" reading>
                    {item.desc}
                  </Text>
                  {isSelected && (
                    <>
                      <span aria-live="polite" className="ncp-blind">
                        구비 서류 안내가 표시되었습니다.
                      </span>
                      <Text className={styles.boxTit}>구비 서류 안내</Text>
                      <Box size="3" color="point" className={styles.box}>
                        <ul className={styles.docsList}>
                          {item.docs.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </Box>
                    </>
                  )}
                </div>
              ),
            };
          })}
        />
        <ButtonArea>
          <Button variant="primary" size="large" disabled={!selectedSellerType}>
            다음
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
