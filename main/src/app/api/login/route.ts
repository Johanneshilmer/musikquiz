import NextResponse from "next/server";

export async function GET() {
  const scope = "user-read-private user-read-email";
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}`;
  return NextResponse.redirect(authUrl);
}