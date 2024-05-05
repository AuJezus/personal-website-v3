import { cn } from "@/lib/utils";

function TagList({
  className,
  title,
  tags,
}: {
  className?: string;
  title: string;
  tags: string[];
}) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags?.map((tag) => (
        <div
          key={title + tag}
          className="cursor-default text-nowrap rounded-sm border-2 px-1.5 py-0.5 text-sm text-muted-foreground no-underline transition-colors hover:border-primary hover:text-primary-foreground"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}

export default TagList;
