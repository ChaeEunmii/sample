'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  TextList,
  ButtonArea,
  Button,
  Box,
  FormArea,
  FormItem,
  Stack,
  Text,
  Switch,
  Collapse,
  Heading,
  Chip,
  Input,
  Select,
  Checkbox,
  InfoList,
  InfoItem,
  CheckboxGroup,
  Icon,
  SelectDrawer,
} from '@shared/ui';
import styles from './PersonalSetting.module.scss';

// 뷰티 옵션 일단샘플
const reasonOptions = [
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
export const liftOptions = {
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

// 정렬 옵션
const sortOptions = [
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

export default function PersonalSetting() {
  // 정렬 값
  const [sortCollectionValue, setSortCollectionValue] = useState('option1');

  // 나의 맞춤정보 비공개
  const [isLockSwitch, setIsLockSwitch] = useState(false);
  const [reasonSelect, setReasonSelect] = useState<string>('');
  // 취소 사유 선택
  const handleReasonSelect = (value: string) => {
    setReasonSelect(value);
  };

  return (
    <Container showBack title="나의 맞춤정보 관리">
      <Contents className={styles.layout}>
        <TitleArea
          title="고객님의 정보를 알려주세요"
          level="2"
          bottomSlot={
            <>
              <TextList
                data={[
                  '고객님의 사이즈/발/피부 정보를 등록 수정할 수 있습니다.',
                  "'나의 맞춤정보 공개' 기능은 상품 리뷰에서 내가 등록한 맞춤 정보를 일괄 노출/비노출 처리할 수 있는 기능입니다.",
                  '고객님의 정보를 매칭해 맞춤 리뷰 및 상품 추천 서비스를 제공 받을 수 있습니다.',
                ]}
                className="ncp-mt-x0"
              />
            </>
          }
        />
        {/* 키와 몸무게 */}
        <Collapse variant="section" className={styles.collapse} defaultOpen>
          <Collapse.Control border>
            <Heading as="strong" size="5" indent>
              키와 몸무게
            </Heading>
          </Collapse.Control>
          <Collapse.Content>
            <Stack type="field" className={styles.fields}>
              <FormArea type="vertical">
                <FormItem label="키">
                  <Input suffix="cm" size="large" className="ncp-w-full" />
                </FormItem>
              </FormArea>
              <FormArea type="vertical">
                <FormItem label="몸무게">
                  <Input suffix="kg" size="large" className="ncp-w-full" />
                </FormItem>
              </FormArea>
            </Stack>
          </Collapse.Content>
        </Collapse>
        {/* 사이즈 */}
        <Collapse variant="section" className={styles.collapse}>
          <Collapse.Control border>
            <Heading as="strong" size="5" indent>
              사이즈
            </Heading>
          </Collapse.Control>
          <Collapse.Content>
            <Stack type="field" className={styles.fields}>
              <FormArea type="vertical">
                <FormItem label="상의">
                  <Select
                    onChange={() => {}}
                    options={[
                      {
                        label: '선택',
                        value: 'select-1',
                      },
                    ]}
                    value=""
                    placeholder="선택하기"
                    size="large"
                  />
                </FormItem>
              </FormArea>
              <FormArea type="vertical">
                <FormItem label="하의">
                  <Select
                    onChange={() => {}}
                    options={[
                      {
                        label: '선택',
                        value: 'select-1',
                      },
                    ]}
                    value=""
                    placeholder="선택하기"
                    size="large"
                  />
                </FormItem>
              </FormArea>
            </Stack>
            <FormArea type="vertical">
              <FormItem label="신발">
                <SelectDrawer
                  title="발사이즈 선택"
                  options={sortOptions}
                  value={sortCollectionValue}
                  onChange={setSortCollectionValue}
                  size="large"
                />
              </FormItem>
              <FormItem label="발볼">
                <Chip
                  columns={'auto'}
                  size="small"
                  data={[
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
                  ]}
                  name="shoes-size"
                />
              </FormItem>
            </FormArea>
          </Collapse.Content>
        </Collapse>
        {/* 뷰티 */}
        <Collapse variant="section" className={styles.collapse}>
          <Collapse.Control border>
            <Heading as="strong" size="5" indent>
              뷰티
            </Heading>
          </Collapse.Control>
          <Collapse.Content>
            {/* 반복문처리 */}
            <FormArea type="vertical" gap="3">
              <FormItem label="피부타입">
                <Chip
                  selected={reasonSelect}
                  onChange={handleReasonSelect}
                  variant="filled"
                  size="small"
                  columns={'auto'}
                  data={reasonOptions}
                  name="cancel-reason-select"
                />
              </FormItem>
            </FormArea>
          </Collapse.Content>
        </Collapse>
        {/* 라이프 */}
        <Collapse variant="section" className={styles.collapse}>
          <Collapse.Control border>
            <Heading as="strong" size="5" indent>
              라이프
            </Heading>
          </Collapse.Control>
          <Collapse.Content>라이프</Collapse.Content>
        </Collapse>
        <Box className="ncp-mt-xl">
          <Stack type="between">
            <div>
              <Text as="label" htmlFor="depositView" size="5" weight="semibold" color="primary">
                나의 맞춤정보 비공개
              </Text>
              <Text size="3" color="gray2">
                설정하신 맞춤정보 공개 여부에 따라 작성하신 모든 리뷰에 해당 정보가 함께 노출되거나
                표시되지 않습니다.
              </Text>
            </div>
            <Switch
              id="depositView"
              checked={isLockSwitch}
              onChange={(e) => setIsLockSwitch(e.target.checked)}
            />
          </Stack>
        </Box>
        <div className="ncp-mt-xl">
          <Collapse variant="section">
            <Collapse.Control border>
              <Checkbox label="개인정보 수집 및 이용 동의(필수)" />
            </Collapse.Control>
            <Collapse.Content>
              <Text color="gray2" size="4" indent reading>
                귀하는 동의를 거부할 권리가 있으나 동의를 거부할 경우, 맞춤 리뷰 및 추천 서비스
                이용이 불가능합니다.
              </Text>
              <Box size="3">
                <InfoList gap="row16">
                  <InfoItem
                    title={
                      <Text size="4" weight="semibold">
                        수집항목
                      </Text>
                    }
                    content={
                      <Text color="gray2" size="4" reading>
                        출생년도, 성별, 키, 몸무게, 상의사이즈, 하의사이즈, 발사이즈, 발볼,
                        피부타입, 피부톤, 피부고민, 거주 인원수, 구성원 형태, 식이 관심사
                      </Text>
                    }
                  />
                  <InfoItem
                    title={
                      <Text size="4" weight="semibold">
                        수집목적
                      </Text>
                    }
                    content={
                      <Text color="gray2" size="4" reading>
                        맞춤 리뷰 및 상품 추천 서비스 제공, 리뷰와 함께 공개 되어 다른 고객
                        상품구매에 도움을 주는 서비스 활용
                      </Text>
                    }
                  />
                  <InfoItem
                    title={
                      <Text size="4" weight="semibold">
                        보유 및 이용기간
                      </Text>
                    }
                    content={
                      <Text color="gray2" size="4" reading>
                        서비스 종료 시 동의 철회시 까지
                      </Text>
                    }
                  />
                </InfoList>
              </Box>
            </Collapse.Content>
          </Collapse>
          <Collapse variant="section">
            <Collapse.Control border>
              <Checkbox label="맞춤정보 마케팅 활용 동의(선택)" />
            </Collapse.Control>
            <Collapse.Content>
              <Text color="gray1" size="4" weight="medium" indent reading>
                사이즈/뷰티 정보를 이용한 추천 서비스 제공 동의
              </Text>
              <Text color="gray2" size="4" indent reading>
                고객님의 저장된 회원정보(출생년도, 성별) 및 아래의 선택적으로 수집된 신체/피부
                정보를 분석하여 서비스가 제공됩니다.
              </Text>
              <Box size="3">
                <InfoList gap="row16">
                  <InfoItem
                    title={
                      <Text size="4" weight="semibold">
                        수집항목
                      </Text>
                    }
                    content={
                      <Text color="gray2" size="4" reading>
                        (문자메세지 수신 동의 시) 휴대전화번호
                        <br />
                        (이메일 수신 동의 시) 이메일 주소
                      </Text>
                    }
                  />
                  <InfoItem
                    title={
                      <Text size="4" weight="semibold">
                        수집목적
                      </Text>
                    }
                    content={
                      <Text color="gray2" size="4" reading>
                        맞춤 리뷰 및 상품 추천 서비스 제공
                      </Text>
                    }
                  />
                  <InfoItem
                    title={
                      <Text size="4" weight="semibold">
                        보유 및 이용기간
                      </Text>
                    }
                    content={
                      <Text color="gray2" size="4" reading>
                        수신 동의 철회 시 까지
                      </Text>
                    }
                  />
                </InfoList>
              </Box>
              <CheckboxGroup
                name="agree"
                options={[
                  {
                    label: 'SMS',
                    value: '1',
                  },
                  {
                    label: '이메일',
                    value: '2',
                  },
                ]}
                className="ncp-mt-s"
              />
            </Collapse.Content>
          </Collapse>
          <div className={styles.info}>
            <Icon name="info" size="small" />
            <Text as="span" size="3" color="gray3">
              이에 동의하지 않으실 수 있으나 동의하지 않으실 경우 맞춤 리뷰 및 상품 추천 서비스를
              제공 받으실 수 없습니다.
            </Text>
          </div>
        </div>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          저장하기
        </Button>
      </ButtonArea>
    </Container>
  );
}
