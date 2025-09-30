import { Section, Box, TextButton, TextList, InfoList, InfoItem } from '@shared/ui';
import clsx from 'clsx';
import styles from './CounselingInfo.module.scss';

/** 상담 정보 타입 */
export interface CounselingInfoData {
  /** 휴대폰 번호 */
  phone: string;
  /** 상담 요청사항 */
  message: string;
}

interface CounselingInfoProps {
  /** 주문자 정보 데이터 */
  data: CounselingInfoData;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** 상담 요청사항 변경 버튼 클릭 시 실행되는 콜백 */
  onChangeRequest?: () => void;
}

/** '상담 정보' 영역 컴포넌트 */
export const CounselingInfo = ({ data, className, onChangeRequest }: CounselingInfoProps) => {
  return (
    <Section
      title="상담 정보"
      variant="collapse"
      level="1"
      flush
      borderTop
      defaultOpen
      className={clsx(styles.section, className)}
    >
      <Box size="3" margin="0" className={styles.box}>
        <InfoList gap="row16">
          <InfoItem
            title={<span className={styles.tit}>상담받을 연락처</span>}
            content={data.phone}
          />
          <InfoItem
            title={
              <span className={styles.tit}>
                상담 요청사항
                <TextButton
                  variant="underline"
                  size="1"
                  color="gray3"
                  onClick={onChangeRequest}
                  className={styles.btn}
                >
                  변경
                </TextButton>
              </span>
            }
            content={data.message}
          />
        </InfoList>
      </Box>
      <TextList
        data={[
          '주문하신 회원 정보로 상담 전화의 연락이 가게 됩니다.',
          '자세한 상품 설명을 위해 담당자가 등록해 주신 전화드릴 예정입니다. ',
          '모르는 전화로 연락이 오더라도 꼭 받아주세요.',
          '결제금액은 상담후 결정됩니다.',
        ]}
        className="ncp-mt-m"
        variant="info"
      />
    </Section>
  );
};
