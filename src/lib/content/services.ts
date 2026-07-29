import {
  SERVICES,
  getServiceBySlug,
  getServicesByCategory,
  getRelatedServices,
  type ServiceContent,
} from "@/content/services-data";
import { CATEGORY_CONTENT, type CategoryContent } from "@/content/service-categories";

export type { ServiceContent, CategoryContent };

export function getAllServices(): ServiceContent[] {
  return SERVICES;
}

export function getAllCategories(): CategoryContent[] {
  return Object.values(CATEGORY_CONTENT);
}

export function getCategoryBySlug(slug: string): CategoryContent | undefined {
  return CATEGORY_CONTENT[slug];
}

export { getServiceBySlug, getServicesByCategory, getRelatedServices };
