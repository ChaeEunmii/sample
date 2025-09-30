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
  onChange?: (field: string, value: string) => void;
}

export const AddressSearch = ({ address, onChange }: AddressSearchProps) => {
  // 주소 검색 버튼 클릭 시 호출될 핸들러
  const handleSearchClick = () => {
    console.log('주소 검색 API 호출');
  };

  return (
    <>
      <FormArea>
        <FormItem>
          <Stack type="field">
            <Input
              name="zipcode"
              value={address?.zipcode || ''}
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
            value={address?.defaultAddress || ''}
            onChange={(e) => onChange?.('defaultAddress', e.target.value)}
            aria-label="기본주소"
            readOnly
            size="large"
          />
        </FormItem>
        <FormItem>
          <Input
            name="detailedAddress"
            value={address?.detailAddress || ''}
            onChange={(e) => onChange?.('detailAddress', e.target.value)}
            aria-label="상세주소"
            size="large"
          />
        </FormItem>
      </FormArea>
    </>
  );
};

AddressSearch.displayName = 'AddressSearch';
