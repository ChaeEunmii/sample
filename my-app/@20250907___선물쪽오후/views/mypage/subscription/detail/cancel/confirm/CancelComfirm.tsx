'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, TitleBar, RadioGroup, Textarea, ButtonArea, Button } from '@shared/ui';
import styles from './CancelComfirm.module.scss';

// 탈퇴이유 옵션
const reasonOptions = [
  { label: '더 이상 서비스를 이용하지 않게 되어서요.', value: '1' },
  { label: '가격이나 할인율이 매력적이지 않아서요.', value: '2' },
  { label: '배송이 원활하지 않아서요.', value: '3' },
  { label: '상품의 품질이 만족스럽지 않아서요.', value: '4' },
  { label: '정기구독의 혜택이 부족해서요.', value: '5' },
  { label: '타사의 정기구독을 이용하려고요', value: '6' },
  { label: '기타(직접 입력)', value: 'etc' },
];

export default function CancelComfirm() {
  // 해지 사유 선택 상태
  const [leaveReason, setLeaveReason] = useState('1');
  const isReasonEtc = leaveReason === 'etc'; // 기타 (직접입력)의 경우

  return (
    <Container showBack title="정기구독 해지 확인">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              어떤 점 때문에 해지를
              <br />
              하시려는지 알려주세요
            </>
          }
        />
        <TitleBar type="docs" title="해지 사유 선택" />
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
            placeholder="상세 내용을 입력해 주세요."
            maxLength={500}
            className="ncp-mt-xs"
          />
        )}
        <ButtonArea>
          <Button size="large">계속 이용하기</Button>
          <Button variant="primary" size="large">
            사유를 전하고 해지
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
