const DEFUALT_GRID_SIZE = 16;
const DEFAULT_MODE = 'black';

const blackButton = document.getElementById('btnBlack');
const greyscaleButton = document.getElementById('btnGrey');
const eraserButton = document.getElementById('btnEraser');
const clearButton = document.getElementById('btnClear');

const gridSize16 = document.getElementById('btnGrid16');
const gridSize32 = document.getElementById('btnGrid32');
const gridSize64 = document.getElementById('btnGrid64');
const gridSize128 = document.getElementById('btnGrid128');

const gridBox = document.querySelector('.gridbox');

let currentMode = 'black';
let currentGridSize = DEFUALT_GRID_SIZE;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

window.addEventListener('load', () => {
  createGrid(currentGridSize);
  setButtons(DEFAULT_MODE);
});

blackButton.addEventListener('click', () => {
    currentMode = 'black';
    setButtons('black');
});

greyscaleButton.addEventListener('click', () => {
    currentMode = 'greyscale';
    setButtons('greyscale');
});

eraserButton.addEventListener('click', () => {
    currentMode = 'eraser';
    setButtons('eraser');
});

gridSize16.addEventListener('click', () => {
  currentGridSize = 16;
  setGridButtons(currentGridSize);
  resetGrid();
});

gridSize32.addEventListener('click', () => {
  currentGridSize = 32;
  setGridButtons(currentGridSize);
  resetGrid();
});

gridSize64.addEventListener('click', () => {
  currentGridSize = 64;
  setGridButtons(currentGridSize);
  resetGrid();
});

gridSize128.addEventListener('click', () => {
  currentGridSize = 128;
  setGridButtons(currentGridSize);
  resetGrid();
});

clearButton.addEventListener('click', () => {
  resetGrid();
});

  clearButton.addEventListener('mouseover', () => {
    clearButton.classList.add('button-active');
  });

  clearButton.addEventListener('mouseleave', () => {
    clearButton.classList.remove('button-active');
  });
    

function setButtons(activeState) {
  if (activeState === 'black') {
    blackButton.classList.add('button-active');
    greyscaleButton.classList.remove('button-active');
    eraserButton.classList.remove('button-active');
  } else if (activeState === 'greyscale') {
    blackButton.classList.remove('button-active');
    eraserButton.classList.remove('button-active');
    greyscaleButton.classList.add('button-active');
  } else if (activeState === 'eraser') {
    blackButton.classList.remove('button-active');
    greyscaleButton.classList.remove('button-active');
    eraserButton.classList.add('button-active');
  }
}

function setGridButtons(gridSize) {
  if (gridSize === 16) {
    gridSize16.classList.add('button-active');
    gridSize32.classList.remove('button-active');
    gridSize64.classList.remove('button-active');
    gridSize128.classList.remove('button-active');
  } else if (gridSize === 32) {
    gridSize16.classList.remove('button-active');
    gridSize32.classList.add('button-active');
    gridSize64.classList.remove('button-active');
    gridSize128.classList.remove('button-active');
  } else if (gridSize === 64) {
    gridSize16.classList.remove('button-active');
    gridSize32.classList.remove('button-active');
    gridSize64.classList.add('button-active');
    gridSize128.classList.remove('button-active');
  } else if (gridSize === 128) {
    gridSize16.classList.remove('button-active');
    gridSize32.classList.remove('button-active');
    gridSize64.classList.remove('button-active');
    gridSize128.classList.add('button-active');
  }
}

function createGrid(gridSize) {
  gridBox.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridBox.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.addEventListener('mouseover', () => {
      if (!mouseDown) return;

      if (currentMode === 'black') {
        gridItem.style.backgroundColor = 'black';
        gridItem.style.opacity = '';
      } else if (currentMode === 'eraser') {
        gridItem.style.backgroundColor = 'white';
      } else if (currentMode === 'greyscale') {
        const currentOpacity = gridItem.style.opacity;
        gridItem.style.backgroundColor = 'black';
        if (currentOpacity === '') {
          gridItem.style.opacity = 0.1;
        } else {
          gridItem.style.opacity = parseFloat(currentOpacity) + 0.1;
        }
      } 
    });

    gridBox.appendChild(gridItem);
  }
}

function resetGrid() {
  gridBox.innerHTML = '';
  createGrid(currentGridSize);
}