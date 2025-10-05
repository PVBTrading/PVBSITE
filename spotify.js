const spotifyInput = document.getElementById('spotifyLink');
const loadButton = document.getElementById('loadButton');
const muteButton = document.getElementById('muteButton');
const spotifyPlayer = document.getElementById('spotifyPlayer');

let isMuted = false;

function getSpotifyEmbedURL(url) {
  try {
    const parsed = new URL(url);
    const pathParts = parsed.pathname.split('/').filter(Boolean);
    const type = pathParts[0]; // track, playlist, album
    const id = pathParts[1];

    if (!type || !id) return null;
    return `https://open.spotify.com/embed/${type}/${id}`;
  } catch (e) {
    return null;
  }
}

loadButton.onclick = () => {
  const url = spotifyInput.value.trim();
  if (!url) return alert("Please paste a Spotify URL!");
  const embedUrl = getSpotifyEmbedURL(url);
  if (!embedUrl) return alert("Invalid Spotify URL!");
  spotifyPlayer.src = embedUrl;
  spotifyPlayer.style.display = "block";
};

muteButton.onclick = () => {
  if (!spotifyPlayer.src) return;
  if (!isMuted) {
    spotifyPlayer.style.display = "none";
    muteButton.textContent = "🔊 Unmute";
  } else {
    spotifyPlayer.style.display = "block";
    muteButton.textContent = "🔇 Mute";
  }
  isMuted = !isMuted;
};
