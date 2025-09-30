'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, Input, ButtonArea, Button } from '@shared/ui';
import styles from './EditCollectionName.module.scss';

export default function EditCollectionName() {
  // 최초 마운트 시 값 저장 (수정여부 확인을 위해)
  const [initialValue] = useState('귀여운거 모음집');

  // 입력값 상태 (입력된 컬렉션명)
  const [inputValue, setInputValue] = useState('귀여운거 모음집');

  // 값 수정여부
  const isModified = inputValue !== initialValue;

  // 글자 수 제한
  const maxLength = 15;

  // 입력값 변경될 때 호출되는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    setInputValue(e.target.value);
  };

  // 수정중이 아니거나 입력값이 없을 때 disabled처리
  const isBtnDisabled = !isModified || inputValue.length === 0;

  return (
    <Container title="컬렉션명 편집" showBack>
      <Contents className={styles.contents}>
        <TitleArea
          title={
            <>
              변경할 컬렉션명을
              <br />
              입력하세요.
            </>
          }
        />
        <div className={styles.inputWrap}>
          <Input
            placeholder="변경할 컬렉션명 입력 (15자 이내)"
            maxLength={maxLength}
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large" disabled={isBtnDisabled}>
          변경 완료
        </Button>
      </ButtonArea>
    </Container>
  );
}
