const blackButton = document.getElementById('btnBlack');
const greyscaleButton = document.getElementById('btnGrey');
const eraserButton = document.getElementById('btnEraser');

blackButton.addEventListener('click', () => {
    console.log("Hi");

  if (blackButton.classList.contains('button-active')) {
    return;
  } else {
    blackButton.classList.add('button-active');

    greyscaleButton.classList.remove('button-active');
    eraserButton.classList.remove('button-active');
  }
});

greyscaleButton.addEventListener('click', () => {
  if (greyscaleButton.classList.contains('button-active')) {
    return;
  } else {
    greyscaleButton.classList.add('button-active');

    blackButton.classList.remove('button-active');
    eraserButton.classList.remove('button-active');
  }
});

eraserButton.addEventListener('click', () => {
  if (eraserButton.classList.contains('button-active')) {
      return;
  } else {
      eraserButton.classList.add('button-active');

      greyscaleButton.classList.remove('button-active');
      blackButton.classList.remove('button-active');
  }
});
