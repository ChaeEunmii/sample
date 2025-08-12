'use client';

import { Section, ImageUploader } from '@shared/ui';
import { ImageFile } from '@shared/ui/blocks/ImageUploader';

const DEFAULT_INFO_LIST = [
  '사진은 최대 8장까지, 10MB 이하의 이미지만 업로드 가능합니다.',
  '체험단 리뷰 작성 시 최소 2장 이상의 이미지를 등록해야 합니다.',
];

type ReviewImageAttachProps = {
  /** 초기 이미지 값 */
  defaultValue?: ImageFile[];
  /** 안내 문구 리스트 */
  infoList?: string[];
  /** 변경 콜백 */
  onChange?: (images: ImageFile[]) => void;
  /** 타이틀 */
  title?: string;
  /** 추가 클래스 */
  className?: string;
};

export function ReviewImageAttach({
  defaultValue,
  infoList = DEFAULT_INFO_LIST,
  onChange,
  title = '이미지 첨부',
  className,
}: ReviewImageAttachProps) {
  return (
    <Section variant="section" title={title} marginTop="4">
      <ImageUploader
        maxFiles={8}
        defaultValue={defaultValue}
        infoList={infoList}
        onChange={onChange}
        className={className}
        pickerType="drawer"
      />
    </Section>
  );
}
