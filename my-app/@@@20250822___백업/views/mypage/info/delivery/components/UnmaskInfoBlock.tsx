'use client';
import { Text, TextButton } from '@/shared/ui';
import styles from './UnmaskInfoBlock.module.scss';

/** 마스크해제 안내+버튼 영역 컴퍼넌트(국내/해외 공유)*/

interface UnmaskInfoBlockProps {
  /** 타이틀 텍스트 */
  title?: string;
  /** 해외배송지 여부 */
  isGlobal?: boolean;
  /** 마스크해제 버튼 이벤트 */
  onUnmaskClick?: () => void;
}
export const UnmaskInfoBlock = ({
  title = '본인인증 후 가려진 정보를 확인하세요.',
  isGlobal,
  onUnmaskClick,
}: UnmaskInfoBlockProps) => {
  // 마스크해제 클릭 핸들러
  const handleUnmask = () => {
    onUnmaskClick?.();
  };

  // 문구 세팅 (국내/해외)
  const titleSet = !isGlobal ? title : 'Check the hidden information after self-identification.';
  const btnTextSet = !isGlobal ? '마스킹 해제' : 'Unmasking';

  return (
    <div className={styles.wrap}>
      {title && (
        <Text size="4" indent>
          {titleSet}
        </Text>
      )}
      <TextButton variant="underline" size="1" color="gray3" onClick={handleUnmask}>
        {btnTextSet}
      </TextButton>
    </div>
  );
};
