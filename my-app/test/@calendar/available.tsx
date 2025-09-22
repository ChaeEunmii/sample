"use client";
import { useSearchParams } from "next/navigation";
import { Button, ButtonArea, Text, Checkbox } from "@/shared/ui";
import { Container, Contents } from "@widgets/layout/Container";
import {
  GuestStepperBox,
  O4OReservationProductInfo,
  ReservationNotice,
} from "@/widgets/o4o";
import ReserveCalendar from "@/widgets/detail/ReserveCalendar";
import { resevationFormData } from "./ResevationLangTextData";

export default function ReservationForm() {
  // ✅ 화면 상태
  const searchParams = useSearchParams();
  const isUnavailable = searchParams.has("unavailable"); // 당일 예약 불가
  const lang = (searchParams.get("lang") ?? "ko") as "ko" | "en" | "cn";

  // ✅ 다국어 데이터(ko, en, cn)
  const data = resevationFormData;

  return (
    <Container
      title={data.title[lang]}
      showBack
      actions={
        lang === "en" || lang === "cn"
          ? [
              {
                type: "lang" as const,
                value: lang === "cn" ? "zh" : "en",
                options: ["en", "zh"],
              },
            ]
          : []
      }
    >
      <Contents>
        {/* 예약 정보 */}
        <O4OReservationProductInfo data={data.productInfo.data[lang]} />
        {/* 달력 */}
        <ReserveCalendar lang={lang} variant="o4o" isEmpty={isUnavailable} />
        {/* 방문 인원 */}
        <GuestStepperBox lang={lang} className="ncp-mt-xl" />
        <Checkbox label={data.highChair[lang]} className="ncp-mt-x6" />
        <Text size="4" color="gray3" indent className="ncp-mt-x6">
          {data.groupReservation[lang]}
        </Text>
        {/* 유의사항 */}
        <ReservationNotice lang={lang} />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large" variant="primary">
          {data.buttons.next[lang]}
        </Button>
      </ButtonArea>
    </Container>
  );
}
