import "server-only";
import { env } from "@/env";

export async function getLatestTrack() {
  const apiUrl = "https://ws.audioscrobbler.com/2.0";
  const params = new URLSearchParams({
    method: "user.getrecenttracks",
    user: "aujezus",
    api_key: env.LAST_FM_API_KEY,
    limit: "1",
    format: "json",
  });

  try {
    const trackResponse = (await fetch(`${apiUrl}?${params.toString()}`).then(
      (response) => response.json(),
    )) as {
      recenttracks: {
        track: {
          artist: {
            "#text": string;
          };
          name: string;
          "@attr": {
            nowplaying?: boolean;
          };
          url: string;
        }[];
      };
    };

    const track = trackResponse.recenttracks.track[0];
    return {
      artist: track?.artist["#text"],
      name: track?.name,
      trackUrl: track?.url,
      nowPlaying: track?.["@attr"]?.nowplaying ?? false,
    };
  } catch (error) {
    console.error(error);
    return { message: "Could not fetch track" };
  }
}

export async function getMyStatus() {
  const heartbeatUrl =
    "https://api.wakatime.com/api/v1/users/current/heartbeats";
  const durationUrl = "https://api.wakatime.com/api/v1/users/current/durations";
  const params = new URLSearchParams({
    api_key: env.WAKATIME_API_KEY,
    date: "today",
  });

  try {
    const [heartbeatResponse, durationResponse] = (await Promise.all([
      fetch(`${heartbeatUrl}?${params.toString()}`).then((response) =>
        response.json(),
      ),
      fetch(`${durationUrl}?${params.toString()}`).then((response) =>
        response.json(),
      ),
    ])) as [
      {
        data: { time: number }[];
      },
      {
        data: { duration: number }[];
      },
    ];

    const lastHeartbeatTime = heartbeatResponse.data.at(-1)?.time ?? 0;
    const timeout = 15 * 60;
    const totalTodayDuration = durationResponse.data.reduce(
      (acc, duration) => acc + duration.duration,
      0,
    );

    return {
      isOnline: new Date().getTime() / 1000 - lastHeartbeatTime < timeout,
      duration: totalTodayDuration,
    };
  } catch (error) {
    console.error(error);
    return { message: "Could not fetch status" };
  }
}
