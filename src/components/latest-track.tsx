import { cn } from "@/lib/utils";
import { getLatestTrack } from "@/server/queries";
import { BiError, BiMusic } from "react-icons/bi";
import uniqid from "uniqid";

async function LatestTrack() {
  const { artist, name, trackUrl, nowPlaying, message } =
    await getLatestTrack();

  const trackString = `${artist} - ${name}`;

  if (message)
    return (
      <p className="flex items-center gap-2 text-sm">
        <BiError className="text-red-500" /> {message}
      </p>
    );

  return (
    <div className="flex max-w-64 items-center gap-2 text-sm">
      <BiMusic
        className={cn("shrink-0 text-red-500", nowPlaying && "text-green-500")}
      />
      {!nowPlaying && "Last:"}
      <div className="via flex overflow-clip from-transparent via-black via-[percentage:15%_85%] to-transparent [mask:linear-gradient(to_right,_var(--tw-gradient-stops))]">
        {["", ""].map((_, i) => (
          <a
            key={uniqid()}
            href={trackUrl}
            target="_blank"
            aria-hidden={i === 2 && "true"}
            className="animate-infinite-scroll text-nowrap pr-12"
          >
            {trackString}
          </a>
        ))}
      </div>
    </div>
  );
}

export default LatestTrack;
