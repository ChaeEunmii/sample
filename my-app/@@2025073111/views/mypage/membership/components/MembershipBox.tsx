import { Heading, Stack, Text, ButtonArea, Button, Icon } from '@shared/ui';
import styles from './MembershipBox.module.scss';
import clsx from 'clsx';

// type 매핑
const typeMap: Record<
  string,
  { name: string; badge: string; price: string; hpoint: string; buy: string; gift: string }
> = {
  plus: {
    name: '플러스',
    badge: 'PLUS',
    price: '10,000',
    hpoint: '3,000P 적립',
    buy: '무료 반품 혜택',
    gift: '생필품 월배송(생수, 티슈 등)',
  },
  prime: {
    name: '프라임',
    badge: 'PRIME',
    price: '20,000',
    hpoint: '5,000P 적립',
    buy: '무료 반품 혜택',
    gift: '생필품 월배송(생수, 티슈 등)',
  },
};

interface MembershipBoxProps {
  /** 유형 */
  type: 'plus' | 'prime';
  /** 추가 클래스명 */
  className?: string;
  /** '멤버십 시작하기' 클릭 이벤트 핸들러 */
  onClick?: () => void;
}

export const MembershipBox = ({ type = 'plus', onClick, className }: MembershipBoxProps) => {
  // 정의된 Type별 항목가져오기
  const { name, badge, price, hpoint, buy, gift } = typeMap[type];

  // '멤버십 시작하기' 클릭 핸들러
  const handleStartClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={clsx(styles.root, type && styles[type], className)}>
      <span className={styles.badge}>{badge}</span>
      <div className={styles.top}>
        <Heading as="strong" weight="bold" className={styles.name}>
          {name}
        </Heading>
        <div className={styles.priceInfo}>
          <Text size="4" color="gray3">
            멤버십 월정액
          </Text>
          <Text as="strong" className={styles.price}>
            {price}
            <span className={styles.unit}>원</span>
          </Text>
        </div>
      </div>
      <ul className={styles.membershiipLists}>
        <li>
          <Stack type="between">
            <Heading as="strong">
              <Icon name="hpoint" size="large" />
              H.Point
            </Heading>
            <span className={styles.txt}>{hpoint}</span>
          </Stack>
        </li>
        <li>
          <Stack type="between">
            <Heading as="strong">
              <Icon name="package" size="large" />
              제품 구매 시
            </Heading>
            <span className={styles.txt}>{buy}</span>
          </Stack>
        </li>
        <li>
          <Stack type="between">
            <Heading as="strong">
              <Icon name="gift" size="large" />
              기프트 배송
            </Heading>
            <span className={styles.txt}>{gift}</span>
          </Stack>
        </li>
      </ul>
      <ButtonArea className={styles.boxBtns}>
        <Button variant="primary" onClick={handleStartClick}>
          {name} 멤버십 시작하기
        </Button>
      </ButtonArea>
    </div>
  );
};
