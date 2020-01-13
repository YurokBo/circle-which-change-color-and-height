document.addEventListener('input', e => {
    const circle = document.querySelector('.circle'),
        inputColor = document.querySelector('input[placeholder ="color"]'),
        inputHeight = document.querySelector('input[placeholder ="height"]');

    circle.style.backgroundColor = inputColor.value;
    circle.style.height = inputHeight.value + 'px';

    if (inputHeight.value === '') {
        circle.style.height = 100 + 'px';
    }

})
