"use client";

import { Turnstile } from "@marsidev/react-turnstile";

interface Props {
  onSuccess?: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

export default function Widget({ onSuccess, onExpire, onError }: Props) {
  return (
    <Turnstile
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
      options={{ theme: "dark", language: "de", action: "submit-form" }}
      onSuccess={onSuccess}
      onExpire={onExpire}
      onError={onError}
    />
  );
}
