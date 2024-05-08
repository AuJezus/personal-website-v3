import { cn } from "@/lib/utils";

function TerminalHeading({
  level = "h2",
  className,
  children,
}: {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
}) {
  const Title = level;

  return (
    <div
      className={cn(
        "mb-10 flex items-baseline gap-4 text-muted-foreground",
        className,
      )}
    >
      <span>
        <span className="text-primary">~</span> W:\AuJezus{">"}
      </span>
      <Title className="text-lg text-primary">
        {children}
        <span className="animate-blink">_</span>
      </Title>
    </div>
  );
}

export default TerminalHeading;
