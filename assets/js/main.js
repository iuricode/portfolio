import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { writeDescription } from "./writeDescription.js";
import { menu } from "./menu.js";

menu();
writeDescription();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));
