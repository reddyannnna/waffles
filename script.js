
function showQuote() {
  const quotes = [
    "🎶 Music is the shorthand of emotion. — Leo Tolstoy",
    "🎧 One good thing about music, when it hits you, you feel no pain. — Bob Marley",
    "🎼 Without music, life would be a mistake. — Friedrich Nietzsche",
    "🎵 Music expresses that which cannot be said and on which it is impossible to be silent. — Victor Hugo",
    "🎹 Music can change the world. — Beethoven",
    "🎷 Where words fail, music speaks. — Hans Christian Andersen",
    "🪩 Life is one grand, sweet song, so start the music. — Ronald Reagan",
    "🎤 Music brings people together. — Ed Sheeran",
    "📻 Spotify makes the day better. — Every student ever 😄"
  ];

  const quoteBox = document.getElementById("quoteBox");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteBox.classList.remove("show");
  setTimeout(() => {
    quoteBox.innerText = quote;
    quoteBox.classList.add("show");
  }, 100);
}


const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
let theme = localStorage.getItem("theme");


if (theme === "light") {
  body.classList.add("light");
  toggleBtn.innerText = "🌞 Theme";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  toggleBtn.innerText = isLight ? "🌞 Theme" : "🌙 Theme";
  localStorage.setItem("theme", isLight ? "light" : "dark");


  toggleBtn.style.transform = "rotate(360deg)";
  setTimeout(() => {
    toggleBtn.style.transform = "none";
  }, 500);
});
