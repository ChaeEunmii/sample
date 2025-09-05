const handleCheckChange = (id: string, checked: boolean) => {
  if (id === 'terms-homepage') {
    // disabled 상태 토글
    setDisabledStates((prev) => {
      const next = { ...prev };
      HYUNDAI_IDS.forEach((k) => {
        next[k] = !checked; // 체크되면 활성(false), 해제면 비활성(true)
      });
      return next;
    });

    // 체크 상태 업데이트 (하위는 항상 false로 초기화)
    setAgreeStates((prev) => {
      const next = { ...prev, [id]: checked };
      HYUNDAI_IDS.forEach((k) => {
        next[k] = false;
      });
      return next;
    });

    return; // 종료
  }

  // 그 외 개별 항목 체크 갱신
  setAgreeStates((prev) => ({ ...prev, [id]: checked }));
};