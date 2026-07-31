"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { InlineWidget } from "react-calendly";

export function BookingWidget() {
  const router = useRouter();
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    function handleCalendlyEvent(e: MessageEvent) {
      if (e.data?.event === "calendly.event_scheduled") {
        // fire analytics event here once analytics is installed, e.g. track("call_booked")
        router.push("/book-a-consultation/confirmation");
      }
    }
    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, [router]);

  if (!calendlyUrl) {
    return (
      <p className="text-sm text-destructive">
        Scheduling is temporarily unavailable. Please email us directly at{" "}
        <a href="mailto:stripeexpertdev@gmail.com" className="font-medium underline">
          stripeexpertdev@gmail.com
        </a>
        .
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg">
      <InlineWidget
        url={calendlyUrl}
        pageSettings={{
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          hideGdprBanner: true,
        }}
        styles={{ height: "min(700px, 90vh)", minWidth: "280px" }}
      />
    </div>
  );
}
