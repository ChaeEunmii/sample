'use client';

import {
  Dialog,
  Button,
  Box,
  Input,
  FormArea,
  FormItem,
  InfoList,
  InfoItem,
  TitleBar,
  Text,
} from '@shared/ui';

interface CashReceiptPhoneDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CashReceiptPhoneDialog({ isOpen, onClose }: CashReceiptPhoneDialogProps) {
  return (
    <Dialog
      title="현금영수증 휴대폰 번호"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <>
          <Button size="large">취소</Button>
          <Button variant="primary" size="large">
            등록하기
          </Button>
        </>
      }
    >
      <FormArea type="vertical">
        <FormItem label="휴대폰 번호" error="휴대폰 번호를 입력해 주세요." required>
          <Input type="number" size="large" placeholder="휴대폰 번호를 입력해 주세요" invalid />
        </FormItem>
      </FormArea>
      <TitleBar type="docs" title="현금영수증 신청정보 수집 안내" level="3" className="ncp-mt-l" />
      <Box size="3" className="ncp-mt-xs">
        <InfoList gap="row16">
          <InfoItem
            title={
              <Text color="gray1" weight="semibold">
                수집 및 이용 항목
              </Text>
            }
            content={
              <Text color="gray2" reading>
                휴대폰 번호
              </Text>
            }
          />
          <InfoItem
            title={
              <Text color="gray1" weight="semibold">
                수집 및 이용 기간
              </Text>
            }
            content={
              <Text color="gray2" reading>
                1년 3개월(조세특례제한법 제126조의3, 국세청고시 제2018-6호 제3조)
              </Text>
            }
          />
        </InfoList>
      </Box>
    </Dialog>
  );
}
