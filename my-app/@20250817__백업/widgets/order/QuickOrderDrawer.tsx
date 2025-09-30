import clsx from 'clsx';
import { useState } from 'react';
import {
  Heading,
  Drawer,
  Button,
  TextButton,
  Text,
  FormArea,
  FormItem,
  Input,
  InfoList,
  InfoItem,
} from '@shared/ui';
import { formatNumber, formatPrice } from '@/shared/utils/ui';
import { ProdPrice } from '@/widgets/product';
import { PrivacyConsentDialog } from '@/widgets/agreement';
import { BestDiscountDialog } from './BestDiscountDialog';
import styles from './QuickOrderDrawer.module.scss';

interface QuickOrderDrawerProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const QuickOrderDrawer = ({ isOpen = false, onClose, className }: QuickOrderDrawerProps) => {
  // 상태 관리
  const [values, setValues] = useState<Record<string, number | ''>>({});
  const [disabledMap, setDisabledMap] = useState<Record<string, boolean>>({});
  const [isDiscountDialogOpen, setIsDiscountDialogOpen] = useState(false);
  // 약관 동의 관련 (L) 상태관리
  const [dialogType, setDialogType] = useState<null | 'personal' | 'seller'>(null);

  const handleInputChange = (id: string, value: string, maxPoint: number) => {
    const onlyNum = Number(value.replace(/[^0-9]/g, ''));

    setValues((prev) => ({
      ...prev,
      [id]: value === '' ? '' : onlyNum,
    }));

    setDisabledMap((prev) => ({
      ...prev,
      [id]: onlyNum >= maxPoint,
    }));
  };

  const handleUseAll = (id: string, point: number) => {
    setValues((prev) => ({ ...prev, [id]: point }));
    setDisabledMap((prev) => ({ ...prev, [id]: true }));
  };

  // 약관 동의 관련 (L) 열기
  const openDialog = (type: 'personal' | 'seller') => {
    setDialogType(type);
  };

  // 약관 동의 관련 (L) 닫기
  const closeDialog = () => {
    setDialogType(null);
  };

