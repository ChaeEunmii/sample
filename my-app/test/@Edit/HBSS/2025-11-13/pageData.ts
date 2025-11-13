import common from './pages/common';
import member from './pages/member';
import display from './pages/display';
import shop from './pages/shop';
import order from './pages/order';
import o4o from './pages/o4o';
import community from './pages/community';
import mypage from './pages/mypage';
import event from './pages/event';
import customer from './pages/customer';
import display_backup from './pages/display_backup';
import hbss from './pages/hbss';

export const navTabNames = {
  common: '공통',
  member: '회원/로그인',
  display: '전시모듈',
  shop: '상품/전시',
  order: '장바구니/주문서',
  o4o: 'O4O',
  community: 'ME/GEM',
  mypage: '마이페이지',
  event: '이벤트',
  customer: '고객센터',
  display_backup: '모듈_backup',
  hbss: 'HBSS',
  // partners: '퍼트너스',
} as const;

export const pageData = {
  common,
  member,
  display,
  shop,
  order,
  o4o,
  community,
  mypage,
  event,
  customer,
  display_backup,
  hbss,
} as const;
