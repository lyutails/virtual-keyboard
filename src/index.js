import { buttonsEng } from "./data/buttonsEng";
import { buttonsRu } from "./data/buttonsRu";
import { keyCodes } from "./data/keyCodes";
import "./style.scss";

const keyboardBody = document.body;
keyboardBody.classList.add("keyboard_body");
const keyboardWrapper = document.createElement("div");
keyboardWrapper.classList.add("keyboard_wrapper");
keyboardBody.append(keyboardWrapper);

const cherryTextareaWrapper = document.createElement("div");
cherryTextareaWrapper.classList.add("keyboard_cherry_textarea_wrapper");
keyboardWrapper.append(cherryTextareaWrapper);

const keyboardCherryNeon = document.createElement("a");
keyboardCherryNeon.classList.add("keyboard_cherry_neon");
cherryTextareaWrapper.append(keyboardCherryNeon);
keyboardCherryNeon.href = "https://github.com/lyutails/";

const keyboardTextarea = document.createElement("textarea");
keyboardTextarea.classList.add("keyboard_textarea");
cherryTextareaWrapper.append(keyboardTextarea);
keyboardTextarea.style.columns = "1";
keyboardTextarea.placeholder = "Start typing...";

const keyboardPlate = document.createElement("div");
keyboardPlate.classList.add("keyboard_plate");
keyboardWrapper.append(keyboardPlate);

// const keyboardRows = function () {
//   const rowsNumber = 5;
//   for (let i = 0; i < rowsNumber; i++) {
//     const keyboardRow = document.createElement("div");
//     keyboardRow.classList.add("keyboard_row");
//     keyboardPlate.append(keyboardRow);
//   }
// };

// keyboardRows();

// const totalRows = document.querySelectorAll(".keyboard_row");

class createButtons {
  constructor(button) {
    this.button = button;
  }

  createButton() {
    for (let i = 0; i < buttonsEng.length; i++) {
      this.button = document.createElement("div");
      this.button.textContent = buttonsEng[i];
      this.button.classList.add("keyboard_button");
      keyboardPlate.append(this.button);
    }
  }

  // createButtonRu() {
  //   for (let i = 0; i < buttonsRu.length; i++) {
  //     this.button = document.createElement("div");
  //     this.button.textContent = buttonsRu[i];
  //     this.button.classList.add("keyboard_button");
  //     keyboardPlate.append(this.button);
  //   }
  // }

  // createButton() {
  //   buttonsEng.forEach((elem) => {
  //     for (let i = 0; i < elem.length; i++) {
  //       elem.map((el) => {
  //         this.button = document.createElement("div");
  //         this.button.textContent = el;
  //         this.button.classList.add("keyboard_button");
  //         keyboardPlate.append(this.button);
  //       });
  //     }
  //   });

  //   totalRows.forEach((element, i) => {
  //     element.append(this.button);
  //   });
  // }
}

const keyboardButtons = new createButtons();
keyboardButtons.createButton();

const keyboardOS = document.createElement("p");
keyboardOS.classList.add("keyboard_os");
keyboardWrapper.append(keyboardOS);
keyboardOS.textContent = "Win 10";

const keyboardLang = document.createElement("p");
keyboardLang.classList.add("keyboard_lang");
keyboardWrapper.append(keyboardLang);
keyboardLang.textContent = "to change language press Ctrl+Shift";

let lang = 1;

window.addEventListener("keydown", typeText);
// let e = new KeyboardEvent;

function typeText(e) {
  const result = "";
  for (let i = 0; i < buttonsEng.length; i++) {
    if (e?.keyCode === +keyCodes[i]) {
      keyboardTextarea.value += `${result + buttonsEng[i]}`;
    }
  }
}

typeText();

function clickText() {
  const result = "";
  const allButtons = document.querySelectorAll('.keyboard_button');
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', () => {
      keyboardTextarea.value += `${result + allButtons[i].textContent}`;
    })
  }
}

clickText();

// window.addEventListener("keydown", changeLang);

// function changeLang(e) {
//     if(e.keyCode === 16 && e.keyCode === 17) {
//       const keyboardButtonsRu = new createButtons();
//       keyboardButtonsRu.createButtonRu();
//     }
// }

// changeLang();
