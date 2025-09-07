import {
  ButtonArea,
  Button,
  TitleArea,
  Box,
  TextList,
  Text,
  TitleBar,
  TextButton,
  InfoList,
  InfoItem,
} from '@shared/ui';
import { Contents } from '@widgets/layout/Container';
import styles from './ChangeApply.module.scss';

export default function ChangePrime() {
  return (
    <>
      <Contents className={styles.layout}>
        <TitleArea
          topSlot={
            <Text as="strong" size="5" weight="semibold">
              프라임 혜택은요
            </Text>
          }
          title={
            <>
              지금까지보다
              <br />더 큰 혜택을 누릴 수 있어요
            </>
          }
          bottomSlot={
            <>
              <Box size="3" className="ncp-w-full ncp-mt-xs">
                <TextList data={['생필품 월배송(생수, 티슈 등)', 'H.Point 3,000P', '무료반품']} />
              </Box>
            </>
          }
        />
        <TitleBar type="docs" title="다음달에 받을 서비스" className={styles.titBar} />
        <InfoList variant="between">
          <InfoItem
            title="프라임 멤버십"
            content={
              <>
                <Text weight="semibold">20,000원 / 월</Text>
                <div className={styles.infoSub}>
                  <TextButton variant="underline" size="1" color="gray3">
                    결제수단 변경
                  </TextButton>
                </div>
              </>
            }
          />
        </InfoList>
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">취소</Button>
        <Button variant="primary" size="large">
          신청하기
        </Button>
      </ButtonArea>
    </>
  );
}
