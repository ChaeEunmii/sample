// 컴포넌트
import { ChatbotBanner } from '@widgets/banner/ChatbotBanner';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface HF_BN_TX_02Props {
  margin?: DisplayProps['margin'];
  title?: string;
  image?: { src: string; alt?: string };
  links: { label: string; href: string }[];
}

export const HF_BN_TX_02 = ({ margin, title, image, links }: HF_BN_TX_02Props) => {
  return (
    <Display margin={margin}>
      <ChatbotBanner title={title} image={image} links={links} />
    </Display>
  );
};
HF_BN_TX_02.displayName = 'HF_BN_TX_02';
