import { Button, Dialog, FormArea, FormItem, Input, Switch, Text, TextList } from '@shared/ui';
import { ProdCard } from '@/widgets/product';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import styles from './DetailCTA.module.scss';

interface AlramDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'restock' | 'onsale';
  option?: string;
}

export default function AlramDialog({ isOpen, onClose, type, option }: AlramDialogProps) {
  const { item } = useProdDetail();

  const handleAlram = () => {
    console.log('알림신청');
    onClose();
  };

  // Dialog 타이틀, 설명글
  const getDialogTitle = () => {
    switch (type) {
      case 'onsale':
        return {
          title: '공개 알림 신청',
          desc: '상품 판매가 개시 되면, 앱푸시 또는 알림 톡으로 안내 드립니다.',
        };
      case 'restock':
        return {
          title: '재입고 알림',
          desc: '상품이 재입고 되면, 요청하신 휴대폰으로 SMS(카카오톡)을 통해 알려드립니다.',
        };

      default:
        return { title: '', desc: '' };
    }
  };
  const { title, desc } = getDialogTitle();

  return (
    <Dialog
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <>
          <Button size="large" onClick={onClose}>
            취소
          </Button>
          <Button variant="primary" size="large" onClick={handleAlram}>
            알림신청
          </Button>
        </>
      }
    >
      <div className={styles['dialog-restock']}>
        <Text weight="medium" className={styles.desc}>
          {desc};
        </Text>
        <ProdCard
          id={item.id}
          type="horizontal"
          size="small"
          image={item.image}
          title={item.title}
          brand={item.brand}
        />
        <FormArea type="vertical" className={styles.formArea}>
          {option && (
            <FormItem title="상품옵션">
              <Input value={option} disabled></Input>
            </FormItem>
          )}
          <FormItem title="심야 알림 설정">
            <Switch label="오후 22:00 ~ 오전 07:00" variant="point" />
          </FormItem>
        </FormArea>
        {type === 'restock' && (
          <TextList
            className={styles.textList}
            variant="info"
            data={[
              '신청하신 상품이 입고되면 앱 푸시로 알려드립니다. 단, 앱 미설치 고객은 알림톡으로 발송 됩니다. 알림설정은 마이페이지>나의활동>알림함>알림설정 에서 변경 가능합니다.',
              '판매가 혹은 할인 금액은 신청 시점과 차이가 날 수 있으며, 입고 알림을 받았더라도 구매 시점에 따라 품절이 발생할 수 있습니다.',
              '재입고 신청 내용은 마이페이지>나의 활동>재입고 알림 메뉴에서 확인 할 수 있습니다.',
            ]}
          />
        )}
      </div>
    </Dialog>
  );
}
