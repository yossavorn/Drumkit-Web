drum = document.querySelectorAll(".drum");

for (let index = 0; index < drum.length; index++) {
  drum[index].addEventListener("click", function () {
    let caseHtml = this.innerHTML;
    console.log(caseHtml);
    MakeSound(caseHtml);
    buttonAnimation(caseHtml);
  });
}

let drumpress = document.addEventListener("keydown", function (event) {
  let keyEvent = event.key;
  MakeSound(keyEvent);
  buttonAnimation(keyEvent);
});

let MakeSound = (keyEvent) => {
  switch (keyEvent) {
    case "w":
      let tom1Sound = new Audio("./sounds/tom-1.mp3");
      tom1Sound.play();
      break;
    case "a":
      let tom2Sound = new Audio("./sounds/tom-2.mp3");
      tom2Sound.play();
      break;
    case "s":
      let tom3Sound = new Audio("./sounds/tom-3.mp3");
      tom3Sound.play();
      break;

    case "d":
      let tom4Sound = new Audio("./sounds/tom-4.mp3");
      tom4Sound.play();
      break;

    case "j":
      let crashSound = new Audio("./sounds/snare.mp3");
      crashSound.play();
      break;

    case "k":
      let snareSound = new Audio("./sounds/crash.mp3");
      snareSound.play();
      break;
    case "l":
      let kickSound = new Audio("./sounds/kick-bass.mp3");
      kickSound.play();
      break;

    default:
      console.log("nope");
      break;
  }
};

const buttonAnimation = (currentKey) => {
  let button = document.querySelector("." + currentKey);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
};
