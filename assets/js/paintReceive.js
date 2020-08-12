const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const mode = document.getElementById("jsMode");

const CANVAS_SIZE = 700;

const beginPath = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

const strokePath = (x, y) => {
  ctx.lineTo(x, y);
  ctx.stroke();
};

const colorClick = (color) => {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

const modeClick = (filling) => {
  if (filling === true) {
    mode.innerText = "Paint";
  } else {
    mode.innerText = "Fill";
  }
};

const canvasFill = () => {
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
};

export const handleBeganPath = ({ x, y }) => beginPath(x, y);
export const handleStrokedPath = ({ x, y }) => strokePath(x, y);
export const handleChangedColor = ({ color }) => colorClick(color);
export const handleChangedMode = ({ filling }) => modeClick(filling);
export const handleCanvasFill = () => canvasFill();
