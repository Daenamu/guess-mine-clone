import { getSocket } from "./socket";

const canvas = document.getElementById("jsCanvas");
const controls = document.getElementById("jsControls");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

const beginPath = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

const strokePath = (x, y) => {
  ctx.lineTo(x, y);
  ctx.stroke();
};

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    beginPath(x, y);
    getSocket().emit(window.events.beginPath, { x, y });
  } else {
    strokePath(x, y);
    getSocket().emit(window.events.strokePath, { x, y });
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  console.log(color);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  getSocket().emit(window.events.changeColor, { color });
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
  getSocket().emit(window.events.changeMode, { filling });
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    getSocket().emit(window.events.canvasFill, {});
  }
}

function handleCM(event) {
  event.preventDefault();
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

export const disableCanvas = () => {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", handleCanvasClick);
};

export const enableCanvas = () => {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
};

if (canvas) {
  getSocket().emit(window.events.changeColor, { color: INITIAL_COLOR });
  getSocket().emit(window.events.changeMode, { filling });
  if (filling) {
    console.log(filling);
    getSocket().emit(window.events.canvasFill, {});
  }
  canvas.addEventListener("contextmenu", handleCM);
  hideControls();
}

export const hideControls = () => (controls.style.display = "none");

export const showControls = () => (controls.style.display = "flex");

export const resetCanvas = () => {
  ctx.strokeStyle = "#fff";
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
};

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
