'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TitleArea } from '@shared/ui';
import GroupForm from '@views/mypage/partners/manage/shop/product/group/GroupForm';

export default function GroupCreate() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = () => {
    console.log('생성:', { name: name.trim(), desc });
  };

  return (
    <Container showBack title="상품 그룹 생성">
      <Contents>
        <TitleArea
          title={
            <>
              신규 상품 그룹을
              <br />
              생성하세요.
            </>
          }
        />
        <GroupForm
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
        <Button variant="primary" size="large" onClick={handleSubmit}>
          다음
        </Button>
      </ButtonArea>
    </Container>
  );
}
