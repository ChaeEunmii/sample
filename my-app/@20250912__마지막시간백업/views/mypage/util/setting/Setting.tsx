'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Text, TitleBar, ButtonArea, Button, Line, Heading, TextButton, Switch } from '@shared/ui';
import styles from './Setting.module.scss';

export default function Setting() {
  return (
    <Container showBack title="설정">
      <Contents className={styles.layout}>
        <TitleBar type="docs" title="로그인 정보" />
        <ButtonArea margin="1">
          <Button>로그인</Button>
        </ButtonArea>
        <Line margin="4" variant="bold" />
        {/* 리스트 */}
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.wrap}>
              <Heading size="2" weight="medium" color="gray3" indent>
                로그인 설정
              </Heading>
              <div className={styles.cont}>
                <div className={styles.tit}>
                  <label htmlFor="custom-switch">
                    <Heading size="3" weight="medium" indent>
                      자동로그인 설정
                    </Heading>
                  </label>
                  <TextButton size="1" variant="underline" color="gray3">
                    로그아웃
                  </TextButton>
                </div>
                <div className={styles.side}>
                  <Switch id="custom-switch" onChange={() => {}} />
                </div>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.wrap}>
              <div className={styles.tit}>
                <Heading size="3" weight="medium" indent>
                  캐시 삭제
                </Heading>
                <Text as="span" size="3" color="gray3" indent>
                  캐시에 임시 저장된 데이터를 삭제합니다.
                </Text>
              </div>
              <div className={styles.side}>
                <TextButton size="1" variant="underline" color="inherit">
                  삭제
                </TextButton>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.wrap}>
              <div className={styles.tit}>
                <Heading size="3" weight="medium" indent>
                  버전정보 2.9.30
                </Heading>
                <Text as="span" size="3" color="gray3" indent>
                  최신버전입니다.
                </Text>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.wrap}>
              <div className={styles.tit}>
                <Heading size="3" weight="medium" indent>
                  버전정보 2.9.30
                </Heading>
                <Text as="span" size="3" color="gray3" indent>
                  최신버전 2.9.30
                </Text>
              </div>
              <div className={styles.side}>
                <TextButton size="1" variant="underline" color="inherit">
                  업데이트
                </TextButton>
              </div>
            </div>
          </li>
        </ul>
      </Contents>
    </Container>
  );
}
