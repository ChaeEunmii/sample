'use client';

import {
  ButtonArea,
  Button,
  TitleArea,
  Text,
  TitleBar,
  Accordion,
  TextList,
  InfoList,
  InfoItem,
  TextButton,
} from '@shared/ui';
import { Contents } from '@widgets/layout/Container';
import { Benefits } from '@views/mypage/membership/components/Benefits';
import styles from './ChangeApply.module.scss';

export default function ChangePlus() {
  const AccordionData = [
    {
      label: '적립금은 언제 지급 되나요?',
      content: (
        <TextList
          data={[
            '멤버십 실적 적립금: 멤버십 월 별 이용기간 종료일 D-2 지급(월 별 결제 금액에 따라 적립률 상이함)',
            '상품평: 후기 작성 이후 D+7 이내 지급',
            '이벤트: 이벤트 참여 후 별도 고지된 일정에 지급',
            '웰컴/감사 적립금: 경우에 따라 고객 혜택으로 별도 지급',
            '멤버십 실적 적립금은 구매 후 배송 완료된 상품에 한하여 지급합니다.',
            '후기는 동일상품(선택 옵션 기준) 후기에 대해서 월 1회만 지급합니다.',
            '적립금을 지급일로부터 6개월 이내 사용 가능합니다.',
            '적립금 사용 시, 유효기간이 종료일에 가까운 순서대로 먼저 사용됩니다.',
          ]}
        />
      ),
    },
    {
      label: '유료멤버십 가입은 어떻게 해야 하나요?',
      content: (
        <TextList
          data={[
            '어드민 FAQ 등록 화면에서 HiHi 멤버십 화면에 노출할 항목 설정 기능 필요 (개발 협의 필요)',
            '노출기준 : BO에서 노출 및 노출 순서지정한 FAQ 내용이 보여짐 (최대 5개까지) ',
          ]}
        />
      ),
    },
  ];

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
        <br />
        <br />
        <br />
        <p>이것은 테스트</p>
        <Accordion variant="faq" data={AccordionData} />
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
