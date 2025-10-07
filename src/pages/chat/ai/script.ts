import "./styles.scss";
import { pause } from "../../../lib/pause.js";
const chatsContainer = document.querySelector<HTMLDivElement>("div#chats")!;

const chatA = document.querySelector<HTMLDivElement>("div[data-chat='A']")!;
const chatX = document.querySelector<HTMLDivElement>("div[data-chat='X']")!;
const chatB = document.querySelector<HTMLDivElement>("div[data-chat='B']")!;
const chatC = document.querySelector<HTMLDivElement>("div[data-chat='C']")!;
const chatD = document.querySelector<HTMLDivElement>("div[data-chat='D']")!;
const chatE = document.querySelector<HTMLDivElement>("div[data-chat='E']")!;
const chatF = document.querySelector<HTMLDivElement>("div[data-chat='F']")!;

const inputBox = document.querySelector<HTMLInputElement>("input#input-field")!;

chatA.classList.add("hidden");
chatX.classList.add("hidden");
chatB.classList.add("hidden");
chatC.classList.add("hidden");
chatD.classList.add("hidden");
chatE.classList.add("hidden");
chatF.classList.add("hidden");

let userInputs = 0;
inputBox.disabled = false;

inputBox.addEventListener("keypress", async (event)=>{
    if(event.key === "Enter") {
        event.preventDefault();
        inputBox.disabled = true;
        inputBox.value = "";
        switch(userInputs++) {
            case 0: {
                chatX.classList.remove("hidden");
                chatsContainer.scrollTop = chatsContainer.scrollHeight;
                await pause(1000);

                chatB.classList.remove("hidden");
                chatsContainer.scrollTop = chatsContainer.scrollHeight;
                await pause(1000);
                
                chatC.classList.remove("hidden");
                chatsContainer.scrollTop = chatsContainer.scrollHeight;
                break;
            }
            case 1: {
                chatD.classList.remove("hidden");
                chatsContainer.scrollTop = chatsContainer.scrollHeight;
                await pause(1000);

                chatE.classList.remove("hidden");
                chatsContainer.scrollTop = chatsContainer.scrollHeight;
                await pause(1500);
                
                chatF.classList.remove("hidden");
                chatsContainer.scrollTop = chatsContainer.scrollHeight;
                break;
            }
            default: {
                return;
            }
        }
        inputBox.disabled = false;
        inputBox.focus();
    }
})

async function main(){
    await pause(500);
    chatA.classList.remove("hidden");
    inputBox.focus();
}
main().catch(console.log)
