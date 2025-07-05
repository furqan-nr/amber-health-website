import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MacbookPro } from "./screens/MacbookPro";
import "./utils/ScrollAnimations-fixed.js";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MacbookPro />
  </StrictMode>,
);
