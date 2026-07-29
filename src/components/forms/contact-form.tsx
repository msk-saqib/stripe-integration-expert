"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { FormField } from "@/components/forms/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      setSubmitError("Something went wrong sending your message. Please try again.");
      return;
    }

    router.push("/contact/thank-you");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <FormField label="Full Name" htmlFor="name" error={errors.name?.message} required>
        <Input id="name" autoComplete="name" {...register("name")} />
      </FormField>

      <FormField label="Email" htmlFor="email" error={errors.email?.message} required>
        <Input id="email" type="email" autoComplete="email" {...register("email")} />
      </FormField>

      <FormField label="Company" htmlFor="company" error={errors.company?.message}>
        <Input id="company" autoComplete="organization" {...register("company")} />
      </FormField>

      <FormField label="Message" htmlFor="message" error={errors.message?.message} required>
        <Textarea id="message" rows={5} {...register("message")} />
      </FormField>

      {submitError && (
        <p role="alert" className="text-sm text-destructive">
          {submitError}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
