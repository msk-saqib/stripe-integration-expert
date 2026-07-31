"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { contactSchema, CONTACT_TOPICS, type ContactFormValues } from "@/lib/validations/contact";
import { FormField } from "@/components/forms/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
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

    router.push("/book-a-consultation/thank-you");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="First Name" htmlFor="firstName" error={errors.firstName?.message} required>
          <Input id="firstName" autoComplete="given-name" {...register("firstName")} />
        </FormField>

        <FormField label="Last Name" htmlFor="lastName" error={errors.lastName?.message} required>
          <Input id="lastName" autoComplete="family-name" {...register("lastName")} />
        </FormField>
      </div>

      <FormField label="Work Email" htmlFor="workEmail" error={errors.workEmail?.message} required>
        <Input id="workEmail" type="email" autoComplete="email" {...register("workEmail")} />
      </FormField>

      <FormField label="Company" htmlFor="company" error={errors.company?.message}>
        <Input id="company" autoComplete="organization" {...register("company")} />
      </FormField>

      <FormField
        label="What do you need help with?"
        htmlFor="topic"
        error={errors.topic?.message}
        required
      >
        <Controller
          name="topic"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="topic" className="w-full">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                {CONTACT_TOPICS.map((topic) => (
                  <SelectItem key={topic} value={topic}>
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </FormField>

      <FormField label="Tell us more" htmlFor="message" error={errors.message?.message} required>
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
