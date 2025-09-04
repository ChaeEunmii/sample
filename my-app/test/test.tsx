import { useState, useEffect } from "react";
import { TitleArea, ButtonArea, Button, TitleBar } from "@shared/ui";
import { AgreementGroup } from "@widgets/form";
import { AGREEMENTS1 } from "@views/policy/agreements-data";

export default function JoinStep1Case1() {
  // 전체동의
  const [agreeStates, setAgreeStates] = useState<Record<string, boolean>>({});
  const [disabledStates, setDisabledStates] = useState<Record<string, boolean>>(
    {}
  );

  //동의 상태 변경 핸들러
  const handleCheckChange = (id: string, checked: boolean) => {
    // 부모 id를 기준으로 disabled 해제 처리
    if (id === "terms-homepage" && checked) {
      setDisabledStates((prev) => ({
        ...prev,
        "hyundai-1": false,
        "hyundai-2": false,
        "hyundai-3": false,
        "hyundai-4": false,
        "hyundai-5": false,
      }));
    }
    // 체크 상태 갱신
    setAgreeStates((prev) => ({ ...prev, [id]: checked }));
  };

  // 동의항목 초기설정
  useEffect(() => {
    // 체크항목 초기설정
    const defaultCheckedId = ["hpoint-email", "hpoint-tm"];
    // 비활성화 항목 초기설정
    const defaultDisabledIds = [
      "hpoint-email",
      "hpoint-tm",
      "hpoint-dm",
      "hyundai-1",
      "hyundai-2",
      "hyundai-3",
      "hyundai-4",
      "hyundai-5",
    ];

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

  return (
    <>
      <TitleArea
        title={
          <>
            회원가입 약관에
            <br />
            동의해 주세요
          </>
        }
      />
      <TitleBar type="docs" title="필수약관에 동의해주세요" />
      <AgreementGroup
        data={AGREEMENTS1}
        checked={agreeStates[AGREEMENTS1.id]}
        onChange={handleCheckChange}
        allStates={agreeStates}
        disabledStates={disabledStates}
        linkedChecks={[
          {
            triggers: ["hpoint-sms", "hpoint-email", "hpoint-tm", "hpoint-dm"],
            targets: ["hpoint-8"],
          },
          {
            triggers: ["ncp-sms", "ncp-email"],
            targets: ["ncp-5"],
          },
          {
            triggers: [
              "hyundai-sms",
              "hyundai-email",
              "hyundai-tm",
              "hyundai-dm",
            ],
            targets: ["hyundai-5"],
          },
        ]}
      />
      <ButtonArea>
        <Button size="large">취소</Button>
        <Button size="large" variant="primary">
          동의
        </Button>
      </ButtonArea>
    </>
  );
}
