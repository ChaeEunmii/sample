import clsx from 'clsx';
import { RadioGroup, TextButton, TitleBar } from '@/shared/ui';
import styles from './VehicleInfo.module.scss';

interface VehicleItemProps {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
}

interface VehicleInfoProps {
  data: VehicleItemProps[];
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const VehicleInfo = ({ data, className }: VehicleInfoProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <TitleBar
        title="대상 차량정보"
        level="1"
        side={
          <>
            <TextButton color="gray3" href="#" size="1" variant="underline">
              차량등록 관리
            </TextButton>
          </>
        }
      />
      <RadioGroup
        variant="box"
        name="vehicleInfo"
        defaultValue={data[0]?.id}
        vertical
        options={data.map((radio) => ({
          label: radio.label,
          value: radio.id,
          disabled: radio.disabled,
        }))}
        disabled={data.length === 1}
      />
    </div>
  );
};

VehicleInfo.displayName = 'VehicleInfo';
