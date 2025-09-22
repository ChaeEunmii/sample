import { forwardRef } from "react";
import { IconName, Icon, Tip } from "@shared/ui";
import clsx from "clsx";
import styles from "./AuthButton.module.scss";

// 인증 타입
type AuthType =
  | "default"
  | "kakao"
  | "naver"
  | "phone"
  | "email"
  | "toss"
  | "apple"
  | "apple2"
  | "facebook"
  | "qr"
  | "hpoint";

// 인증 타입별 icon, label
const authConfig: Record<
  AuthType,
  { icon?: IconName; label: string; useImage?: boolean; imageUrl?: string }
> = {
  default: { label: "인증하기" },
  kakao: { icon: "kakao", label: "카카오 인증" },
  naver: { icon: "naver", label: "네이버 인증" },
  phone: { icon: "phone2", label: "휴대폰 인증" },
  email: { icon: "email2", label: "이메일 인증" },
  toss: {
    icon: "toss",
    label: "토스 인증",
    useImage: true,
    imageUrl: "/images/toss.svg",
  },
  apple: { icon: "apple", label: "Apple" },
  apple2: { icon: "apple", label: "애플 인증" },
  facebook: { icon: "facebook", label: "Facebook" },
  qr: { icon: "qrcode2", label: "QR 코드 로그인" },
  hpoint: { icon: "hpoint2", label: "H.Point APP 인증" },
};

// 인증버튼 Props
interface AuthButtonProps {
  /** 인증 타입 */
  authType?: AuthType;
  /** 최근 로그인 여부 */
  isRecentLogin?: boolean;
  /** 버튼 내용 */
  children?: React.ReactNode;
  /** 버튼 비활성화 여부 */
  disabled?: boolean;
  /** 유효성 검증 실패 여부 */
  invalid?: boolean;
  /** 에러 메시지의 ID 값 연결 */
  errorMessageBy?: string;
  /** 추가적인 클래스 이름 */
  className?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const AuthButton = forwardRef<HTMLButtonElement, AuthButtonProps>(
  (
    {
      authType = "default",
      isRecentLogin = false,
      children,
      className,
      disabled,
      invalid,
      errorMessageBy,
      onClick,
      ...props
    },
    ref
  ) => {
    const { icon, label, useImage, imageUrl } = authConfig[authType];
    const displayText = children ?? label;

    // 로고 이미지로 사용해야하는경우
    const shouldUseImage = useImage;
    const renderPrefix = () => {
      if (shouldUseImage && icon) {
        return (
          <img
            src={imageUrl}
            alt={`${authType} logo`}
            className={clsx(styles.iconImage)}
          />
        );
      }
      return null;
    };
    // 일반 아이콘 설정
    const prefixIcon = shouldUseImage ? undefined : icon;

    return (
      <>
        <button
          type="button"
          ref={ref}
          disabled={disabled}
          className={clsx(styles.root, authType && styles[authType], className)}
          aria-invalid={invalid}
          aria-errormessage={errorMessageBy}
          onClick={onClick}
          {...props}
        >
          {shouldUseImage && renderPrefix()}
          {prefixIcon && <Icon name={prefixIcon} size={"medium"} />}
          {displayText}
          {isRecentLogin && (
            <Tip className={styles.recentTxt}>최근에 로그인 했어요</Tip>
          )}
        </button>
      </>
    );
  }
);

AuthButton.displayName = "AuthButton";
