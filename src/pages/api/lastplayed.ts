export const prerender = false;

const LASTFM_PLACEHOLDER_HASH = "2a96cbd8b46e442fc41c2b86b821562f";

export async function GET({ locals }: { locals: App.Locals }) {
  const apiKey = locals.runtime.env.LASTFM_API_KEY;
  const username = locals.runtime.env.LASTFM_USERNAME;

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&format=json&limit=1`
  );
  const json: any = await res.json();
  const recent = json?.recenttracks?.track?.[0];
  if (!recent) {
    return Response.json({ track: "Nothing playing", artist: "", image: "", isPlaying: false });
  }
  const images = recent.image || [];
  const large = images.find((i: any) => i.size === "large");
  const url: string = large?.["#text"] || "";
  // Last.fm serves this generic star image when it has no artwork for a track
  const isPlaceholder = url.includes(LASTFM_PLACEHOLDER_HASH);
  return Response.json({
    track: recent.name || "",
    artist: recent.artist?.["#text"] || "",
    isPlaying: recent["@attr"]?.nowplaying === "true",
    image: isPlaceholder ? "" : url,
  });
}