export const prerender = false;

export async function GET({ locals }: { locals: App.Locals & { runtime: { env: Record<string, string> } } }) {
  const apiKey = locals.runtime.env.LASTFM_API_KEY;
  const username = locals.runtime.env.LASTFM_USERNAME;

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&format=json&limit=1`
  );
  const json = await res.json();
  const recent = json?.recenttracks?.track?.[0];

  if (!recent) {
    return Response.json({ track: "Nothing playing", artist: "", image: "", isPlaying: false });
  }

  const images = recent.image || [];
  const large = images.find((i: any) => i.size === "large");

  return Response.json({
    track: recent.name || "",
    artist: recent.artist?.["#text"] || "",
    isPlaying: recent["@attr"]?.nowplaying === "true",
    image: large?.["#text"] || "",
  });
}
