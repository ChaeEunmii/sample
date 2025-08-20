export const mockQnAData = [
  {
    id: 'qna-001',
    userId: 'user123',
    date: new Date('2025-03-25'),
    question: {
      title: '제품 배송은 언제 되나요?',
    },
    answers: [
      {
        id: 'answer-001',
        content: '주문 후 2-3일 내에 배송됩니다.',
        date: new Date('2025-03-26'),
      },
    ],
    isSecret: true,
  },
  {
    id: 'qna-002',
    userId: 'user456',
    date: new Date('2025-03-24'),
    question: {
      title: '제품 사이즈 문의 드립니다 제품 사이즈 문의 드립니다.',
      content: `제품 배송은 언제 되나요? 빨리 받아보고 싶은데요.. 너무 오래 걸리는 것 같습니다 ㅠㅠ`,
    },
    answers: [
      {
        id: 'answer-002-1',
        content: '사이즈표를 참고해주세요. 추가 문의사항이 있으시면 언제든 연락주세요.',
        date: new Date('2025-03-25'),
      },
      {
        id: 'answer-002-2',
        content: '사이즈표를 참고해주세요. 추가 문의사항이 있으시면 언제든 연락주세요.',
        date: new Date('2025-03-25'),
      },
    ],
    isMyPost: true,
  },
  {
    id: 'qna-003',
    userId: 'user789',
    date: new Date('2025-03-23'),
    question: {
      title: '교환/반품 정책이 궁금합니다',
      content: '교환 되나요???',
    },
  },
];
