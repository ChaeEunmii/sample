import { Dialog, TitleArea, TitleBar, Button, Text, RadioGroup, TextList, Image } from '@shared/ui';
import styles from './ProductChangeDialog.module.scss';

interface ProductChangeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductChangeDialog({ isOpen, onClose }: ProductChangeDialogProps) {
  return (
    <Dialog
      title="정기배송 상품 변경 신청"
      footer={
        <Button variant="primary" size="large">
          선택하기
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <TitleArea
        topSlot={
          <Text size="5" weight="semibold">
            현재 이용중
          </Text>
        }
        title={
          <>
            HiHi 멤버십 프라임
            <br />
            이번 달 기프트는 과일 꾸러미예요
          </>
        }
      />
      <TitleBar title="다음 회차부터 받을 기프트를 선택해 주세요" type="docs" level="2" />
      <TextList
        data={[
          '매월 받고 싶은 혜택 한 가지를 미리 고를 수 있어요.',
          '변경하지 않으면 저번 달과 동일한 기프트가 배송돼요.',
        ]}
        variant="level2"
      />
      <RadioGroup
        className={styles.imgRadio}
        name="example-vertical"
        options={[
          {
            label: (
              <div className={styles.thumbLabel}>
                <Image
                  src="/images/dummy/@sample_food_01.png"
                  alt="과일 종합 꾸러미"
                  className={styles.image}
                />
                과일 종합 꾸러미
              </div>
            ),
            value: '1',
          },
          {
            label: (
              <div className={styles.thumbLabel}>
                <Image
                  src="/images/dummy/@sample_food_01.png"
                  alt="과일 종합 꾸러미"
                  className={styles.image}
                />
                과일 종합 꾸러미
              </div>
            ),
            value: '2',
          },
          {
            label: (
              <div className={styles.thumbLabel}>
                <Image
                  src="/images/img_gift.png"
                  alt="농산물 셋트 랜덤 기프트"
                  className={styles.image}
                />
                농산물 셋트 랜덤 기프트
              </div>
            ),
            value: '3',
          },
        ]}
        vertical
      />
      <TitleBar
        title="기프트 정기 배송일을 지정해주세요."
        description={<>매월 선택하신 주차에 기프트가 발송됩니다.</>}
        type="docs"
        level="2"
      />
      <RadioGroup
        name="example-default"
        options={[
          {
            label: '1주차',
            value: '1',
          },
          {
            label: '2주차',
            value: '2',
          },
          {
            label: '3주차',
            value: '3',
          },
          {
            label: '4주차',
            value: '4',
          },
        ]}
      />
    </Dialog>
  );
}
