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

  const trackResponse = await fetch(`${apiUrl}?${params.toString()}`, {
    next: { revalidate: 600 },
  });

  if (!trackResponse.ok) {
    return { message: "Could not fetch track" };
  }

  const trackData = (await trackResponse.json()) as {
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

  const track = trackData.recenttracks.track[0];
  return {
    artist: track?.artist["#text"],
    name: track?.name,
    trackUrl: track?.url,
    nowPlaying: track?.["@attr"]?.nowplaying ?? false,
  };
}

export async function getMyStatus() {
  const heartbeatUrl =
    "https://api.wakatime.com/api/v1/users/current/heartbeats";
  const durationUrl = "https://api.wakatime.com/api/v1/users/current/durations";
  const params = new URLSearchParams({
    api_key: env.WAKATIME_API_KEY,
    date: "today",
  });

  const [heartbeatResponse, durationResponse] = await Promise.all([
    fetch(`${heartbeatUrl}?${params.toString()}`, {
      next: { revalidate: 600 },
    }),
    fetch(`${durationUrl}?${params.toString()}`, { next: { revalidate: 600 } }),
  ]);

  if (!heartbeatResponse.ok || !durationResponse.ok) {
    return { message: "Could not fetch status" };
  }

  const [heartbeatData, durationData] = (await Promise.all([
    heartbeatResponse.json(),
    durationResponse.json(),
  ])) as [
    {
      data: { time: number }[];
    },
    {
      data: { duration: number }[];
    },
  ];

  const lastHeartbeatTime = heartbeatData.data.at(-1)?.time ?? 0;
  const timeout = 15 * 60;
  const totalTodayDuration = durationData.data.reduce(
    (acc, duration) => acc + duration.duration,
    0,
  );

  return {
    isOnline: new Date().getTime() / 1000 - lastHeartbeatTime < timeout,
    duration: totalTodayDuration,
  };
}
