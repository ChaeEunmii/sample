'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button } from '@shared/ui';
import ProdGroupForm from '@/views/mypage/partners/manage/shop/product/ProdGroupForm';

export default function GroupEdit() {
  const initialName = '너무 더울 땐 필수, 선풍기';
  const initialDesc = '시원한 바람~~';

  const [name, setName] = useState(initialName);
  const [desc, setDesc] = useState(initialDesc);

  const handleSubmit = () => {
    console.log('수정:', { name: name.trim(), desc });
  };

  // 제목 없으면 버튼 비활성화
  const isDisabled = name.trim().length === 0;

  return (
    <Container showBack title="상품 그룹 제목 수정">
      <Contents>
        <ProdGroupForm
          name={name}
          desc={desc}
          onChangeName={(value) => {
            console.log('입력 중 name: ', value);
            setName(value);
          }}
          onChangeDesc={(value) => {
            console.log('입력 중 desc: ', value);
            setDesc(value);
          }}
        />
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large" onClick={handleSubmit} disabled={isDisabled}>
          완료
        </Button>
      </ButtonArea>
    </Container>
  );
}
