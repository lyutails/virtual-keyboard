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

const cherryBranchLeaf = document.createElement("span");
cherryBranchLeaf.classList.add("keyboard_cherry_branch_leaf");
keyboardCherryNeon.append(cherryBranchLeaf);

const cherryBerries = document.createElement("span");
cherryBerries.classList.add("keyboard_cherry_berries");
keyboardCherryNeon.append(cherryBerries);

const keyboardTextarea = document.createElement("textarea");
keyboardTextarea.classList.add("keyboard_textarea");
cherryTextareaWrapper.append(keyboardTextarea);
keyboardTextarea.style.columns = "1";
keyboardTextarea.placeholder = "Start typing...";

const keyboardPlate = document.createElement("div");
keyboardPlate.classList.add("keyboard_plate");
keyboardWrapper.append(keyboardPlate);

const keyboardRows = function () {
  const rowsNumber = 5;
  for (let i = 0; i < rowsNumber; i++) {
    const keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard_row");
    keyboardPlate.append(keyboardRow);
  }
};

keyboardRows();

const totalRows = document.querySelectorAll(".keyboard_row");

class createButtons {
  constructor(button) {
    this.button = button;
  }

  // createButtonRu() {
  //   for (let i = 0; i < buttonsRu.length; i++) {
  //     this.button = document.createElement("div");
  //     this.button.textContent = buttonsRu[i];
  //     this.button.classList.add("keyboard_button");
  //     keyboardPlate.append(this.button);
  //   }
  // }

  createButton() {
    buttonsEng.forEach((elem, i) => {
      const newButtons = [];
      for (let i = 0; i < elem.length; i++) {
        this.button = document.createElement("div");
        this.button.textContent = elem[i];
        this.button.classList.add("keyboard_button");
        newButtons.push(this.button);
      }
      totalRows[i].append(...newButtons);
    });
  }
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
keyboardLang.textContent = "to change language press Ctrl+Alt";

window.addEventListener("keydown", typeText);

function typeText(e) {
  const allButtons = document.querySelectorAll(".keyboard_button");
  const result = "";
  for (let i = 0; i < allButtons.length; i++) {
    if (e?.keyCode === +keyCodes[i]) {
      keyboardTextarea.value += `${result + allButtons[i].textContent}`;
    }
  }
}

typeText();

function typeHighlight() {
  const kindaButtons = document.querySelectorAll(".keyboard_button");
  document.onkeyup = function (e) {
    for (let i = 0; i < kindaButtons.length; i++) {
      if (e.key === kindaButtons[i].textContent) {
        if (
          document
            .querySelector(".keyboard_button")
            .classList.contains("active")
        ) {
          document
            .querySelector(".keyboard_button.active")
            .classList.remove("active");
        }
        if (kindaButtons[i].textContent === e.key) {
          kindaButtons[i].classList.add("active");
          setTimeout(() => {
            kindaButtons[i].classList.remove("active");
          }, 500);
        }
      }
    }
  };
}

typeHighlight();

function clickText() {
  const result = "";
  const allButtons = document.querySelectorAll(".keyboard_button");
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", () => {
      keyboardTextarea.value += `${result + allButtons[i].textContent}`;
    });
  }
}

clickText();

// let lang = 1;

// const lang = localStorage.getItem('lang') ?? 'eng'

// window.addEventListener("keydown", changeLang);

// function changeLang(e) {
//     if(e.keyCode === 16 && e.keyCode === 17) {
//       const keyboardButtonsRu = new createButtons();
//       keyboardButtonsRu.createButtonRu();
//     }
// }

// changeLang();
