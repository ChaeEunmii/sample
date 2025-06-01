'use client';
// 라이브러리
import { useState, useLayoutEffect } from 'react';
// 컴포넌트
import { Dialog, Select } from '@shared/ui';
import { useAlert } from '@shared/contexts/AlertContext';
import { useToast } from '@shared/contexts/ToastContext';
import Sample from '@widgets/display/Sample';
import { useHeader } from '@shared/contexts/HeaderContext';
import { Agreement } from '@shared/ui/blocks/Agreement';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const { showAlert } = useAlert();
  const { showToast } = useToast();
  const [selected, setSelected] = useState('');

  // 헤더 설정 예시
  const { setConfig } = useHeader();

  useLayoutEffect(() => {
    setConfig({
      hidden: true,
    });
  }, []);

  //test
  const [checked, setChecked] = useState<Record<string, boolean>>({
    privacy: false,
    marketing: false,
  });

  const [modalContent, setModalContent] = useState<string | null>(null);

  const openModal = (html: string) => setModalContent(html);
  const closeModal = () => setModalContent(null);

  const customItems = [
    {
      id: 'privacy',
      label: '개인정보 수집 및 이용 동의 (필수)',
      required: true,
      content: '<p>개인정보 수집에 동의하셔야 서비스를 이용하실 수 있습니다.</p>',
    },
  ];

  return (
    <>
      <p>dfsdf</p>
      <div>
        <Agreement
          checked={checked}
          onChange={setChecked}
          onOpenModal={openModal}
          items={customItems} // 없으면 기본값 사용됨
        />
        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} maximize>
          {modalContent}
        </Dialog>
        {modalContent && <div dangerouslySetInnerHTML={{ __html: modalContent }} />}
      </div>
      <p>dfsdf</p>
      {/* Dialog */}
      <button onClick={() => setIsOpen(true)}>Dialog 호출 테스트</button>
      {/* <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} maximize>
        다이알로그 호출 테스트중입니다.
      </Dialog> */}

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
