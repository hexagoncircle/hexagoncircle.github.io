// const face = document.getElementById("face");
// const faceText = face.querySelector("span");
// const emojiBubble = document.getElementById("emoji-bubble");
// const userBubble = document.getElementById("user-bubble-textarea");
// const actions = document.getElementById("user-actions");
// const talkingClassName = "is-talking";

// const initEmojiBubble = {
//   text: "Ask me anything.",
//   emoji: {
//     talking: "😊😄",
//     resting: "😊"
//   }
// };

// const answers = [
//   {
//     text: "As I see it, yes.",
//     emoji: {
//       talking: "😊😄",
//       resting: "😁"
//     }
//   },
//   {
//     text: "Ask again later.",
//     emoji: {
//       talking: "😊😄",
//       resting: "🤫"
//     }
//   },
//   {
//     text: "Better not tell you now.",
//     emoji: {
//       talking: "🙂😮",
//       resting: "🤐"
//     }
//   },
//   {
//     text: "Cannot predict now.",
//     emoji: {
//       talking: "😐😮",
//       resting: "😴"
//     }
//   },
//   {
//     text: "Concentrate and ask again.",
//     emoji: {
//       talking: "😐😮",
//       resting: "🤔"
//     }
//   },
//   {
//     text: "Don’t count on it.",
//     emoji: {
//       talking: "🙂😮",
//       resting: "😏"
//     }
//   },
//   {
//     text: "It is certain.",
//     emoji: {
//       talking: "😊😄",
//       resting: "🤩"
//     }
//   },
//   {
//     text: "It is decidedly so.",
//     emoji: {
//       talking: "😊😄",
//       resting: "😀"
//     }
//   },
//   {
//     text: "Most likely.",
//     emoji: {
//       talking: "😊😄",
//       resting: "😉"
//     }
//   },
//   {
//     text: "My reply is no.",
//     emoji: {
//       talking: "🙁😮",
//       resting: "😞"
//     }
//   },
//   {
//     text: "My sources say no.",
//     emoji: {
//       talking: "🙁😮",
//       resting: "😕"
//     }
//   },
//   {
//     text: "Outlook not so good.",
//     emoji: {
//       talking: "🙁😮",
//       resting: "☹️"
//     }
//   },
//   {
//     text: "Reply hazy, try again.",
//     emoji: {
//       talking: "😐😮",
//       resting: "🥴"
//     }
//   },
//   {
//     text: "Signs point to yes.",
//     emoji: {
//       talking: "🙂😮",
//       resting: "😀"
//     }
//   },
//   {
//     text: "Very doubtful.",
//     emoji: {
//       talking: "😣😫",
//       resting: "😔"
//     }
//   },
//   {
//     text: "Without a doubt.",
//     emoji: {
//       talking: "😊😄",
//       resting: "😍"
//     }
//   },
//   {
//     text: "Yes.",
//     emoji: {
//       talking: "😊😄",
//       resting: "☺️"
//     }
//   },
//   {
//     text: "Yes – definitely.",
//     emoji: {
//       talking: "😊😄",
//       resting: "😁"
//     }
//   },
//   {
//     text: "You may rely on it.",
//     emoji: {
//       talking: "🙂😮",
//       resting: "😉"
//     }
//   }
// ];

// const handleQuestionSubmission = () => {
//   return getEmojiBubbleText(
//     answers[Math.floor(Math.random() * answers.length)]
//   );
// };

// const talkingAnimCallback = (emoji) => {
//   faceText.innerText = emoji.resting;
//   setTimeout(() => document.body.classList.remove(talkingClassName), 1000);
//   face.removeEventListener("animationend", talkingAnimCallback);
// };

// const getEmojiBubbleText = ({ text, emoji }) => {
//   document.body.classList.add(talkingClassName);

//   emojiBubble.innerHTML = [...text]
//     .map((letter, i) => `<span style='--i: ${i}'>${letter}</span>`)
//     .join("");

//   faceText.innerText = emoji.talking;
//   face.style.setProperty("--iteration-count", Math.floor(text.length / 2));
//   face.addEventListener("animationend", () => talkingAnimCallback(emoji));
// };

// userBubble.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     handleQuestionSubmission();
//   }
// });

// userBubble.addEventListener("click", () => {
//   window.getSelection().selectAllChildren(userBubble);
// });

// getEmojiBubbleText(initEmojiBubble);