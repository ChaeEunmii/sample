import React from 'react';

type AgreementItem = {
  id: string;
  label: string;
  content: string; // HTML string
  required?: boolean;
};

type Props = {
  checked: Record<string, boolean>;
  onChange: (next: Record<string, boolean>) => void;
  onOpenModal: (html: string) => void;
  items?: AgreementItem[]; // 외부에서 커스텀 가능
};

const defaultItems: AgreementItem[] = [
  {
    id: 'privacy',
    label: '개인정보 수집 및 이용 동의 (필수)',
    required: true,
    content: '<p>개인정보 수집에 동의하셔야 서비스를 이용하실 수 있습니다.</p>',
  },
  {
    id: 'marketing',
    label: '마케팅 수신 동의 (선택)',
    required: false,
    content: '<p>이벤트, 프로모션 등의 정보를 이메일로 받을 수 있습니다.</p>',
  },
];

export const Agreement: React.FC<Props> = ({ checked, onChange, onOpenModal, items }) => {
  const agreements = items ?? defaultItems;
  const isAllChecked = agreements.every((item) => checked[item.id]);

  const handleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = agreements.reduce(
      (acc, item) => {
        acc[item.id] = e.target.checked;
        return acc;
      },
      {} as Record<string, boolean>
    );
    onChange(next);
  };

  const toggleItem = (id: string) => {
    onChange({ ...checked, [id]: !checked[id] });
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isAllChecked} onChange={handleAll} />
        전체 동의
      </label>
      <ul>
        {agreements.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={checked[item.id]}
                onChange={() => toggleItem(item.id)}
              />
              {item.label}
            </label>
            <button type="button" onClick={() => onOpenModal(item.content)}>
              자세히 보기
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Agreement.displayName = 'Agreement';
