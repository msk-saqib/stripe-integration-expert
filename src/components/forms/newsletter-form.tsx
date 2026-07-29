"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Check } from "lucide-react";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/validations/newsletter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm({ className }: { className?: string }) {
  const [success, setSuccess] = useState(false);
  const consentNote = (
    <p className="mt-2 text-xs text-ink-muted">No spam, unsubscribe anytime.</p>
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  async function onSubmit(values: NewsletterFormValues) {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) setSuccess(true);
  }

  if (success) {
    return (
      <p className="flex items-center gap-2 text-sm text-accent">
        <Check className="h-4 w-4" />
        You&apos;re subscribed.
      </p>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 sm:flex-row" noValidate>
        <div className="flex-1">
          <Input
            type="email"
            placeholder="you@company.com"
            aria-label="Email address"
            {...register("email")}
          />
          {errors.email && (
            <p role="alert" className="mt-1 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting} className="cursor-pointer">
          {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
          Subscribe
        </Button>
      </form>
      {consentNote}
    </div>
  );
}
