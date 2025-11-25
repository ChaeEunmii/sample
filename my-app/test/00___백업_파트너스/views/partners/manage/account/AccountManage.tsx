'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  TextList,
  ButtonArea,
  Button,
  FormArea,
  FormItem,
  Input,
  Select,
  Stack,
  Box,
  InfoList,
  InfoItem,
  Text,
} from '@shared/ui';
import { AccountAuth } from '@views/mypage/partners/manage/components/AccountAuth';
import styles from './AccountManage.module.scss';

// 수정화면 보기용 샘플 데이터
const SAMPLE_EDIT_DATA = {
  fieldSelected: 'individual' as 'individual' | 'sole' | 'corporate',
  account: {
    bankSelected: 'bank2',
    accountNum: '01234567890000',
    holderName: '김현대',
    isAccountAuth: true,
  },
  realName: '김현대',
  email: 'sample@hyundai.com',
  corpRegNo: '1234567890123',
  bizNo: '1234567890',
  isVerified: true,
  isBizNoAuth: true,
  isCorpRegNoAuth: true,
};

// 정산유형 옵션
const AccountFieldOptions = [
  { value: 'individual', label: '개인' },
  { value: 'sole', label: '개인사업자' },
  { value: 'corporate', label: '법인사업자' },
];

// 계좌 관련 상태 타입
type AccountState = {
  bankSelected: string;
  accountNum: string;
  holderName: string;
  isAccountAuth: boolean;
};

