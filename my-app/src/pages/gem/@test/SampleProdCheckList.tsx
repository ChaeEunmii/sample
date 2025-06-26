'use client';

import React from 'react';
import { Checkbox } from '@shared/ui';

type ProdCheckListProps<T extends { id: number }> = {
  items: T[];
  selectedIds: number[];
  onChange: (ids: number[]) => void;
  renderItem: (item: T) => React.ReactNode;
};

export default function SampleProdCheckList<T extends { id: number }>({
  items,
  selectedIds,
  onChange,
  renderItem,
}: ProdCheckListProps<T>) {
  const isAllChecked = selectedIds.length === items.length;

  const toggleAll = () => onChange(isAllChecked ? [] : items.map((item) => item.id));

  const toggleItem = (id: number) => {
    onChange(selectedIds.includes(id) ? selectedIds.filter((i) => i !== id) : [...selectedIds, id]);
  };

  return (
    <div className="space-y-4">
      <Checkbox label="전체 선택" checked={isAllChecked} onChange={toggleAll} />

      <ul className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <li key={item.id} className="relative border rounded p-4">
            <div className="absolute top-2 left-2 z-10">
              <Checkbox
                checked={selectedIds.includes(item.id)}
                onChange={() => toggleItem(item.id)}
              />
            </div>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
