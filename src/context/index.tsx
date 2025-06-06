import { PropsWithChildren } from "react";
import { AnalyticsProvider } from "./analytics";
import { FarcasterProvider } from "./farcaster";
import { QueryProvider } from "./query";

export function Providers(props: PropsWithChildren) {
  return (
    <AnalyticsProvider>
      <QueryProvider>
        <FarcasterProvider>{props.children}</FarcasterProvider>
      </QueryProvider>
    </AnalyticsProvider>
  );
}
