'use client';

import { useState, useEffect } from 'react';
import { Input, Button, FormArea, FormItem, TextList, ButtonArea, Stack } from '@shared/ui';
import styles from './PhoneAuthForm.module.scss';
interface PhoneAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSubmit?: () => void;
  type?: 'type1' | 'type2' | 'type3';
  /** 아이디 (type2) */
  userId?: string;
  /** 휴대폰 번호 (type2)*/
  userPhone?: string;
  /** type3 라벨 교체시 (기본 '휴대폰 번호')*/
  phoneLabel?: React.ReactNode;
  /** type3 상단 라벨 필수 표시 */
  phoneRequired?: boolean;
  /** 추가적인 클래스 이름 */
  className?: string;
}

//안내문구 내용
const textInfos = [
  '휴대폰으로 발송된 인증번호를 입력하세요.(3분 이내)',
  '인증번호가 도착하지 않을 시에는 재발송을 해주세요',
  '입력한 휴대폰 번호는 고객님 동의 없이는 공개, 또는 제 3자에게 제공하지 않으며, 보안시스템을 통해 안전하게 관리됩니다',
];

export const PhoneAuthForm = ({
  onSubmit,
  type = 'type1',
  userId,
  userPhone,
  phoneLabel,
  phoneRequired,
  className,
}: PhoneAuthFormProps) => {
  // 값이 없으면 빈 문자열로 초기화
  const [id, setId] = useState(userId ?? '');
  const [phone, setPhone] = useState(userPhone ?? '');
  // type3 인증 상태
  const [isAuth, setIsAuth] = useState(false);

  // userId 또는 userPhone prop이 바뀌면 상태 업데이트
  useEffect(() => {
    if (userId !== undefined) setId(userId);
    if (userPhone !== undefined) setPhone(userPhone);
  }, [userId, userPhone]);

  // 인증 핸들러
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <>
      {type === 'type1' && (
        <>
          <FormArea type="vertical" gap="2" className={className}>
            <FormItem
              label="휴대폰 번호"
              // error="재발송은 10초 이후 가능해요. (1일 최대 10회 재발송 가능) "
            >
              <Input type="tel" placeholder="01012345678" size="large" />
              <FormItem.Slot>
                <ButtonArea className={styles.slot}>
                  <Button>인증번호 재발송</Button>
                </ButtonArea>
              </FormItem.Slot>
            </FormItem>
            <FormItem label="인증 번호">
              <Input placeholder="인증번호 입력" suffix={<>유효시간 3:00</>} size="large" />
              <FormItem.Slot>
                <ButtonArea className={styles.slot}>
                  <Button onClick={handleSubmit}>인증하기</Button>
                </ButtonArea>
              </FormItem.Slot>
            </FormItem>
          </FormArea>
          <TextList data={textInfos} variant="info" className="ncp-mt-l" />
        </>
      )}
      {type === 'type2' && (
        <>
          <FormArea type="vertical" gap="2" className={className}>
            <FormItem label="아이디">
              <Input
                value={id}
                onChange={(e) => setId(e.target.value)}
                disabled={userId !== undefined}
                size="large"
              />
            </FormItem>
            <FormItem label="휴대폰 번호">
              <Stack type="field">
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={userPhone !== undefined}
                  size="large"
                />
                <Button variant="primary" size="large">
                  인증하기
                </Button>
              </Stack>
            </FormItem>
            <FormItem label="인증 번호">
              <Stack type="field">
                <Input placeholder="인증번호 입력" suffix={<>유효시간 3:00</>} size="large" />
                <Button variant="primary" size="large">
                  재발송
                </Button>
              </Stack>
            </FormItem>
          </FormArea>
          <ButtonArea>
            <Button onClick={handleSubmit} size="large">
              인증하기
            </Button>
          </ButtonArea>
          <TextList data={textInfos} variant="info" className="ncp-mt-l" />
        </>
      )}
      {type === 'type3' && (
        <>
          <FormItem
            label={phoneLabel ?? '담당자 휴대폰 번호'}
            required={!!phoneRequired}
            desc={
              isAuth &&
              `휴대폰으로 발송된 인증번호를 입력하세요.(3분 이내)\n인증번호가 도착하지 않을 시에는 재발송을 해주세요.`
            }
            error={
              !isAuth
                ? '담당자 휴대폰 번호 10~11자를 숫자로 입력해주세요.'
                : '인증번호가 일치하지 않습니다. 다시 확인해주세요.'
            }
          >
            <Stack type="field">
              <Input
                type="number"
                value={isAuth ? '01012345678' : undefined}
                title="인증번호"
                placeholder="숫자만 입력"
                size="large"
                clearable={false}
                invalid={!isAuth}
              />
              {!isAuth ? (
                <Button variant="primary" size="large" onClick={() => setIsAuth(true)}>
                  인증하기
                </Button>
              ) : (
                <Button size="large">재발송</Button>
              )}
            </Stack>
            {isAuth && (
              <>
                <Input
                  type="number"
                  placeholder="인증번호 입력"
                  suffix={<>유효시간 3:00</>}
                  size="large"
                  clearable={false}
                  invalid={isAuth}
                  className="ncp-mt-xs"
                />
                <Button variant="primary" className="ncp-mt-xs">
                  인증하기
                </Button>
              </>
            )}
          </FormItem>
        </>
      )}
    </>
  );
};

PhoneAuthForm.displayName = 'PhoneAuthForm';
