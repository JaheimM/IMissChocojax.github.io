document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1");
  console.log(window.getComputedStyle(h1).fontSize);

  const fetch = require('node-fetch');
const channelName = '39daph';
const isLive = false;

async function main(){
    let a = await fetch(`https://www.twitch.tv/${channelName}`);
    if( (await a.text()).includes('isLiveBroadcast') )
    {
      console.log(`${channelName} is live`);
      isLive = true;
    }
    else
    {
      console.log(`${channelName} is not live`);
      isLive = false;
    }
}

main();
// Set up auto refreash

function autoRefreash(t) {
  setTimeOut( () => { body.location.reload()}, t
  )
}
// Make code to update website for when isLive is true

const body = document.getElementsByTagName('body');

body.addEventListener("load", autoRefreash(3000));


  /*    async function isStreamerLive(username) {
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
    */
});
