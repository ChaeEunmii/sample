'use client';
// 라이브러리
import { useState, useLayoutEffect } from 'react';
// 컴포넌트
import { Dialog, Select, Heading, SocialButton, ButtonArea } from '@shared/ui';
import { useAlert } from '@shared/contexts/AlertContext';
import { useToast } from '@shared/contexts/ToastContext';
import Sample from '@widgets/display/Sample';
import { useHeader } from '@shared/contexts/HeaderContext';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const { showAlert } = useAlert();
  const { showToast } = useToast();
  const [selected, setSelected] = useState('');

  // 헤더 설정 예시
  const { setConfig } = useHeader();

  useLayoutEffect(() => {
    setConfig({
      title: '로그인',
      showBack: true,
      hidden: false,
    });
  }, []);

  return (
    <>
      <ButtonArea>
        <SocialButton variant="kakao" vertical>
          카카오 간편가입
        </SocialButton>
        <SocialButton variant="naver" vertical>
          네이버 간편가입
        </SocialButton>
        <SocialButton variant="phone" vertical>
          휴대폰 인증
        </SocialButton>
        <SocialButton variant="toss" vertical>
          토스 간편가입
        </SocialButton>
      </ButtonArea>
      <br />
      <ButtonArea vertical>
        <SocialButton variant="kakao">카카오 간편가입</SocialButton>
        <SocialButton variant="naver">네이버 간편가입</SocialButton>
        <SocialButton variant="phone">휴대폰 인증</SocialButton>
        <SocialButton variant="toss">토스 간편가입</SocialButton>
      </ButtonArea>

      <br />
      <ButtonArea>
        <SocialButton variant="facebook">Facebook</SocialButton>
        <SocialButton variant="apple">Apple</SocialButton>
      </ButtonArea>

      <Heading size="8" weight="bold">
        환영합니다!
        <br />
        NCP회원님 로그인 해주세요
      </Heading>
      {/* Dialog */}
      <button onClick={() => setIsOpen(true)}>Dialog 호출 테스트</button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} maximize>
        다이알로그 호출 테스트중입니다.
      </Dialog>

      {/* Alert */}
      <button
        onClick={() => {
          showAlert({
            title: '제목',
            message: '정말 삭제하시겠습니까?',
            onConfirm: () => console.log('확인 클릭'),
            showCancel: true,
            labelProps: { confirm: '확인', cancel: '취소' },
          });
        }}
      >
        Alert 호출(기본)
      </button>

      <button
        onClick={() => {
          showAlert('아이디를 선택하세요');
        }}
      >
        Alert 호출(단독 메세지)
      </button>

      {/* Toast */}
      <button
        onClick={() => {
          showToast('Toast Hello');
        }}
      >
        Toast 호출(기본)
      </button>

      <button
        onClick={() => {
          showToast(
            'Toast Hello - 접근성 옵션이 적용되었습니다. 공백 제외 다섯글자에 1초씩 환산하여 적용됩니다.',
            { isAccessible: true }
          );
        }}
      >
        Toast 호출(접근성 옵션)
      </button>

      <Sample />

      <Select
        options={[
          { value: 'option1', label: '한국어' },
          { value: 'option2', label: 'English' },
          { value: 'option3', label: '中文' },
          { value: 'option4', label: '日本語' },
          { value: 'option5', label: '한국어' },
          { value: 'option6', label: 'English' },
          { value: 'option7', label: '中文' },
          { value: 'option8', label: '日本語' },
        ]}
        value={selected}
        onChange={setSelected}
        variant="ghost"
      />

      <Select
        options={[
          { value: 'option1', label: '옵션 1' },
          { value: 'option2', label: '옵션 2' },
          { value: 'option3', label: '옵션 3' },
          { value: 'option4', label: '옵션 1' },
          { value: 'option5', label: '옵션 2' },
          { value: 'option6', label: '옵션 3' },
          { value: 'option7', label: '옵션 1' },
          { value: 'option8', label: '옵션 2' },
          { value: 'option9', label: '옵션 3' },
        ]}
        value={selected}
        onChange={setSelected}
      />
    </>
  );
}
