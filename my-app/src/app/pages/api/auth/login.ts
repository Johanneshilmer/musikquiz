
export default function handler(req, res) {
  const scope = "user-read-private user-read-email"; // Lägg till fler scopes vid behov

  const authUrl = `${process.env.SPOTIFY_AUTH_URL}?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(process.env.SPOTIFY_REDIRECT_URI)}`;

  res.redirect(authUrl);
}