$(document).ready();

const channels = ["Freecodecamp", "Ninja", "GEICOGaming", "pokemon", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
const getJsonWithPromise = function(url){
  return new Promise(function(resolve, reject){
    $.getJSON(url, function(jsonResult){
      resolve(jsonResult)
    })
  })
}

for (var i = 0; i < channels.length; i++){
getJsonWithPromise('https://wind-bow.glitch.me/twitch-api/users/' + channels[i]).then(function(twitchUser){
  console.log(twitchUser);
  document.getElementById("display").innerHTML += " <img src ='" + twitchUser.logo + "' width='80px'> " + twitchUser.display_name;
});
getJsonWithPromise('https://wind-bow.glitch.me/twitch-api/streams/' + channels[i]).then(function(twitchStream){
  if(twitchStream.stream == null) {
    document.getElementById("display").innerHTML += " is Offline<br><hr>"
  }
 else {
    document.getElementById("display").innerHTML += " <a href='https://www.twitch.tv/" + channels[i] + "' target='_blank'> plays " + twitchStream.stream.game + "</a><br><hr>"
  }
});
};

