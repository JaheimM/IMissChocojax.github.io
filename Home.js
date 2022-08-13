document.addEventListener('DOMContentLoaded', function () {
    const h1 = document.querySelector('h1');
    console.log(window.getComputedStyle(h1).fontSize);
    console.log("I'm happy")
    
    async function isStreamerLive(username) {
      const theUrl = `https://api.twitch.tv/helix/streams?user_login=${username}`;
      const headers = {
        "Client-Id": CLIENT_ID,
        Authorization: OAUTH_TOKEN,
      };

      const response = await fetch(theUrl, headers);
      const data = await response.json();

      return data?.data?.find(
        (s) => s.user_login === username.toLocaleLowerCase()
      );
    }
})