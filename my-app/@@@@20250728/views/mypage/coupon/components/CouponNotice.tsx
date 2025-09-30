import { Collapse, Heading, TextList } from '@/shared/ui';

export const CouponNotice = () => {
  return (
    <Collapse variant="section" defaultOpen marginTop="1">
      <Collapse.Control border>
        <Heading size="5" indent>
          확인해주세요
        </Heading>
      </Collapse.Control>
      <Collapse.Content>
        <TextList
          data={[
            '일부 브랜드 및 상품(도서/음반, 서비스/상품권 등)은 쿠폰 적용 대상에서 제외됩니다.',
            '스페셜데이/생일 쿠폰은 생일 기준 7일 전부터 7일 후까지 다운로드할 수 있으며, 유효 기간은 발급일로부터 14일입니다.',
            '스페셜데이는 [마이페이지 > 나의정보 > 회원정보 변경]에서 최대 2개까지 등록할 수 있으며, 쿠폰은 연 최대 2회 다운로드 가능합니다.',
            '현대백화점에서 사용 가능한 쿠폰을 함께 확인할 수 있습니다. 연동에는 최대 10분 정도 소요될 수 있습니다.',
          ]}
          variant="info"
        />
      </Collapse.Content>
    </Collapse>
  );
};

CouponNotice.displayName = 'CouponNotice';
