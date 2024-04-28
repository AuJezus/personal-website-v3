import "server-only";
import { env } from "@/env";

interface LastFMResponse {
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
}

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
    const response = await fetch(`${apiUrl}?${params.toString()}`, {
      next: { revalidate: 30 },
    });
    const responseObj = (await response.json()) as LastFMResponse;

    if (!response.ok) throw responseObj;

    const track = responseObj.recenttracks.track[0];
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
