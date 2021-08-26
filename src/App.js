import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling face with smiling eyes",
  "🙅‍♂️": "man gesturing No",
  "😀": "grinning face",
  "👍": "thumbs up",
  "😂": "face with tears of joy",
  "🍕": "pizza",
  "😎": "smiling face with sunglasses",
  "🏠": "House",
  "🤔": "thinking face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outt!</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h2> emoji we know </h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontsize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
