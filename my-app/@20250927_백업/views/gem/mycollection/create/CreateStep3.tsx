'use client';

import { useState, useEffect } from 'react';
import { Text, ButtonArea, Button, Switch } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import { useAlert } from '@shared/contexts/AlertContext';
import SelectedItemList from '@/views/gem/mycollection/create/components/SelectedItemList';
import styles from './CreateStep3.module.scss';
import { mockSelectedItems } from '@mocks/mycollection';

export default function CreateStep3() {
  // 한개남앗을때 alert
  const { showAlert } = useAlert();
  // 컬렉션 공개 설정 상태 (switch)
  const [isChecked, setIsChecked] = useState(true);
  // 아이템 목록 상태
  const [items, setItems] = useState(mockSelectedItems);

  // 아이템 삭제 처리 함수
  const handleRemove = (id: string | number) => {
    // 현재 아이템이 한 개만 남아 있으면 삭제하지 않고 alert 띄운다
    if (items.length === 1) {
      showAlert({
        message: (
          <>
            새로운 컬렉션을 만들기 위해
            <br />
            최소 1개 이상의 항목이 필요해요.
          </>
        ),
        onConfirm: () => console.log('확인 클릭'),
        showCancel: false,
        labelProps: { confirm: '확인', cancel: '취소' },
      });
      return;
    }
    // 삭제할 아이템을 제외한 새로운 상태 업데이트
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // items 상태가 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log('현재 아이템 목록:', items);
  }, [items]);

  return (
    <Container title="선택항목 확인 및 설정" showBack>
      <Contents className={styles.contents}>
        <div className={styles.stickyTop}>
          <Text indent className={styles.count}>
            선택된 <em>{items.length}</em>개의 항목
          </Text>
        </div>
        <SelectedItemList data={items} onRemove={handleRemove} />
      </Contents>
      <ButtonArea vertical type="sticky" className={styles.btnArea}>
        <div className={styles.control}>
          <div className={styles.switchBox}>
            <p className={styles.tit}>컬렉션 공개 설정</p>
            <Switch checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
          </div>
          <Text size="3" color="gray3" indent className={styles.info}>
            비공개로 설정할 경우,컬렉션이 공개되지 않아요.
          </Text>
        </div>
        <Button variant="primary" size="large">
          컬렉션 생성
        </Button>
      </ButtonArea>
    </Container>
  );
}
