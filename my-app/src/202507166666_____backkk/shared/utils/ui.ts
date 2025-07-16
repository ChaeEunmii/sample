/**
 * 윈도우 팝업 오픈 함수
 * @param url 열고자 하는 URL
 * @param width 팝업 창의 너비 (기본값: 600)
 * @param height 팝업 창의 높이 (기본값: 600)
 * @param name 팝업 창의 이름 (기본값: 'popup')
 * @returns 열린 팝업 창의 참조 또는 null
 */
export const openWindow = (
  url: string,
  width: number = 600,
  height: number = 600,
  name: string = 'popup'
): Window | null => {
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;

  const popup = window.open(
    url,
    name,
    `width=${width},height=${height},top=${top},left=${left},resizable=yes`
  );

  if (popup) {
    popup.focus();
  }

  return popup;
};

/**
 * 숫자 포맷팅 함수 (천 단위 콤마)
 * @param number 포맷팅할 숫자
 * @returns 천 단위 콤마가 포함된 문자열
 */
export const formatNumber = (number: number): string => {
  return new Intl.NumberFormat('ko-KR').format(number);
};

/**
 * 원화 포맷팅 함수
 * @param price 포맷팅할 가격
 * @returns 원화 단위가 포함된 가격 문자열
 */
export const formatPrice = (price: number): string => {
  return formatNumber(price) + '원';
};

/**
 * 카멜케이스용 문자열 변환 함수
 * @param string 변환할 문자열
 * @returns 첫 글자가 대문자로 변환된 문자열
 */
export const capitalizeFirst = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * 'YYYYMMDD' 형식의 문자열을 '년월일' 형식으로 변환하는 함수
 * @param dateString 'YYYYMMDD' 형식의 날짜 문자열
 * @param stringType 반환 문자열 타입 (kor: 한글, dot: .)
 * @returns '년월일' 형식의 날짜 문자열
 */
export const formatDate = (dateString?: string, stringType?: 'kor' | 'dot'): string => {
  if (!dateString || dateString.length !== 8) {
    return '';
  }

  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);

  switch (stringType) {
    case 'dot':
      return `${year}.${month}.${day}`;

    case 'kor':
    default:
      return `${year}년 ${month}월 ${day}일`;
  }
};

/**
 * 'YYYYMMDD' 형식의 문자열을 '년 월 일 (요일)' 형식으로 변환하는 함수
 * @param dateString 'YYYYMMDD' 형식의 날짜 문자열
 * @returns '년 월 일 (요일)' 형식의 날짜 문자열
 */
export const formatDateWithDay = (dateString?: string): string => {
  if (!dateString || dateString.length !== 8) {
    return '';
  }

  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);

  const date = new Date(`${year}-${month}-${day}`);
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = dayNames[date.getDay()];

  return `${year}년 ${month}월 ${day}일 (${dayName})`;
};

/**
 * 'YYYYMMDD' 형식의 문자열을 '월일(요일)' 형식으로 변환하는 함수
 * @param dateString 'YYYYMMDD' 형식의 날짜 문자열
 * @returns '월일(요일)' 형식의 날짜 문자열 (월일 0 제외)
 */
export const formatDateMonthDateDay = (dateString?: string): string => {
  if (!dateString || dateString.length !== 8) {
    return '';
  }

  const year = dateString.substring(0, 4);
  const month = parseInt(dateString.substring(4, 6), 10);
  const day = parseInt(dateString.substring(6, 8), 10);

  const date = new Date(
    `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  );
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = dayNames[date.getDay()];

  return `${month}월${day}일(${dayName})`;
};

/**
 * 조회수 포맷팅 함수
 * @param count 포맷팅할 숫자
 * @returns '1,400', '1.4천', '1.4만' 형식의 문자열
 */
export const formatViewCount = (count?: number): string => {
  if (count == null || isNaN(count)) return '';

  if (count >= 10000) {
    const value = (count / 10000).toFixed(1);
    return `${trimDecimalZero(value)}만`;
  }

  if (count >= 1000) {
    const value = (count / 1000).toFixed(1);
    return `${trimDecimalZero(value)}천`;
  }

  return formatNumber(count);
};

/**
 * '.0'으로 끝나는 소수 문자열에서 소수점 0만 제거 (예: '1.0' → '1')
 * @param value 문자열 형태의 숫자
 * @returns 불필요한 소수점 0이 제거된 문자열
 */
export const trimDecimalZero = (value: string): string => {
  return value.endsWith('.0') ? value.slice(0, -2) : value;
};

/**
 * 하단 Offset 계산 함수
 * @returns 네비게이션 바와 스티키 영역의 총 높이(px)
 */
export const calculateBottom = (): number => {
  const navBar = document.getElementById('navBar')?.children[0] as HTMLElement;
  const stickyEl = document.querySelector('[class*="ButtonArea_sticky"]') as HTMLElement;

  const safeAreaBottom =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--sab').replace('px', '')
    ) || 0;

  const navHeight = navBar?.offsetHeight ?? 0 - safeAreaBottom;
  const stickyHeight = stickyEl?.offsetHeight ?? 0 - safeAreaBottom;

  return navHeight + stickyHeight;
};

/**
 * 텍스트 색상을 조건부로 적용하는 스타일 반환 함수
 * @param color 적용할 텍스트 색상
 * @returns `{ color }` 스타일 객체 또는 undefined
 */
export const textColor = (color?: string): React.CSSProperties | undefined => {
  return color ? { color } : undefined;
};
