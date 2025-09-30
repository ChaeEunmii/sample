'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  ButtonArea,
  Button,
  RadioGroup,
  Input,
  FormArea,
  FormItem,
  Stack,
  Select,
  Checkbox,
} from '@shared/ui';
import styles from './DeliveryAddEdit.module.scss';
import {
  deliveryNameOptions,
  deliveryMathodOptions,
  deliveryAlertOptions,
  deliveryRequestOptions,
} from './DeliveryAddEditOptions';

interface DeliveryAddEditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  /** 모드 설정 */
  mode?: 'create' | 'edit';
}

export default function DeliveryAddEditDialog({
  isOpen,
  onClose,
  mode = 'create',
}: DeliveryAddEditDialogProps) {
  // 퍼블용 프리셋
  const EMPTY = {
    nameVal: '1',
    name: '',
    recv: '',
    phone: '',
    fullAddr: '',
    addrDetail: '',
    reqVal: '',
    reqCustom: '',
    methodVal: '1',
    alertVal: '1',
    isDefault: false as boolean,
  };
  const EDIT = {
    nameVal: '2',
    name: '우리집',
    recv: '이현대',
    phone: '01012345678',
    fullAddr: '06181 서울특별시 강남구 테헤란로98길 12',
    addrDetail: '백화점 지하 주차장',
    reqVal: '7', // 직접입력
    reqCustom: '택배 던지지 말아주세요 제발요 다 깨졌어',
    methodVal: '2',
    alertVal: '2',
    isDefault: false as boolean,
  };

  // 단일 상태 객체
  const [form, setForm] = useState<Record<string, string | boolean>>(EMPTY);

  // 열릴 때 모드별 초기화
  useEffect(() => {
    if (!isOpen) return;
    setForm(mode === 'edit' ? EDIT : EMPTY);
  }, [isOpen, mode]);

  const getLabel = (v: string) => deliveryNameOptions.find((o) => o.value === v)?.label ?? '';

  // 상세주소 노출: "수정모드 AND 주소값 있음"
  const showAddrDetail = mode === 'edit' && !!form.fullAddr;

  return (
    <Dialog
      title={mode === 'edit' ? '배송지 수정' : '배송지 추가'}
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <FormArea type="vertical">
        <FormItem label="배송지 이름">
          <RadioGroup
            name="delivery-name"
            options={deliveryNameOptions}
            value={String(form.nameVal)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const v = e.target.value;
              setForm((f) => ({ ...f, nameVal: v, name: v !== '1' ? getLabel(v) : '' }));
            }}
            className={styles.radio}
          />
          <FormItem.Slot>
            <Input
              size="large"
              value={String(form.name)}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="최대 10자까지 입력"
              maxLength={10}
              className="ncp-mt-x6"
              clearable={false}
            />
          </FormItem.Slot>
        </FormItem>
        <FormItem label="받는사람" required>
          <Input
            size="large"
            value={String(form.recv)}
            onChange={(e) => setForm((f) => ({ ...f, recv: e.target.value }))}
            placeholder="이름 입력"
            clearable={false}
          />
        </FormItem>
        <FormItem label="휴대폰 번호" required>
          <Input
            size="large"
            value={String(form.phone)}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="-없이 숫자만 입력"
            clearable={false}
          />
        </FormItem>
        <FormItem label="주소" required>
          <Stack type="field">
            <Input
              size="large"
              value={String(form.fullAddr)}
              onChange={(e) => setForm((f) => ({ ...f, fullAddr: e.target.value }))}
              placeholder="우편번호 찾기"
              clearable={false}
              disabled={mode === 'edit'}
            />
            <Button variant="primary" size="large">
              주소찾기
            </Button>
          </Stack>
          {showAddrDetail && (
            <FormItem.Slot>
              <Input
                size="large"
                value={String(form.addrDetail)}
                onChange={(e) => setForm((f) => ({ ...f, addrDetail: e.target.value }))}
                placeholder="상세 주소 입력"
                clearable={false}
                className="ncp-mt-x6"
              />
            </FormItem.Slot>
          )}
        </FormItem>
        <FormItem label="배송 요청사항">
          <Select
            value={String(form.reqVal)}
            onChange={(v: string) => setForm((f) => ({ ...f, reqVal: v }))}
            options={deliveryRequestOptions}
            placeholder="배송 요청사항을 선택해 주세요."
            size="large"
          />
          {/* 직접입력(7)일 때 항상 노출 */}
          {form.reqVal === '7' && (
            <FormItem.Slot>
              <Input
                size="large"
                value={String(form.reqCustom)}
                onChange={(e) => setForm((f) => ({ ...f, reqCustom: e.target.value }))}
                placeholder="요청사항 최대 20자 입력"
                clearable={false}
              />
            </FormItem.Slot>
          )}
        </FormItem>
        <FormItem label="공동현관 출입방법">
          <RadioGroup
            name="delivery-method"
            options={deliveryMathodOptions}
            value={String(form.methodVal)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm((f) => ({ ...f, methodVal: e.target.value }))
            }
            className={styles.radio}
          />
          {form.methodVal === '1' && (
            <FormItem.Slot>
              <Input size="large" placeholder="예) #1234" className="ncp-mt-x6" clearable={false} />
            </FormItem.Slot>
          )}
          {form.methodVal === '3' && (
            <FormItem.Slot>
              <Input
                size="large"
                placeholder="요청사항 최대 20자 입력"
                className="ncp-mt-x6"
                clearable={false}
              />
            </FormItem.Slot>
          )}
        </FormItem>
        <FormItem
          label="새벽배송 알림 시점"
          desc="정보를 입력하면 새벽배송으로 이용하실 수 있습니다."
        >
          <RadioGroup
            name="delivery-alert"
            options={deliveryAlertOptions}
            value={String(form.alertVal)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm((f) => ({ ...f, alertVal: e.target.value }))
            }
            className={styles.radio}
          />
        </FormItem>
      </FormArea>
      <div className="ncp-mt-xl">
        <Checkbox
          label="기본 배송지로 선택"
          checked={Boolean(form.isDefault)}
          onChange={(e) => setForm((f) => ({ ...f, isDefault: e.target.checked }))}
        />
      </div>
      <ButtonArea>
        <Button variant="primary" size="large">
          배송지 저장
        </Button>
      </ButtonArea>
    </Dialog>
  );
}
