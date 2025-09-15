
1.
- const isFiltered = (tagItems?.length ?? 0) > 0 || !!onlyTag;
+ const isFiltered = (uncontrolledTags.length ?? 0) > 0 || !!onlyTag;


2.
const handleApplyFilter = () => {
  const newFilters =
    labels !== undefined      // 제어 모드면 부모가 준 labels 우선
      ? labels
      : (onlyTag
          ? ['2020.12.26~2025.12.25']
          : ['2020.12.26~2025.12.25', '렌탈', '택배배송', '새벽/당일배송', '가나다라마바사']);

  updateTags(newFilters);
  setClickedTab(0);
  setIsDrawerOpen(false);
};


3.
const [labels, setLabels] = useState<string[]>(['프랑스', '2020.12.26~2025.12.25']);

<TagFilter
  defaultTabs={tabMainItems}
  labels={labels}                // 제어 모드
  activeTab={activeTab}
  onTabChange={(i) => {
    setActiveTab(i);
    if (i === 3) setIsDrawerOpen(true);
  }}
  onApplyFilters={(filters) => setLabels(filters)}   // 닫기/적용 시 반드시 반영
  onClearFilters={() => setLabels([])}
  drawerTitle="어떤 주문을 찾으세요?"
  margin="3"
  mode="trip"
  showReset
/>