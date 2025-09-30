'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  Text,
  Button,
  Stack,
  Checkbox,
  Select,
  TextList,
  TitleBar,
  TextButton,
  Table,
} from '@shared/ui';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import styles from './LoginLog.module.scss';

// 기간 정렬 옵션
const periodOptions = [
  {
    label: '오늘',
    value: 'option1',
  },
  {
    label: '1개월',
    value: 'option2',
  },
  {
    label: '3개월',
    value: 'option3',
  },
];

export default function LoginLog() {
  // 기간 정렬
  const [sortBrandValue, setSortBrandValue] = useState('option3');

  return (
    <Container showBack title="로그인 기록">
      <Contents className={styles.layout}>
        <Stack type="between" className={styles.total}>
          <Text size="4" weight="medium" color="gray2">
            총 <em className="ncp-font-weight-semibold">15개</em>
          </Text>
          <Select
            title="정렬"
            options={periodOptions}
            value={sortBrandValue}
            onChange={setSortBrandValue}
            variant="ghost"
            placeholder="기간 선택"
            className={styles.select}
          />
        </Stack>
        <Table className="ncp-mt-s">
          <Table.Caption>리뷰 유형별 적립금을 나타냅니다.</Table.Caption>
          <Table.Head>
            <Table.Row>
              <Table.Cell colHeader>접속아이피(IP)</Table.Cell>
              <Table.Cell colHeader>접속일시</Table.Cell>
              <Table.Cell colHeader>접속기기</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>111.123.***.45</Table.Cell>
              <Table.Cell>
                2025.07.01(화)
                <br />
                12.02.59
              </Table.Cell>
              <Table.Cell>MOBILE</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>111.123.***.45</Table.Cell>
              <Table.Cell>
                2025.07.01(화)
                <br />
                12.02.59
              </Table.Cell>
              <Table.Cell>PC</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>111.123.***.45</Table.Cell>
              <Table.Cell>
                2025.07.01(화)
                <br />
                12.02.59
              </Table.Cell>
              <Table.Cell>MOBILE</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div className={styles.more}>
          <Button size="small" suffixIcon="arrowDown" variant="tertiary" round>
            더보기
          </Button>
        </div>
        <TitleBar type="docs" title="이메일 알림 서비스" level="2" />
        <Stack type="between">
          <Checkbox label="abc***@gmail.com" />
          <TextButton variant="underline" size="1" color="gray2">
            회원 정보변경
          </TextButton>
        </Stack>
        {/* 확인해주세요 */}
        <ConfirmInfo>
          <TextList
            data={[
              '고객님의 로그인 정보를 확인하실 수 있습니다.',
              '로그인 기록은 개인정보취급방침에 명시된 통신비밀보호법에 의해 최대 90일 까지의 로그를 확인 하실 수 있습니다.',
              '로그인 일시와 접속아이피(IP)주소, 서비스 이용 내역 등이 표시되어 타인의 불법적인 접근시도(계정도용 등)을 빠르게 인지 가능하며, 불법 접근 확인 시 사이버경찰청(www.police.go.kr) 또는 사이버테러응대센터(www.netan.go.kr)을 통해 신고해주시기 바랍니다.',
              '로그인 기록 중 일부를 삭제 또는 숨기기 하실 수 없으며, 시스템 정기점검 및 업그레이드의 사유가 발생한 경우에는 로그인 기록이 일부 누락될 수 있습니다.',
              'NCP에서는 최근 3개월 동안 사용한 적 없는 기기에서 로그인 시 회원정보에 저장된 메일로 안내 서비스를 진행하고 있습니다. 해당 기능은 실시간 차단 기능은 아니지만, 사용자 몰래 로그인한 경우 이메일을 통해 통지를 받을 수 있으니 이를 통해 사용중인 계정의 비밀번호를 변경하여 계정을 보호 하실 수 있습니다.',
            ]}
            variant="info"
          />
        </ConfirmInfo>
      </Contents>
    </Container>
  );
}
