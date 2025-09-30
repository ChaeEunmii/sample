import clsx from 'clsx';
import { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Dialog,
  FormArea,
  FormItem,
  InfoItem,
  InfoList,
  TextList,
  TitleBar,
  Text,
  Checkbox,
} from '@shared/ui';
import { useToast } from '@/shared/contexts/ToastContext';

interface SubscriptionSettingsDialogProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 변경하기 여부 (마이페이지-구독설정 UI 렌더) */
  isChange?: boolean;
  /** 기본값 설정 */
  defaultValues?: Record<string, string | string[]>;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

// 정기구독 일정
const chipItems = [
  {
    title: '이용기간',
    name: 'period',
    options: [
      { label: '1회 맛보기', value: 'trial' },
      { label: '1개월', value: 'month1' },
      { label: '2개월', value: 'month2' },
      { label: '3개월', value: 'month3' },
      { label: '4개월', value: 'month4' },
      { label: '5개월', value: 'month5' },
      { label: '6개월', value: 'month6' },
      { label: '7개월', value: 'month7' },
      { label: '8개월', value: 'month8' },
      { label: '9개월', value: 'month9' },
      { label: '10개월', value: 'month10' },
      { label: '11개월', value: 'month11' },
      { label: '12개월', value: 'month12' },
      { label: '무기한', value: 'unlimited' },
    ],
  },
  {
    title: '배송주기',
    name: 'interval',
    options: [
      { label: '매주 1회', value: 'weekly1' },
      { label: '매주 2회', value: 'weekly2' },
      { label: '매주 3회', value: 'weekly3' },
      { label: '매주 4회', value: 'weekly4' },
      { label: '매주 5회', value: 'weekly5' },
      { label: '2주에 1번', value: 'biweekly' },
      { label: '3주에 1번', value: 'triweekly' },
      { label: '4주에 1번', value: 'quadweekly' },
      { label: '8주에 1번', value: 'octweekly' },
    ],
  },
  {
    title: '희망 배송요일',
    name: 'weekday',
    options: [
      { label: '월요일', value: 'mon' },
      { label: '화요일', value: 'tue' },
      { label: '수요일', value: 'wed' },
      { label: '목요일', value: 'thu' },
      { label: '금요일', value: 'fri' },
      { label: '토요일', value: 'sat' },
      { label: '일요일', value: 'sun' },
    ],
  },
];

export const SubscriptionSettingsDialog = ({
  isOpen = false,
  onClose,
  isChange = false,
  defaultValues = {},
  className,
}: SubscriptionSettingsDialogProps) => {
  const { showToast } = useToast();

  // 상태 관리
  // const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
  const [selectedValues, setSelectedValues] =
    useState<Record<string, string | string[]>>(defaultValues);

  // Chip 선택 핸들러
  const handleStandardPaySelect = (name: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [name]: value }));
  };

  // 정기구독 일정을 모두 선택했는지 판단
  const isAllSelected = chipItems.every((item) => selectedValues[item.name]);

  // 배송 방법 안내
  const deliveryGuide = [
    {
      title: '택배배송',
      content: ['희망 배송 요일에 일반 택배 기사님이 배송합니다.'],
    },
    {
      title: '새벽배송',
      content: [
        '배송지에 따라 선택이 가능한 배송 방법입니다.',
        '희망 배송 요일 새벽에 현대백화점에서 직접 배송합니다.',
      ],
    },
    {
      title: '당일배송',
      content: [
        '배송지에 따라 선택이 가능한 배송 방법입니다.',
        '희망 배송 요일 당일 중 예정 시간 내에 현대백화점에서 직접 배송합니다.',
      ],
    },
  ];

  // 기본 안내 문구 정의
  const DEFAULT_INFO_LIST = [
    '등록된 결제 수단으로 배송 2일 전 자동 결제됩니다.',
    '정기배송일이 휴무일인 경우 전날 배송됩니다.',
  ];

  // isChange(마이페이지-구독설정) 안내 문구 정의
  const CHANGE_INFO_LIST = [
    '등록된 결제 수단으로 배송 2일 전 자동 결제됩니다.',
    '정기배송일이 휴무일인 경우 전날 배송됩니다.',
    '결제가 완료된 일정은 변경할 수 없습니다.',
    <>
      주문/배송 메뉴에서 결제된 구독 주문을 직접 취소하시거나, 고객센터{' '}
      <a href="tel:1800-2233"> 1800-2233</a>로 문의 주세요.
    </>,
  ];

  // 안내문구 렌더
  const renderTextList = !isChange ? DEFAULT_INFO_LIST : CHANGE_INFO_LIST;

  return (
    <Dialog
      title="정기구독 설정"
      isOpen={isOpen}
      onClose={onClose}
      maximize
      showClose
      footer={
        <>
          {!isChange ? (
            <Button
              variant="primary"
              size="large"
              onClick={() => showToast('정기구독 일정 정보를 모두 선택해주세요.')}
              disabled={!isAllSelected}
            >
              신청하기
            </Button>
          ) : (
            <Button variant="primary" size="large" disabled={!isAllSelected}>
              변경하기
            </Button>
          )}
        </>
      }
      className={clsx(className)}
    >
      <Box size="3">
        <TextList data={renderTextList} variant="level2" />
      </Box>
      <TitleBar title="정기구독 일정" level={!isChange ? '2' : '1'} />
      <FormArea type="vertical" gap="1">
        {chipItems.map((item, index) => (
          <FormItem key={index} label={item.title}>
            <Chip
              name={item.name}
              variant="filled"
              data={item.options}
              multiple={item.name === 'weekday'}
              selected={selectedValues[item.name]}
              onChange={(val) => handleStandardPaySelect(item.name, val)}
              size="small"
              columns="auto"
            />
          </FormItem>
        ))}
      </FormArea>
      {!isChange && (
        <>
          <TitleBar title="배송 방법 안내" level="2" />
          <InfoList variant="default" gap="row24" indent>
            {deliveryGuide.map((item, index) => (
              <InfoItem
                key={index}
                title={item.title}
                content={
                  <TextList
                    data={item.content.map((cont) => ({
                      textProps: { color: 'gray2', size: '4' },
                      text: cont,
                    }))}
                    variant="clear"
                    margin="1"
                  />
                }
              />
            ))}
          </InfoList>
        </>
      )}
      {!isChange && (
        <>
          <TitleBar title="첫 배송 예정일" level="2" />
          <Box size="3">
            <Text weight="semibold" size="4">
              지금 신청하시면{' '}
              <Text as="span" color="point">
                2025.04.18(금)
              </Text>
              에 처음 받으실 수 있어요.
            </Text>
          </Box>
        </>
      )}
      <Checkbox label="이용기간 만료 후 자동연장" className="ncp-mt-m" defaultChecked />
    </Dialog>
  );
};

SubscriptionSettingsDialog.displayName = 'SubscriptionSettingsDialog';
