//what do we need.
//So we need a an on click event handler.
//We need to play sound when button is clicked.
//We need to style button when button is clicked.
//i think when clicked we can add a class of playing. That class will play the sound and do the animation of the button.
// const allKeys = document.querySelectorAll(".key");
// const audio = document.querySelectorAll("audio");

//select one now. Through loop
//Array.from is a way to make a nodelist into an array because a nodelist is an iterable obj and you cannot use array method on it.
// Array.from(allKeys).map((key) => {
//   Array.from(audio).map((sound) => {
//     key.addEventListener("keydown", (e) => {
//       key.classList.add("playing");

//       if (sound.getAttribute("data-key") === key.getAttribute("data-key")) {
//         sound.play();
//       } else return;
//       sound.currentTime = 0;
//     });

//     // key.addEventListener("mouseup", () => {
//     //   key.classList.remove("playing");
//     //   if (sound.getAttribute("data-key") === key.getAttribute("data-key")) {
//     //     sound.pause();
//     //   }
//     // });

//     return sound;
//   });

//   return key;
// });

// console.log(audio);

// THE ABOVE WAS MY ATTEMPT AND I MADE IT WORK ON CLICK WHEN IT WAS SUPPOSED TO WORK ON KEYDOWN. BECAUSE IM DUMB AND DIDNT THINK I HAD TO USE KEYBOARD.

const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  console.log(key);
  key.classList.add("playing");
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  console.log(e.propertyName);
  e.target.classList.remove("playing");
  //   this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
