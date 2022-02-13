Describe: wordCounter()

<!--Test One-->

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

<!--Test Two-->

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2


<!--Test Three-->

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

 <!--Test ThreeA-->

 Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

<!--Test Four-->

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

<!--Function Two-->
<!--Test One-->

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

<!--Test Six-->

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

<!--Test Seven-->

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0


Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0

