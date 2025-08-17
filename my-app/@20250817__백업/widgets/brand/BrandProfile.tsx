import { useState } from 'react';
import {
  Image,
  ReadMore,
  TextButton,
  Heading,
  Text,
  Gem,
  Drawer,
  Icon,
  Link,
  Video,
} from '@shared/ui';
import { BrandBadge } from './BrandBadge';
import { BrandLink, BrandLinkProps } from './BrandLink';
import { Share } from '../etc/Share';
import styles from './BrandProfile.module.scss';
import clsx from 'clsx';

interface ChatItem {
  id: string;
  label: string;
  href: string;
}

interface ShopItem {
  name: string;
  address: string;
}

export interface BrandProfileProps {
  image?: { src: string; alt?: string; poster?: string };
  imageType?: '1' | '2';
  name: string;
  subName?: string;
  storeName?: string;
  desc?: string;
  readMore?: boolean;
  brandType?: 'official';
  brand?: Omit<BrandLinkProps, 'className'>;
  chats?: ChatItem[];
  shops?: ShopItem[];
  shareUrl?: string;
  gem?: {
    count: number;
    onToggle: (isActive: boolean, newCount: number) => void;
  };
  onChatClick?: (chatId: string) => void;
}

export const BrandProfile = ({
  image,
  imageType = '1',
  name,
  subName,
  storeName,
  desc,
  readMore = false,
  brandType,
  brand,
  chats = [],
  shops = [],
  shareUrl,
  gem,
  onChatClick,
}: BrandProfileProps) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const hasChat = chats.length > 0;
  const hasShop = shops.length > 0;
  const hasShare = Boolean(shareUrl);

  // 동영상 확장자 체크
  const isVideoFile = (src: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv', '.flv', '.mkv'];
    return videoExtensions.some((ext) => src.toLowerCase().includes(ext));
  };

  return (
    <>
      <div className={clsx(styles.root)}>
        {image && isVideoFile(image!.src) ? (
          <Video
            src={image.src}
            label={image.alt}
            poster={image.poster}
            autoPlay
            loop
            className={clsx(styles.image, styles[`type${imageType}`])}
          />
        ) : (
          <Image
            src={image?.src ?? '/images/logo_thehyundai.svg'}
            alt={image?.alt || '브랜드 대표 이미지'}
            className={clsx(styles.image, styles[`type${imageType}`], !image && styles.defaultImg)}
          />
        )}

        <div className={styles.title}>
          <div className={styles.brand}>
            {subName && (
              <Text as="span" size="4" weight="semibold" className={styles.subName}>
                {subName}
              </Text>
            )}
            <Heading as="strong" size="8" weight="bold" className={styles.name}>
              {name}
              {brandType && <BrandBadge brandType="official" />}
            </Heading>
            {storeName && (
              <Text size="4" color="gray3" weight="medium" className="ncp-mt-x1">
                {storeName}
              </Text>
            )}
          </div>
          {gem && <Gem initialGems={gem.count} onToggle={gem.onToggle} />}
        </div>

        <div className={styles.detail}>
          {desc &&
            (readMore ? (
              <ReadMore lines={2} type="below" textProps={{ size: '5' }}>
                {desc}
              </ReadMore>
            ) : (
              <Text>{desc}</Text>
            ))}

          <div className={styles.buttons}>
            {hasChat && (
              <TextButton
                prefixIcon="chat"
                iconSize="large"
                size="inherit"
                onClick={() => setIsChatOpen(true)}
              >
                1:1 채팅
              </TextButton>
            )}
            {hasShop && (
              <TextButton
                prefixIcon="gps"
                iconSize="large"
                size="inherit"
                onClick={() => setIsShopOpen(true)}
              >
                매장안내
              </TextButton>
            )}
            {hasShare && (
              <TextButton
                prefixIcon="share"
                iconSize="large"
                size="inherit"
                onClick={() => setIsShareOpen(true)}
              >
                공유하기
              </TextButton>
            )}
          </div>
        </div>

        {brand && <BrandLink {...brand} />}
      </div>

      {hasChat && (
        <Drawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} title="1:1 채팅">
          {chats.map((chat, idx) => (
            <Link
              key={chat.id || idx}
              href={chat.href}
              onClick={() => onChatClick?.(chat.id)}
              type="flex"
              className={styles.chatLink}
            >
              <Text as="strong" size="6" weight="medium">
                {chat.label}
              </Text>
              <Icon name="chat" />
            </Link>
          ))}
        </Drawer>
      )}

      {hasShop && (
        <Drawer isOpen={isShopOpen} onClose={() => setIsShopOpen(false)} title="매장 안내">
          <ul className={styles.shops}>
            {shops.map((shop, idx) => (
              <li key={idx} className={styles.shop}>
                <Text as="strong" size="6" weight="medium">
                  {shop.name}
                </Text>
                <Text color="gray3">{shop.address}</Text>
              </li>
            ))}
          </ul>
        </Drawer>
      )}

      {hasShare && (
        <Share isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} url={shareUrl!} />
      )}
    </>
  );
};
