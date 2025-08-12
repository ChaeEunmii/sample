'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  TitleBar,
  Checkbox,
  TextList,
  Link,
  Text,
  TextButton,
  ButtonArea,
  Button,
  RadioGroup,
  Textarea,
  Box,
  InfoList,
  InfoItem,
} from '@shared/ui';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import styles from './Leave.module.scss';

// 탈퇴이유 옵션
const reasonOptions = [
  { label: '상품의 다양/가격/품질 불만', value: '1' },
  { label: '시스템 에러/속도 불만', value: '2' },
  { label: '상품 선택, 주문 등 사용이 어려움', value: '3' },
  { label: '개인정보 유출 우려', value: '4' },
  { label: '회원특혜/쇼핑혜택 부족', value: '5' },
  { label: '자주 사용하지 않음', value: '6' },
  { label: '주문취소/반품/교환/AS 불만', value: '7' },
  { label: '배송 서비스 불만', value: '8' },
  { label: '기타(직접 입력)', value: '9' },
];

export default function Leave() {
  // 탈퇴이유 선택 상태
  const [leaveReason, setLeaveReason] = useState('');
  const isReasonEtc = leaveReason === '9'; // 기타 (직접입력)의 경우

  return (
    <Container showBack title="회원탈퇴">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              그동안 NCP를 이용해주셔서
              <br />
              감사드립니다.
            </>
          }
          description={
            <>
              이용하시는 동안 불만족스러웠던 점을 알려주시면 서비스 개선에 참고하도록 하겠습니다.
              <br />
              회원탈퇴 시 아래 사항을 유의해 주시기 바랍니다.
            </>
          }
        />
        <TitleBar type="docs" title="회원정보" />
        <Box>
          <InfoList variant="between" gap="row16">
            <InfoItem
              title={<Text color="gray2">유료멤버십</Text>}
              content={<Text>2025.04.04</Text>}
            />
            <InfoItem
              title={<Text color="gray2">주문 수</Text>}
              content={<Text>2025.04.04~2025.05.03</Text>}
            />
            <InfoItem
              title={<Text color="gray2">환불/교환 수</Text>}
              content={<Text>10,000원</Text>}
            />
            <InfoItem
              title={<Text color="gray2">예치금</Text>}
              content={<Text>9,999,999,999원</Text>}
            />
            <InfoItem
              title={<Text color="gray2">파트너스 정산금</Text>}
              content={<Text>9,999,999,999원</Text>}
            />
          </InfoList>
        </Box>
        <Checkbox
          label={
            <Text weight="semibold" color="gray1">
              고객 동의 후 미환불
            </Text>
          }
          className="ncp-mt-s"
        />
        <TextList
          data={[
            '예치금 잔액과 환불금액이 다를 경우 고객센터를 통해 환불신청 후 탈퇴 가능합니다.',
            '진행중인 주문, 교환, 반품이 있을 시 회원탈퇴가 불가능합니다. 해당사항을 완료 후 탈퇴를 하실 수 있습니다.',
            <>
              고객님이 보유 중이신 예치금이 있으실 경우, NCP 고객센터{' '}
              <Link href="tel:18002233" variant="underline" type="inline" className={styles.call}>
                1800-2233
              </Link>
              으로 문의부탁드립니다.
            </>,
          ]}
          className="ncp-mt-s"
          variant="level2"
        />
        <TitleBar type="docs" title="회원탈퇴하는 이유" />
        <RadioGroup
          name="leave-reason"
          options={reasonOptions}
          value={leaveReason}
          onChange={(e) => setLeaveReason(e.target.value)}
          vertical
        />
        {/* 기타(직접 입력) 일 경우 노출 */}
        {isReasonEtc && (
          <Textarea
            placeholder="남겨주신 의견을 참고하여 더 좋은 서비스를 만들겠습니다."
            maxLength={200}
            className="ncp-mt-xs"
          />
        )}
        {/* 확인해주세요 */}
        <ConfirmInfo>
          <TextList
            data={[
              <>
                재 가입하셔도 개인 정보가 복원 되지않습니다.
                <Text color="gray3">
                  NCP에 가지고 계신 더머니, 예치금, 할인쿠폰 등의 혜택이 자동 삭제되며, 재 가입하실
                  경우에도 복원 되지않습니다.
                </Text>
              </>,
              <>
                아이디를 재사용하실 수 없습니다.
                <Text color="gray3">
                  NCP에 가지고 계신 더머니, 예치금, 할인쿠폰 등의 혜택이 자동 삭제되며, 재 가입하실
                  경우에도 복원 되지않습니다.
                </Text>
              </>,
              <>
                탈퇴 후에도 게시판형 서비스에 등록한 게시물은 그대로 남아 있습니다.
                <Text color="gray3">
                  게시판 등에 올린 게시글 및 댓글은 탈퇴시 자동삭제 되지 않고 남아 있습니다. 삭제를
                  원하시는 게시글이 있다면 탈퇴 전에 삭제 하시기 바랍니다. (단, 답글이 달린 글은
                  삭제불가)
                </Text>
              </>,
              <>
                H.Point(통합회원)는 유지됩니다.
                <Text color="gray3">
                  NCP에서 탈퇴되는 것이며, H.Point(통합회원) 탈퇴를 원하실 경우 H.Point 사이트에서
                  탈퇴하셔야 합니다.
                </Text>
              </>,
            ]}
            variant="level2"
          />
          <div className="ncp-text-right ncp-mt-m">
            <TextButton variant="underline" size="1" color="gray3">
              H.Point APP 바로가기
            </TextButton>
          </div>
        </ConfirmInfo>
        <ButtonArea>
          <Button variant="primary" size="large">
            회원 탈퇴하기
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
