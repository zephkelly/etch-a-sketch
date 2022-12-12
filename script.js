const blackButton = document.getElementById('btnBlack');
const greyscaleButton = document.getElementById('btnGrey');
const eraserButton = document.getElementById('btnEraser');

let currentMode = 'black';

blackButton.addEventListener('click', () => {
  if (blackButton.classList.contains('button-active')) {
    return;
  } else {
    setMode('black');
  }
});

greyscaleButton.addEventListener('click', () => {
  if (greyscaleButton.classList.contains('button-active')) {
    return;
  } else {
    setMode('greyscale');
  }
});

eraserButton.addEventListener('click', () => {
  if (eraserButton.classList.contains('button-active')) {
      return;
  } else {
      setMode('eraser');
  }
});

function setMode(newMode) {
  if (currentMode === newMode) {
    return;
  } else if (newMode === 'black') {
    currentMode = 'black';
    setButtons('black');
  } else if (newMode === 'greyscale') {
    currentMode = 'greyscale';
    setButtons('greyscale');
  } else if (newMode === 'eraser') {
    currentMode = 'eraser';
    setButtons('eraser');
  }
}

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