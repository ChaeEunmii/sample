import { Input, Button, Stack, FormArea, FormItem } from '@shared/ui';

interface Address {
  zipcode: string;
  defaultAddress: string;
  detailAddress: string;
}

interface AddressSearchProps {
  /** 주소 정보 */
  address?: Address;
  /** 주소 필드 변경 시 호출되는 콜백 */
  onChange?: (field: keyof Address, value: string) => void;
  /** 렌더 타입: type1 = 기존(폼 컨테이너 포함), type2 = 필드만(headless) */
  type?: 'type1' | 'type2';
  /** 상세주소 invalid 표시 (type2) */
  detailInvalid?: boolean;
  /** FormItem이 주입하는 id */
  id?: string;
}

export const AddressSearch = ({
  address,
  onChange,
  type = 'type1',
  detailInvalid,
  id,
}: AddressSearchProps) => {
  // 주소 검색 버튼 클릭 시 호출될 핸들러
  const handleSearchClick = () => {
    console.log('주소 검색 API 호출');
  };
  // type2 (FormArea, FormItem 페이지에서 감싸서 사용)
  if (type === 'type2') {
    return (
      <>
        <Stack type="field">
          <Input
            id={id}
            name="zipcode"
            value={address?.zipcode ?? ''}
            onChange={(e) => onChange?.('zipcode', e.target.value)}
            aria-label="우편번호"
            placeholder="우편번호"
            readOnly
            size="large"
          />
          <Button variant="primary" size="large" onClick={handleSearchClick}>
            주소검색
          </Button>
        </Stack>
        <Input
          name="defaultAddress"
          value={address?.defaultAddress ?? ''}
          onChange={(e) => onChange?.('defaultAddress', e.target.value)}
          aria-label="기본주소"
          placeholder="기본주소"
          readOnly
          size="large"
          className="ncp-mt-xs"
        />
        <Input
          name="detailAddress"
          value={address?.detailAddress ?? ''}
          onChange={(e) => onChange?.('detailAddress', e.target.value)}
          aria-label="상세주소"
          placeholder="상세주소 입력"
          size="large"
          className="ncp-mt-xs"
          invalid={!!detailInvalid}
        />
      </>
    );
  }

  // 기존 동작(type1): FormArea + FormItem 유지 (레거시 영향 없음)
  return (
    <FormArea>
      <FormItem>
        <Stack type="field">
          <Input
            name="zipcode"
            value={address?.zipcode ?? ''}
            onChange={(e) => onChange?.('zipcode', e.target.value)}
            aria-label="우편번호"
            readOnly
            size="large"
          />
          <Button variant="primary" size="large" onClick={handleSearchClick}>
            주소검색
          </Button>
        </Stack>
      </FormItem>

      <FormItem>
        <Input
          name="defaultAddress"
          value={address?.defaultAddress ?? ''}
          onChange={(e) => onChange?.('defaultAddress', e.target.value)}
          aria-label="기본주소"
          readOnly
          size="large"
        />
      </FormItem>

      <FormItem>
        <Input
          name="detailAddress"
          value={address?.detailAddress ?? ''}
          onChange={(e) => onChange?.('detailAddress', e.target.value)}
          aria-label="상세주소"
          size="large"
        />
      </FormItem>
    </FormArea>
  );
};

AddressSearch.displayName = 'AddressSearch';
