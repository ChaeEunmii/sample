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
 * @param unit 단위 타입 (count:'개', user:'명')
 * @returns 천 단위 콤마가 포함된 문자열
 */
export const formatNumber = (number: number, unit?: string): string => {
  switch (unit) {
    case 'count':
      return `${new Intl.NumberFormat('ko-KR').format(number)}개`;
    case 'user':
      return `${new Intl.NumberFormat('ko-KR').format(number)}명`;

    default:
      return new Intl.NumberFormat('ko-KR').format(number);
  }
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
 * 원화를 "n만원" 단위로 포맷팅
 * @param price 포맷팅할 가격
 * @param fixed 소수점 자릿수 (기본값 0 → 정수만 표기)
 * @returns "3만원" 또는 "3.5만원" 형태의 문자열
 */
export const formatPriceInManwon = (price: number, fixed: number = 0): string => {
  // 만원 단위 변환
  const man = price / 10000;
  // 소수점 처리
  const formatted = man.toFixed(fixed);
  return `${formatted}만원`;
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
 * 'YYYYMMDD', 'YYYYMMDDHHmm', 'YYYYMMDDHHmmss' 형식의 문자열 또는 Date 객체를 '년월일', '년월일시분', '년월일시분초' 형식으로 변환하는 함수
 * @param input 'YYYYMMDD'/'YYYYMMDDHHmm'/'YYYYMMDDHHmmss' 형식의 날짜 문자열 또는 Date 객체
 * @param stringType 반환 문자열 타입 (kor: 한글, dot: .)
 * @param usePad 월/일/시/분/초 0 패딩 여부 (기본값: true) ex-true면 01, false면 1
 * @returns '년월일', '년월일 시분', '년월일 시분초' 형식의 날짜 문자열
 *
 * 사용 예시
 * formatDate('20230730')                                      // 2023년 07월 30일
 * formatDate('20230730', 'dot')                               // 2023.07.30
 * formatDate('202307300000', 'kor')                           // 2023년 07월 30일 (시간 0이라 안붙음)
 * formatDate('202307301530', 'kor')                           // 2023년 07월 30일 15시 30분
 * formatDate('20230730153045')                                // 2023년 07월 30일 15시 30분 45초 (기본 stringType 'kor')
 * formatDate('20230730000000', 'dot')                         // 2023.07.30 (시간 모두 0)
 * formatDate(new Date(2023, 6, 30))                           // 2023년 07월 30일 00시 00분 00초
 * formatDate(new Date(2023, 6, 30, 15, 30))                   // 2023년 07월 30일 15시 30분 00초
 * formatDate(new Date(2023, 6, 30, 15, 30, 45), 'dot', false) // 2023.7.30 15:30:45 (usePad false)
 */
export const formatDate = (
  input?: string | Date,
  stringType?: 'kor' | 'dot',
  usePad: boolean = true
): string => {
  if (!input) {
    return '';
  }

  let dateString: string;

  // Date 객체인 경우 'YYYYMMDD' 문자열로 변환
  if (input instanceof Date) {
    const y = input.getFullYear();
    const m = input.getMonth() + 1;
    const d = input.getDate();
    const h = input.getHours();
    const mi = input.getMinutes();
    const s = input.getSeconds();
    dateString = [
      y,
      m.toString().padStart(2, '0'),
      d.toString().padStart(2, '0'),
      h.toString().padStart(2, '0'),
      mi.toString().padStart(2, '0'),
      s.toString().padStart(2, '0'),
    ].join('');
  } else {
    dateString = input;
  }

  const year = dateString.slice(0, 4);
  let month = dateString.slice(4, 6) || '';
  let day = dateString.slice(6, 8) || '';
  let hour = dateString.length >= 10 ? dateString.slice(8, 10) : '';
  let min = dateString.length >= 12 ? dateString.slice(10, 12) : '';
  let sec = dateString.length === 14 ? dateString.slice(12, 14) : '';

  // 패딩 옵션 적용 (월/일/시/분/초)
  if (!usePad) {
    month = String(Number(month) || 0);
    day = String(Number(day) || 0);
    hour = hour ? String(Number(hour)) : '';
    min = min ? String(Number(min)) : '';
    sec = sec ? String(Number(sec)) : '';
  }

  // 시분초 모두 0일 때는 년월일까지만 출력
  const isAllTimeZero =
    (hour === '00' || hour === '0' || hour === '') &&
    (min === '00' || min === '0' || min === '') &&
    (sec === '00' || sec === '0' || sec === '');

  // 반환 패턴 정의
  const kor = {
    base: `${year}년 ${month}월 ${day}일`,
    hour: (h: string) => `${h}시`,
    min: (m: string) => `${m}분`,
    sec: (s: string) => `${s}초`,
  };
  const dot = {
    base: `${year}.${month}.${day}`,
    time: (h: string, m?: string, s?: string) =>
      [h, m ? m : undefined, s ? s : undefined].filter(Boolean).join(':'),
  };

  // 데이터 출력 분기
  if (dateString.length === 8) {
    // YYYYMMDD
    return stringType === 'dot' ? dot.base : kor.base;
  }

  // 시분초 중 하나라도 값이 0 이상이면 시간 붙이기
  if (dateString.length === 12 || dateString.length === 14) {
    // 시분초 모두 0이면 년월일만
    if (isAllTimeZero) {
      return stringType === 'dot' ? dot.base : kor.base;
    }

    // 시분초 모두 0아니면 시간 출력
    const showMinute = !!min && min !== '00';
    const showSecond = !!sec && sec !== '00';

    if (stringType === 'dot') {
      let time = hour;
      if (showMinute) time += `:${min.padStart(2, '0')}`;
      if (showSecond) time += `:${sec.padStart(2, '0')}`;
      return `${dot.base} ${time}`;
    } else {
      // kor
      let result = kor.base + ' ';
      result += hour ? kor.hour(hour) : '';
      if (showMinute) result += ' ' + kor.min(min);
      if (showSecond) result += ' ' + kor.sec(sec);
      return result.trim();
    }
  }

  return '';
};

/**
 * 'YYYYMMDD' 또는 'YYYYMMDDHHmm' 형식의 문자열을 변환하는 함수
 * @param dateString 'YYYYMMDD' 형식의 날짜 문자열
 * @param formatType - 결과 포맷: 'kor'(기본), 'dot'
 * @returns '년 월 일 (요일)' 또는 'YYYY.MM.DD (요일)' 형식의 날짜 문자열
 */
export const formatDateWithDay = (
  dateString?: string,
  formatType: 'kor' | 'dot' = 'kor'
): string => {
  if (!dateString || dateString.length < 8) return '';

  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);

  let hour = '00';
  let min = '00';

  if (dateString.length >= 12) {
    hour = dateString.substring(8, 10);
    min = dateString.substring(10, 12);
  }

  const dateObj = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(min));

  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = dayNames[dateObj.getDay()];

  if (formatType === 'dot') {
    return `${year}.${month}.${day} (${dayName})`;
  } else {
    return `${year}년 ${month}월 ${day}일 (${dayName})`;
  }
};

