import { NextResponse } from "next/server";

// Spotify API credentials can be placed in .env.local:
// SPOTIFY_CLIENT_ID=your_client_id
// SPOTIFY_CLIENT_SECRET=your_client_secret
// SPOTIFY_REFRESH_TOKEN=your_refresh_token

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

async function getAccessToken() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) return null;

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });

  return response.json();
}

export async function GET() {
  try {
    const tokenData = await getAccessToken();

    if (tokenData?.access_token) {
      // 1. Try fetching currently playing
      const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
        cache: "no-store",
      });

      if (nowPlayingRes.status === 200) {
        const song = await nowPlayingRes.json();
        if (song.item) {
          return NextResponse.json({
            isPlaying: song.is_playing,
            title: song.item.name,
            artist: song.item.artists.map((_art: { name: string }) => _art.name).join(", "),
            albumArt: song.item.album.images[0]?.url,
            songUrl: song.item.external_urls.spotify,
            statusLabel: song.is_playing ? "NOW PLAYING" : "LAST PLAYED",
          });
        }
      }

      // 2. If nothing currently playing, fetch recently played
      const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
        cache: "no-store",
      });

      if (recentRes.status === 200) {
        const recentData = await recentRes.json();
        const lastTrack = recentData.items?.[0]?.track;
        if (lastTrack) {
          return NextResponse.json({
            isPlaying: false,
            title: lastTrack.name,
            artist: lastTrack.artists.map((_art: { name: string }) => _art.name).join(", "),
            albumArt: lastTrack.album.images[0]?.url,
            songUrl: lastTrack.external_urls.spotify,
            statusLabel: "LAST PLAYED",
          });
        }
      }
    }
  } catch (error) {
    console.error("Spotify API error:", error);
  }

  // Default fallback matching screenshot 2:
  return NextResponse.json({
    isPlaying: true,
    title: "444",
    artist: "Lithe",
    albumArt: "https://i1.sndcdn.com/artworks-oOzMjzgmlj17-0-t500x500.jpg",
    songUrl: "https://open.spotify.com/track/6D0dDtNUvchu3c7EcFHcvM?si=ef88889d68354c94",
    statusLabel: "LAST PLAYED",
  });
}
