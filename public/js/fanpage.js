const audio = new Audio('public/audio/ForestMaze.ogg');
audio.loop = true
audio.play();

document.addEventListener("DOMContentLoaded", function() {
  const thomasAndSpeechBox = document.getElementById("thomas_and_speech")
  const thomas = document.getElementById("thomas")
  const speech = document.getElementById("speechbubble")
  thomas.addEventListener("click", function() {
    thomasAndSpeechBox.classList.toggle('animated')
    if (thomas.offsetWidth<40){
      speech.style.opacity = "1";
    } else {
      speech.style.opacity = "0";
    }
  });
});