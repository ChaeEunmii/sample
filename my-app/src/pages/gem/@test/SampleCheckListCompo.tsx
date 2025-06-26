import { Checkbox } from '@shared/ui';

type Item = {
  id: number;
  label: string;
};

export default function SampleCheckListCompo({
  items,
  selectedIds,
  onChange,
}: {
  items: Item[];
  selectedIds: number[];
  onChange: (ids: number[]) => void;
}) {
  const isAllChecked = selectedIds.length === items.length;

  const toggleAll = () => onChange(isAllChecked ? [] : items.map((item) => item.id));

  const toggleItem = (id: number) => {
    onChange(selectedIds.includes(id) ? selectedIds.filter((i) => i !== id) : [...selectedIds, id]);
  };

  return (
    <>
      <Checkbox label="전체 선택" checked={isAllChecked} onChange={toggleAll} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Checkbox
              label={item.label}
              checked={selectedIds.includes(item.id)}
              onChange={() => toggleItem(item.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
