/**
 * Fails the build if a service's own primary keyword phrase (the first entry in its
 * `keywords[]` array) doesn't meaningfully appear in its own title/headline copy —
 * i.e. the keyword research was done but never actually reflected on the page.
 */
import { SERVICES } from "../src/content/services-data";

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, " ");
const STOPWORDS = new Set(["the", "and", "for", "with", "your"]);

let failed = false;

for (const service of SERVICES) {
  const [primary] = service.keywords;
  const haystack = normalize(
    `${service.metaTitle} ${service.heroHeadline} ${service.heroSubhead}`,
  );
  const coreTerms = normalize(primary)
    .split(" ")
    .filter((word) => word.length > 3 && !STOPWORDS.has(word));
  const missing = coreTerms.filter((term) => !haystack.includes(term));

  if (missing.length > 1) {
    console.error(
      `[keyword-lint] ${service.slug}: primary keyword "${primary}" barely appears on-page (missing: ${missing.join(", ")})`,
    );
    failed = true;
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log(`[keyword-lint] OK — ${SERVICES.length} services checked, all on-target.`);
}
