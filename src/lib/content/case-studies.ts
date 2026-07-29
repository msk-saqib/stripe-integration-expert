import { CASE_STUDIES, type CaseStudy, type CaseStudyResult } from "@/content/case-studies-data";

export type { CaseStudy, CaseStudyResult };

export function getAllCaseStudies(): CaseStudy[] {
  return CASE_STUDIES;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getCaseStudiesByIndustry(industrySlug: string): CaseStudy[] {
  return CASE_STUDIES.filter((study) => study.industry === industrySlug);
}

export function getCaseStudiesByService(serviceSlug: string, limit = 2): CaseStudy[] {
  return CASE_STUDIES.filter((study) => study.servicesUsed.includes(serviceSlug)).slice(0, limit);
}
