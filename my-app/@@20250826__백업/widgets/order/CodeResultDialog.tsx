import { Button, Dialog, Heading, FormArea, FormItem, Input, TextButton } from '@shared/ui';
import clsx from 'clsx';
import styles from './CodeResultDialog.module.scss';

interface CodeResultDialogProps {
  /** 개인통관고유부호 데이터 */
  data: string;
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const CodeResultDialog = ({
  data,
  isOpen = false,
  onClose,
  className,
}: CodeResultDialogProps) => {
  return (
    <Dialog
      title="개인통관고유부호 조회 결과"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <Button variant="primary" size="large" onClick={onClose}>
          입력하기
        </Button>
      }
      className={clsx(styles.codeResult, className)}
      maximize
      showClose
    >
      <div className={styles.content}>
        <div className={styles.box}>
          <Heading as="h3" size="6" weight="bold">
            조회정보
          </Heading>

          <FormArea type="vertical" className={styles.formInfo}>
            <FormItem label="이름">
              <Input size="large" value="김*대" readOnly />
            </FormItem>
            <FormItem label="연락처">
              <Input size="large" value="010-****-5678" readOnly />
            </FormItem>
          </FormArea>
        </div>
        <div className={styles.box}>
          <Heading as="h3" size="6" weight="bold">
            조회결과
          </Heading>
          <FormArea type="vertical">
            <FormItem
              error={
                !data && (
                  <>
                    일치하는 정보가 없거나, 미발급 상태입니다.
                    <br />
                    관세청을 통해 확인하여 주세요.
                  </>
                )
              }
            >
              <Input
                title="조회결과"
                size="large"
                value={data ? data : '조회 실패'}
                readOnly
                className={clsx(styles.resultInput, !data && styles.searchFail)}
              />
            </FormItem>
          </FormArea>
          {!data && (
            <TextButton
              color="gray1"
              href="https://unipass.customs.go.kr/csp/persIndex.do"
              size="2"
              suffixIcon="arrowRight"
              target="_blank"
              variant="bold"
              className={styles.confirmButton}
            >
              관세청에서 발급/확인하기
            </TextButton>
          )}
        </div>
      </div>
    </Dialog>
  );
};

CodeResultDialog.displayName = 'CodeResultDialog';
