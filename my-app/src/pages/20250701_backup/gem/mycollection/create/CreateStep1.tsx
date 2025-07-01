'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, TextList, TitleBar, Input, ButtonArea, Button, Text } from '@shared/ui';
import styles from './CreateStep1.module.scss';

export default function CreateStep1() {
  // 인풋에 포커스됐는지 여부
  const [isFocused, setIsFocused] = useState(false);
  // 입력값 상태 (입력된 컬렉션명)
  const [inputValue, setInputValue] = useState('');
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
    <Container title="컬렉션명 입력" showBack>
      <Contents className={styles.contents}>
        <div className={styles.stickyTop}>
          <TitleArea
            title={
              <>
                신규 컬렉션명을
                <br />
                입력하세요.
              </>
            }
          />
          <div onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
            <Input
              placeholder="신규 컬렉션명 입력 (15자 이내)"
              maxLength={15}
              value={inputValue}
              onChange={handleInputChange}
            />
            <Text variant="desc" align="right">
              {inputValue.length}/{maxLength}자
            </Text>
          </div>
        </div>
        <TitleBar type="docs" title="컬렉션 이용 가이드" level="3" />
        <TextList
          data={[
            '컬렉션은 GEM한 상품과 브랜드로 구성할 수 있어요. (최대 50개)',
            '컬렉션은 최대 100개까지 만들 수 있어요.',
            '컬렉션 이름은 생성 후에도 수정할 수 있어요.',
            '담긴 상품과 브랜드는 언제든 추가하거나 삭제할 수 있어요.',
            '이미 컬렉션에 담긴 항목은 GEM을 해제해도 삭제되지 않아요.',
          ]}
          variant="level2"
        />
      </Contents>
      {isFocused && (
        <ButtonArea type="sticky">
          <Button variant="primary" size="large" disabled={isBtnDisabled}>
            다음
          </Button>
        </ButtonArea>
      )}
    </Container>
  );
}
