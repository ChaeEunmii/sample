import { useState } from 'react';
import { Tabs, Heading, Link, Text, ButtonArea, Button, Drawer } from '@shared/ui';
import styles from './BrandOmni.module.scss';
import clsx from 'clsx';

interface OmniItem {
  shop: string;
  title: string;
  date?: {
    start: string;
    end: string;
  };
  price?: number;
  waiting?: number;
}

// 개별 아이템
const OmniListItem = ({ item, tab }: { item: OmniItem; tab: { id: string; label: string } }) => {
  const getTypeDisplay = () => {
    switch (tab.id) {
      case 'store':
        if (item.price !== undefined) {
          return `${item.price.toLocaleString()}원`;
        }
        return '';
      case 'waiting':
        return '웨이팅';
      default:
        return tab.label;
    }
  };

  const renderInfoCont = () => {
    if (item.price !== undefined) {
      return null;
    }
    if (item.waiting !== undefined) {
      return (
        <>
          <span className="ncp-blind">대기팀</span>
          <Text as="span">{item.waiting}팀 대기</Text>
        </>
      );
    }
    if (item.date) {
      return (
        <>
          <span className="ncp-blind">사용 가능 날짜</span>
          <Text as="span">
            {item.date.start} ~ {item.date.end}
          </Text>
        </>
      );
    }

    return null;
  };

  return (
    <li className={styles.item}>
      <Link href="#" type="flex" className={styles.link}>
        <Heading size="2">{item.shop}</Heading>
        <Text as="strong" weight="regular" className={styles.title}>
          {item.title}
        </Text>
        <div className={styles.info}>
          <Text as="span" weight="medium">
            {getTypeDisplay()}
          </Text>
          {renderInfoCont()}
        </div>
      </Link>
    </li>
  );
};

// 옴니 리스트
interface OmniListProps extends BrandOmniProps {
  showMore?: boolean;
  isInDrawer?: boolean;
  onShowMore?: () => void;
  onTabChange?: (index: number) => void;
}

const OmniList = ({
  tabs,
  data,
  defaultActive = 0,
  showMore = false,
  isInDrawer = false,
  withBg = false,
  onShowMore,
  onTabChange,
}: OmniListProps) => {
  const [activeTab, setActiveTab] = useState(defaultActive);

  const currentTab = tabs[activeTab] || { id: '', label: '' };
  const currentData = data[currentTab.id] || [];
  const displayData = showMore && !isInDrawer ? currentData.slice(0, 3) : currentData;
  const hasMore = showMore && currentData.length > 3;

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    onTabChange?.(index);
  };

  return (
    <>
      <Tabs
        data={tabs}
        variant="buttons"
        withBg={!isInDrawer ? withBg : false}
        defaultActive={defaultActive}
        onTabChange={handleTabChange}
        className={clsx(isInDrawer && styles.tabs)}
      />
      <ul>
        {displayData.map((item, index) => (
          <OmniListItem key={index} item={item} tab={currentTab} />
        ))}
      </ul>
      {hasMore && !isInDrawer && (
        <ButtonArea margin="1" align="center">
          <Button size="small" variant="tertiary" round onClick={onShowMore}>
            더보기
          </Button>
        </ButtonArea>
      )}
    </>
  );
};

// BrandOmni Component
interface BrandOmniProps {
  tabs: {
    id: string;
    label: string;
  }[];
  data: {
    [tabId: string]: OmniItem[];
  };
  defaultActive?: number;
  withBg?: boolean;
}

export const BrandOmni = ({ tabs, data, defaultActive = 0, withBg = false }: BrandOmniProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPageTab, setCurrentPageTab] = useState(defaultActive);

  return (
    <>
      <div className={clsx(styles.root, withBg && styles.withBg)}>
        <OmniList
          tabs={tabs}
          data={data}
          defaultActive={defaultActive}
          showMore={true}
          withBg={withBg}
          onShowMore={() => setIsDrawerOpen(true)}
          onTabChange={setCurrentPageTab}
        />
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="옴니서비스">
        <OmniList tabs={tabs} data={data} defaultActive={currentPageTab} isInDrawer />
      </Drawer>
    </>
  );
};
