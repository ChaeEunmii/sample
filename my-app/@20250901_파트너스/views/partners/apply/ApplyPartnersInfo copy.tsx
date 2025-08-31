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

// value → prefix 매핑 (입력창에는 항상 prefix+handle 형태로 보이게 함)
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

  // 인풋에는 항상 prefix + handle이 표시되지만, 내부 상태는 handle만 저장
  const onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.currentTarget.value;
    // 사용자가 prefix 영역을 수정해도, 내부적으로는 handle만 유지되도록 보정
    if (prefix && next.startsWith(prefix)) {
      setHandle(next.slice(prefix.length));
    } else {
      // prefix가 삭제되거나 변경돼도 보여줄 때 다시 prefix를 붙이므로 여기서는 전부 handle로 간주
      setHandle(next);
    }
  };

  // 붙여넣기 시에도 동일 원리로 처리(전체 URL 붙여넣어도 정상 동작)
  const onUrlPaste: React.ClipboardEventHandler<HTMLInputElement> = (e) => {
    const pasted = e.clipboardData.getData('text') ?? '';
    if (!pasted) return;
    e.preventDefault();
    // prefix가 있으면 잘라내고, 없으면 전체를 handle로
    const nextHandle = prefix && pasted.startsWith(prefix) ? pasted.slice(prefix.length) : pasted;
    setHandle(nextHandle);
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
                // string 또는 { value } 객체 대응
                const v =
                  typeof val === 'string' ? val : ((val as { value?: string } | null)?.value ?? '');
                setSelected(v);
                setHandle(''); // SNS 변경 시 입력 초기화
              }}
              placeholder="대표 SNS 선택"
              size="large"
            />
            <FormItem.Slot>
              <Input
                placeholder="URL 주소 입력"
                size="large"
                value={(prefix ?? '') + handle}
                onChange={onUrlChange}
                onPaste={onUrlPaste}
              />
            </FormItem.Slot>
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
