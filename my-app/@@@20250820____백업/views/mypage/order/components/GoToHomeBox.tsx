import { Link, Box, Image, Icon, Heading } from '@shared/ui';
import clsx from 'clsx';
import styles from './GoToHomeBox.module.scss';

interface GoToHomeBoxProps {
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const GoToHomeBox = ({ className }: GoToHomeBoxProps) => {
  return (
    <Link href="#" as="route" type="block" className={clsx(styles.root, className)}>
      <Box margin="0" className={styles.box}>
        <Heading as="strong" className={styles.tit}>
          이전 더현대닷컴,{' '}
          <Image src="/images/img_tohome.png" alt="to Home" className={styles.img} />의 주문을
          찾으시나요?
        </Heading>
        <Icon name="arrowRight" size="xsmall" />
      </Box>
    </Link>
  );
};
