import { Drawer, Button, Text, FormArea, FormItem, Select } from '@shared/ui';
import styles from './UseVoucherDrawer.module.scss';

interface EmployeeCheckDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 수량 체크 여부 */
  isQuantityCheck?: boolean;
}

export default function EmployeeCheckDrawer({
  isOpen,
  onClose,
  isQuantityCheck,
}: EmployeeCheckDrawerProps) {
  return (
    <Drawer
      title="직원확인 하기"
      isOpen={isOpen}
      onClose={onClose}
      className={styles.termsAgreeDrawer}
      footer={
        <>
          <Button variant="primary" size="large" onClick={onClose}>
            직원확인
          </Button>
        </>
      }
    >
      <div className={styles.root}>
        <Text>
          매장 직원에게 보여주시고 ‘직원확인’ 버튼을 눌러주세요.
          <br />
          매장직원이 확인해야 사용이 가능해요.
        </Text>
        {isQuantityCheck && (
          <FormArea type="vertical">
            <FormItem label="수량">
              <Select
                onChange={() => {}}
                options={[
                  {
                    label: '옵션 1',
                    value: 'option1',
                  },
                  {
                    label: '옵션 2',
                    value: 'option2',
                  },
                ]}
                value=""
                placeholder="수량 선택"
              />
            </FormItem>
          </FormArea>
        )}
      </div>
    </Drawer>
  );
}