/**
 * 'YYYYMMDD' 또는 'YYYYMMDDHHmm' 형식의 문자열을 '월일(요일)' 형식으로 변환하는 함수
 * @param dateString 'YYYYMMDD' 또는 'YYYYMMDDHHmm' 형식의 날짜 문자열
 * @returns '월일(요일)' 형식의 날짜 문자열 (월,일이 0이면 빈 문자열 반환)
 */
export const formatDateMonthDateDay = (dateString?: string): string => {
  if (!dateString || (dateString.length !== 8 && dateString.length !== 12)) {
    return '';
  }

  // YYYYMMDD
  let year: string, month: number, day: number;

  if (dateString.length === 8 && /^\d{8}$/.test(dateString)) {
    year = dateString.substring(0, 4);
    month = parseInt(dateString.substring(4, 6), 10);
    day = parseInt(dateString.substring(6, 8), 10);
  }
  // YYYYMMDDHHmm
  else if (dateString.length === 12 && /^\d{12}$/.test(dateString)) {
    year = dateString.substring(0, 4);
    month = parseInt(dateString.substring(4, 6), 10);
    day = parseInt(dateString.substring(6, 8), 10);
  } else {
    return '';
  }

  if (month === 0 || day === 0) return '';

  const date = new Date(
    `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  );
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayName = dayNames[date.getDay()];

  return `${month}월${day}일(${dayName})`;
};

/**
 * 'YYYYMMDDHHmm' 또는 'HHmm' 형식의 문자열을 원하는 시간 포맷으로 변환
 * @param dateString - 'YYYYMMDDHHmm' 또는 'HHmm' 형식의 날짜 문자열
 * @param options
 *   - format: 'kor' | 'colon' (default: 'kor')
 *   - is24Hour: boolean (default: false)
 *   - usePad: boolean (default: false)
 * @returns 포맷된 시간 문자열
 *
 * 사용 예시
 * formatTime('0930'); >>> '오전 09시 30분'
 * formatTime('0930', { format: 'dot' }); >>> '오전 09:30'
 * formatTime('1535', { format: 'dot', is24Hour: true }); >>> '15:35'
 * formatTime('202406251005', { is24Hour: true }); >>> '10시 05분'
 * formatTime('202406251430', { format: 'dot' }); >>> '오후 02:30'
 * formatTime('202406251430', { format: 'dot', is24Hour: true }); >>> '14:30'
 */
export const formatTime = (
  dateString?: string,
  options?: { format?: 'kor' | 'colon'; is24Hour?: boolean; usePad?: boolean }
): string => {
  if (!dateString) return '';

  const { format = 'kor', is24Hour = false, usePad = true } = options || {};

  let hour: number, minute: number;

  // HHmm
  if (dateString.length === 4 && /^\d{4}$/.test(dateString)) {
    hour = parseInt(dateString.slice(0, 2), 10);
    minute = parseInt(dateString.slice(2, 4), 10);
  }
  // YYYYMMDDHHmm
  else if (dateString.length === 12 && /^\d{12}$/.test(dateString)) {
    hour = parseInt(dateString.slice(8, 10), 10);
    minute = parseInt(dateString.slice(10, 12), 10);
  } else {
    return '';
  }

  // Pad/NoPad 분기
  let hourStr = '';
  let minStr = '';

  if (usePad) {
    hourStr = hour.toString().padStart(2, '0');
    minStr = minute.toString().padStart(2, '0');
  } else {
    hourStr = String(hour % 12 === 0 && !is24Hour ? 12 : hour % 12 || hour); // 12시 변환도 고려
    minStr = minute === 0 ? '' : String(minute);
  }

  // 24시간제
  if (is24Hour) {
    if (format === 'colon') {
      return `${hourStr}:${minStr}`; // 항상 hh:mm
    } else {
      return usePad
        ? `${hourStr}시 ${minStr}분`
        : minStr
          ? `${hourStr}시 ${minStr}분`
          : `${hourStr}시`;
    }
  }

  // 12시간제 (오전/오후)
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  const ampm = hour < 12 ? '오전' : '오후';
  const hourStr12 = usePad ? String(hour12).padStart(2, '0') : String(hour12);

  if (format === 'colon') {
    return `${hourStr}:${minStr}`; // 항상 hh:mm
  } else {
    return usePad
      ? `${ampm} ${hourStr12}시 ${minStr}분`
      : minStr
        ? `${ampm} ${hourStr12}시 ${minStr}분`
        : `${ampm} ${hourStr12}시`;
  }
};

/**
 * 'YYYYMMDDHHmm' 또는 'YYYYMMDD' 형식의 문자열을 받아, 현재 시점을 기준으로 포매팅된 남은 시간을 반환
 * @param dateString 날짜+시간 문자열 예: '202507012305' 또는 '20250701'
 * @param dayLess true면 days 없이 hours로 합산 표시
 * @returns n일 hh:mm:ss 또는 hh:mm:ss (만료시 00:00:00)
 */
export const formatRemainTime = (dateString: string, dayLess = false): string => {
  if (!dateString || (dateString.length !== 12 && dateString.length !== 8)) return '00:00:00';

  // YYYYMMDDHHmm or YYYYMMDD
  const year = parseInt(dateString.slice(0, 4), 10);
  const month = parseInt(dateString.slice(4, 6), 10) - 1;
  const day = parseInt(dateString.slice(6, 8), 10);
  const hour = dateString.length === 12 ? parseInt(dateString.slice(8, 10), 10) : 0;
  const minute = dateString.length === 12 ? parseInt(dateString.slice(10, 12), 10) : 0;

  const now = new Date();
  const endDate = new Date(year, month, day, hour, minute, 0);

  let diff = Math.max(0, endDate.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * 1000 * 60 * 60 * 24;
  let hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * 1000 * 60;
  const seconds = Math.floor(diff / 1000);

  if (now > endDate || (days === 0 && hours === 0 && minutes === 0 && seconds === 0)) {
    return '00:00:00';
  }

  const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0');

  if (dayLess) {
    hours = days * 24 + hours;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  return days > 0
    ? `${days}일 ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

/**
 * 조회수 포맷팅 함수
 * @param count 포맷팅할 숫자
 * @returns '1,400', '1.4천', '1.4만' 형식의 문자열
 */
export const formatViewCount = (count?: number, locale: 'ko' | 'en' = 'ko'): string => {
  if (count == null || isNaN(count)) return '';

  if (locale === 'ko') {
    if (count >= 10000) {
      const value = (count / 10000).toFixed(1);
      return `${trimDecimalZero(value)}만`;
    }
    if (count >= 1000) {
      const value = (count / 1000).toFixed(1);
      return `${trimDecimalZero(value)}천`;
    }
    return formatNumber(count);
  }
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(count);
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

  const navHeight = Math.max((navBar?.offsetHeight ?? 0) - safeAreaBottom, 0);
  const stickyHeight = Math.max((stickyEl?.offsetHeight ?? 0) - safeAreaBottom, 0);

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

/**
 * Date 또는 string 타입의 입력값을 Date 객체로 변환
 * 유효하지 않은 날짜 문자열이 들어올 경우 Invalid Date가 반환됨
 * @param date 변환할 날짜 (Date 객체이거나 날짜 형식의 문자열)
 * @returns Date 객체
 */
export const toDate = (date: Date | string): Date => {
  return date instanceof Date ? date : new Date(date);
};

/**
 * 작성 시간(createdAt) 기준으로 현재 시각과의 차이를 계산해 포맷된 문자열로 반환
 * - 24시간 이내: '4h 30m' 또는 '4h'
 * - 1일 이상 ~ 2개월 미만: '13d'
 * - 2개월 이상: 'YYYY.MM.DD' 형식
 * @param createdAt - 등록일 (Date 객체 또는 문자열)
 * @returns 포맷된 날짜 문자열
 */
export const formatCreatedAt = (createdAt: Date | string): string => {
  const created = toDate(createdAt);
  const now = new Date();
  const diffMs = now.getTime() - created.getTime();
  const diffMin = Math.floor(diffMs / (1000 * 60));
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffMin / (60 * 24));
  const diffMonth = diffDay / 30;

  if (diffHr < 24) {
    const hours = diffHr;
    const minutes = diffMin % 60;
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
  } else if (diffMonth < 2) {
    return `${diffDay}d`;
  } else return formatDate(created, 'dot').split(' ')[0];
};
/**
 * 텍스트에서 앞 n자리만 노출, 나머지는 *로 마스킹하여 반환하는 함수
 * @param text 적용할 원본 텍스트
 * @param showCount 앞에 노출할 자리수 (default: 3)
 * @returns 마스킹 된 텍스트
 */
export const maskText = (text: string, showCount: number = 3): string => {
  if (text.length <= showCount) return text;
  return text.slice(0, showCount) + '*'.repeat(text.length - showCount);
};

/**
 * 이름(국문) : 두 번째 글자 마스킹 / 다섯 글자 이상인 경우, 처음과 끝자리를 제외한 가운데 전체 마스킹하여 반환하는 함수
 * @param text 적용할 원본 텍스트
 * @returns 마스킹 된 텍스트
 */
export const maskName = (text: string): string => {
  if (!text) return '';
  const len = text.length;
  if (len === 1) return text;
  if (len >= 2 && len <= 4) {
    // 두 번째 글자만 마스킹
    return text[0] + '*' + text.slice(2);
  }
  // 5글자 이상: 첫 글자 + (가운데 *) + 마지막 1글자
  return text[0] + '*'.repeat(len - 2) + text.slice(len - 1);
};

/**
 * 이메일 : 앞 ID 네 번째 글자부터 마스킹, 도메인은 노출
 * @param text 원본 이메일
 * @returns 마스킹 된 이메일
 */
export const maskEmail = (text: string): string => {
  if (!text) return '';
  const [id, ...domainParts] = text.split('@');
  if (!domainParts.length) return text;

  if (id.length <= 3) return text;

  const maskedId = id.slice(0, 3) + '*'.repeat(id.length - 3);
  return maskedId + '@' + domainParts.join('@');
};
