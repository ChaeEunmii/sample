import { Drawer, Button, Text, FormArea, FormItem, Select, Input } from '@shared/ui';

interface CouponPasswordDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 수량 체크 여부 */
  isQuantityCheck?: boolean;
}

export default function CouponPasswordDrawer({
  isOpen,
  onClose,
  isQuantityCheck,
}: CouponPasswordDrawerProps) {
  return (
    <Drawer
      title="쿠폰 비밀번호 입력하기"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button variant="primary" size="large" onClick={onClose}>
            사용하기
          </Button>
        </>
      }
    >
      <Text>
        쿠폰 비밀번호를 입력해야 사용이 가능한 쿠폰이므로,
        <br />
        매장 직원에게 제시해주세요.
      </Text>
      <FormArea type="vertical">
        {isQuantityCheck && (
          <FormItem label="수량선택">
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
              placeholder="수량"
            />
          </FormItem>
        )}
        <FormItem label="인증번호">
          <Input placeholder="인증번호 입력" />
        </FormItem>
      </FormArea>
    </Drawer>
  );
}
