function getRandom() {

  const  = [
    "Music is the shorthand of emotion. - Leo Tolstoy", 
    "One good thing about music, when it hits you, you feel no pain. - Bob Marley",
    "Without music, life would be a mistake. - Friedrich Nietzsche",
    "Music expresses that which cannot be said and on which it is impossible to be silent. - Victor Hugo",
    "Music can change the world. - Beethoven",
    "Where words fail, music speaks. - Hans Christian Andersen",
    "Life is one grand, sweet song, so start the music. - Ronald Reagan",
    "Music brings people together. - Ed Sheeran",
    "Spotify with math is fun i repeat i aint a nerd. - Every student ever lowk only me?!"
  ];

  let quoteElement = document.getElementById("quoteBox");

  let randomNumber = Math.floor(Math.random() * musicQuotes.length);

  quoteElement.classList.remove("show");

  setTimeout(function () {

    quoteElement.innerText = musicQuotes[randomNumber];

    quoteElement.classList.add("show");

  }, 100);

}


const button = document.getElementById("themeToggle");
const page = document.body;

let currentTheme = localStorage.getItem("theme");


if(currentTheme == "light")
{
  page.classList.add("light");
  button.innerText = "Light Theme";
}


button.addEventListener("click", function() {

  page.classList.toggle("light");

  let lightMode = page.classList.contains("light");

  if(lightMode){
    button.innerText = "Light Theme";
  }
  else{
    button.innerText = "Dark Theme";
  }

  localStorage.setItem("theme", lightMode ? "light" : "dark");

  button.style.transform = "rotate(360deg)";

  setTimeout(function() {
    button.style.transform = "";
  }, 500);

});
