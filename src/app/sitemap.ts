import { MetadataRoute } from "next";
import { APP_URL } from "@/utils/config";

export default async function sitemap() {
  const pages = [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
  ] as MetadataRoute.Sitemap;

  return pages;
}
