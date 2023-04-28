import { buttons } from "./data/buttons";
import './style.scss';

const keyboardBody = document.body;
keyboardBody.classList.add('keyboard_body');
const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard_wrapper');
keyboardBody.append(keyboardWrapper);

const cherryTextareaWrapper = document.createElement('div');
cherryTextareaWrapper.classList.add('keyboard_cherry_textarea_wrapper');
keyboardWrapper.append(cherryTextareaWrapper);

const keyboardCherryNeon = document.createElement('div');
keyboardCherryNeon.classList.add('keyboard_cherry_neon');
cherryTextareaWrapper.append(keyboardCherryNeon);

const keyboardTextarea = document.createElement('textarea');
keyboardTextarea.classList.add('keyboard_textarea');
cherryTextareaWrapper.append(keyboardTextarea);

const keyboardPlate = document.createElement('div');
keyboardPlate.classList.add('keyboard_plate');
keyboardWrapper.append(keyboardPlate);

class createButtons {
  constructor(button) {
    this.button = button;
  }

  createButton() {
    for (let i = 0; i <= buttons.length; i++) {
      this.button = document.createElement("div");
      this.button.textContent = buttons[i];
      this.button.classList.add("keyboard_button");
      keyboardPlate.append(this.button);
    }
  }
}

const keyboardButtons = new createButtons();
keyboardButtons.createButton();
