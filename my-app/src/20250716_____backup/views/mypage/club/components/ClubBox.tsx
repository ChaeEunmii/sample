import {
  TitleBar,
  Image,
  ButtonArea,
  Button,
  Flag,
  Box,
  Heading,
  TextList,
  Collapse,
  Line,
  Stack,
} from '@shared/ui';
import { formatDate } from '@/shared/utils/ui';
import clsx from 'clsx';
import styles from './ClubBox.module.scss';

// 쿠폰 혜택
interface CouponBenefits {
  title: string;
  count: number;
}

export interface ClubBoxData {
  /** 아이콘 사이즈 개별 설정 */
  type: string;
  /** 클럽명 */
  title: string;
  /** 클럽명 한글 */
  titleKor?: string;
  /** 클럽명 상단 서브타이틀 */
  subtitle?: string;
  /** 가입일 */
  signupDate?: string;
  /** 해지일 */
  cancelDate?: string;
  /** 배너 이미지 */
  image: {
    src: string;
    alt?: string;
  };
  /** 쿠폰혜택 */
  couponBenefits?: CouponBenefits[];
  /** 추가적립 */
  extraEarnings?: string[];
  /** 가입된 클럽인지 여부 */
  isMyClub?: boolean;
  /** 재가입불가 상태인지 여부 */
  isRejoinBlocked?: boolean;
}

interface ClubBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 메인탭 앵커를 위한 id 설정 */
  id?: string;
  /** 클럽메인의 클럽 데이터 */
  data: ClubBoxData;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const ClubBox = ({ id, data, className }: ClubBoxProps) => {
  const {
    type,
    title,
    titleKor,
    subtitle,
    image,
    signupDate,
    cancelDate,
    couponBenefits,
    extraEarnings,
    isMyClub,
    isRejoinBlocked,
  } = data;

  // 쿠폰혜택 렌더
  const renderBenefit = (benefit: CouponBenefits, idx: number) => (
    <Stack type="between" key={idx} {...benefit}>
      <span>{benefit.title}</span>
      <em className={styles.bCon}>{benefit.count}장</em>
    </Stack>
  );

  // 타이틀 노드
  const titleNode = `${title} ${titleKor}`;
  // 마이클럽(isMyClub)인 경우 플래그 노출
  const sideNode = isMyClub ? <Flag data={[{ color: 'gray', label: '마이클럽' }]} /> : undefined;
  // 클럽프렌즈 중복가입 여부
  const isOverlapMember = type === 'friends' && isRejoinBlocked;

  return (
    <div id={id} className={clsx(styles.root, className)}>
      <TitleBar type="docs" title={titleNode} side={sideNode} className={styles.title} />
      <div className={styles.visual}>
        <Image
          src={image.src}
          alt={image.alt}
          className={clsx(styles.image, type && styles[type])}
        />
        <div className={styles.keycopy}>
          <Heading className={styles.head}>
            <em>{subtitle}</em>
            <strong>{title}</strong>
          </Heading>
          {signupDate && (
            <strong className={styles.date}>가입일 {formatDate(signupDate, 'dot')}</strong>
          )}
        </div>
      </div>
      {cancelDate && (
        <Box size="3">
          <Heading size="3" weight="semibold">
            확인사항
          </Heading>
          <TextList
            data={[
              `${formatDate(cancelDate, 'dot')} ${titleKor} 해지했어요.`,
              ...(isOverlapMember ? ['클럽이지웰과 중복 가입이 불가능합니다.'] : []), // 클럽프랜즈 가입 후 클럽이지웰을 다시 가입한 경우 클럽프랜즈 노출 UI
              '탈퇴일로부터 30일 동안 재가입이 제한됩니다.',
            ]}
            variant="level2"
          />
        </Box>
      )}
      <ButtonArea margin="1" vertical>
        {isMyClub ? <Button>마이클럽 바로가기</Button> : <Button>혜택 보러가기</Button>}
      </ButtonArea>
      <div className={styles.bottom}>
        <Line color="bg2" />
        <Collapse variant="section">
          <Collapse.Control>
            <Heading as="strong" size="5" weight="bold">
              클럽 혜택
            </Heading>
          </Collapse.Control>
          <Collapse.Content className={styles.colcont}>
            <div className={styles.benefits}>
              {couponBenefits && (
                <Box>
                  <Heading size="3" weight="semibold">
                    쿠폰 혜택
                  </Heading>
                  <TextList
                    data={couponBenefits?.map(renderBenefit) ?? []}
                    variant="level2"
                    liFlex
                  />
                </Box>
              )}
              {extraEarnings && (
                <Box>
                  <Heading size="3" weight="semibold">
                    추가적립
                  </Heading>
                  <TextList data={extraEarnings?.map((item) => item) ?? []} variant="level2" />
                </Box>
              )}
            </div>
          </Collapse.Content>
        </Collapse>
      </div>
    </div>
  );
};
