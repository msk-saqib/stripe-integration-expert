interface AuthorBioProps {
  name: string;
  role: string;
  publishedAt: string;
  updatedAt: string;
}

export function AuthorBio({ name, role, publishedAt, updatedAt }: AuthorBioProps) {
  const showUpdated = updatedAt !== publishedAt;

  return (
    <div className="flex items-center gap-3 border-y border-border py-4">
      <div
        aria-hidden
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted font-heading text-sm font-semibold"
      >
        {name.charAt(0)}
      </div>
      <div className="text-sm">
        <p className="font-medium">{name}</p>
        <p className="text-muted-foreground">
          {role} · Published{" "}
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          {showUpdated && (
            <>
              {" "}
              · Updated{" "}
              <time dateTime={updatedAt}>
                {new Date(updatedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
