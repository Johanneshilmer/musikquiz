export default async function handler(req, res) {
  const { access_token } = req.query;

  if (!access_token) {
    return res.status(401).json({ error: "Ingen access token" });
  }

  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  const data = await response.json();
  res.json(data);
}