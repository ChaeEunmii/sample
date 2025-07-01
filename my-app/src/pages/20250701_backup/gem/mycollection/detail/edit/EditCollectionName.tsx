'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, Input, ButtonArea, Button, Text } from '@shared/ui';
import styles from './EditCollectionName.module.scss';

export default function EditCollectionName() {
  // 인풋에 포커스됐는지 여부
  const [isFocused, setIsFocused] = useState(false);
  // 입력값 상태 (입력된 컬렉션명)
  const [inputValue, setInputValue] = useState('귀여운거 모음집');
  // 글자 수 제한
  const maxLength = 15;

  // 입력값 변경될 때 호출되는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
  };

  // 입력값이 없으면 버튼 비활성화
  const isBtnDisabled = inputValue.length === 0;

  return (
    <Container title="컬렉션명 편집" showBack>
      <Contents className={styles.contents}>
        <div className={styles.stickyTop}>
          <TitleArea
            title={
              <>
                변경할 컬렉션명을
                <br />
                입력하세요.
              </>
            }
          />
          <div onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            <Input maxLength={15} value={inputValue} onChange={handleInputChange} />
            <Text variant="desc" align="right">
              {inputValue.length}/{maxLength}자
            </Text>
          </div>
        </div>
      </Contents>
      {isFocused && (
        <ButtonArea type="sticky">
          <Button variant="primary" size="large" disabled={isBtnDisabled}>
            변경 완료
          </Button>
        </ButtonArea>
      )}
    </Container>
  );
}
