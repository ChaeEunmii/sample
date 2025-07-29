import { Fragment } from 'react';
import clsx from 'clsx';
import styles from './Image.module.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  figure?: boolean;
  figurecaption?: string;
  className?: string;
}

export const Image = ({
  src,
  alt,
  figure = false,
  figurecaption,
  className,
  ...props
}: ImageProps) => {
  const Tag = figure ? 'figure' : 'div';
  const figureProps = figure ? { className: clsx(styles.figure, className) } : {};

  return (
    <Tag className={clsx(styles.root, className)} {...figureProps}>
      <img src={src} alt={alt} className={styles.image} {...props} />
      {figure && figurecaption && (
        <figcaption className={styles.figcaption}>{figurecaption}</figcaption>
      )}
    </Tag>
  );
};

Image.displayName = 'Image';
