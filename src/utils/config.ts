export const APP_EMOJI = "🤖";
export const APP_NAME = "Zendu";
export const APP_DESCRIPTION = "Building momentum, one day at a time.";
export const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN || "withzendu.com";
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || `https://${APP_DOMAIN}`;

// More info // https://miniapps.farcaster.xyz/docs/specification#frame
export const APP_ICON = `${APP_URL}/icon.png`; // 1024 x 1024 for Farcaster
export const APP_IMAGE = `${APP_URL}/image.png`; // 1200 x 800 for Farcaster
export const APP_OG_IMAGE = `${APP_URL}/og.png`; // 1200 x 630 for Open Graph + Twitter. Can replace with /opengraph-image
export const APP_WEBHOOK = `${APP_URL}/api/webhook`;
export const APP_FRAME_VERSION = "next";
export const APP_FRAME_PRIMARY_CATEGORY = "utility";
export const APP_FRAME_TAGS = ["farcaster", "app"];

export const FARCASTER_ACCOUNT_ASSOCIATION = {
  header:
    "eyJmaWQiOjEyNTgwLCJ0eXBlIjoiY3VzdG9keSIsImtleSI6IjB4NTQzOTY4YzU4YTRlYTEyNTllMTIxOUI2MjE5MjBDMjQ2OTMxRGYxRiJ9",
  payload: "eyJkb21haW4iOiJ3d3cud2l0aHplbmR1LmNvbSJ9",
  signature:
    "MHhjMjc5NDRiYjA2NTQ5OGUyYjIzYmFhOGQ5MDY5OWY5MjQyMTlmN2YwMTEyZWViNzVmZTVjZTcyMTRhMTM5YmVkMDhjNTZmNTU4YTRiMDJhMTdhNjIyMDA0YTA2ZjVkYzgzOGQ1MGFhMzE4YmVjYTQ4NDI5ODYyODY4N2FkMDZhYzFj",
};

export const SOCIAL_TWITTER = "wslyvh";
export const SOCIAL_FARCASTER = "wslyvh.eth";
export const SOCIAL_GITHUB = "wslyvh/zendu";

export const DEFAULT_CACHE_TIME = 24 * 60 * 60 * 1000; // 24-hrs (e.g. user context)
