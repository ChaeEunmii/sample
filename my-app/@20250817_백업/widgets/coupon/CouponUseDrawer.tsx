'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { Drawer, Text, Box, Image, Button, FormArea, FormItem, Input } from '@shared/ui';
import { useToast } from '@/shared/contexts/ToastContext';
import { useAlert } from '@/shared/contexts/AlertContext';

interface CouponUseDrawerProps {
  /** 쿠폰 사용하기 타입 */
  type: 'barcode' | 'authCode' | 'eyeCheck';
  /** 바코드 데이터 */
  data?: {
    src: string;
    alt: string;
  };
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const CouponUseDrawer = ({
  type = 'eyeCheck',
  data,
  isOpen = false,
  onClose,
  className,
}: CouponUseDrawerProps) => {
  const { showToast } = useToast();
  const { showAlert } = useAlert();
  const [authCode, setAuthCode] = useState(''); // [인증키형] 인풋 value 상태
  const [inputTouched, setInputTouched] = useState(false); // [인증키형] 인풋 포커스 여부
  const [showError, setShowError] = useState(false); // [인증키형] 에러 문구 노출

  // [인증키형] 사용하기 버튼 클릭 핸들러
  const handleClick = () => {
    const trimmed = authCode.trim();
    if (!trimmed) {
      setShowError(true); // 빈 값일 경우 에러 표시
      return;
    }

    // 정상 처리
    setShowError(false);
  };

  return (
    <Drawer
      title="쿠폰 사용하기"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button
            variant="primary"
            size="large"
            disabled={type === 'authCode' && !inputTouched}
            onClick={
              type === 'barcode'
                ? () => showToast('쿠폰을 사용하였습니다.')
                : type === 'eyeCheck'
                  ? () =>
                      showAlert({
                        message: (
                          <>
                            직원 확인 처리를 하시겠습니까?
                            <br />
                            직원 확인 후에는 쿠폰은 사용 처리 되어
                            <br />
                            더이상 쓸 수 없습니다
                          </>
                        ),
                        onConfirm: () => console.log('확인 클릭'),
                        showCancel: true,
                        labelProps: { confirm: '확인', cancel: '취소' },
                      })
                  : handleClick
            }
          >
            {type === 'authCode' ? '사용하기' : type === 'barcode' ? '확인' : '직원 확인'}
          </Button>
        </>
      }
      className={clsx(className)}
    >
      <Text weight="medium" indent>
        {type === 'authCode' ? (
          <>
            쿠폰 비밀번호를 입력해야 사용이 가능한 쿠폰이므로, <br />
            매장 직원에게 제시해주세요.
          </>
        ) : type === 'barcode' ? (
          '쿠폰을 사용하려면 바코드를 매장 직원에게 보여주세요.'
        ) : (
          <>
            매장 직원에게 보여주시고 ‘직원 확인' 버튼을 눌러주세요.
            <br />
            매장 직원이 확인해야 사용이 가능해요.
          </>
        )}
      </Text>

      {type === 'barcode' && (
        <Box size="4" className="ncp-mt-m">
          <Image src={data?.src ?? ''} alt={data?.alt} />
        </Box>
      )}

      {type === 'authCode' && (
        <FormArea type="vertical">
          <FormItem label="인증번호" error={showError ? '인증번호를 입력해주세요.' : undefined}>
            {/* 에러인 경우 invalid 속성 추가 */}
            <Input
              value={authCode}
              onFocus={() => setInputTouched(true)}
              onChange={(e) => setAuthCode(e.target.value)}
              placeholder="인증번호 입력"
              invalid={showError ? true : false}
            />
          </FormItem>
        </FormArea>
      )}
    </Drawer>
  );
};

CouponUseDrawer.displayName = 'CouponUseDrawer';
