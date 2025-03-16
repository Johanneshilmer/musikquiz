"use client";

export default function Home() {
  const handleSpotifyAuth = () => {
    window.location.href = "/api/spotify-auth";
  };

  return (
    <>
      <div className="container main-header">
        <h1>Hello</h1>
      </div>
      <div className="container">
        <h1>Here i will store the list</h1>
        <button onClick={handleSpotifyAuth}>Connect to Spotify</button>
      </div>
    </>
  );
}
