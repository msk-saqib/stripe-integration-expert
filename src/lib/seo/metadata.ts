import type { Metadata } from "next";
import {
  OG_LOCALE,
  SITE_NAME,
  TWITTER_HANDLE,
  absoluteUrl,
  ogImageUrl,
} from "@/lib/seo/site";

interface ArticleMeta {
  publishedTime: string;
  modifiedTime: string;
  authors: string[];
  section?: string;
  tags?: string[];
}

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  /** Overrides the generated /og image. */
  image?: string;
  /** Small uppercase label rendered above the title in the generated OG image. */
  ogKicker?: string;
  noIndex?: boolean;
  /** Present => emits og:type=article plus the article:* properties. */
  article?: ArticleMeta;
  /** Skips the root layout's "%s | Stripe Experts" template (homepage only). */
  absoluteTitle?: boolean;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  ogKicker,
  noIndex = false,
  article,
  absoluteTitle = false,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image ?? ogImageUrl(title, ogKicker);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(article
        ? {
            type: "article" as const,
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
            authors: article.authors,
            section: article.section,
            tags: article.tags,
          }
        : { type: "website" as const }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      ...(TWITTER_HANDLE ? { site: TWITTER_HANDLE, creator: TWITTER_HANDLE } : {}),
    },
  };
}
