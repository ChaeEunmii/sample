import { Dialog, Text, Image, ButtonArea, Button } from '@shared/ui';
import styles from './ChanelBuy.module.scss';

interface ChanelBuyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  /** 풀팝업 여부 */
  isMaximize?: boolean;
}

export default function ChanelBuyDialog({ isOpen, onClose, isMaximize }: ChanelBuyDialogProps) {
  return (
    <Dialog
      title=""
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize={isMaximize}
      className={styles.chanel} // 레이어 팝업 내부에 사용되어 예외적으로 버튼 하단여백 없이 사용(설계)
    >
      <Image src="/images/banner_chanel.png" alt="your chanel code" />
      <div className={styles.info}>
        <Text size="4" align="center" reading>
          샤넬 화장품을 구매해 주셔서 감사합니다.
          <br />
          유니크한 크리에이션, 다양한 경험의 기회, 그리고 특별한 이벤트를 만나 보실 수 있는 샤넬의
          세계로 당신을 초대합니다.
        </Text>
        <Text size="4" align="center" reading>
          샤넬의 화장품 멤버십, CHANEL CODE 가입해 주시면 샤넬 화장품의 온&오프라인 통합 멤버십이
          적용되며, 신제품 소식, 샘플링 혜택, 행사 초대등 멤버십 전용 혜택이 제공됩니다.
        </Text>
        <Text size="3" color="gray3" align="center">
          샤넬 멤버십 가입을 위해 필요한 정보를
          <br />
          아래와 같이 샤넬코리아에 제공합니다.
        </Text>
      </div>
      <table className={styles.table}>
        <colgroup>
          <col width="100px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">제공 받는 자</th>
            <td>샤넬코리아 유한회사</td>
          </tr>
          <tr>
            <th scope="row">항목</th>
            <td>
              성명, 핸드폰번호, 생년월일, 성별, 주소, 이메일 주소, 샤넬 제품 아이템명 및 구매일시,
              그 외 구매 관련 정보
            </td>
          </tr>
          <tr>
            <th scope="row">목적</th>
            <td>샤넬 멤버십 가입 및 운영</td>
          </tr>
          <tr>
            <th scope="row">보유기간</th>
            <td>
              샤넬 멤버십 가입하는 경우 멤버십 탈퇴시까지(가입하지 않는 경우에는 샤넬 멤버십
              페이지에서 나가는 시점까지)
            </td>
          </tr>
        </tbody>
      </table>
      <Text size="3" color="gray3" align="center" className="ncp-mt-s">
        위 개인정보를 제공하는데 거부할 권리가 있습니다.
        <br />
        단, 동의 거부시 샤넬 멤버십 가입에 제한 받으실 수 있습니다.
        <br />
        동의시 샤넬 사이트로 이동합니다.
      </Text>
      <ButtonArea margin="1" className={styles.btns}>
        <Button variant="primary">개인정보 제공 동의</Button>
      </ButtonArea>
    </Dialog>
  );
}
