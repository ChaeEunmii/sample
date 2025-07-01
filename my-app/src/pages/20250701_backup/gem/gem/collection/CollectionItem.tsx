import { Image, Link, Heading, Text, Icon } from '@shared/ui';
import { Avatar } from '@views/gem/components/index';
import { ProdGem } from '@widgets/product/ProdGem';
import styles from './CollectionItem.module.scss';
import clsx from 'clsx';

export interface CollectionItemProps {
  /** 컬렉션 링크 */
  href?: string;
  /** 컬렉션명 */
  title: string;
  /** 유저 이미지 */
  image?: {
    src: string;
    alt: string;
  };
  /** 유저 프로필/닉네임 */
  name?: string;
  /** 컬렉션 상품 목록 */
  products?: {
    id: string;
    image: {
      src: string;
      alt: string;
    };
    updateAt: string;
  }[];
  /** 컬렉션 브랜드 목록 */
  brands?: {
    id: string;
    image: {
      src: string;
      alt: string;
    };
    updateAt: string;
  }[];
  /** 젬 정보 */
  gem?: {
    isActive: boolean;
    onChange: (isActive: boolean) => void;
  };
  /** 공개/비공개 여부 */
  isLock?: boolean;
}

const CollectionItem = ({
  href = '#',
  title,
  image,
  name,
  products = [],
  brands = [],
  gem,
  isLock,
}: CollectionItemProps) => {
  // products + brands 최신순으로 재배열
  const sortedProdBrand = [...products, ...brands].sort((products, brands) => {
    return new Date(brands.updateAt).getTime() - new Date(products.updateAt).getTime();
  });

  const thumbsView = 4; // 최대 보여질 썸네일 갯수 (디자인상 보여질 갯수)
  const thumbsLength = sortedProdBrand.length; // 컬렉션 썸네일 전체 갯수
  const thumbsOverflow = thumbsLength > thumbsView; // 컬렉션 썸네일 기준초과 여부
  const thumbsShort = thumbsLength < thumbsView; // 컬렉션 썸네일 기준미달 여부

  // 컬렉션 썸네일 기준미달의 경우 빈 공간 li 반복렌더링
  const renderRepeat = () => {
    const repeat = thumbsView - thumbsLength;
    return (
      <>
        {Array.from({ length: repeat }).map((_, i) => (
          <li key={i}></li>
        ))}
      </>
    );
  };

  return (
    <div className={styles.root}>
      <Link href={href} type="block" className={styles.link}>
        <div className={styles.headWrap}>
          <div className={styles.head}>
            <Heading as="strong" className={styles.tit}>
              {title}
              {isLock && (
                <>
                  <Icon name="lock" className={styles.lock} />
                </>
              )}
            </Heading>
            <div className={styles.cont}>
              {(name || image) && (
                <div className={styles.user}>
                  {image && <Avatar size="1" src={image.src} alt={image.alt} />}
                  {name && (
                    <Text as="strong" className={styles.name}>
                      {name}
                    </Text>
                  )}
                </div>
              )}
              <ul className={styles.infos}>
                <li>상품 {products.length}</li>
                <li>브랜드 {brands.length}</li>
              </ul>
            </div>
          </div>
          {gem && (
            <ProdGem isActive={gem.isActive} onChange={gem.onChange} className={styles.gem} />
          )}
        </div>
        {/* 컬렉션 썸네일 목록 */}
        <ul className={styles.collections}>
          {sortedProdBrand.slice(0, thumbsView).map((item, idx) => (
            <li
              key={idx}
              id={item.id}
              className={clsx(thumbsOverflow && idx === thumbsView - 1 && styles.overflow)}
            >
              <Image src={item.image.src} alt={item.image.alt} />
              {/* 컬렉션 썸네일 기준초과일 경우 기준마지막 아이템에 나머지값 넣기 */}
              {thumbsOverflow && idx === thumbsView - 1 && (
                <Text as="span" className={styles.rest}>
                  +{thumbsLength - thumbsView}
                </Text>
              )}
            </li>
          ))}
          {/* 컬렉션 썸네일 기준미달의 경우  남은갯수자리 li 렌더링 */}
          {thumbsShort && <>{renderRepeat()}</>}
        </ul>
      </Link>
    </div>
  );
};

export default CollectionItem;
