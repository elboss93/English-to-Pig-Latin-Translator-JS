


    console.log("Welcome to Pig Latin Translator");

let phraseInput = process.argv[2];

const vowelAlphabet = ['a', 'e', 'i', 'o', 'u'];

function pigLatin(word) {
  if (!word) return "Please enter a word.";

  const first = word[0].toLowerCase();
  const second = word[1]?.toLowerCase(); 

  if (!vowelAlphabet.includes(first) && vowelAlphabet.includes(second)) {
    return word.slice(1) + word[0] + "ay";
  } else if (!vowelAlphabet.includes(first) && !vowelAlphabet.includes(second)) {
    return word.slice(2) + word.slice(0, 2) + "ay";
  } else if (vowelAlphabet.includes(first)) {
    return word + "way";
  } else {
    return word; 
  }
}

const result = pigLatin(phraseInput);
console.log(result);