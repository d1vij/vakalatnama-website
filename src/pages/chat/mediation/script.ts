import "./styles.scss";
import { pause } from "../../../lib/pause.js";

const chatA = document.querySelector<HTMLDivElement>("div[data-chat='A']")!;
const chatB = document.querySelector<HTMLDivElement>("div[data-chat='B']")!;
const chatC = document.querySelector<HTMLDivElement>("div[data-chat='C']")!;
const chatD = document.querySelector<HTMLDivElement>("div[data-chat='D']")!;
const chatE = document.querySelector<HTMLDivElement>("div[data-chat='E']")!;
const chatF = document.querySelector<HTMLDivElement>("div[data-chat='F']")!;
const chatG = document.querySelector<HTMLDivElement>("div[data-chat='G']")!;

const chatH = document.querySelector<HTMLDivElement>("div[data-chat='H']")!;
const chatI = document.querySelector<HTMLDivElement>("div[data-chat='I']")!;

const inputFeild =
  document.querySelector<HTMLInputElement>("input#input-feild")!;

let userInputs = 0;

inputFeild.addEventListener("keypress", async (event) => {
  if (event.key !== "Enter") return;

  inputFeild.disabled = true;
  inputFeild.value = "";

  switch (userInputs++) {
    case 0: {
      chatA.classList.remove("hidden");
      await pause(1500);

      chatB.classList.remove("hidden");
      await pause(1500);

      chatC.classList.remove("hidden");
      break;
    }
    case 1: {
      chatD.classList.remove("hidden");
      await pause(1500);

      chatE.classList.remove("hidden");
      await pause(1500);

      chatF.classList.remove("hidden");
      break;
    }
    case 2: {
      chatG.classList.remove("hidden");
      await pause(2000);

      chatH.classList.remove("hidden");
      await pause(1500);

      chatI.classList.remove("hidden");
      break;
    }
    default:
      return;
  }
  inputFeild.disabled = false;
  inputFeild.focus();
});

async function main() {}

main().catch(console.log);
