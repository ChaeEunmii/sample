'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  Text,
  ButtonArea,
  Button,
  Icon,
  Heading,
  Tooltip,
  Stack,
  TitleBar,
  Box,
  InfoList,
  InfoItem,
  Line,
  Link,
  Accordion,
  TextList,
  Collapse,
} from '@shared/ui';
import styles from './MemberShipManage.module.scss';

// 탭
export const tabItems = [{ label: '플러스' }, { label: '프라임' }];

export default function MemberShipManage() {
  // 화면상태
  const searchParams = useSearchParams();
  const isCase2 = searchParams.has('case2');
  // 해지 예약시 상태
  const isCancelReserved = isCase2; //case2 : 해지 예약시 상태

  // FAQ 내용
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
  // 확인해주세요 내용
  const InfoListData = [
    {
      label: '이용 기간 안내',
      data: [
        'NCP 유료 멤버십에 신규 가입하면 가입 즉시 혜택이 지급됩니다.',
        '정기결제의 경우, 결제일 다음 날에 혜택이 지급됩니다.',
      ],
    },
    {
      label: '유료 멤버십 혜택 안내',
      data: [
        '이용 기간 중에는 혜택 변경이 불가능하며, 다음 결제일부터 적용될 변경만 예약할 수 있습니다.',
        '플러스/프라임 멤버십 모두 전용가 혜택을 이용하실 수 있습니다.',
        '반품 신청 시, 유료 멤버십 회원에 한해 무료 반품 서비스가 제공됩니다.',
        '정기배송 상품은 월 1회 발송되며, 배송 전 배송 주차를 선택하거나 변경할 수 있습니다.',
        '유료 멤버십 전용 쿠폰은 일부 상품에 적용되지 않을 수 있습니다.',
      ],
    },
    {
      label: '정기결제 실패 유의사항',
      data: [
        '결제가 실패할 경우, 등록된 결제수단의 우선순위에 따라 당일 최대 3회까지 자동 재시도 됩니다.',
        '모든 재시도가 실패할 경우, 멤버십은 자동으로 해제 상태로 전환됩니다.',
        '반품 신청 시, 유료 멤버십 회원에 한해 무료 반품 서비스가 제공됩니다.',
        '정기결제 수단은 마이페이지 > 정기결제 수단 메뉴에서 변경할 수 있습니다',
      ],
    },
    {
      label: '멤버십 해지 유의사항',
      data: [
        '가입 후에는 즉시 해지되지 않으며, 해지 예약만 가능합니다.',
        '해지 예약 시, 이용 기간 종료일까지 멤버십 혜택을 계속 이용하실 수 있습니다.',
      ],
    },
  ];
  return (
    <Container showBack title="유료멤버십 관리">
      <Contents className={styles.layout}>
        <TitleArea
          topSlot={
            <>
              <Text as="strong" size="5" weight="semibold">
                현재 이용중
              </Text>
            </>
          }
          title={
            <>
              <Link as="route" href="#">
                HiHi 멤버십 플러스
                <Icon name="arrowRight" size="small" />
              </Link>
            </>
          }
          bottomSlot={
            <Text size="4" color="gray3">
              2025.07.04~2025.08.03
            </Text>
          }
        />
        <Stack>
          <Text size="8" weight="bold">
            이번달 받으신 혜택을 확인해보세요
          </Text>
          <Tooltip placement="bottom" align="end" className={styles.tooltip}>
            YYYY.MM.DD부터 누적 금액 기준으로
            <br />
            환산 가능한 혜택만 계산되었어요.
          </Tooltip>
        </Stack>
        <ul className={styles.benefitsStack}>
          <li>
            <Heading as="strong" className={styles.heading}>
              H.Point 캐시백
            </Heading>
            <div className={styles.cont}>
              <strong className={styles.numb}>10,000</strong>
              <span className={styles.unit}>P</span>
            </div>
          </li>
          <li>
            <Heading as="strong" className={styles.heading}>
              상품 무료 반품
            </Heading>
            <div className={styles.cont}>
              <strong className={styles.numb}>2</strong>
              <span className={styles.unit}>회</span>
            </div>
          </li>
          <li>
            <Heading as="strong" className={styles.heading}>
              월 정기 무료배송 상품
            </Heading>
            <div className={styles.cont}>
              <strong className={styles.txt}>과일꾸러미</strong>
            </div>
          </li>
        </ul>
        {isCancelReserved && (
          <ButtonArea margin="2">
            <Button variant="primary">혜택 계속 이용하기</Button>
          </ButtonArea>
        )}
        {!isCancelReserved && (
          <>
            <TitleBar type="docs" title="다음달 이용예정" level="3" />
            <Box>
              <Heading as="strong" size="3" weight="semibold">
                프라임
              </Heading>
              <InfoList variant="between" className={styles.info}>
                <InfoItem
                  title={<Text color="gray3">이용 기간</Text>}
                  content={
                    <Text size="4" weight="medium">
                      2025.07.04~2025.08.03
                    </Text>
                  }
                />
                <InfoItem
                  title={<Text color="gray3">결제 금액</Text>}
                  content={
                    <Text size="4" weight="medium">
                      20,000원
                    </Text>
                  }
                />
              </InfoList>
            </Box>
          </>
        )}
        <Line variant="bold" margin="3" />
        <ul className={styles.linkList}>
          <li>
            <Link href="#" as="route" type="block">
              <span>이용 내역</span>
              <Icon name="arrowRight" size="small" />
            </Link>
          </li>
          <li>
            <Link href="#" as="route" type="block">
              <span>HiHi 멤버십 안내</span>
              <Icon name="arrowRight" size="small" />
            </Link>
          </li>
          <li>
            <Link href="#" as="route" type="block">
              <span>자주 묻는 질문</span>
              <Icon name="arrowRight" size="small" />
            </Link>
          </li>
        </ul>
        <Accordion variant="faq" data={AccordionData} className={styles.accord} />
        <Line variant="bold" />
        <Collapse variant="section" className={styles.collapse}>
          <Collapse.Control>
            <Heading as="strong" className={styles.tit}>
              확인해주세요
            </Heading>
          </Collapse.Control>
          <Collapse.Content>
            <div className={styles.infos}>
              {InfoListData.map((item, idx) => (
                <div key={idx}>
                  <Heading as="strong" size="3" weight="semibold">
                    {item.label}
                  </Heading>
                  <TextList data={item.data} variant="info" />
                </div>
              ))}
            </div>
          </Collapse.Content>
        </Collapse>
      </Contents>
    </Container>
  );
}
