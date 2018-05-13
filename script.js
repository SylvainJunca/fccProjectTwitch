$(document).ready();

var channels = ["Freecodecamp", "Ninja", "GEICOGaming", "pokemon", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]



for (var i = 0; i < channels.length; i++){
var promise = $.getJSON('https://wind-bow.glitch.me/twitch-api/users/' + channels[i]);
promise.then(function(twitchUser){
  console.log(twitchUser);
  document.getElementById("display").innerHTML += " <img src ='" + twitchUser.logo + "' width='80px'> " + twitchUser.display_name;
});
var promise2 = $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + channels[i]);
promise2.then(function(twitchStream){
  if(twitchStream.stream == null) {
    document.getElementById("display").innerHTML += " is Offline<br><hr>"
  }
 else {
    document.getElementById("display").innerHTML += " <a href='https://www.twitch.tv/" + channels[i] + "' target='_blank'> plays " + twitchStream.stream.game + "</a><br><hr>"
  }
});
};

