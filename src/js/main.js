import "../css/tailwind.css";
import Alpine from "alpinejs";
import comments from "./comments.js";
import "./logo.js";

window.Alpine = Alpine;

Alpine.data("comments", comments);
Alpine.start();
