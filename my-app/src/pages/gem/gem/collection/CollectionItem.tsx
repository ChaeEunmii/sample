import { ProdGem } from '@widgets/product/ProdGem';
import styles from './CollectionItem.module.scss';
import clsx from 'clsx';

export interface CollectionItemProps {
  title: string;
  // 유저 이미지
  image?: {
    src: string;
    alt: string;
  };
  name?: string;
  product: number;
  brand: number;
  products: {
    id: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
  /** 젬 정보 */
  gem?: {
    isActive: boolean;
    onChange: (isActive: boolean) => void;
  };
}

const CollectionItem = ({
  title,
  image,
  name,
  product,
  brand,
  products,
  gem,
}: CollectionItemProps) => {
  const prodLength = products.length; //상품 이미지 전체 갯수
  const prodOverflow = prodLength > 4; //상품 이미지가 4개보다 큰 경우
  const prodShort = prodLength < 4; //상품 이미지가 4개보다 작은 경우

  // 상품이미지가 4개보다 작을때 빈 공간 li 반복렌더링
  const renderRepeat = () => {
    const repeat = 4 - prodLength;
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
      <div className={styles.headWrap}>
        <div className={styles.head}>
          <p className={styles.tit}>{title}</p>
          <div className={styles.cont}>
            {(name || image) && (
              <div className={styles.user}>
                {image && <img src={image.src} alt={image.alt} className={styles.userImg} />}
                {name && <p className={styles.name}>{name}</p>}
              </div>
            )}
            <ul className={styles.infos}>
              <li>상품 {product}</li>
              <li>브랜드 {brand}</li>
            </ul>
          </div>
        </div>
        {gem && <ProdGem isActive={gem.isActive} onChange={gem.onChange} className={styles.gem} />}
      </div>
      {/* 상품 목록 */}
      <ul className={styles.products}>
        {products.slice(0, 4).map((item, idx) => (
          <li key={idx} className={clsx(prodOverflow && styles.overflow)}>
            <img src={item.image.src} alt={item.image.alt} className={styles.prdImg} />
            {prodOverflow && <span className={styles.rest}>+{products.length - 4}</span>}
          </li>
        ))}
        {/* 상품이미지가 4개보다 작을때 남은갯수자리 li 렌더링 */}
        {prodShort && <>{renderRepeat()}</>}
      </ul>
    </div>
  );
};

export default CollectionItem;
