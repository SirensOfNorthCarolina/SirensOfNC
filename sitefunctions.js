function AddToDiscord() {
  document.getElementById(
    "message").style.display = "block";
  window.open("https://discord.com/oauth2/authorize?client_id=1185738554417094737&permissions=8&scope=bot");
}

function GoToRepo() {
  document.getElementById("message").style.display = "block";
  window.open("https://github.com/SirensOfNorthCarolina/SirensOfNC");
  
}

function imageEasterEgg() {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  let singing = new Audio('assets/singingeasteregg.mp3');
  singing.play();
  document.getElementById("eastereggmessage").style.display = "block";
}