export function AccountManage() {
  const searchParams = useSearchParams();
  // 화면확인용 코드
  const isCase1 = searchParams.has('case1');
  const isCase2 = searchParams.has('case2');
  const isEdit = searchParams.has('edit'); // 수정 모드 여부
  // 타이틀 하단 안내 문구 설정
  const TEXTLISTS = isCase1
    ? [
        '개인에 대한 정산만 가능합니다.',
        '정산 확정일을 기준으로 취소/반품건에 따라 지급 확정 금액이 달라질 수 있어요.',
      ]
    : ['정산 확정일을 기준으로 취소/반품건에 따라 지급 확정 금액이 달라질 수 있어요.'];

  // Form 상태 관리
  const [fieldSelected, setFieldSelected] = useState(''); // 정산 유형
  const [account, setAccount] = useState<AccountState>({
    bankSelected: '', // 은행 선택
    accountNum: '', // 계좌번호 입력
    holderName: '', // 예금주 입력
    isAccountAuth: false, // 계좌 인증 여부
  });
  const [realName, setRealName] = useState(''); // 실명
  const [email, setEmail] = useState(''); // 이메일 (세금계산서 수신용) 입력
  const [corpRegNo, setCorpRegNo] = useState(''); // 법인등록번호
  const [bizNo, setBizNo] = useState(''); // 사업자번호
  const [isBizNoAuth, setIsBizNoAuth] = useState(false); // 사업자번호 인증 여부
  const [isCorpRegNoAuth, setIsCorpRegNoAuth] = useState(false); // 법인사업자 번호 인증 여부

  // 계좌 상태 구조 분해
  const { bankSelected, accountNum, holderName, isAccountAuth } = account;
  // 정산 유형 선언
  const isIndividual = fieldSelected === 'individual'; // 개인
  const isSole = fieldSelected === 'sole'; // 개인사업자
  const isCorporate = fieldSelected === 'corporate'; // 법인사업자

  // 계좌 상태 리셋 함수
  const resetAccount = () => {
    setAccount({
      bankSelected: '',
      accountNum: '',
      holderName: '',
      isAccountAuth: false,
    });
  };

  // 계좌 인증하기 버튼 핸들러
  const handleAccountAuth = () => {
    setAccount((prev) => ({
      ...prev,
      isAccountAuth: true,
      bankSelected: 'bank2', // 샘플
      accountNum: '01234567890000', // 샘플
      holderName: '김현대', // 샘플
    }));
  };

  // '정산 유형' 선택값 변경시 나머지 초기화 (샘플)
  useEffect(() => {
    if (!fieldSelected) return; // 아무것도 선택 안 된 초기 상태면 스킵
    if (isEdit) return; // 수정 모드에서는 자동 리셋 막기

    resetAccount();
    setRealName('');
    setEmail('');
    setCorpRegNo('');
    setBizNo('');
    setIsBizNoAuth(false);
    setIsCorpRegNoAuth(false);
  }, [fieldSelected, isEdit]);

  // 수정 모드일 때 초기값 세팅 (샘플)
  useEffect(() => {
    if (!isEdit) return;
    // case1: 정산유형 선택 없이 계좌 정보만 있는 화면
    if (isCase1) {
      setAccount(SAMPLE_EDIT_DATA.account);
      return;
    }
    // case2: 정산유형 + 계좌 + 사업자 정보까지 있는 화면
    if (isCase2) {
      const {
        fieldSelected,
        account,
        realName,
        email,
        corpRegNo,
        bizNo,
        isBizNoAuth,
        isCorpRegNoAuth,
      } = SAMPLE_EDIT_DATA;

      setFieldSelected(fieldSelected);
      setAccount(account);
      setRealName(realName);
      setEmail(email);
      setCorpRegNo(corpRegNo);
      setBizNo(bizNo);
      setIsBizNoAuth(isBizNoAuth);
      setIsCorpRegNoAuth(isCorpRegNoAuth);
    }
  }, [isEdit, isCase1, isCase2]);

  return (
    <Container showBack title="파트너스 정산 계좌 관리">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              수익금 지급을 위한
              <br />
              계좌 정보를 입력해주세요
            </>
          }
          gap="2"
          bottomSlot={
            <>
              {TEXTLISTS.length < 2 ? (
                <Text size="5" color="gray2" reading indent>
                  {TEXTLISTS[0]}
                </Text>
              ) : (
                <TextList
                  data={TEXTLISTS.map((item) => ({
                    text: item,
                    textProps: { size: '5', reading: true },
                  }))}
                  variant="level2"
                  className="ncp-mt-x0"
                />
              )}
            </>
          }
        />
        {/* 케이스 1 */}
        {isCase1 && (
          <FormArea type="vertical">
            <AccountAuth
              bankSelected={bankSelected}
              accountNum={accountNum}
              isAccountAuth={isAccountAuth}
              holderName={holderName}
              onChangeBank={(value) => setAccount((prev) => ({ ...prev, bankSelected: value }))}
              onChangeAccountNum={(value) => setAccount((prev) => ({ ...prev, accountNum: value }))}
              onAuth={handleAccountAuth}
              onReset={resetAccount}
            />
          </FormArea>
        )}
        {/* 케이스 2 */}
        {isCase2 && (
          <FormArea type="vertical">
            <FormItem label="정산 유형" required>
              <Select
                options={AccountFieldOptions}
                size="large"
                placeholder="개인/개인사업자/법인사업자"
                value={fieldSelected}
                onChange={setFieldSelected}
              />
            </FormItem>
            {fieldSelected && (
              <>
                <AccountAuth
                  bankSelected={bankSelected}
                  accountNum={accountNum}
                  isAccountAuth={isAccountAuth}
                  holderName={holderName}
                  onChangeBank={(value) => setAccount((prev) => ({ ...prev, bankSelected: value }))}
                  onChangeAccountNum={(value) =>
                    setAccount((prev) => ({ ...prev, accountNum: value }))
                  }
                  onAuth={handleAccountAuth}
                  onReset={resetAccount}
                />
                {/* 개인 */}
                {isIndividual && (
                  <FormItem label="실명" required>
                    <Stack type="field" className={styles.stack}>
                      <Input size="large" value={realName} disabled />
                      <Button
                        variant="primary"
                        size="large"
                        className={styles.btn}
                        onClick={() => {
                          setRealName('김현대'); // 샘플
                        }}
                      >
                        본인인증
                      </Button>
                    </Stack>
                  </FormItem>
                )}
                {/* 개인사업자, 법인사업자 */}
                {(isSole || isCorporate) && (
                  <FormItem label="이메일 (세금계산서 수신용)" required>
                    <Input
                      size="large"
                      placeholder="이메일 입력"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormItem>
                )}
                {/* 법인사업자 */}
                {isCorporate && (
                  <FormItem label="법인등록번호" required>
                    <Stack type="field" className={styles.stack}>
                      <Input
                        type="number"
                        size="large"
                        placeholder="법인등록번호 입력"
                        value={corpRegNo}
                        onChange={(e) => setCorpRegNo(e.target.value)}
                        readOnly={isCorpRegNoAuth}
                      />
                      {!isCorpRegNoAuth ? (
                        <Button
                          variant="primary"
                          size="large"
                          className={styles.btn}
                          onClick={() => {
                            setIsCorpRegNoAuth(true);
                            setCorpRegNo('01234567890000'); // 샘플
                          }}
                        >
                          번호 인증하기
                        </Button>
                      ) : (
                        <Button
                          size="large"
                          className={styles.btn}
                          onClick={() => {
                            setIsCorpRegNoAuth(false);
                            setCorpRegNo(''); // 샘플
                          }}
                        >
                          번호 변경하기
                        </Button>
                      )}
                    </Stack>
                  </FormItem>
                )}
                {/* 개인사업자, 법인사업자 */}
                {(isSole || isCorporate) && (
                  <FormItem label="사업자번호" required>
                    <Stack type="field" className={styles.stack}>
                      <Input
                        type="number"
                        size="large"
                        placeholder="사업자번호 입력"
                        value={bizNo}
                        onChange={(e) => setBizNo(e.target.value)}
                        readOnly={isBizNoAuth}
                      />
                      {!isBizNoAuth ? (
                        <Button
                          variant="primary"
                          size="large"
                          className={styles.btn}
                          onClick={() => {
                            setIsBizNoAuth(true);
                            setBizNo('01234567890000'); // 샘플
                          }}
                        >
                          번호 확인하기
                        </Button>
                      ) : (
                        <Button
                          size="large"
                          className={styles.btn}
                          onClick={() => {
                            setIsBizNoAuth(false);
                            setBizNo(''); // 샘플
                          }}
                        >
                          번호 변경하기
                        </Button>
                      )}
                    </Stack>
                    {isBizNoAuth && (
                      <Box size="2" className="ncp-mt-s">
                        <InfoList variant="stacked" gridColumns="auto" gap="row16">
                          <InfoItem
                            title={<Text color="gray1">상호명</Text>}
                            content={<Text color="gray2">주식회사 현대백화점</Text>}
                          />
                          <InfoItem
                            title={<Text color="gray1">대표자명</Text>}
                            content={<Text color="gray2">정지선, 정지영 (각자대표)</Text>}
                          />
                          <InfoItem
                            title={<Text color="gray1">과세유형</Text>}
                            content={<Text color="gray2">부가가치세 일반과세자</Text>}
                          />
                        </InfoList>
                      </Box>
                    )}
                  </FormItem>
                )}
              </>
            )}
          </FormArea>
        )}
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large" disabled>
          계좌 등록하기
        </Button>
      </ButtonArea>
    </Container>
  );
}
