'use client';

import { Dialog, Heading, Text, Icon, ButtonArea, Button, TextList } from '@shared/ui';
import styles from './AppAccess.module.scss';

interface AppAccessDialogProps {
  os: 'ios' | 'aos';
  isOpen: boolean;
  onClose: () => void;
}

export default function AppAccessDialog({ os, isOpen, onClose }: AppAccessDialogProps) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Heading as="h1" size="6" weight="bold">
        편리한 HiHi 이용을 위한
        <br />앱 접근 권한 안내해 드려요
      </Heading>
      <ul className={styles.list}>
        <li>
          <Icon name="history" size="large" className={styles.icon} />
          <div className={styles.text}>
            <Heading size="3" weight="semibold">
              기기 및 앱 기록 (필수)
            </Heading>
            <Text color="gray2">앱 버전 확인 및 서비스 최적화</Text>
          </div>
        </li>
        {os === 'aos' && (
          <li>
            <Icon name="call" size="large" className={styles.icon} />
            <div className={styles.text}>
              <Heading size="3" weight="semibold">
                통화 상태 (필수)
              </Heading>
              <Text color="gray2">중복 로그인 구분, 기계 ID정보 확인, 매장 전화 연결</Text>
            </div>
          </li>
        )}
        <li>
          <Icon name="album" size="large" className={styles.icon} />
          <div className={styles.text}>
            <Heading size="3" weight="semibold">
              사진/저장공간{' '}
              <Text as="span" color="gray3">
                (선택)
              </Text>
            </Heading>
            <Text color="gray2">포토 상품평, 1:1 문의</Text>
          </div>
        </li>
        <li>
          <Icon name="contact" size="large" className={styles.icon} />
          <div className={styles.text}>
            <Heading size="3" weight="semibold">
              연락처{' '}
              <Text as="span" color="gray3">
                (선택)
              </Text>
            </Heading>
            <Text color="gray2">선물하기 연락처 불러오기</Text>
          </div>
        </li>
        <li>
          <Icon name="camera" size="large" className={styles.icon} />
          <div className={styles.text}>
            <Heading size="3" weight="semibold">
              카메라{' '}
              <Text as="span" color="gray3">
                (선택)
              </Text>
            </Heading>
            <Text color="gray2">포토 상품평, 1:1 문의, QR코드/바코드 검색, 테이블오더</Text>
          </div>
        </li>
        <li>
          <Icon name="notice" size="large" className={styles.icon} />
          <div className={styles.text}>
            <Heading size="3" weight="semibold">
              알림{' '}
              <Text as="span" color="gray3">
                (선택)
              </Text>
            </Heading>
            <Text color="gray2">쇼핑정보, 혜택, 이벤트 안내</Text>
          </div>
        </li>
        <li>
          <Icon name="gps" size="large" className={styles.icon} />
          <div className={styles.text}>
            <Heading size="3" weight="semibold">
              위치{' '}
              <Text as="span" color="gray3">
                (선택)
              </Text>
            </Heading>
            <Text color="gray2">웨이팅</Text>
          </div>
        </li>
        {os === 'aos' && (
          <li>
            <Icon name="fingerprint" size="large" className={styles.icon} />
            <div className={styles.text}>
              <Heading size="3" weight="semibold">
                생체인증{' '}
                <Text as="span" color="gray3">
                  (선택)
                </Text>
              </Heading>
              <Text color="gray2">로그인</Text>
            </div>
          </li>
        )}
        {os === 'ios' && (
          <li>
            <Icon name="faceid" size="large" className={styles.icon} />
            <div className={styles.text}>
              <Heading size="3" weight="semibold">
                Face ID{' '}
                <Text as="span" color="gray3">
                  (선택)
                </Text>
              </Heading>
              <Text color="gray2">로그인</Text>
            </div>
          </li>
        )}
      </ul>
      <TextList
        data={[
          '필수 접근 권한 미동의 시 서비스 이용이 제한됩니다.',
          '동의하지 않을 시 해당 기능 이용이 불가하며, 동의하지 않으셔도 해당 기능 외 서비스 이용이 가능합니다.',
        ]}
        variant="info"
      />
      <ButtonArea margin="2">
        <Button variant="primary" onClick={onClose}>
          확인
        </Button>
      </ButtonArea>
    </Dialog>
  );
}
