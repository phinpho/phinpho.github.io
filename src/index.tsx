import { createRoot } from "react-dom/client";

const rootElement = document.createElement("div");
const root = createRoot(rootElement);
document.body.appendChild(rootElement);

root.render(<h1>Hello, World!</h1>);
