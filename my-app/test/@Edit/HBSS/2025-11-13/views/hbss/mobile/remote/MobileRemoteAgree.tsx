'use client';

import { useState, useEffect } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  Heading,
  Text,
  TitleArea,
  ButtonArea,
  Button,
  Box,
  Checkbox,
  InfoList,
  InfoItem,
  TextList,
} from '@shared/ui';
import styles from './MobileRemote.module.scss';

export default function MobileRemoteAgree() {
  // 전체 동의
  const [isAllAgree, setIsAllAgree] = useState(false);

  // 개별 동의
  const [isAgree1, setIsAgree1] = useState(false);
  const [isAgree2, setIsAgree2] = useState(false);
  const [isAgree3, setIsAgree3] = useState(false);

  // 하위 항목 중 하나라도 변경되면 전체 동의 상태를 자동 반영
  useEffect(() => {
    setIsAllAgree(isAgree1 && isAgree2 && isAgree3);
  }, [isAgree1, isAgree2, isAgree3]);

  // 전체 동의 토글 시 하위 항목 일괄 토글
  const handleToggleAll = (checked: boolean) => {
    setIsAllAgree(checked);
    setIsAgree1(checked);
    setIsAgree2(checked);
    setIsAgree3(checked);
  };

  return (
    <Container title="현대백화점 명절 배송 접수">
      <Contents className={styles.layout}>
        <TitleArea
          title={<>개인정보제공동의</>}
          description={
            <Text as="span" size="5" color="gray2" weight="regular">
              현대백화점이 앞장서 실천하는 개인정보 보호 수칙
              <br />
              안심하시고 이용하세요.
            </Text>
          }
          className="ncp-mb-x0"
        />
        <Checkbox
          variant="boxed"
          label="전체 동의합니다"
          checked={isAllAgree}
          onChange={(e) => handleToggleAll(e.target.checked)}
          className={styles.allAgree}
        />
        {/* 목록들 */}
        <div className={styles.agrees}>
          <div className={styles.group}>
            <Box size="3" className={styles.box}>
              <InfoList className={styles.infos}>
                <InfoItem
                  title={
                    <Heading size="3" weight="medium" reading>
                      수집항목
                    </Heading>
                  }
                  content={
                    <Text size="5" color="gray2" reading>
                      보내시는 분, 대리인, 받으시는 분과 관련된 성명, 주소, 연락처, 회사명 등
                    </Text>
                  }
                />
                <InfoItem
                  title={
                    <Heading size="3" weight="medium" reading>
                      수집목적
                    </Heading>
                  }
                  content={
                    <Text size="5" color="gray2" reading>
                      행사정보, 혜택안내, 회원모집 등 정보 안내 문자 발송
                    </Text>
                  }
                />
                <InfoItem
                  title={
                    <Heading size="3" weight="medium" reading>
                      보유기간
                    </Heading>
                  }
                  content={
                    <Text size="5" color="gray2" reading>
                      배송완료일로부터 60일 이내 파기
                    </Text>
                  }
                />
              </InfoList>
            </Box>
            <div className={styles.bottom}>
              <Checkbox
                label="상기 목적을 위해 정보를 제공하는 데 동의합니다."
                checked={isAgree1}
                onChange={(e) => setIsAgree1(e.target.checked)}
              />
              <Text size="3" color="gray3" indent className={styles.infoText}>
                동의를 거부할 권리가 있으나, 동의 거부 시 배송 주문 신청이 불가합니다.
              </Text>
            </div>
          </div>
          <div className={styles.group}>
            <Heading size="5" color="black" weight="semibold" className={styles.tit}>
              명절 상품 가이드북 마케팅정보 수신 동의
            </Heading>
            <Box size="3" className={styles.box}>
              <InfoList className={styles.infos}>
                <InfoItem
                  title={
                    <Heading size="3" weight="medium">
                      수집항목
                    </Heading>
                  }
                  content={
                    <Text size="5" color="gray2" reading>
                      주문 신청자(또는 대리인)의 성명, 회사명, 주소, 연락처
                    </Text>
                  }
                />
                <InfoItem
                  title={
                    <Heading size="3" weight="medium">
                      수집목적
                    </Heading>
                  }
                  content={
                    <Text size="5" color="gray2" reading>
                      현대백화점의 명절상품 관련 행사/혜택 안내, 명절 상품 가이드북 발송을 위한 연락
                    </Text>
                  }
                />
                <InfoItem
                  title={
                    <Heading size="3" weight="medium">
                      보유기간
                    </Heading>
                  }
                  content={
                    <Text size="5" color="gray2" reading>
                      동의 철회시까지
                    </Text>
                  }
                />
              </InfoList>
            </Box>
            <div className={styles.bottom}>
              <Checkbox
                label="마케팅정보를 수신함에 동의합니다. (선택)"
                checked={isAgree2}
                onChange={(e) => setIsAgree2(e.target.checked)}
              />
              <Text size="3" color="gray3" indent className={styles.infoText}>
                동의하시는 경우, 전화 연락을 드릴 수 있습니다.
              </Text>
            </div>
          </div>
          <div className={styles.group}>
            <Heading size="5" color="black" weight="semibold" className={styles.tit}>
              현대백화점 마케팅정보 문자 수신 동의
            </Heading>
            <Box size="3" className={styles.box}>
              <InfoList>
                <InfoItem
                  title={
                    <Heading size="3" weight="medium">
                      수집항목
                    </Heading>
                  }
                  content={
                    <Text size="5" color="gray2" reading>
                      주문 신청자의 휴대전화 번호
                    </Text>
                  }
                />
                <InfoItem
                  title={
                    <Heading size="3" weight="medium">
                      수집목적
                    </Heading>
                  }
                  content={
                    <Text size="5" color="gray2" reading>
                      명절 선물 접수 점포의 기타 행사/혜택 안내, 현대백화점 카드 및 멤버십 회원 모집
                    </Text>
                  }
                />
                <InfoItem
                  title={
                    <Heading size="3" weight="medium">
                      보유기간
                    </Heading>
                  }
                  content={
                    <Text size="5" color="gray2" reading>
                      2년(※보유기간 내 동의 철회 시 즉시 파기)
                    </Text>
                  }
                />
              </InfoList>
            </Box>
            <div className={styles.bottom}>
              <Checkbox
                label="문자 메시지로 마케팅 정보를 수신함에 동의합니다. (선택)"
                checked={isAgree3}
                onChange={(e) => setIsAgree3(e.target.checked)}
              />
              <TextList
                data={[
                  '현대백화점카드/H.Point 회원이신 경우, 문자가 발송되지 않으며, 수집된 정보를 즉시 파기합니다.',
                  '마케팅 정보 문자 메시지 발송은 KT, 현대퓨처넷에 위탁 처리합니다.',
                ]}
                variant="info"
                className={styles.infoText}
              />
            </div>
          </div>
        </div>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          확인
        </Button>
      </ButtonArea>
    </Container>
  );
}
