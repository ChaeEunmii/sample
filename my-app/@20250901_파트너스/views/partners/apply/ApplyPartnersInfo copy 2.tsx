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
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState('');
  const [handle, setHandle] = useState('');

  const prefix = snsPrefixMap[selected] ?? '';

  // ✅ 변경: 입력값 내 '마지막' prefix 뒤만 handle로 사용(중복 prefix 방지)
  const onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.currentTarget.value ?? '';
    const p = prefix ?? '';
    if (!p) return setHandle(v);
    const last = v.lastIndexOf(p);
    if (last >= 0) setHandle(v.slice(last + p.length));
    else setHandle(''); // prefix가 통째로 지워졌을 때
  };

  // ✅ 변경: 붙여넣기도 동일 원리로 처리
  const onUrlPaste: React.ClipboardEventHandler<HTMLInputElement> = (e) => {
    const pasted = e.clipboardData.getData('text') ?? '';
    if (!pasted) return;
    e.preventDefault();
    const p = prefix ?? '';
    if (!p) return setHandle(pasted);
    const last = pasted.lastIndexOf(p);
    setHandle(last >= 0 ? pasted.slice(last + p.length) : pasted);
  };

  // ✅ 추가: prefix 구간 삭제 방지
  const onUrlKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const el = e.currentTarget;
    const lock = (prefix ?? '').length;
    const s = el.selectionStart ?? 0;
    const epos = el.selectionEnd ?? 0;
    const hasSel = s !== epos;

    if (e.key === 'Backspace' && !hasSel && s <= lock) {
      e.preventDefault();
      el.setSelectionRange(lock, lock);
    }
    if (e.key === 'Delete' && !hasSel && s < lock) {
      e.preventDefault();
      el.setSelectionRange(lock, lock);
    }
  };

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
                setHandle(''); // SNS 변경 시 초기화
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
                onKeyDown={onUrlKeyDown}
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
