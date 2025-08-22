import { Fragment } from 'react';
import clsx from 'clsx';
import styles from './Image.module.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  figure?: boolean;
  figurecaption?: string;
  className?: string;
  as?: 'div' | 'span';
}

export const Image = ({
  src,
  alt,
  figure = false,
  figurecaption,
  className,
  as = 'div',
  ...props
}: ImageProps) => {
  const Tag = figure ? 'figure' : as;
  const figureProps = figure ? { className: clsx(styles.figure, className) } : {};

  return (
    <Tag className={clsx(styles.root, className)} {...figureProps} {...props}>
      <img src={src} alt={alt} className={styles.image} />
      {figure && figurecaption && (
        <figcaption className={styles.figcaption}>{figurecaption}</figcaption>
      )}
    </Tag>
  );
};

Image.displayName = 'Image';
