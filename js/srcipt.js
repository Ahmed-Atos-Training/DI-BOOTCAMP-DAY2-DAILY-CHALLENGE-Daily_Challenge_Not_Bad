const sentence = prompt("Enter your sentence");
const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
  const newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else {
  console.log(sentence);
}