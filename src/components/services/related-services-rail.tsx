import { ServiceCard } from "@/components/services/service-card";
import type { ServiceContent } from "@/lib/content/services";

export function RelatedServicesRail({ services }: { services: ServiceContent[] }) {
  if (services.length === 0) return null;

  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="text-lg font-semibold">Related Services</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              href={`/services/${service.category}/${service.slug}`}
              name={service.name}
              description={service.heroSubhead}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
