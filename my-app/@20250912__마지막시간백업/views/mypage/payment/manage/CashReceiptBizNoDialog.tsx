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

interface CashReceiptBizNoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CashReceiptBizNoDialog({ isOpen, onClose }: CashReceiptBizNoDialogProps) {
  return (
    <Dialog
      title="현금영수증 사업자등록번호"
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
        <FormItem label="사업자등록번호" required>
          <Input type="number" size="large" placeholder="사업자등록번호를 입력해주세요" />
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
                사업자등록번호
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
