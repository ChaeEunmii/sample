'use client';
// 라이브러리
import { useState, useEffect } from 'react';
// 컴포넌트
import {
  Dialog,
  Input,
  Textarea,
  Button,
  Switch,
  Stack,
  FormArea,
  FormItem,
  Line,
  Text,
  Grid,
} from '@shared/ui';
import { useAlert } from '@shared/contexts/AlertContext';
import { MeUploader } from './MeUploader';
// 스타일
import styles from './MeSetting.module.scss';

interface MeSettingProps {
  isOpen: boolean;
  onClose: () => void;
  defaultData?: {
    avatar?: File | string;
    name?: string;
    keywords?: string[];
    bio?: string;
    autoReview?: boolean;
    autoCollection?: boolean;
  };
}

export const MeSetting = ({ isOpen, onClose, defaultData }: MeSettingProps) => {
  const { showAlert } = useAlert();

  // 상태 관리
  const [formData, setFormData] = useState<{
    avatar: File | string;
    name: string;
    keywords: string[];
    bio: string;
    autoReview: boolean;
    autoCollection: boolean;
  }>({
    avatar: '',
    name: '',
    keywords: ['', '', ''],
    bio: '',
    autoReview: false,
    autoCollection: false,
  });

  // defaultData가 변경될 때마다 상태 업데이트
  useEffect(() => {
    if (isOpen && defaultData) {
      setFormData({
        avatar: defaultData.avatar || '',
        name: defaultData.name || '',
        keywords: [
          ...(defaultData.keywords || []),
          ...Array(3 - (defaultData.keywords?.length || 0)).fill(''),
        ].slice(0, 3),
        bio: defaultData.bio || '',
        autoReview: defaultData.autoReview || false,
        autoCollection: defaultData.autoCollection || false,
      });
    }
  }, [isOpen, defaultData]);

  const handleAvatarChange = (file: File | string) => {
    setFormData((prev) => ({
      ...prev,
      avatar: file,
    }));
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleKeywordChange = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords.map((keyword, i) => (i === index ? value : keyword)),
    }));
  };

  const handleConfirm = () => {
    const submitData = {
      ...formData,
      keywords: formData.keywords.filter((keyword) => keyword.trim() !== ''),
    };
    console.log('MeSpace 설정 저장:', submitData);
    onClose();
  };

  const deleteAllPosts = () => {
    showAlert({
      title: '게시물을 모두 삭제하시겠어요?',
      message: '지금까지 게시한 모든 항목이 삭제되며, 삭제된 내용은 복구할 수 없습니다',
      onConfirm: () => console.log('확인 클릭'),
      showCancel: true,
      labelProps: { confirm: '확인', cancel: '취소' },
    });
  };

  const isFormValid = formData.name.trim() !== '';

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="MeSpace 설정"
      showClose
      maximize
      footer={
        <Button variant="primary" onClick={handleConfirm} disabled={!isFormValid}>
          변경하기
        </Button>
      }
    >
      {/* 썸네일 등록 */}
      <MeUploader className={styles.avatar} onChange={(file) => handleAvatarChange(file)} />

      {/* 정보 입력 */}
      <FormArea type="vertical">
        <FormItem label="닉네임" required>
          <Input
            placeholder="닉네임 입력 (13자 이내)"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            maxLength={13}
            required
          />
        </FormItem>

        <FormItem label="키워드">
          <Stack vertical type="field">
            {formData.keywords.map((keyword, index) => (
              <Input
                key={index}
                placeholder="키워드 입력 (8자 이내)"
                value={keyword}
                onChange={(e) => handleKeywordChange(index, e.target.value)}
                maxLength={8}
              />
            ))}
          </Stack>
        </FormItem>

        <FormItem label="Bio">
          <Textarea
            placeholder="Bio 입력 (50자 이내)"
            maxLength={50}
            value={formData.bio}
            onChange={(e) => handleInputChange('bio', e.target.value)}
          />
        </FormItem>
      </FormArea>

      <Line variant="bold" margin="5" />

      {/* 추가옵션 */}
      <Grid gutter={32}>
        <div className={styles.option}>
          <label htmlFor="auto-review">
            <Text as="strong" weight="medium">
              리뷰 자동 게시 설정
            </Text>
            <Text color="gray3">작성한 상품 리뷰가 자동으로 게시됩니다.</Text>
          </label>
          <Switch
            id="auto-review"
            checked={formData.autoReview}
            onChange={(e) => handleInputChange('autoReview', e.target.checked)}
          />
        </div>

        <div className={styles.option}>
          <label htmlFor="auto-collection">
            <Text as="strong" weight="medium">
              컬렉션 자동 게시 설정
            </Text>
            <Text color="gray3">작성한 공개 컬렉션이 자동으로 게시됩니다.</Text>
          </label>
          <Switch
            id="auto-collection"
            checked={formData.autoCollection}
            onChange={(e) => handleInputChange('autoCollection', e.target.checked)}
          />
        </div>

        <div className={styles.option}>
          <div>
            <Text as="strong" weight="medium">
              게시물 전체 삭제
            </Text>
            <Text color="gray3">지금까지 게시한 모든 항목이 삭제됩니다.</Text>
          </div>
          <Button variant="tertiary" size="smaller" onClick={deleteAllPosts}>
            삭제
          </Button>
        </div>
      </Grid>
    </Dialog>
  );
};
