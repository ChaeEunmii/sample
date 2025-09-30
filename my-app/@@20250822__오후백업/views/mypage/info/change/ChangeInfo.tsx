'use client';

import { useState, useEffect } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { AgreementGroup } from '@widgets/form';
import {
  Stack,
  TitleArea,
  TextButton,
  FormArea,
  FormItem,
  Input,
  Select,
  ButtonArea,
  Button,
  Section,
  TitleBar,
  RadioGroup,
  Checkbox,
  Text,
  Line,
} from '@shared/ui';
import styles from './ChangeInfo.module.scss';
import { USERINFO_AGREEMENTS } from '@views/policy/agreements-data';

// 이메일옵션
const emailOptions = [
  { label: '@naver.com', value: '1' },
  { label: '@hanmail.net', value: '2' },
  { label: '@hotmail.com', value: '3' },
  { label: '직접 입력', value: '4' },
];

export default function ChangeInfo() {
  // 이메일주소 선택 상태
  const [selectedEmail, setSelectedEmail] = useState('1');
  const isEmailInput = selectedEmail === '4'; // 직접 입력 상태

  // 변경하기(이메일, 휴대폰) 상태
  const [isChange, setIsChange] = useState(false);
  const [isChange2, setIsChange2] = useState(false);
  const [isChangePhone, setIsChangePhone] = useState(false);

  // 약관동의 샘플데이터 가져오기
  const agreementData = USERINFO_AGREEMENTS;

  // 전체동의
  const [agreeStates, setAgreeStates] = useState<Record<string, boolean>>({});

  const handleCheckChange = (id: string, checked: boolean) => {
    setAgreeStates((prev) => ({ ...prev, [id]: checked }));
  };

  // 동의항목 초기설정
  useEffect(() => {
    const defaultCheckedId = ['privacy'];

    // 초기 체크 상태 설정
    setAgreeStates((prev) => {
      const updated = { ...prev };
      defaultCheckedId.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });
  }, []);

  return (
    <Container showBack title="회원정보 변경">
      <Contents>
        <div className={styles.title}>
          <TitleArea
            title={
              <>
                고객님의 정보를
                <br />
                안전하게 보호합니다
              </>
            }
          />
          <TextButton variant="underline" size="1" color="gray3" className={styles.btn}>
            마스킹 해제
          </TextButton>
        </div>
        <FormArea type="vertical">
          {!isChange ? (
            <>
              <FormItem label="이메일주소">
                <Stack type="field">
                  <Input title="이메일주소" size="large" value="abc****@********" disabled />
                  <Button variant="primary" size="large" onClick={() => setIsChange(true)}>
                    변경하기
                  </Button>
                </Stack>
              </FormItem>
            </>
          ) : (
            <>
              <FormItem label="이메일주소">
                <Stack type="field">
                  <Input title="이메일주소" size="large" value="abc1234" clearable={false} />
                  <Select
                    value={selectedEmail}
                    onChange={setSelectedEmail}
                    options={emailOptions}
                    size="large"
                  />
                </Stack>
                {isEmailInput && (
                  <FormItem.Slot>
                    <Input title="직접입력" placeholder="직접입력" size="large" />
                  </FormItem.Slot>
                )}
                {isChange2 && (
                  <FormItem.Slot>
                    <ButtonArea>
                      <Button variant="tertiary" size="large">
                        인증번호 재발송
                      </Button>
                    </ButtonArea>
                    <Text size="3" color="gray3">
                      이메일주소 변경을 위해 입력하신 이메일주소로 인증메일이 발송되었습니다. 인증
                      완료 후 변경완료 버튼을 선택해 주세요.
                    </Text>
                  </FormItem.Slot>
                )}
                <FormItem.Slot>
                  <ButtonArea>
                    <Button size="large" onClick={() => setIsChange(false)}>
                      취소
                    </Button>
                    {!isChange2 ? (
                      <Button variant="primary" size="large" onClick={() => setIsChange2(true)}>
                        변경하기
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size="large"
                        onClick={() => {
                          setIsChange(false);
                          setIsChange2(false);
                        }}
                      >
                        변경완료
                      </Button>
                    )}
                  </ButtonArea>
                </FormItem.Slot>
              </FormItem>
            </>
          )}

          <FormItem label="아이디">
            <Input title="아이디" size="large" value="abc****@********" disabled />
          </FormItem>
          <FormItem label="이름">
            <Input title="이름" size="large" value="김*대" disabled />
          </FormItem>
          <FormItem label="비밀번호">
            <Button variant="tertiary" size="large">
              변경하기
            </Button>
          </FormItem>
          <FormItem
            label="휴대폰번호"
            desc="본인 명의의 휴대폰번호일 경우에만 변경하실 수 있습니다."
          >
            <Stack type="field">
              <Input
                title="휴대폰번호"
                size="large"
                value={!isChangePhone ? '010-****-1234' : undefined}
                placeholder="-없이 숫자만 입력"
                clearable={false}
                disabled={!isChangePhone}
              />
              {!isChangePhone ? (
                <Button variant="primary" size="large" onClick={() => setIsChangePhone(true)}>
                  변경하기
                </Button>
              ) : (
                <Button variant="primary" size="large" onClick={() => setIsChangePhone(false)}>
                  변경완료
                </Button>
              )}
            </Stack>
          </FormItem>
        </FormArea>
        <AgreementGroup
          variant="type3"
          data={agreementData}
          checked={agreeStates[agreementData.id]}
          onChange={handleCheckChange}
          allStates={agreeStates}
          className="ncp-mt-xl"
        />
        <Line margin="5" variant="bold" />
        <Section variant="section" title="부가정보" level="1">
          <FormArea type="vertical">
            <FormItem label="성별">
              <RadioGroup
                name="radio-option"
                defaultValue="option1"
                options={[
                  { value: 'option1', label: '여성' },
                  { value: 'option2', label: '남성' },
                ]}
                invalid
              />
              <FormItem.Slot>
                <Checkbox label={<>마케팅 정보 활용 동의 (선택)</>} className="ncp-mt-s" />
              </FormItem.Slot>
            </FormItem>
          </FormArea>
          <TitleBar
            type="docs"
            title="스페셜데이"
            level="2"
            description={
              <>
                스페셜데이 별로 해마다 최대 3개의 스페셜데이 쿠폰 혜택을 드립니다.
                <br />
                생일 포함 최대 3개까지 등록 가능합니다.
              </>
            }
          />
          <FormArea type="vertical">
            <FormItem label="생일">
              <Input size="large" value="2001-12-**" disabled />
            </FormItem>
            <FormItem
              label="결혼기념일"
              side={
                <TextButton variant="underline" size="1" color="gray3">
                  삭제
                </TextButton>
              }
            >
              <Input size="large" placeholder="결혼기념일 직접 입력(예: 20010101)" />
            </FormItem>
            <FormItem label="기념일" desc="최소 2자이상 입력해 주세요.">
              <Input size="large" placeholder="기념일명 직접 입력" />
            </FormItem>
          </FormArea>
          <FormArea>
            <FormItem error="날짜를 다시 확인하고 입력해 주세요.">
              <Input
                title="날짜 직접 입력"
                placeholder="날짜 직접 입력(예: 20010101)"
                size="large"
                invalid
              />
            </FormItem>
          </FormArea>
          <div className="ncp-text-right ncp-mt-l">
            <TextButton variant="underline" size="1" color="gray3">
              회원 탈퇴하기
            </TextButton>
          </div>
        </Section>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          저장하기
        </Button>
      </ButtonArea>
    </Container>
  );
}
