'use client';

import { useState, useEffect } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  TextList,
  ButtonArea,
  Button,
  Box,
  FormArea,
  FormItem,
  Text,
  Switch,
  Collapse,
  Heading,
  Chip,
  Input,
  Icon,
  SelectDrawer,
} from '@shared/ui';
import { AgreementGroup } from '@widgets/form';
import { PERSONALSETTING_AGREEMENTS } from '@views/policy/agreements-data';
import {
  beautyOptions,
  shoeSizeOptions,
  topSizeOptions,
  bottomSizeOptions,
  shoeWidthOptions,
} from './PersonalSettingOptions';
import styles from './PersonalSetting.module.scss';

export default function PersonalSetting() {
  // 선택 옵션
  const [beautyValues, setBeautyValues] = useState<Record<string, string | string[]>>({});

  // 선택 값
  const [shoeSizeValue, setShoeSizeValue] = useState('');
  const [topSizeValue, setTopSizeValue] = useState('');
  const [bottomSizeValue, setBottomSizeValue] = useState('');

  // 나의 맞춤정보 비공개
  const [isLockSwitch, setIsLockSwitch] = useState(false);

  // 전체동의
  const [agreeStates, setAgreeStates] = useState<Record<string, boolean>>({});
  const [disabledStates, setDisabledStates] = useState<Record<string, boolean>>({});

  const handleCheckChange = (id: string, checked: boolean) => {
    setAgreeStates((prev) => ({ ...prev, [id]: checked }));
  };

  // 동의항목 초기설정
  useEffect(() => {
    const defaultCheckedId = [''];
    const defaultDisabledIds = [''];

    // 초기 체크 상태 설정
    setAgreeStates((prev) => {
      const updated = { ...prev };
      defaultCheckedId.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });

    // 초기 disabled 상태 설정
    setDisabledStates((prev) => {
      const updated = { ...prev };
      defaultDisabledIds.forEach((id) => {
        updated[id] = true;
      });
      return updated;
    });
  }, []);

  const handleBeautyChange = (key: string, value: string | string[]) => {
    setBeautyValues((prev) => ({ ...prev, [key]: value }));
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
            <div className={styles.field}>
              <FormArea type="vertical">
                <FormItem label="키">
                  <Input suffix="cm" placeholder="키입력" size="large" />
                </FormItem>
              </FormArea>
              <FormArea type="vertical">
                <FormItem label="몸무게">
                  <Input suffix="kg" placeholder="몸무게 입력" size="large" />
                </FormItem>
              </FormArea>
            </div>
          </Collapse.Content>
        </Collapse>
        {/* 사이즈 */}
        <Collapse variant="section" className={styles.collapse} defaultOpen>
          <Collapse.Control border>
            <Heading as="strong" size="5" indent>
              사이즈
            </Heading>
          </Collapse.Control>
          <Collapse.Content>
            <div className={styles.field}>
              <FormArea type="vertical">
                <FormItem label="상의">
                  <SelectDrawer
                    title="상의사이즈 선택"
                    options={topSizeOptions}
                    value={topSizeValue}
                    onChange={setTopSizeValue}
                    placeholder="선택하기"
                    size="large"
                  />
                </FormItem>
              </FormArea>
              <FormArea type="vertical">
                <FormItem label="하의">
                  <SelectDrawer
                    title="하의사이즈 선택"
                    options={bottomSizeOptions}
                    value={bottomSizeValue}
                    onChange={setBottomSizeValue}
                    placeholder="선택하기"
                    size="large"
                  />
                </FormItem>
              </FormArea>
            </div>
            <FormArea type="vertical">
              <FormItem label="신발">
                <SelectDrawer
                  title="발사이즈 선택"
                  options={shoeSizeOptions}
                  value={shoeSizeValue}
                  onChange={setShoeSizeValue}
                  placeholder="선택하기"
                  size="large"
                />
              </FormItem>
              <FormItem label="발볼">
                <Chip
                  variant="filled"
                  columns={'auto'}
                  size="small"
                  data={shoeWidthOptions}
                  name="shoes-width"
                />
              </FormItem>
            </FormArea>
          </Collapse.Content>
        </Collapse>
        {/* 뷰티 */}
        <Collapse variant="section" className={styles.collapse} defaultOpen>
          <Collapse.Control border>
            <Heading as="strong" size="5" indent>
              뷰티
            </Heading>
          </Collapse.Control>
          <Collapse.Content>
            {/* 반복문처리 */}
            <FormArea type="vertical" gap="3" className="ncp-mt-x0">
              {Object.entries(beautyOptions).map(([key, option]) => (
                <FormItem key={key} label={option.label}>
                  <Chip
                    variant="filled"
                    size="small"
                    columns="auto"
                    data={option.data}
                    name={key}
                    selected={beautyValues[key]}
                    onChange={(value) => handleBeautyChange(key, value)}
                  />
                </FormItem>
              ))}
            </FormArea>
          </Collapse.Content>
        </Collapse>
        {/* 라이프 */}
        <Collapse variant="section" className={styles.collapse} defaultOpen>
          <Collapse.Control border>
            <Heading as="strong" size="5" indent>
              라이프
            </Heading>
          </Collapse.Control>
          <Collapse.Content>라이프</Collapse.Content>
        </Collapse>
        {/* 나의 맞춤정보 비공개 설정 */}
        <Box className={styles.switchBox}>
          <div className={styles.label}>
            <Text as="label" htmlFor="depositView" size="5" weight="semibold" color="primary">
              나의 맞춤정보 비공개
            </Text>
            <Text size="3" color="gray2">
              설정하신 맞춤정보 공개 여부에 따라 작성하신 모든 리뷰에
              <br />
              해당 정보가 함께 노출되거나 표시되지 않습니다.
            </Text>
          </div>
          <Switch
            id="depositView"
            checked={isLockSwitch}
            onChange={(e) => setIsLockSwitch(e.target.checked)}
          />
        </Box>
        {/* 동의 */}
        <AgreementGroup
          variant="type4"
          data={PERSONALSETTING_AGREEMENTS}
          checked={agreeStates[PERSONALSETTING_AGREEMENTS.id]}
          onChange={handleCheckChange}
          allStates={agreeStates}
          disabledStates={disabledStates}
          className="ncp-mt-xl"
        />
        <div className={styles.info}>
          <Icon name="info" size="small" />
          <Text as="span" size="3" color="gray3">
            이에 동의하지 않으실 수 있으나 동의하지 않으실 경우 맞춤 리뷰 및 상품 추천 서비스를 제공
            받으실 수 없습니다.
          </Text>
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
