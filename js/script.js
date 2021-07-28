import dropdown from "./dropdown.js";
import animarScroll from "./anima-scroll.js";
import SlideNav from "./slide.js";

const slide = new SlideNav(".slide-ul", ".slide");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControl(".custom-controls");
dropdown();
animarScroll();
