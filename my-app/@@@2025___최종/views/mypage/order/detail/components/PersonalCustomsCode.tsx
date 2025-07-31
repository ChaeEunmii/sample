import { Section, Text } from '@shared/ui';

interface PersonalCustomsCodeProps {
  /** 주문자 정보 데이터 */
  data: string;
}

/** '개인통관고유부호' 영역 컴포넌트 */
export const PersonalCustomsCode = ({ data }: PersonalCustomsCodeProps) => {
  return (
    <Section title="개인통관고유부호" variant="collapse" level="1" flush borderTop>
      <Text size="5">개인통관고유부호 : {data}</Text>
    </Section>
  );
};
