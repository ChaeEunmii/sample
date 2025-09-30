import { Bubble, Link, Image, Icon } from '@/shared/ui';
import styles from './ChatbotBanner.module.scss';

export interface ChatbotBannerProps {
  title?: string;
  image?: { src: string; alt?: string };
  links: { label: string; href: string }[];
}
export const ChatbotBanner = ({ title, image, links }: ChatbotBannerProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.chat}>
        {title ? (
          <>
            {image && <Image {...image} className={styles.image} />}
            <Bubble>{title}</Bubble>
          </>
        ) : (
          <>
            <Image src="/images/img_chatbot_bubble.png" className={styles.chatbot} />
            <Bubble bgColor="#8B35CF">궁금한 건 젤뽀에게 물어보세요!</Bubble>
          </>
        )}
      </div>
      <div className={styles.links}>
        {links.map(({ label, href }, idx) => (
          <Link key={idx} href={href} className={styles.link}>
            <span className={styles.text}>{label}</span>
            <Icon name="arrowRight" size="small" />
          </Link>
        ))}
      </div>
    </div>
  );
};
