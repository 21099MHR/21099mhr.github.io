const h_words = [];

h_words.push(
  "Hangry",
  "Harry",
  "Horrible",
  "Horny",
  "Hera",
  "Hungry",
  "Hairy",
  "Hella",
  "Hanging",
  "Himbo",
  "Hentai"
);

function generate_wah() {
  document.getElementById("wah").textContent = "We Are " + get_h_word() + "!";
}

function get_h_word() {
  return h_words[Math.floor(Math.random() * h_words.length)];
}

function squeak() {
  new Audio("squeak.mp3").play();
}
