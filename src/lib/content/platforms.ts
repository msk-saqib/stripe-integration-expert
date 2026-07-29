import { FRAMEWORKS_DATA, type FrameworkContent } from "@/content/frameworks-data";
import { CMS_DATA, type CmsContent } from "@/content/cms-data";

export type { FrameworkContent, CmsContent };

export function getAllFrameworks(): FrameworkContent[] {
  return FRAMEWORKS_DATA;
}

export function getFrameworkBySlug(slug: string): FrameworkContent | undefined {
  return FRAMEWORKS_DATA.find((f) => f.slug === slug);
}

export function getAllCms(): CmsContent[] {
  return CMS_DATA;
}

export function getCmsBySlug(slug: string): CmsContent | undefined {
  return CMS_DATA.find((c) => c.slug === slug);
}
