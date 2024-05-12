import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

const number = 1;
const string = "hello";
const boolean = true;
const array = [1, 2, 3];
const tuple = [1, "hello"];
const object = { key: "value" };

function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(1, 2);
// const resultError = sum(1, "2");


setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

