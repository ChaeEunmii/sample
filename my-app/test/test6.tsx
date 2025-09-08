// [변경 1] handleClear에서 포커스 복원(선택)
const handleClear = () => {
  setQuery('');
  setDebounced('');
  if (hasTabs) {
    if (isControlled) onTabChange?.(initialTabRef.current);
    else setClickedTab(initialTabRef.current);
  }
  inputRef.current?.focus(); // 포커스 복원
};

// [변경 2] Input suffix를 조건부 토글
<Input
  ref={inputRef}
  type="search"
  value={query}
  title="검색어 입력"
  placeholder={placeholder}
  clearable
  onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
  onKeyDown={(e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      handleClear();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runSearch();
    }
  }}
  // ▼ 여기만 토글
  suffix={
    hasSearched ? (
      <IconButton
        name="close"
        aria-label="검색 초기화"
        onClick={handleClear}
        size="large"
      />
    ) : (
      <IconButton
        name="search"
        aria-label="검색"
        onClick={runSearch}
        size="large"
      />
    )
  }
  size="large"
/>