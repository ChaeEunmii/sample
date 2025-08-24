'use client';

import { useState, useEffect } from 'react';
import { Dialog, ButtonArea, Button, Input, FormArea, FormItem, Checkbox } from '@shared/ui';
import { IndexedSelectDrawer } from '@/widgets/form';

interface DeliveryAddEditGlobalDialogProps {
  isOpen: boolean;
  onClose: () => void;
  /** 모드 설정 */
  mode?: 'create' | 'edit';
}

export default function DeliveryAddEditGlobalDialog({
  isOpen,
  onClose,
  mode = 'create',
}: DeliveryAddEditGlobalDialogProps) {
  // 퍼블용 프리셋
  const EMPTY = {
    name: '',
    country: '',
    mobile: '',
    phone: '',
    city: '',
    region: '',
    postal: '',
    address: '',
    isDefault: false as boolean,
  };
  const EDIT = {
    name: 'Kimhyundae',
    country: 'option3', // CANADA
    mobile: '+1 416-123-4567',
    phone: '+1 416-123-4567',
    city: 'Toronto',
    region: 'ON',
    postal: 'M5J 1E3',
    address: 'Fairmont Royal York, 100 Front Street West',
    isDefault: false as boolean,
  };

  // 단일 상태
  const [form, setForm] = useState<typeof EMPTY>(EMPTY);

  // 모달 열릴 때 모드별 초기화
  useEffect(() => {
    if (!isOpen) return;
    setForm(mode === 'edit' ? EDIT : EMPTY);
  }, [isOpen, mode]);

  // country 변경 로그 (디버그용)
  useEffect(() => {
    console.log('[DEBUG] country changed:', form.country);
  }, [form.country]);

  return (
    <Dialog
      title={mode === 'edit' ? '배송지 수정' : '배송지 추가'}
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <FormArea type="vertical">
        <FormItem label="Name" required>
          <Input
            size="large"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Name"
            clearable={false}
          />
        </FormItem>

        <FormItem label="Country">
          <IndexedSelectDrawer
            title="Please select a country"
            options={[
              { value: 'option1', label: 'AUSTRALIA' },
              { value: 'option2', label: 'BRAZIL' },
              { value: 'option3', label: 'CANADA' },
              { value: 'option4', label: "CHINA (PEOPLE'S REP)" },
              { value: 'option5', label: 'CANADA' },
              { value: 'option6', label: 'CAMBODIA' },
              { value: 'option7', label: 'CHILE' },
            ]}
            value={form.country}
            onChange={(v: string) => setForm((f) => ({ ...f, country: v }))}
            size="large"
            placeholder="Please select a country"
          />
        </FormItem>

        <FormItem label="Mobile phone number" required>
          <Input
            size="large"
            value={form.mobile}
            onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))}
            placeholder="Numbers only, no dashes"
            clearable={false}
          />
        </FormItem>

        <FormItem label="Phone number">
          <Input
            size="large"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            placeholder="Numbers only, no dashes"
            clearable={false}
          />
        </FormItem>

        <FormItem label="City" required>
          <Input
            size="large"
            value={form.city}
            onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
            placeholder="Letters and numbers only"
            clearable={false}
          />
        </FormItem>

        <FormItem label="Country/State/City" required>
          <Input
            size="large"
            value={form.region}
            onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))}
            placeholder="Letters and numbers only"
            clearable={false}
          />
        </FormItem>

        <FormItem label="Postal Code" required>
          <Input
            size="large"
            value={form.postal}
            onChange={(e) => setForm((f) => ({ ...f, postal: e.target.value }))}
            placeholder="Letters and numbers only"
            clearable={false}
          />
        </FormItem>

        <FormItem label="Address" required>
          <Input
            size="large"
            value={form.address}
            onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
            placeholder="Letters and numbers only"
            clearable={false}
          />
        </FormItem>
      </FormArea>

      <div className="ncp-mt-xl">
        <Checkbox
          label="Default address"
          checked={form.isDefault}
          onChange={(e) => setForm((f) => ({ ...f, isDefault: e.target.checked }))}
        />
      </div>

      <ButtonArea>
        <Button variant="primary" size="large">
          Save this address
        </Button>
      </ButtonArea>
    </Dialog>
  );
}
