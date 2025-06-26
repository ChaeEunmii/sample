'use client';

import React, { useState } from 'react';
import { Checkbox } from '@shared/ui';

type Item = {
  id: number;
  label: string;
};

const SAMPLE_DATA: Item[] = [
  { id: 1, label: '아이템 1' },
  { id: 2, label: '아이템 2' },
  { id: 3, label: '아이템 3' },
  { id: 4, label: '아이템 4' },
  { id: 5, label: '아이템 5' },
  { id: 6, label: '아이템 6' },
];

export default function SampleCheckList() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const isAllChecked = selectedIds.length === SAMPLE_DATA.length;

  const toggleAll = () => {
    setSelectedIds(isAllChecked ? [] : SAMPLE_DATA.map((item) => item.id));
  };

  const toggleItem = (id: number) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className="p-4 space-y-4">
      {/* 전체 선택 체크박스 */}
      <Checkbox label="전체 선222222택" size="medium" checked={isAllChecked} onChange={toggleAll} />

      {/* 개별 아이템 목록 */}
      <ul className="grid grid-cols-2 gap-4">
        {SAMPLE_DATA.map((item) => (
          <li key={item.id} className="relative border rounded p-4 flex flex-col items-center">
            <Checkbox
              label={item.label}
              size="medium"
              checked={selectedIds.includes(item.id)}
              onChange={() => toggleItem(item.id)}
            />
          </li>
        ))}
      </ul>

      {/* 선택 카운트 */}
      <p className="text-center">
        선택된 항목: {selectedIds.length} / {SAMPLE_DATA.length}
      </p>
    </div>
  );
}
