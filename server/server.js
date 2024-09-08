require("dotenv").config();

const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
const PORT = 8000;

app.use(express.json());

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URL,
});

app.get("/login", (req, res) => {
  const scopes = [
    "user-read-private",
    "user-read-email",
    "user-read-playback-state",
    "user-modify-playback-state",
  ];
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes);
  res.redirect(authorizeURL);
});

app.get("/callback", (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

  if (error) {
    console.error("Callback Error:", error);
    res.send(`Callback Error: ${error}`);
    return;
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const accessToken = data.body["access_token"];
      const refreshToken = data.body["refresh_token"];
      const expiresIn = data.body["expires_in"];

      spotifyApi.setAccessToken(accessToken);
      spotifyApi.setRefreshToken(refreshToken);

      res.send(
        "Login successful! You can now use the /search and /play endpoints."
      );

      // access token gets reset prior to expiration
      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const accessTokenRefreshed = data.body["access_token"];
        spotifyApi.setAccessToken(accessTokenRefreshed);
      }, (expiresIn / 2) * 1000);
    })
    .catch((error) => {
      console.error("Error getting Tokens:", error);
      res.send("Error getting tokens");
    });
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  spotifyApi
    .searchTracks(q)
    .then((searchData) => {
      const trackUri = searchData.body.tracks.items[0].uri;
      res.send({ uri: trackUri });
    })
    .catch((err) => {
      console.error("Search Error:", err);
      res.send(`Error occurred during search: ${err}`);
    });
});

app.get("/play", (req, res) => {
  const { uri } = req.query;
  spotifyApi
    .play({ uris: [uri] })
    .then(() => {
      res.send("Playback started");
    })
    .catch((err) => {
      console.error("Play Error:", err);
      res.send(`Error occurred during playback: ${err}`);
    });
});

app.get("/pause", (req, res) => {
  spotifyApi
    .pause()
    .then(() => {
      res.send("Playback paused");
    })
    .catch((err) => {
      console.error("Pause Error:", err);
      res.send(`Error occurred during pause: ${err}`);
    });
});

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
