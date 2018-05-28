$(document).ready(function () {

  const channels = ["Freecodecamp", "Ninja", "GEICOGaming", "pokemon", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
  const logResult = document.getElementById("display");
  const getJsonWithPromise = function (url) {
    return new Promise(function (resolve, reject) {
      $.getJSON(url, function (jsonResult) {
        resolve(jsonResult)
      })
    })
  }
  console.log(logResult);
  Promise.all(channels.map(channel =>
    getJsonWithPromise(
      "https://wind-bow.glitch.me/twitch-api/users/" + channel
    )
  )

  // concat another array of promises that gets the stream information
  .concat(
    channels.map(channel =>
      getJsonWithPromise(
        "https://wind-bow.glitch.me/twitch-api/streams/" + channel
      )
    )
  )
  )
  .then (resultPromise => {
    console.log(resultPromise);
  })
  channels.forEach((users) => {
    getJsonWithPromise('https://wind-bow.glitch.me/twitch-api/users/' + users).then(function (twitchUser) {
      console.log(twitchUser);
      logResult.innerHTML += " <img src ='" + twitchUser.logo + "' width='80px'> " + twitchUser.display_name;
    });
    getJsonWithPromise('https://wind-bow.glitch.me/twitch-api/streams/' + users).then(function (twitchStream) {
      if (twitchStream.stream == null) {
        document.getElementById("display").innerHTML += " is Offline<br><hr>"
      }
      else {
        document.getElementById("display").innerHTML += " <a href='https://www.twitch.tv/" + users + "' target='_blank'> plays " + twitchStream.stream.game + "</a><br><hr>"
      }
    });
  });
});
