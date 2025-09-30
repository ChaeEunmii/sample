'use client';

import { useState } from 'react';
import {
  Dialog,
  ButtonArea,
  Button,
  TitleArea,
  TitleBar,
  Checkbox,
  Line,
  Text,
  CheckboxGroup,
  TextList,
  FormArea,
  FormItem,
} from '@shared/ui';

// 파트너스 활동 종료 이유 선택옵션
const reasonOptions = [
  {
    label: '프로그램 이용빈도 낮음',
    value: '1',
  },
  {
    label: '활동 방법이 어려움',
    value: '2',
  },
  {
    label: '낮은 수익성',
    value: '3',
  },
  {
    label: '기타',
    value: '4',
  },
];

interface ActivityEndDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function ActivityEndDialog({ isOpen, onClose }: ActivityEndDialogProps) {
  const [checked, setChecked] = useState(false); // 내용확인 체크
  const [selected, setSelected] = useState<string[]>(['option1']); // 종료이유

  return (
    <Dialog title="파트너스 활동 종료" isOpen={isOpen} onClose={onClose} showClose maximize>
      <TitleArea
        title={
          <>
            파트너스 활동 종료전
            <br />
            확인해주세요!
          </>
        }
      />
      <TitleBar type="docs" title="NCP 파트너스 활동 종료 확약" level="2" />
      <TextList
        variant="clear"
        data={[
          {
            text: '1. “H.Point 회원”(이하 “회원")이란 당사 또는 제휴사의 영업점이나 홈페이지(PC/모바일웹), 모바일앱을 통해 본 약관 제 5조에 정해진 가입절차에 따라 회원가입, 카드발급, 카드등록 등의 절차를 진행하여 정상적으로 H.Point 서비스를 이용할 수 있는 권한을 부여 받은 자를 말합니다.',
            textProps: { color: 'gray2', size: '4', reading: true },
          },
          {
            text: '2. “H.Point 서비스”(이하 “H.Point 서비스" 또는 “서비스”라 함)란 당사 와 제휴사가 회원에게 제공하는 포인트 적립, 사용, 할인, 이벤트 참여 등의 고객 서비스 프로그램으로서, 그 주요 내용은 본 약관 제 3조에서 명시된 바와 같습니다.',
            textProps: { color: 'gray2', size: '4', reading: true },
          },
        ]}
      />
      <TextList
        data={[
          '개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 동의 거부시 회원가입이 제한됩니다',
          '참여 종료시 동일한',
        ]}
        variant="info"
      />
      <Checkbox
        label={
          <span>
            위 내용을 모두 확인했습니다{' '}
            <Text as="em" weight="regular" color="gray1">
              (필수)
            </Text>
          </span>
        }
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="ncp-mt-m"
      />
      <Line variant="bold" margin="5" />
      <FormArea type="vertical">
        <FormItem label="파트너스 활동 종료 이유가 무엇인가요?(필수)" labelType="heading">
          <CheckboxGroup
            name="reason"
            options={reasonOptions}
            vertical
            value={selected}
            onChange={(values) => setSelected(values)}
          />
        </FormItem>
      </FormArea>
      <ButtonArea>
        <Button size="large">활동 유지하기</Button>
        <Button variant="primary" size="large">
          활동 종료하기
        </Button>
      </ButtonArea>
    </Dialog>
  );
}
