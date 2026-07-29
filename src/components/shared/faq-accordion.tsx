import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  return (
    <Accordion className="w-full divide-y divide-border" hiddenUntilFound>
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question} className="py-2">
          <AccordionTrigger className="py-4 text-base font-medium">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
