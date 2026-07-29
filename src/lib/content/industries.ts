import { INDUSTRIES_DATA, type IndustryContent } from "@/content/industries-data";

export type { IndustryContent };

export function getAllIndustries(): IndustryContent[] {
  return INDUSTRIES_DATA;
}

export function getIndustryBySlug(slug: string): IndustryContent | undefined {
  return INDUSTRIES_DATA.find((i) => i.slug === slug);
}
