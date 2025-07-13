import { SOCIAL_FARCASTER, SOCIAL_GITHUB } from "@/utils/config";
import { PropsWithChildren } from "react";
import Link from "next/link";

export function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}

      <main className="flex flex-col flex-1 container mx-auto px-4 gap-8">
        {props.children}
      </main>

      <footer className="flex flex-col items-center justify-center p-4">
        <p>
          Follow the journey on{" "}
          <Link
            href={`https://www.github.com/${SOCIAL_GITHUB}`}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>{" "}
          or{" "}
          <Link
            href={`https://farcaster.xyz/${SOCIAL_FARCASTER}`}
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Farcaster
          </Link>
        </p>
        <p className="text-sm text-base-content/50 mt-2">
          Built with care for creators.
        </p>
      </footer>
    </div>
  );
}
