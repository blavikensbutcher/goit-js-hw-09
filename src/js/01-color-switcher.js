
const selectors = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]')
}

selectors.startBtn.addEventListener('click', onStartClick);
selectors.stopBtn.addEventListener('click', onStopClick);

let intervalId;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStartClick() {
    selectors.startBtn.disabled = true;
    selectors.stopBtn.disabled = false;
    intervalId = setInterval(() => {
        selectors.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopClick() {
    clearInterval(intervalId);
    selectors.startBtn.disabled = false;
    selectors.stopBtn.disabled = true;
}

