import {
  ButtonArea,
  Button,
  TitleArea,
  Text,
  TitleBar,
  InfoList,
  InfoItem,
  TextButton,
} from '@shared/ui';
import { Contents } from '@widgets/layout/Container';
import { Benefits } from '@views/mypage/membership/components/Benefits';
import styles from './ChangeApply.module.scss';

export default function ChangePlus() {
  return (
    <>
      <Contents className={styles.layout}>
        <TitleArea
          topSlot={
            <Text as="strong" size="5" weight="semibold">
              멤버십 이용한 지 N일 째
            </Text>
          }
          title={
            <>
              총 <em className="ncp-color-point">23,000원</em> 혜택에
              <br />
              무료반품 <em className="ncp-color-point">1회</em> 받으셨어요!
            </>
          }
        />
        <Benefits />
        <TitleBar
          type="docs"
          title="지금 변경하면 그동안 이용하던 프라임을 혜택을 받으실 수 없어요."
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
