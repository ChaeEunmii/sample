'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TitleBar, Text, Radio } from '@shared/ui';
import { PaymentMethodCard } from '@widgets/payment';
import styles from './ConfirmCard.module.scss';
import { mockHCardList } from '@mocks/mypage';

export default function ConfirmCard() {
  const [selected, setSelected] = useState<string>(''); // 기본 선택 카드 id

  // mock 데이터 가져오기
  const cardsData = mockHCardList;

  // 선택 변경 핸들러
  const handleSelect = (id: string) => {
    setSelected(id);
    console.log('[선택한 카드 id]:', id);
  };

  return (
    <Container title="현대백화점 카드 확인" showBack>
      <Contents className={styles.layout}>
        <TitleBar
          type="docs"
          level="2"
          title={
            <>
              등록 가능한 카드{' '}
              <Text as="strong" color="point">
                {cardsData.length}
              </Text>
            </>
          }
          className="ncp-mt-s"
        />
        <ul className={styles.list}>
          {cardsData.map((card) => (
            <li key={card.id} className={styles.item}>
              <Radio
                name="card"
                value={card.id}
                checked={selected === card.id}
                onChange={() => handleSelect(card.id)}
                label={
                  <PaymentMethodCard
                    data={card}
                    as="div"
                    variant="clear"
                    isSelected={selected === card.id}
                  />
                }
              />
            </li>
          ))}
        </ul>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large" disabled={!selected}>
          선택한 카드를 등록
        </Button>
      </ButtonArea>
    </Container>
  );
}
