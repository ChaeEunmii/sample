'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  ButtonArea,
  Button,
  TitleBar,
  FormArea,
  FormItem,
  Select,
  Input,
  Text,
  IconButton,
  Checkbox,
} from '@shared/ui';
import styles from './ApplyPartnersInfo.module.scss';

// SNS 옵션
const snsOptions = [
  { value: 'instagram', label: '인스타그램' },
  { value: 'youtube', label: '유튜브' },
  { value: 'naver_blog', label: '네이버 블로그' },
  { value: 'facebook', label: '페이스북' },
  { value: 'tiktok', label: '틱톡' },
  { value: 'twitter_x', label: 'X (트위터)' },
  { value: 'threads', label: 'Threads (스레드)' },
  { value: 'etc', label: '기타' },
];

// value → prefix 매핑
const snsPrefixMap: Record<string, string> = {
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/@',
  naver_blog: 'https://blog.naver.com/',
  facebook: 'https://www.facebook.com/',
  tiktok: 'https://www.tiktok.com/@',
  twitter_x: 'https://www.x.com/',
  threads: 'https://www.threads.net/@',
  etc: 'https://',
};

export default function ApplyPartnersInfo() {
  const [isOpenDialog, setIsOpenDialog] = useState(false); // 약관동의 (L)
  const [checked, setChecked] = useState(false); // 동의 체크 상태
  const [selected, setSelected] = useState(''); // SNS 선택 값
  const [handle, setHandle] = useState(''); // prefix 뒤에 붙는 사용자 입력

  const prefix = snsPrefixMap[selected] ?? '';

  // SNS주소 입력 핸들러
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget?.value ?? '';
    setHandle(val);
    console.log('SNS URL:', `${prefix}${val}`);
  };

  // 버튼 활성화 조건
  const isFormValid = !!checked && !!selected && handle.trim() !== '';

  return (
    <Container showBack title="파트너스 신청하기">
      <Contents>
        <TitleBar type="docs" title="파트너스 이용 약관 동의" level="1" />
        {/* 동의 체크 */}
        <div className={styles.checks}>
          <Checkbox
            label={
              <>
                <Text as="span" size="5" className={styles.agreeTit}>
                  이용약관<em>(필수)</em>
                </Text>
                <IconButton name="arrowRight" onClick={() => setIsOpenDialog(true)}>
                  약관 상세 열기
                </IconButton>
              </>
            }
            checked={checked}
            onChange={(next: boolean | React.ChangeEvent<HTMLInputElement>) => {
              const v = typeof next === 'boolean' ? next : next.target.checked;
              setChecked(v);
            }}
            size="small"
          />
        </div>
        <TitleBar
          type="docs"
          title="나의 대표 SNS"
          description="본인 소유의 공개된 대표 SNS를 입력해주세요."
          level="1"
        />
        <FormArea>
          <FormItem title="나의 대표 SNS">
            <Select
              options={snsOptions}
              value={selected}
              onChange={(val: unknown) => {
                const v =
                  typeof val === 'string' ? val : ((val as { value?: string } | null)?.value ?? '');
                setSelected(v);
                setHandle(''); // SNS 변경 시 입력 초기화
              }}
              placeholder="대표 SNS 선택"
              size="large"
            />
            <Input
              size="large"
              value={handle}
              onChange={onHandleChange}
              prefix={prefix && <span className={styles.prefix}>{prefix}</span>}
              aria-label={`${prefix}${handle}`}
              placeholder={selected ? '아이디 입력' : 'URL 주소 입력'}
              clearable={false}
              className={styles.snsInput}
            />
          </FormItem>
        </FormArea>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large" disabled={!isFormValid}>
          파트너스 신청하기
        </Button>
      </ButtonArea>
    </Container>
  );
}
