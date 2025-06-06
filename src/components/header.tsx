import { APP_EMOJI, APP_NAME } from "@/utils/config";
import { Back } from "./back";
import { Account } from "./account";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="w-20 flex justify-start">
        <Back />
      </div>

      <Link
        href="/"
        className="flex text-xl font-bold justify-center px-4 gap-2"
      >
        <span className="hidden sm:block">{APP_NAME}</span>
        <span>{APP_EMOJI}</span>
      </Link>

      <div className="w-20 flex justify-end">
        <Account />
      </div>
    </header>
  );
}
