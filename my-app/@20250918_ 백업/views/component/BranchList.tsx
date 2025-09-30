import { Collapse, Heading, Link, Text } from '@/shared/ui';
import styles from './BranchList.module.scss';

interface BranchListProps {
  className?: string;
}

export const BranchList = ({ className }: BranchListProps) => {
  // ✅ 지점 리스트
  const branch = [
    {
      title: '더현대서울',
      url: '#',
    },
    {
      title: '압구정 본점',
      url: '#',
    },
    {
      title: '천호점',
      url: '#',
    },
    {
      title: '신촌점',
      url: '#',
    },
    {
      title: '미아점',
      url: '#',
    },
    {
      title: '중동점',
      url: '#',
    },
    {
      title: '판교점',
      url: '#',
    },
    {
      title: '커넥트현대',
      url: '#',
    },
    {
      title: '더현대대구',
      url: '#',
    },
    {
      title: '울산점',
      url: '#',
    },
    {
      title: '울산동구점',
      url: '#',
    },
    {
      title: '무역센터점',
      url: '#',
    },
    {
      title: '목동점',
      url: '#',
    },
    {
      title: '킨텍스점',
      url: '#',
    },
    {
      title: '충청점',
      url: '#',
    },
    {
      title: '디큐브시티',
      url: '#',
    },
  ];

  return (
    <Collapse variant="event" defaultSuffix className={className}>
      <Collapse.Control arrowSize="medium">
        <Heading as="h2" size="5" weight="bold" indent>
          현대백화점 지점 안내
        </Heading>
      </Collapse.Control>
      <Collapse.Content>
        <ul className={styles.branchList}>
          {branch.map((item, index) => (
            <li key={index}>
              <Link href={item.url} type="block" className={styles.branch}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Collapse.Content>
    </Collapse>
  );
};

BranchList.displayName = 'BranchList';
