import { Button, Drawer, Text } from '@/shared/ui';

interface CameraSettingsDrawerProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export const CameraSettingsDrawer = ({ isOpen, onClose }: CameraSettingsDrawerProps) => {
  return (
    <Drawer
      collapsible
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button size="large" onClick={onClose}>
            취소
          </Button>
          <Button variant="primary" size="large">
            설정하기
          </Button>
        </>
      }
    >
      <Text weight="medium" indent reading>
        카메라 기능을 사용하려면 앱의 카메라
        <br />
        접근 권한을 허용해야 합니다.
      </Text>
    </Drawer>
  );
};

CameraSettingsDrawer.displayName = 'CameraSettingsDrawer';
