const words = [
  { word: "pocket", hint: "A bag for carrying small item" },
  { word: "needle", hint: "A thin and sharp metal pin" },
  { word: "expert", hint: "A person with extensive knowledge" },
  { word: "statement", hint: "A declaration of something" },
  { word: "second", hint: "One-sixtieth of a minute" },
  { word: "second", hint: "One-sixtieth of a minute" },
  { word: "library", hint: "Place containing collection of books" },
  { word: "comfort", hint: "A pleasant feeling of relaxation" },
  { word: "expansion", hint: "The process of increasing or grow" },
  { word: "country", hint: "A politically identified region" },
  { word: "tongue", hint: "The muscular organ of mouth" },
  { word: "canvas", hint: "Piece of fabric for oil painting" },
  { word: "addition", hint: "The process of adding numbers" },
  { word: "meeting", hint: "Event in which people come together" },
  { word: "cinema", hint: "An entertaining place or hall" },
  { word: "bracelet", hint: "A jewelery wear in hand" },
  { word: "comb", hint: "A thing from which hair detangled" },
  { word: "exchange", hint: "The act of trading" },
  { word: "onion", hint: "It makes us cry on cutting " },
  { word: "curtains", hint: "Fall in the end of movie" },
  { word: "market", hint: "Buyers and sellers dealikng place" },
  { word: "dictionary", hint: "Storage of words" },
  { word: "variable", hint: "Acontainer to store data" },
];

let scram_word = document.querySelector(".word");
let scram_word_hint = document.querySelector(".hint span");
let refresh = document.querySelector(".refresh-btn");
let check = document.querySelector(".check-btn");
let user_input = document.querySelector("input");
let time = document.querySelector(".time b");
let correct_word;

// ======================================================
let timer;
const init_timer = (max_time) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (max_time > 0) {
      max_time--;
      return (time.innerText = max_time);
    }
    clearInterval(timer);
    alert(`Time off! ${correct_word.toUpperCase()} was a correct word`);
    init_game();
  }, 1000);
};

// ======================================================
const init_game = () => {
  init_timer(30);
  let random_obj = words[Math.floor(Math.random() * words.length)]; //getting random obj from words
  let word_array = random_obj.word.split(""); //splitting each letter of random word

  for (let i = word_array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //getting random number
    [word_array[i], word_array[j]] = [word_array[j], word_array[i]]; //shuffling letters
  }
  scram_word.innerText = word_array.join(""); // joining the letter pass as text
  scram_word_hint.innerText = random_obj.hint; //passing hint

  correct_word = random_obj.word.toLowerCase();

  user_input.value = ""; // make input field empty
  user_input.setAttribute("maxlength", correct_word.length); //setting input max length
  //   console.log(word_array, random_obj.word);
};
init_game();

// ============================================================
refresh.addEventListener(
  "click",
  init_game
  // window.location.reload()
);
// ===============================================================
const check_word = () => {
  let user_word = user_input.value.toLocaleLowerCase();
  //   console.log(user_word);
  if (!user_word) return alert("Please Arrange the word");

  if (user_word !== correct_word)
    return alert(`Oops! ${user_word} is not a correct word`); // if user false return this
  alert(`Congrats! ${user_word.toUpperCase()} is a correct word`); //if truw return this
  init_game();
};

check.addEventListener("click", check_word);
