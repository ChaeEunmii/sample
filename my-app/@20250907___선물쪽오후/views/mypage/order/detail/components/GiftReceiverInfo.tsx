import { Section, ButtonArea, Button, Box } from '@shared/ui';
import clsx from 'clsx';
import styles from './GiftReceiverInfo.module.scss';

/** 
    선물하기 '받으시는 분' 영역
*/

interface GiftReceiverInfoProps {
  title?: string;
  name?: string;
  phone?: string;
  /** 추가적인 클래스 이름 */
  className?: string;
  children?: React.ReactNode;
  /** 보낸 선물함 버튼 클릭 핸들러 */
  onClickGoGiftbox?: () => void;
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 보더 상단처리 여부 */
  borderTop?: boolean;
  /** 보낸 선물함 버튼 숨김 여부 */
  hideGiftBoxBtn?: boolean;
  /** 하단 슬롯 */
  bottomSlot?: React.ReactNode;
}

export const GiftReceiverInfo = ({
  title = '받으시는 분',
  name,
  phone,
  className,
  children,
  onClickGoGiftbox,
  hideCollapse = false,
  borderTop = true,
  hideGiftBoxBtn = false,
  bottomSlot,
}: GiftReceiverInfoProps) => {
  return (
    <Section
      title={title}
      variant={hideCollapse ? 'section' : 'collapse'}
      level="1"
      flush={!hideCollapse}
      borderTop={borderTop}
      defaultOpen
      className={clsx(styles.section, className)}
    >
      <div className={styles.wrap}>
        <div className={styles.top}>
          <Box margin="0">
            <div className={styles.info}>
              <ul className={styles.list}>
                <li className={styles.name}>{name}</li>
                <li>{phone}</li>
              </ul>
            </div>
          </Box>
          {!hideGiftBoxBtn && (
            <ButtonArea className={styles.btns}>
              <Button onClick={onClickGoGiftbox}>보낸 선물함 바로가기</Button>
            </ButtonArea>
          )}
        </div>
        {/* 상품 영역 삽입 */}
        <div className={styles.bottom}>
          {children}
          {/* 하단 슬롯 */}
          {bottomSlot && <div className="ncp-mt-m">{bottomSlot}</div>}
        </div>
      </div>
    </Section>
  );
};
