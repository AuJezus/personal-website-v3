import { cn } from "@/lib/utils";
import { getLatestTrack } from "@/server/queries";
import { BiMusic } from "react-icons/bi";
import uniqid from "uniqid";

async function LatestTrack() {
  const track = await getLatestTrack();

  const trackString = `${track.artist} - ${track.name}`;

  return (
    <div className="flex max-w-64 items-center gap-2 text-sm">
      <BiMusic
        className={cn(
          "shrink-0 text-red-500",
          track.nowPlaying ? "text-green-500" : "text-red-500",
        )}
      />
      {!track.message && !track.nowPlaying && "Last:"}
      {track.message}
      {!track.message && (
        <div className="via flex overflow-clip from-transparent via-black via-[percentage:15%_85%] to-transparent [mask:linear-gradient(to_right,_var(--tw-gradient-stops))]">
          {["", ""].map((_, i) => (
            <p
              key={uniqid()}
              className="animate-infinite-scroll text-nowrap pr-12"
              aria-hidden={i === 2 && "true"}
            >
              {trackString}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default LatestTrack;
