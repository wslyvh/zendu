"use client";

import { useFarcasterAccount } from "@/hooks/useFarcasterAccount";
import { useFrameAdded } from "@/hooks/useFrameAdded";
import { useAddFrame } from "@/hooks/useAddFrame";
import { Newsletter } from "./newsletter";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const { data: account } = useFarcasterAccount();
  const { data: frameAdded } = useFrameAdded();
  const addFrame = useAddFrame();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-2xl mx-auto pt-16 pb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight text-gray-800">
          Embrace imperfection.
          <br />
          Stay in motion.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          Zendu is a calm, accountability coach designed to build consistency,
          focus, and momentum. Daily progress, without the pressure.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="https://farcaster.xyz/~/inbox/create/12580?text=I want to stay focused and start a 5-day momentum sprint. Let's go 🚀"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary rounded-full w-full md:btn-wide"
          >
            Start a sprint →
          </Link>
          {account && (
            <button
              className="btn btn-neutral btn-soft rounded-full w-full md:btn-wide"
              onClick={addFrame}
              disabled={frameAdded}
            >
              {frameAdded ? "Subscribed" : "Subscribe"}
            </button>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <Image
            src="/hero.png"
            alt="Zendu accountability coach"
            width={1020}
            height={600}
            sizes="(max-width: 1020px) 100vw, 1020px"
            className="w-full max-w-lg h-auto mx-auto object-cover"
            priority
          />
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
