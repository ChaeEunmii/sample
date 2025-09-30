'use client';

import clsx from 'clsx';
import { Heading, Drawer, Button, Text, FormArea, FormItem, Input, TextList } from '@shared/ui';
import { useToast } from '@/shared/contexts/ToastContext';

interface AddCouponDrawerProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const AddCouponDrawer = ({ isOpen = false, onClose, className }: AddCouponDrawerProps) => {
  const { showToast } = useToast();

  return (
    <Drawer
      title="쿠폰 등록하기"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button size="large">취소</Button>
          <Button variant="primary" size="large" onClick={() => showToast('쿠폰을 등록했어요.')}>
            등록
          </Button>
        </>
      }
      className={clsx(className)}
    >
      <FormArea type="vertical">
        <FormItem label="쿠폰/H.Point 등록" error="쿠폰번호를 입력해주세요.">
          {/* 에러인 경우 invalid 속성 추가 */}
          <Input invalid maxLength={17} placeholder="영문, 숫자 포함 17자리 입력" />
        </FormItem>
      </FormArea>

      <Heading weight="medium" indent className="ncp-mt-m">
        사용방법
      </Heading>
      <Text color="gray2" indent>
        일련번호 입력 후 등록 버튼을 눌러주세요.
        <br />
        (영문 대/소문자 구분없이 입력 가능)
      </Text>

      <Heading weight="medium" indent className="ncp-mt-m">
        유효기간
      </Heading>
      <Text color="gray2" indent>
        유효기간 초과 시 해당 쿠폰/더머니는 소멸 처리되므로 반드시 기간 내 사용 바랍니다.
      </Text>

      <Heading weight="medium" indent className="ncp-mt-m">
        유의사항
      </Heading>
      <TextList
        data={[
          '1개 쿠폰당 1회 사용 가능합니다.',
          '유효기간 만료 혹은 참여 횟수를 초과한 쿠폰 번호는 등록할 수 없습니다.',
          '쿠폰번호 분실 및 도용으로 발생하는 문제는 당사에서 책임지지 않습니다.',
          '쿠폰번호 사용 시 중복 참여 방지를 위해 본인 확인을 요청할 수 있습니다.',
          <span>
            쿠폰 사용 및 쿠폰/더머니 적립 관련 문의사항은 더현대닷컴 고객센터 (
            <a href="tel:1800-2233">1800-2233</a>/9:00~21:00)로 연락 바랍니다.
          </span>,
        ]}
        variant="level2"
      />
    </Drawer>
  );
};

AddCouponDrawer.displayName = 'AddCouponDrawer';
