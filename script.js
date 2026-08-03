function showQuote() {

  const musicQuotes = [
    "Music is the shorthand of emotion. - Leo Tolstoy",
    "One good thing about music, when it hits you, you feel no pain. - Bob Marley",
    "Without music, life would be a mistake. - Friedrich Nietzsche",
    "Music expresses that which cannot be said and on which it is impossible to be silent. - Victor Hugo",
    "Music can change the world. - Beethoven",
    "Where words fail, music speaks. - Hans Christian Andersen",
    "Life is one grand, sweet song, so start the music. - Ronald Reagan",
    "Music brings people together. - Ed Sheeran",
    "Spotify with math is fun. I repeat, I ain't a nerd. - Every student ever"
  ];

  const quoteElement = document.getElementById("quoteBox");

  const randomNumber = Math.floor(Math.random() * musicQuotes.length);

  quoteElement.classList.remove("show");

  setTimeout(() => {
    quoteElement.innerText = musicQuotes[randomNumber];
    quoteElement.classList.add("show");
  }, 100);
}

const button = document.getElementById("themeToggle");
const page = document.body;

let currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  page.classList.add("light");
  button.innerText = " Light Theme";
} else {
  button.innerText = " Dark Theme";
}

button.addEventListener("click", () => {

  page.classList.toggle("light");

  const lightMode = page.classList.contains("light");

  if (lightMode) {
    button.innerText = " Light Theme";
  } else {
    button.innerText = " Dark Theme";
  }

  localStorage.setItem("theme", lightMode ? "light" : "dark");

  button.style.transform = "rotate(360deg)";

  setTimeout(() => {
    button.style.transform = "";
  }, 500);

});
