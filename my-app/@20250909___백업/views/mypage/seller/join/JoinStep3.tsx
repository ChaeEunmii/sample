'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  ButtonArea,
  Button,
  TitleBar,
  Steps,
  FormArea,
  FormItem,
  Input,
  Checkbox,
  RadioGroup,
  UploaderField,
  Select,
  Stack,
  Box,
  TextList,
} from '@shared/ui';
import { AddressSearch, PhoneAuthForm } from '@widgets/form';
import {
  JOIN_STEPS,
  JOIN_STEP3_INFOLIST,
  JOIN_STEP3_SECTIONS,
  dutyTaxOptions,
  bankSelectOptions,
} from './Join';
import SellerCenterMenuBtn from '@/views/mypage/seller/components/SellerCenterMenuBtn';
import styles from './Join.module.scss';

export default function JoinStep3() {
  // 현재 단계
  const currentStep = 2;

  // 은행명 선택
  const [bankSelected, setBankSelected] = useState('');

  // 주소검색 상태
  const [bizAddress, setBizAddress] = useState({
    zipcode: '',
    defaultAddress: '',
    detailAddress: '',
  });
  const [shipAddress, setShipAddress] = useState({
    zipcode: '',
    defaultAddress: '',
    detailAddress: '',
  });
  const [returnAddress, setReturnAddress] = useState({
    zipcode: '',
    defaultAddress: '',
    detailAddress: '',
  });

  // 주소검색 필드별로 상태 변경 핸들러
  const handleBizAddrChange = (field: string, value: string) => {
    setBizAddress((prev) => ({ ...prev, [field]: value }));
  };
  const handleShipAddrChange = (field: string, value: string) => {
    setShipAddress((prev) => ({ ...prev, [field]: value }));
  };
  const handleReturnAddrChange = (field: string, value: string) => {
    setReturnAddress((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Container
      showBack
      title="판매자 입점신청 정보 입력"
      actions={[
        {
          type: 'custom' as const,
          component: <SellerCenterMenuBtn />,
        },
      ]}
    >
      <Contents className={styles.layout}>
        <Steps steps={JOIN_STEPS} activeStep={currentStep} title="판매자 가입 진행단계" />
        {/* 사업자 정보 */}
        <TitleBar
          type="docs"
          title={JOIN_STEP3_SECTIONS.biz.title}
          description={JOIN_STEP3_SECTIONS.biz.desc}
        />
        <FormArea type="vertical" className="ncp-mt-m">
          <FormItem label="사업자 등록번호" required>
            <Input type="number" value="1234567890" size="large" readOnly />
          </FormItem>
          <FormItem label="상호명" required>
            <Input value="(주)사업자상호명" size="large" readOnly />
          </FormItem>
          <FormItem label="대표자" required>
            <Input value="대표자명" size="large" readOnly />
          </FormItem>
          <FormItem label="사업자 구분" required>
            <Input value="개인사업자" size="large" readOnly />
          </FormItem>
          <FormItem label="업종" required>
            <Input placeholder="업종 입력" size="large" />
          </FormItem>
          <FormItem label="업태" required>
            <Input placeholder="업태 입력" size="large" />
          </FormItem>
          <FormItem label="설립일자" required>
            <Input placeholder="설립일자 입력" size="large" />
          </FormItem>
          <FormItem label="면과세구분" required>
            <RadioGroup name="duty-tax" defaultValue="option1" options={dutyTaxOptions} />
          </FormItem>
          <FormItem label="이메일" desc="세금계산서 발행용입니다." required>
            <Input type="email" placeholder="이메일 입력(example@gmail.com)" size="large" />
          </FormItem>
          <FormItem label="통신판매업 신고번호" required>
            <Input value="2018-서울강남-제3" size="large" readOnly />
          </FormItem>
          <FormItem label="주소검색" required error="사업장 상세주소를 입력해주세요.">
            <AddressSearch
              type="type2"
              address={bizAddress}
              onChange={handleBizAddrChange}
              detailInvalid //상세주소 필드를 invalid
            />
          </FormItem>
          <FormItem label="담당자 이름" desc="한글, 영문만 입력 가능합니다." required>
            <Input placeholder="이름 입력" size="large" />
          </FormItem>
          <PhoneAuthForm type="type3" phoneLabel="담당자 휴대폰 번호" phoneRequired />
          <FormItem label="담당자 이메일" required>
            <Input type="email" placeholder="이메일 입력(example@gmail.com)" size="large" />
          </FormItem>
          <FormItem label="대표전화" required>
            <Input type="number" placeholder="숫자만 입력" size="large" />
          </FormItem>
        </FormArea>
        {/* 배송 정보 */}
        <TitleBar
          type="docs"
          title={JOIN_STEP3_SECTIONS.ship.title}
          description={JOIN_STEP3_SECTIONS.ship.desc}
          className="ncp-mt-xxl"
        />
        <FormArea type="vertical">
          <FormItem label="출고지" required error="출고지 주소를 입력해주세요.">
            <Checkbox label="사업장 주소와 동일" className={styles.check} />
            <AddressSearch
              type="type2"
              address={shipAddress}
              onChange={handleShipAddrChange}
              detailInvalid //상세주소 필드를 invalid
            />
          </FormItem>
          <FormItem label="반품교환장소" required>
            <Checkbox label="사업장 주소와 동일" className={styles.check} />
            <AddressSearch type="type2" address={returnAddress} onChange={handleReturnAddrChange} />
          </FormItem>
        </FormArea>
        {/* 구비서류 */}
        <TitleBar
          type="docs"
          title={JOIN_STEP3_SECTIONS.files.title}
          description={JOIN_STEP3_SECTIONS.files.desc}
          className="ncp-mt-xxl"
        />
        <Box size="3">
          <TextList data={JOIN_STEP3_INFOLIST} variant="level2" className="ncp-mt-x0" />
        </Box>
        <FormArea type="vertical">
          <FormItem label="사업자 등록증 파일 첨부" required>
            <UploaderField buttonText="파일 첨부" placeholder="파일명" buttonVariant="secondary" />
          </FormItem>
          <FormItem label="주민등록등본 파일 첨부" required>
            <UploaderField buttonText="파일 첨부" placeholder="파일명" buttonVariant="secondary" />
          </FormItem>
          <FormItem label="개인인감증명서 파일 첨부" required>
            <UploaderField buttonText="파일 첨부" placeholder="파일명" buttonVariant="secondary" />
          </FormItem>
          <FormItem
            label="법인등기부등본 파일 첨부"
            required
            error="법인등기부등본 파일을 첨부해주세요."
          >
            <UploaderField
              buttonText="파일 첨부"
              placeholder="파일명"
              buttonVariant="secondary"
              invalid
            />
          </FormItem>
          <FormItem label="법인인감증명서사본 파일 첨부" required>
            <UploaderField buttonText="파일 첨부" placeholder="파일명" buttonVariant="secondary" />
          </FormItem>
          <FormItem label="통장사본 파일 첨부" required>
            <UploaderField buttonText="파일 첨부" placeholder="파일명" buttonVariant="secondary" />
          </FormItem>
          <FormItem label="사용인감계 파일 첨부" required>
            <UploaderField buttonText="파일 첨부" placeholder="파일명" buttonVariant="secondary" />
          </FormItem>
          <FormItem label="통장인감계 파일 첨부" required>
            <UploaderField buttonText="파일 첨부" placeholder="파일명" buttonVariant="secondary" />
          </FormItem>
          <FormItem title="입점서류양식 다운로드">
            <ButtonArea vertical margin="0">
              <Button prefixIcon="download">사용인감계 파일 받기</Button>
              <Button prefixIcon="download">통장인감계 파일 받기</Button>
            </ButtonArea>
          </FormItem>
        </FormArea>
        {/* 예금주 정보 */}
        <TitleBar
          type="docs"
          title={JOIN_STEP3_SECTIONS.bank.title}
          description={JOIN_STEP3_SECTIONS.bank.desc}
          className="ncp-mt-xxl"
        />
        <FormArea type="vertical">
          <FormItem label="은행명" required>
            <Select
              options={bankSelectOptions}
              placeholder="은행명 선택"
              value={bankSelected}
              onChange={setBankSelected}
              size="large"
            />
          </FormItem>
          <FormItem label="계좌번호" required>
            <Input type="number" placeholder="숫자만 입력" size="large" />
          </FormItem>
          <FormItem label="예금주" required error="예금주 인증을 진행해주세요.">
            <Stack type="field">
              <Input placeholder="예금주 입력" size="large" invalid />
              <Button variant="primary" size="large">
                인증하기
              </Button>
            </Stack>
          </FormItem>
        </FormArea>
        {/* 아이디/비밀번호 */}
        <TitleBar
          type="docs"
          title={JOIN_STEP3_SECTIONS.account.title}
          level="3"
          className="ncp-mt-xxl"
        />
        <FormArea type="vertical">
          <FormItem
            label="아이디"
            required
            desc="최소길이 5자, 최대길이 10자, 영문자, 숫자로만 입력 가능합니다."
          >
            <Input placeholder="아이디 입력" size="large" />
          </FormItem>
          <FormItem
            label="비밀번호"
            required
            desc={`첫번째 문자 영대소문자 구분, 최소길이 8자, 최대길이 10자 입력,\n영문자, 숫자, 특수문자 중 3개이상 사용 가능합니다.\n동일문자 4회 이상 또는 연속 문자 3회이상은 금지입니다.`}
            error="아래 비밀번호 형식에 맞게 입력해주세요."
          >
            <Input type="password" placeholder="비밀번호 입력" size="large" reveal invalid />
          </FormItem>
        </FormArea>
        {/* 하단버튼 */}
        <ButtonArea>
          <Button size="large">이전</Button>
          <Button variant="primary" size="large">
            가입 및 입점신청
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
