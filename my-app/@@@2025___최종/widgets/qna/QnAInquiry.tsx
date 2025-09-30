'use client';
// 라이브러리
import { useState, useEffect } from 'react';
// 컴포넌트
import {
  Dialog,
  Input,
  Textarea,
  Button,
  InfoList,
  InfoItem,
  Checkbox,
  CheckboxGroup,
  Text,
} from '@shared/ui';
import { OrderItem } from '@widgets/product/OrderItem';
// 스타일
import styles from './QnAInquiry.module.scss';

interface ProductInfo {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  brand: string;
  title: string;
}

interface QnAInquiryProps {
  isOpen: boolean;
  onClose: () => void;
  product?: ProductInfo;
  defaultData?: {
    title?: string;
    content?: string;
    isSecret?: boolean;
    enableSms?: boolean;
    agreePrivacy?: boolean;
  };
}

export const QnAInquiry = ({ isOpen, onClose, product, defaultData }: QnAInquiryProps) => {
  const maskedPhoneNumber = '010-****-5678'; //사용자 전화번호(임시)

  // 체크박스 초기값 설정
  const getDefaultValues = () => {
    const values = [];
    if (defaultData?.isSecret) values.push('secret');
    if (defaultData?.enableSms) values.push('sms');
    return values;
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // 상태 관리
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    agreePrivacy: false,
  });

  // defaultData가 변경될 때마다 상태 업데이트
  useEffect(() => {
    if (isOpen) {
      setFormData({
        title: defaultData?.title || '',
        content: defaultData?.content || '',
        agreePrivacy: defaultData?.agreePrivacy || false,
      });
      setSelectedOptions(getDefaultValues());
    }
  }, [isOpen, defaultData]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleConfirm = () => {
    console.log('질문 등록됨:', formData);
    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={defaultData ? '수정하기' : '질문하기'}
      showClose
      maximize
      footer={
        <>
          <Button onClick={onClose}>취소</Button>
          <Button variant="primary" onClick={handleConfirm} disabled={!formData.agreePrivacy}>
            등록
          </Button>
        </>
      }
    >
      {/* 상품 정보 표시 */}
      {product && (
        <OrderItem
          className="ncp-mt-l"
          items={[
            {
              id: product.id,
              image: product.image,
              brand: product.brand,
              title: product.title,
            },
          ]}
          isVerticalCenter
        />
      )}

      {/* 질문 입력 폼 */}
      <div className={styles.question}>
        <Input
          title="질문 제목"
          placeholder="제목"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
        <Textarea
          title="질문 내용"
          placeholder="질문 내용을 입력하세요"
          maxLength={200}
          value={formData.content}
          onChange={(e) => handleInputChange('content', e.target.value)}
        />
      </div>

      {/* 체크박스 옵션들 */}
      <CheckboxGroup
        vertical
        value={selectedOptions}
        onChange={setSelectedOptions}
        options={[
          {
            label: '비공개 문의',
            value: 'secret',
          },
          {
            label: (
              <div>
                <Text>SMS 알림 ({maskedPhoneNumber})</Text>
                <Text variant="desc">연락처가 변경된 경우 회원정보에서 수정해 주세요</Text>
              </div>
            ),
            value: 'sms',
          },
        ]}
      />

      {/* 개인정보 동의 */}
      <div className={styles.privacy}>
        <Checkbox
          label={
            <Text as="span" weight="semibold">
              개인정보 수집/이용에 대한 동의
            </Text>
          }
          checked={formData.agreePrivacy}
          onChange={(e) => handleInputChange('agreePrivacy', e.target.checked)}
        />

        <InfoList variant="stacked">
          <InfoItem title="수집목적" content="상품 문의 처리 및 답변" />
          <InfoItem title="수집항목" content="휴대폰 번호, 문의 내용" />
          <InfoItem title="보유 및 이용기간" content="문의 처리 완료 후 1년" />
        </InfoList>
      </div>
    </Dialog>
  );
};
