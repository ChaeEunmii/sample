import { Container, Contents } from '@widgets/layout/Container';

export default function PrivacyInfoOutsourcing() {
  return (
    <Container showBack title="개인정보 처리 위탁">
      <Contents>
        {/* 약관 내용 */}
        <div className="ncp-mt-m">
          개인정보 처리 위탁
          <br />
          약관 내용 출력
        </div>
      </Contents>
    </Container>
  );
}
