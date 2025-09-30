// 뷰티 옵션 일단샘플
export const reasonOptions = [
  { label: '선택안함', value: 'skinType-1' },
  { label: '건성', value: 'skinType-2' },
  { label: '중성', value: 'skinType-3' },
  { label: '지성', value: 'skinType-4' },
  { label: '복합성', value: 'skinType-5' },
  { label: '민감성', value: 'skinType-6' },
  { label: '트러블성', value: 'skinType-7' },
];

// 뷰티 옵션
export const beautyOptions = {
  skinType: {
    label: '피부타입',
    data: [
      { label: '선택안함', value: 'skintype1' },
      { label: '건성', value: 'skintype2' },
      { label: '중성', value: 'skintype3' },
      { label: '지성', value: 'skintype4' },
      { label: '복합성', value: 'skintype5' },
      { label: '민감성', value: 'skintype6' },
      { label: '트러블성', value: 'skintype7' },
    ],
  },
  skinTone: {
    label: '피부톤',
    data: [
      { label: '선택안함', value: 'skintone1' },
      { label: '웜톤', value: 'skintone2' },
      { label: '쿨톤', value: 'skintone3' },
      { label: '봄 웜톤', value: 'skintone4' },
      { label: '여름 쿨톤', value: 'skintone5' },
      { label: '가을 웜톤', value: 'skintone6' },
      { label: '겨울 쿨톤', value: 'skintone7' },
    ],
  },
  skinIssue: {
    label: '피부 고민(최대 3개 선택 가능)',
    data: [
      { label: '선택안함', value: 'skinissue1' },
      { label: '주름', value: 'skinissue2' },
      { label: '건조', value: 'skinissue3' },
      { label: '탄력', value: 'skinissue4' },
      { label: '모공', value: 'skinissue5' },
      { label: '진정', value: 'skinissue6' },
      { label: '브라이트닝', value: 'skinissue7' },
      { label: '영양', value: 'skinissue8' },
      { label: '피지', value: 'skinissue9' },
      { label: '트러블', value: 'skinissue10' },
      { label: '각질', value: 'skinissue11' },
      { label: '안티에이징', value: 'skinissue12' },
    ],
  },
};

// 라이프 옵션
export const lifeOptions = {
  count: {
    label: '거주 인원수',
    data: [
      { label: '1인', value: 'count1' },
      { label: '2인', value: 'count2' },
      { label: '3인', value: 'count3' },
      { label: '4인', value: 'count4' },
      { label: '5인', value: 'count5' },
      { label: '6인 이상', value: 'count6' },
    ],
  },
  shape: {
    label: '구성원 형태',
    data: [
      { label: '싱글', value: 'shape1' },
      { label: '신혼/부부', value: 'shape2' },
      { label: '영유아 가정', value: 'shape3' },
      { label: '취학자녀 가정', value: 'shape4' },
      { label: '대가족', value: 'shape5' },
    ],
  },
  interest: {
    label: '식이 관심사(최대 3개 선택 가능)',
    data: [
      { label: '비건', value: 'interest1' },
      { label: '다이어트', value: 'interest2' },
      { label: '저탄고지', value: 'interest3' },
      { label: '저당', value: 'interest4' },
      { label: '저속노화', value: 'interest5' },
      { label: '친환경', value: 'interest6' },
      { label: '고단백', value: 'interest7' },
    ],
  },
};

// 발사이즈 옵션
export const shoeSizeOptions = [
  {
    label: '선택안함',
    value: 'option1',
  },
  {
    label: '220 이하',
    value: 'option2',
  },
  {
    label: '225',
    value: 'option3',
  },
  {
    label: '230',
    value: 'option4',
  },
  {
    label: '235',
    value: 'option5',
  },
  {
    label: '240',
    value: 'option6',
  },
  {
    label: '245',
    value: 'option7',
  },
  {
    label: '250',
    value: 'option8',
  },
];

// 상의사이즈 옵션
export const topSizeOptions = [
  {
    label: '선택안함',
    value: 'option1',
  },
  {
    label: 'XS이하',
    value: 'option2',
  },
  {
    label: 'S/55',
    value: 'option3',
  },
  {
    label: 'M/66',
    value: 'option4',
  },
  {
    label: 'L/77',
    value: 'option5',
  },
  {
    label: 'XL/88',
    value: 'option6',
  },
  {
    label: 'XXL/99',
    value: 'option7',
  },
  {
    label: '3XL이상',
    value: 'option8',
  },
];

// 하의사이즈 옵션
export const bottomSizeOptions = [
  {
    label: '선택안함',
    value: 'option1',
  },
  {
    label: '23 이하',
    value: 'option2',
  },
  {
    label: '24',
    value: 'option3',
  },
  {
    label: '25',
    value: 'option4',
  },
  {
    label: '26',
    value: 'option5',
  },
  {
    label: '27',
    value: 'option6',
  },
  {
    label: '28',
    value: 'option7',
  },
  {
    label: '29',
    value: 'option8',
  },
];

// 발볼 옵션
export const shoeWidthOptions = [
  {
    label: '좁음',
    value: 'option1',
  },
  {
    label: '보통',
    value: 'option2',
  },
  {
    label: '넓음',
    value: 'option3',
  },
];
