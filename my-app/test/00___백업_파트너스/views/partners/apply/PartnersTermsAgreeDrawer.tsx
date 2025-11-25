import { Drawer } from '@shared/ui';

interface PartnersTermsAgreeDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function PartnersTermsAgreeDrawer({
  isOpen,
  onClose,
}: PartnersTermsAgreeDrawerProps) {
  return (
    <Drawer title="이용약관" isOpen={isOpen} onClose={onClose}>
      파트너스 약관 내용 노출
      <br />
      <br />
    </Drawer>
  );
}
