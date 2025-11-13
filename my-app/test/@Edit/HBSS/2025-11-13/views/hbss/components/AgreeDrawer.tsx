import { Drawer, Button, Box, TextList, Heading, InfoList, InfoItem, Text } from '@shared/ui';

interface AgreeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AgreeDrawer({ isOpen, onClose }: AgreeDrawerProps) {
  return (
    <Drawer
      title="마케팅 활용을 위한 개인정보 수집·이용 동의 "
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button size="large" onClick={onClose}>
            미동의
          </Button>
          <Button variant="primary" size="large" onClick={onClose}>
            동의
          </Button>
        </>
      }
    >
      <Box size="3">
        <InfoList gap="row12">
          <InfoItem
            title={
              <Heading weight="medium" reading>
                수집항목
              </Heading>
            }
            content={
              <Text color="gray2" reading>
                휴대폰번호, 채널 사용내역(이용채널명, 점포명, 이용 일시)
              </Text>
            }
          />
          <InfoItem
            title={
              <Heading weight="medium" reading>
                수집목적
              </Heading>
            }
            content={
              <Text color="gray2" reading>
                휴대폰번호, 채널 사용내역(이용채널명, 점포명, 이용 일시)
              </Text>
            }
          />
          <InfoItem
            title={
              <Heading weight="medium" reading>
                보유기간
              </Heading>
            }
            content={
              <Text color="gray2" reading>
                2년 후 자동 폐기 또는 동의 철회 시까지
              </Text>
            }
          />
        </InfoList>
      </Box>
      <TextList
        variant="info"
        data={[
          '위의 개인정보 수집 · 이용을 거부하시더라도 배송 주문 신청은 가능합니다.',
          '문자발송은 KT와 현대퓨처넷에 위탁하여 진행됩니다.',
        ]}
        margin="2"
      />
      <Heading size="5" color="black" weight="semibold" indent className="ncp-mt-m">
        위의 목적을 위해 정보를 제공하는데 동의하시나요?
      </Heading>
    </Drawer>
  );
}
