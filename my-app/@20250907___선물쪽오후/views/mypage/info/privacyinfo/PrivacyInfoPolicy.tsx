import { Container, Contents } from '@widgets/layout/Container';

export default function PrivacyInfoPolicy() {
  return (
    <Container showBack title="개인정보 수집 및 이용">
      <Contents>
        {/* 약관 내용 */}
        <div className="ncp-mt-m">
          개인정보 수집 및 이용
          <br />
          약관 내용 출력
        </div>
      </Contents>
    </Container>
  );
}
