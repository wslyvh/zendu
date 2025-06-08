"use client";

import { useFarcasterAccount } from "@/hooks/useFarcasterAccount";
import { useFrameAdded } from "@/hooks/useFrameAdded";
import { useAddFrame } from "@/hooks/useAddFrame";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const { data: account } = useFarcasterAccount();
  const { data: frameAdded } = useFrameAdded();
  const addFrame = useAddFrame();

  function subscribeButton() {
    if (account && !frameAdded) {
      return (
        <button
          className="btn btn-neutral btn-soft rounded-full w-full md:btn-wide"
          onClick={addFrame}
          disabled={frameAdded}
        >
          Subscribe for updates
        </button>
      );
    }

    return (
      <a
        className="btn btn-neutral btn-soft rounded-full w-full md:btn-wide"
        href="#subscribe"
      >
        Subscribe for updates
      </a>
    );
  }

  return (
    <section className="hero min-h-screen w-full flex items-center justify-center">
      <div className="hero-content flex flex-col items-center justify-center w-full text-center max-w-2xl px-4">
        <Image
          src="/hero.png"
          alt="Zendu meditating robot with bonsai and hourglass"
          width={1020}
          height={600}
          className="w-full max-w-xl h-auto mb-6"
          priority
        />

        <div className="mb-4">
          <span className="badge badge-accent badge-outline rounded-full">
            ✨ Human-powered Accountability Coach
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl  text-gray-800 font-extrabold mb-4 leading-tight">
          Build momentum,{" "}
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            not pressure
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Zendu helps solo founders and indie hackers cultivate consistency,
          focus, and momentum through gentle guidance. Daily progress, without
          the pressure.
        </p>

        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full mb-6">
          <Link
            href="https://farcaster.xyz/~/inbox/create/12580?text=I want to stay focused and start a 5-day momentum sprint. Let's go 🚀"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary rounded-full w-full md:w-auto"
          >
            Try a 5-day momentum sprint →
          </Link>
          {subscribeButton()}
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-base-content/60 font-medium">
          <div className="flex items-center gap-2">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                </div>
              </div>
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-8 font-normal text-xs">
                  <span>+10</span>
                </div>
              </div>
            </div>
            are building momentum
          </div>
        </div>
      </div>
    </section>
  );
}
