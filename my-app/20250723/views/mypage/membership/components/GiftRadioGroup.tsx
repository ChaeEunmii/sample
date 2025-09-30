import { RadioGroup, Image } from '@shared/ui';
import clsx from 'clsx';
import styles from './GiftRadioGroup.module.scss';

interface GiftOption {
  value: string;
  image: {
    src: string;
    alt?: string;
  };
  label: string;
}

interface GiftRadioGroupProps {
  className?: string;
  options: GiftOption[];
  value?: string; // 현재 선택된 값
  onChange?: (value: string) => void; // 선택 변경 시 선택 값만 넘김
}

export const GiftRadioGroup = ({ className, options, value, onChange }: GiftRadioGroupProps) => {
  const formattedOptions = options.map(({ value, image, label }) => ({
    value,
    label: (
      <div className={styles.thumbLabel}>
        <Image src={image.src} alt={image.alt} className={styles.image} />
        {label}
      </div>
    ),
  }));

  // RadioGroup의 onChange 이벤트를 받아서 부모에게 값만 전달
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <RadioGroup
      className={clsx(styles.root, styles.imgRadio, className)}
      name="gift-select"
      options={formattedOptions}
      vertical
      value={value}
      onChange={handleChange}
    />
  );
};