  return (
    <>
      <Drawer
        collapsible
        isOpen={isOpen}
        onClose={onClose}
        footer={
          <Button variant="primary" size="large" onClick={onClose}>
            결제하기
          </Button>
        }
        className={clsx(styles.quickOrder, className)}
      >
        <div className={styles.box}>
          <div className={styles.topBox}>
            <Heading className={styles.prodTitle}>포헤르츠 3D 부스터 마스크 젤 80g</Heading>
            <ul className={styles.optionBox}>
              <li>
                <Text size="4" color="gray3">
                  일이삼사오육칠 / 일이삼사오육칠 / 일이삼사오육칠 / 일이삼사오육칠 / 1개 /
                  [하나로포장] 포장 + 쇼핑백 (+3,000)
                </Text>
              </li>
              <li>
                <Text size="4" color="gray3">
                  일이삼사 / 일이삼사 / 일이삼사 / 일이삼사 / 10개
                </Text>
              </li>
              <li>
                <Text size="4" color="gray3">
                  일이삼사 / 일이삼사 / 일이삼사 / 일이삼사 / 1개 / 포장 (무료)
                </Text>
              </li>
            </ul>
          </div>

          {/* [case][3c] 쿠폰 또는 H.point 적용된 내용이 없는 경우, [변경] 버튼 미노출
          <Text size="7" weight="bold" className={styles.prodPrice}>
            {formatPrice(25000)}
          </Text>
          */}
          <InfoList variant="between" className={styles.prodPrice}>
            <InfoItem
              title={
                <>
                  <TextButton
                    color="gray3"
                    size="1"
                    suffixIcon="arrowRight"
                    variant="bold"
                    onClick={() => setIsDiscountDialogOpen(true)}
                    className={styles.discountButton}
                  >
                    <Text as="span" size="5" weight="semibold" color="point">
                      최적할인 19% 적용
                    </Text>{' '}
                    변경
                  </TextButton>
                </>
              }
              content={
                <Text as="span" size="7" weight="bold">
                  {formatPrice(25000)}
                </Text>
              }
            />
            <InfoItem
              title="총 할인금액"
              content={<Text weight="medium">{formatPrice(-25000)}</Text>}
            />
            <InfoItem title="배송비" content={<Text weight="medium">{formatPrice(3000)}</Text>} />
          </InfoList>

          <FormArea type="vertical" className={styles.pointForm}>
            <FormItem
              label="H.Point"
              suffix={
                <Text as="span" size="4" color="gray2">
                  {formatNumber(102345) + 'P'}
                </Text>
              }
              className={styles.stack}
            >
              <Input
                type="text"
                placeholder="0"
                size="large"
                value={String(values['hpoint'] ?? '')}
                onChange={(e) => handleInputChange('hpoint', e.target.value, 102345)}
                className={styles.input}
              />
              <Button
                variant="primary"
                size="large"
                onClick={() => handleUseAll('hpoint', 102345)}
                className={styles.formButton}
                disabled={!!disabledMap['hpoint']}
              >
                전액 사용
              </Button>
            </FormItem>
          </FormArea>
        </div>

        <div className={clsx(styles.box, styles.addrBox)}>
          <div className={styles.titleArea}>
            <Text size="4" weight="medium" indent className={styles.title}>
              기본배송지
            </Text>
            <TextButton
              color="gray3"
              size="1"
              suffixIcon="arrowRight"
              variant="underline"
              className={styles.changeButton}
            >
              변경
            </TextButton>
          </div>
          <Text>서울특별시 강남구 테헤란로 32-1</Text>
          <Text>강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호</Text>
        </div>

        <div className={clsx(styles.box, styles.payBox)}>
          <div className={styles.titleArea}>
            <div className={styles.leftBox}>
              <img
                src="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_5001_189453)'%3E%3Crect width='32' height='32' rx='16' fill='black'/%3E%3Cpath d='M19.6959 7C18.1463 7 16.8906 8.34701 16.8906 10.0067C16.8906 11.6663 18.1463 13.0134 19.6959 13.0134C21.2455 13.0134 22.4988 11.6663 22.4988 10.0067C22.4988 8.34701 21.2431 7 19.6959 7Z' fill='white'/%3E%3Cpath d='M14.8032 13.9446C13.9337 13.9446 13.1249 14.312 12.5347 14.9582V10H11.5V22.9959H12.5638V16.9748C12.5638 15.7528 13.7151 15.0181 14.7401 15.0181C15.9593 15.0181 16.6904 15.8701 16.6904 17.092V22.9959H17.7567V17.092C17.7567 15.2395 16.5811 13.9446 14.8032 13.9446Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_5001_189453'%3E%3Crect width='32' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
                alt="H.point 아이콘"
              />
              <div>
                <Heading>H.point Pay</Heading>
                <Text as="p">현대카드 (123*) 일시불</Text>
              </div>
            </div>
            <TextButton
              color="gray3"
              size="1"
              suffixIcon="arrowRight"
              variant="underline"
              className={styles.changeButton}
            >
              변경
            </TextButton>
          </div>

          <div className={styles.grayBox}>
            <Text color="gray2">
              주문 내용을 확인하였으며,{' '}
              <TextButton
                color="gray2"
                size="2"
                variant="underline"
                onClick={() => openDialog('personal')}
                className={styles.changeButton}
              >
                개인정보 수집 이용 동의
              </TextButton>
              ,
              <TextButton
                color="gray2"
                size="2"
                variant="underline"
                onClick={() => openDialog('seller')}
                className={styles.changeButton}
              >
                개별판매자 개인정보 제공 동의
              </TextButton>
              약관에 동의합니다.
            </Text>
          </div>
        </div>
      </Drawer>
      {/* 최적할인 적용 (L) */}
      <BestDiscountDialog
        isOpen={isDiscountDialogOpen}
        onClose={() => setIsDiscountDialogOpen(false)}
      />
      {/* 약관 동의 관련 안내 (L) */}
      <PrivacyConsentDialog type={dialogType} isOpen={!!dialogType} onClose={closeDialog} />
    </>
  );
};

QuickOrderDrawer.displayName = 'QuickOrderDrawer';
