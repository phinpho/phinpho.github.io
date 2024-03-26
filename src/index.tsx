import { createRoot } from "react-dom/client";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";
import "virtual:uno.css";
import "virtual:unocss-devtools";
import { App } from "./components/App";

const rootElement = document.createElement("div");
rootElement.classList.add(
  "m-inline-auto",
  "max-w-200",
  "w-80%",
  "flex",
  "flex-col",
  "justify-stretch",
  "gap-8"
);

const root = createRoot(rootElement);
document.body.appendChild(rootElement);

root.render(<App />);
