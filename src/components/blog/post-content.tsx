import type { ContentBlock } from "@/lib/content/blog";

export function PostContent({ body }: { body: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {body.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-base leading-relaxed text-foreground/90">
                {block.text}
              </p>
            );
          case "heading": {
            const Tag = block.level === 2 ? "h2" : "h3";
            return (
              <Tag
                key={index}
                id={block.id}
                className={
                  block.level === 2
                    ? "scroll-mt-24 text-2xl font-semibold tracking-tight"
                    : "scroll-mt-24 text-xl font-semibold tracking-tight"
                }
              >
                {block.text}
              </Tag>
            );
          }
          case "list":
            return block.ordered ? (
              <ol key={index} className="list-decimal space-y-2 pl-6 text-sm leading-relaxed">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="list-disc space-y-2 pl-6 text-sm leading-relaxed">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "code":
            return (
              <pre
                key={index}
                className="overflow-x-auto rounded-xl border border-border bg-ink p-4 text-xs leading-relaxed text-ink-foreground"
              >
                <code className="font-mono">{block.code}</code>
              </pre>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-2 border-accent pl-4 text-base italic leading-relaxed text-muted-foreground"
              >
                {block.text}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
