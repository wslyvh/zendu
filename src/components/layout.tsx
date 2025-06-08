import {
  APP_DESCRIPTION,
  SOCIAL_FARCASTER,
  SOCIAL_GITHUB,
} from "@/utils/config";
import { PropsWithChildren } from "react";
import Link from "next/link";

export function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}

      <main className="flex flex-col flex-1 container mx-auto px-4 gap-8">
        {props.children}
      </main>

      <footer className="flex flex-col items-center justify-center mt-8 p-4 gap-2">
        <p className="text-sm text-base-content/50">
          Built with care for creators.
        </p>
        <p className="flex gap-4">
          <Link
            href={`https://www.github.com/${SOCIAL_GITHUB}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={`https://farcaster.xyz/${SOCIAL_FARCASTER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Farcaster
          </Link>
        </p>
      </footer>
    </div>
  );
}
