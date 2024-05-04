import { cn } from "@/lib/utils";
import { getMyStatus } from "@/server/queries";
import { BiCircle, BiError, BiTime } from "react-icons/bi";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

async function MyStatus() {
  const { isOnline, duration = 0, message } = await getMyStatus();

  if (message)
    return (
      <p className="flex items-center gap-2 text-sm">
        <BiError className="text-red-500" /> {message}
      </p>
    );

  return (
    <>
      <p className="flex items-center gap-2 text-sm">
        <BiCircle
          className={cn("text-red-500", isOnline && "text-green-500")}
        />
        {isOnline ? "ONLINE" : message ?? "OFFLINE"}
      </p>

      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wakatime.com/@AuJezus"
            target="_blank"
            className="flex items-center gap-2 text-sm"
          >
            <BiTime
              className={cn(
                "text-red-500",
                duration > 60 && "text-yellow-500",
                isOnline && "text-green-500",
              )}
            />
            {`${Math.floor(duration / 60 / 60) ? Math.floor(duration / 60 / 60) + "h" : ""} ${Math.floor((duration % 3600) / 60)}m`}
          </a>
        </TooltipTrigger>
        <TooltipContent>
          Time I spent coding today. Click to see more stats.
        </TooltipContent>
      </Tooltip>
    </>
  );
}

export default MyStatus;
