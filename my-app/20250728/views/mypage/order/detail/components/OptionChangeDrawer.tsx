import { Drawer, Button, Select, Input, Line, FormArea, FormItem } from '@shared/ui';

interface OptionChangeDrawerProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export const OptionChangeDrawer = ({ isOpen, onClose }: OptionChangeDrawerProps) => {
  return (
    <Drawer
      title="옵션변경"
      collapsible
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <Button variant="primary" size="large" onClick={onClose}>
          변경하기
        </Button>
      }
    >
      <FormArea>
        <FormItem label="옵션 변경">
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
            value="option1"
          />
        </FormItem>
        <FormItem label="옵션 변경">
          <Select
            onChange={() => {}}
            options={[
              {
                label: '옵션 1',
                value: 'option3',
              },
              {
                label: '옵션 2',
                value: 'option4',
              },
            ]}
            value="option3"
          />
        </FormItem>
      </FormArea>
      <Line margin="6" />
      <FormArea type="vertical">
        <FormItem label="추가정보">
          <Input label="이름" value="김현소" clearable={false} />
          <FormItem.Slot>
            <Input label="받으시는 분 연락처" value="010-1234-5678" clearable={false} />
          </FormItem.Slot>
          <FormItem.Slot>
            <Input label="각인옵션" value="골드 음각, 유광" clearable={false} />
          </FormItem.Slot>
          <FormItem.Slot>
            <Input label="각인내용" value="현소의 21살 생일을 기념하며 -HD-" clearable={false} />
          </FormItem.Slot>
          <FormItem.Slot>
            <Input label="전달 메시지" value="더현대서울" clearable={false} />
          </FormItem.Slot>
          <FormItem.Slot>
            <Input label="요청사항" value="포장에 각별하게 신경써주세요" clearable={false} />
          </FormItem.Slot>
        </FormItem>
      </FormArea>
    </Drawer>
  );
};

OptionChangeDrawer.displayName = 'OptionChangeDrawer';
