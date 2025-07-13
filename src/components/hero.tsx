"use client";

import { useFarcasterAccount } from "@/hooks/useFarcasterAccount";
import { useFrameAdded } from "@/hooks/useFrameAdded";
import { useAddFrame } from "@/hooks/useAddFrame";
import { useIsFarcasterApp } from "@/hooks/useIsFarcasterApp";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const { data: account } = useFarcasterAccount();
  const { data: frameAdded } = useFrameAdded();
  const addFrame = useAddFrame();
  const { data: isFarcasterApp } = useIsFarcasterApp();
  const messageText =
    "I want to stay focused and start a 5-day momentum sprint. Let's go 🚀";

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
          className="w-full max-w-xs md:max-w-xl h-auto mb-2 md:mb-6"
          priority
        />

        <div className="mb-2 md:mb-4">
          <a
            href="https://www.ryanhoover.me/post/the-accountability-experiment"
            className="badge badge-accent badge-outline rounded-full badge-sm md:badge-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✨ Human-powered accountability coach*
          </a>
        </div>

        <h1 className="text-2xl md:text-5xl text-gray-800 font-extrabold mb-2 md:mb-4 leading-tight">
          Make better decisions
          <br />
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Every day
          </span>
        </h1>

        <p className="text-base md:text-xl text-gray-600 mb-2 md:mb-8">
          Daily check-ins to help you stay clear, consistent, and focused on
          what matters most.
        </p>
        {/* <p className="text-base md:text-xl text-gray-600 mb-2 md:mb-8">
          Daily progress, with Zendu.
        </p> */}

        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 w-full">
          {isFarcasterApp ? (
            <Link
              href={`https://farcaster.xyz/~/inbox/create/12580?text=${messageText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-full w-full md:btn-wide"
            >
              Join a 5-day sprint →
            </Link>
          ) : (
            <Link
              href={`https://t.me/wslyvh?text=${messageText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary rounded-full w-full md:btn-wide"
            >
              Join a 5-day sprint →
            </Link>
          )}
          {subscribeButton()}
        </div>
        <p className="text-xs text-base mb-4 md:mb-6">
          *Free. One message per day. No signup hassle
        </p>
        {/* 
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-base-content/60 font-medium">
          <div className="flex items-center gap-2">
            <div className="avatar-group -space-x-4 md:-space-x-6">
              <div className="avatar">
                <div className="w-6 md:w-10">
                  <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-6 md:w-10">
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-6 md:w-10">
                  <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                </div>
              </div>
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-6 md:w-10 font-normal text-xs">
                  <span>+10</span>
                </div>
              </div>
            </div>
            <span className="text-xs md:text-base">are building momentum</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
