const circle = document.querySelector('.circle');

const changeColor = () => {
    const inputColor = document.querySelector('input[placeholder ="color"]');
    circle.style.backgroundColor = inputColor.value;
};

const changeHeight = () => {
    const inputHeight = document.querySelector('input[placeholder ="height"]');
    inputHeight.value === '' ?
        circle.style.height = 100 + 'px' :
        circle.style.height = inputHeight.value + 'px';
        circle.style.width = circle.style.height;
   };

document.addEventListener('input', e => {
    changeColor();
    changeHeight()
});
