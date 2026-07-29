"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Check } from "lucide-react";
import {
  consultationSchema,
  PROJECT_TYPES,
  BUDGET_RANGES,
  TIMELINES,
  type ConsultationFormValues,
} from "@/lib/validations/consultation";
import { FormField } from "@/components/forms/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STEPS = ["Project", "Budget & Timeline", "Contact Info"] as const;

function OptionGroup<T extends string>({
  options,
  value,
  onChange,
  name,
}: {
  options: readonly T[];
  value: T | undefined;
  onChange: (value: T) => void;
  name: string;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2" role="radiogroup" aria-label={name}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          role="radio"
          aria-checked={value === option}
          onClick={() => onChange(option)}
          className={cn(
            "cursor-pointer rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors",
            value === option
              ? "border-accent bg-accent/10 text-foreground"
              : "border-border bg-card text-muted-foreground hover:border-accent/40",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export function ConsultationForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
  });

  const values = watch();

  const FIELDS_BY_STEP: (keyof ConsultationFormValues)[][] = [
    ["projectType"],
    ["budget", "timeline"],
    ["name", "email", "details"],
  ];

  async function goNext() {
    const valid = await trigger(FIELDS_BY_STEP[step]);
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(data: ConsultationFormValues) {
    setSubmitError(null);
    const res = await fetch("/api/consultation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      setSubmitError("Something went wrong submitting your request. Please try again.");
      return;
    }

    router.push("/book-a-consultation/confirmation");
  }

  return (
    <div>
      <noscript>
        <p className="mb-8 rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground">
          This form needs JavaScript to walk through the steps. With JavaScript disabled,
          email us directly at{" "}
          <a href="mailto:zeeshankhanaptech@gmail.com" className="font-medium underline">
            zeeshankhanaptech@gmail.com
          </a>{" "}
          and we&apos;ll get back to you.
        </p>
      </noscript>
      <div className="mb-8 flex items-center gap-2" aria-hidden>
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-medium transition-colors",
                i < step
                  ? "bg-accent text-accent-foreground"
                  : i === step
                    ? "border-2 border-accent text-accent"
                    : "border border-border text-muted-foreground",
              )}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "h-px flex-1",
                  i < step ? "bg-accent" : "bg-border",
                )}
              />
            )}
          </div>
        ))}
      </div>
      <p className="mb-6 font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Step {step + 1} of {STEPS.length}: {STEPS[step]}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {step === 0 && (
          <div className="space-y-6">
            <FormField
              label="What do you need?"
              htmlFor="projectType"
              error={errors.projectType?.message}
              required
            >
              <OptionGroup
                name="Project type"
                options={PROJECT_TYPES}
                value={values.projectType}
                onChange={(v) => setValue("projectType", v, { shouldValidate: true })}
              />
            </FormField>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6">
            <FormField
              label="Estimated budget"
              htmlFor="budget"
              error={errors.budget?.message}
              required
            >
              <OptionGroup
                name="Budget"
                options={BUDGET_RANGES}
                value={values.budget}
                onChange={(v) => setValue("budget", v, { shouldValidate: true })}
              />
            </FormField>
            <FormField
              label="Timeline"
              htmlFor="timeline"
              error={errors.timeline?.message}
              required
            >
              <OptionGroup
                name="Timeline"
                options={TIMELINES}
                value={values.timeline}
                onChange={(v) => setValue("timeline", v, { shouldValidate: true })}
              />
            </FormField>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <FormField label="Full Name" htmlFor="name" error={errors.name?.message} required>
              <Input id="name" autoComplete="name" {...register("name")} />
            </FormField>
            <FormField label="Email" htmlFor="email" error={errors.email?.message} required>
              <Input id="email" type="email" autoComplete="email" {...register("email")} />
            </FormField>
            <FormField label="Company" htmlFor="company" error={errors.company?.message}>
              <Input id="company" autoComplete="organization" {...register("company")} />
            </FormField>
            <FormField
              label="Tell us about your project"
              htmlFor="details"
              error={errors.details?.message}
              required
            >
              <Textarea id="details" rows={5} {...register("details")} />
            </FormField>
          </div>
        )}

        {submitError && (
          <p role="alert" className="mt-4 text-sm text-destructive">
            {submitError}
          </p>
        )}

        <div className="mt-8 flex justify-between">
          {step > 0 ? (
            <Button type="button" variant="outline" onClick={goBack} className="cursor-pointer">
              Back
            </Button>
          ) : (
            <span />
          )}

          {step < STEPS.length - 1 ? (
            <Button type="button" onClick={goNext} className="cursor-pointer">
              Continue
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting} className="cursor-pointer">
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {isSubmitting ? "Submitting..." : "Book My Free Consultation"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
