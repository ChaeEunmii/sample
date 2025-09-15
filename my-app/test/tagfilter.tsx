
1.
- const isFiltered = (tagItems?.length ?? 0) > 0 || !!onlyTag;
+ const isFiltered = !!onlyTag || (!isControlled && (uncontrolledTags.length ?? 0) > 0);


2.
const handleApplyFilter = () => {
  const newFilters =
    isControlled ? (labels ?? []) :
    onlyTag ? ['2020.12.26~2025.12.25']
            : ['2020.12.26~2025.12.25', '렌탈', '택배배송', '새벽/당일배송', '가나다라마바사'];

  updateTags(newFilters);
  setClickedTab(0);
  setIsDrawerOpen(false);
};


3.
<TagFilter
  defaultTabs={tabs}
  labels={labels}          // 값만 제어
  activeTab={activeTab}    // 탭도 정상 동작
  onApplyFilters={setLabels}
/>