import type { Metadata } from "next";

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://showcase-hub-black.vercel.app";

const defaultOgImage = {
  url: `${BASE_URL}/og/default.jpg`,
  width: 1200,
  height: 630,
  alt: "SBL Showcase – Prosjekter",
};

export function createMetadata(overrides: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const title = overrides.title;
  const description =
    overrides.description ||
    "Showcase av prosjekter innen restaurant, fastfood og håndverk";
  const url = overrides.path ? `${BASE_URL}${overrides.path}` : BASE_URL;
  const ogImage = overrides.image
    ? {
        url: `${BASE_URL}${overrides.image}`,
        width: 1200,
        height: 630,
        alt: overrides.imageAlt || title,
      }
    : defaultOgImage;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "SBL Showcase",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
