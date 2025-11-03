'use client';

import { useSearchParams } from 'next/navigation';
import { TitleArea, Text, Steps, TextList, ButtonArea, Button } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import styles from '@views/auth/join/Join.module.scss';

type Lang = 'ko' | 'en' | 'zh' | 'ja';
const TEXTS = {
  ko: {
    pageTitle: '회원가입',
    stepTitle: '회원가입 진행단계',
    steps: ['약관동의', '가입정보 입력', '가입완료'],
    heading1: '회원가입이 완료되었습니다',
    heading2: 'NCP회원 가입을 환영합니다!',
    noteTitle: '가입 완료 유의사항 입니다',
    note1:
      '이메일, 카카오톡, 구글, Apple 계정을 통해 간편가입 시 개인정보(이메일, 아이디, 성명, 휴대폰 번호 등)을 간접 수집합니다',
    note2: '고객님은 개인정보보호법 제 37조에 따라 개인정보 처리의 정지를 요구할 권리가 있습니다',
    goHome: '메인으로 가기',
  },
  en: {
    pageTitle: 'Sign Up',
    stepTitle: 'Sign-up Steps',
    steps: ['Agree to Terms', 'Enter Information', 'Completed'],
    heading1: 'Your sign-up is complete.',
    heading2: 'Welcome to NCP!',
    noteTitle: 'Please note',
    note1:
      'When you sign up via Email, KakaoTalk, Google, or Apple, certain personal data (email, ID, name, mobile, etc.) may be collected indirectly.',
    note2:
      'Under the Personal Information Protection Act, you have the right to request suspension of processing.',
    goHome: 'Go to Home',
  },
  zh: {
    pageTitle: '会员注册',
    stepTitle: '注册流程',
    steps: ['同意条款', '填写信息', '注册完成'],
    heading1: '注册已完成。',
    heading2: '欢迎加入 NCP！',
    noteTitle: '注意事项',
    note1:
      '通过邮箱、KakaoTalk、Google 或 Apple 进行快捷注册时，可能会间接收集部分个人信息（邮箱、账号、姓名、手机号等）。',
    note2: '根据《个人信息保护法》，您有权要求停止处理您的个人信息。',
    goHome: '返回首页',
  },
  ja: {
    pageTitle: '会員登録',
    stepTitle: '登録の手順',
    steps: ['規約同意', '情報入力', '登録完了'],
    heading1: '会員登録が完了しました。',
    heading2: 'NCPへようこそ！',
    noteTitle: 'ご注意事項',
    note1:
      'メール、KakaoTalk、Google、Appleでの簡単登録の場合、個人情報（メール、ID、氏名、携帯番号など）が間接的に収集されることがあります。',
    note2: '個人情報保護法に基づき、個人情報の取扱い停止を要求する権利があります。',
    goHome: 'メインへ',
  },
} as const;

export default function JoinComplete() {
  const searchParams = useSearchParams();
  const langParam = (searchParams.get('lang') ?? 'ko') as Lang; // ex) ?lang=en
  const T = TEXTS[langParam];

  const joinSteps = T.steps;
  const currentStep = 2;

  return (
    <Container title={T.pageTitle} showBack>
      <Contents>
        <Steps steps={[...joinSteps]} activeStep={currentStep} title={T.stepTitle} />
        <TitleArea
          title={
            <>
              {T.heading1}
              <br />
              {T.heading2}
            </>
          }
        />
        <div className={styles.infoMsg}>
          <Text weight="medium" size="5">
            {T.noteTitle}
          </Text>
          <TextList data={[T.note1, T.note2]} />
        </div>
        <ButtonArea>
          <Button variant="primary" size="large">
            {T.goHome}
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
