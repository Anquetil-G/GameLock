const main = document.querySelector("main");
const stopwatch = document.getElementById("stopwatch-button");
const timer = document.getElementById("timer");
const keyButton = document.getElementById("key-button");
const formCode = document.querySelector(".form-code-container");
const inputCode = document.getElementById("input-code");
const inputCodeButton = document.getElementById("input-code-button");
const codeContainer = document.querySelector(".code-container");
const buttonExitCode = document.getElementById("exit-code");
const popupStep = document.querySelector(".popup-step-container");
const levelStep = document.getElementById("level-steps");
const levelStepSpan = document.getElementById("level-steps-icone-span");

let totalSeconds = 1200;
let minutes = 20;
let seconds = 0;
let interval;
let clickButtonStopwatch = false;
let paused = false;

const codes = [1443, 1245, 1678, 7985, 9652, 8876];
let stepsRooms = 0;
let codePress;



stopwatch.addEventListener("click", () => {
    if (clickButtonStopwatch === false) {
        clickButtonStopwatch = true;
        paused = false;
        clearInterval(interval);
        countdown();
    } else {
        paused = true;
        clearInterval(interval);
        clickButtonStopwatch = false;
    }
});
    
const countdown = () => {
    if (paused === false) {
        interval = setInterval(() => {
            if (minutes === 0 && seconds === 0) {
                clearInterval(interval);
                timer.textContent = `Stoop !`
            } else if (seconds === 0) {
                seconds = 59;
                minutes--
                if (seconds < 10) {
                    timer.textContent = `${minutes} : 0${seconds}`
                } else {
                    timer.textContent = `${minutes} : ${seconds}`
                }
            } else {
                seconds--
                if (seconds < 10) {
                    timer.textContent = `${minutes} : 0${seconds}`
                } else {
                    timer.textContent = `${minutes} : ${seconds}`
                }
            };
        }, 1000);
    };
};



keyButton.addEventListener("click", () => {
    codeContainer.classList.remove("remove");
    main.classList.add("remove");
});

inputCode.addEventListener("input", (e) => {
    codePress = e.target.value;
});

formCode.addEventListener("submit", (e) => {
    e.preventDefault();
    if (codePress == codes[stepsRooms]) {
        codeContainer.classList.add("remove");
        main.classList.remove("remove");
        popupStep.classList.add("anim-popup-step");
        stepsRooms++;
        if (stepsRooms == 6) {
            alert("Vous venez de finir le jeu, félicitation !");
            location.href = 'https://media.tenor.com/a1tcXEnPrBYAAAAM/gg-wp.gif';
        } else {
            levelStep.textContent = stepsRooms + 1;
            levelStepSpan.textContent = stepsRooms + 1;
        };
    } else {
        alert("Le code n'est pas bon !");
    };
    setTimeout(() => {
        popupStep.classList.remove("anim-popup-step");
    }, 8000);
});

inputCodeButton.addEventListener("click", () => {
    if (codePress == codes[stepsRooms]) {
        codeContainer.classList.add("remove");
        main.classList.remove("remove");
        popupStep.classList.add("anim-popup-step");
        stepsRooms++;
        if (stepsRooms == 6) {
            alert("Vous venez de finir le jeu, félicitation !");
            location.href = 'https://media.tenor.com/a1tcXEnPrBYAAAAM/gg-wp.gif';
        } else {
            levelStep.textContent = stepsRooms + 1;
            levelStepSpan.textContent = stepsRooms + 1;
        };
    } else {
        alert("Le code n'est pas bon !");
    };
    setTimeout(() => {
        popupStep.classList.remove("anim-popup-step");
    }, 8000);
});

buttonExitCode.addEventListener("click", () => {
    codeContainer.classList.add("remove");
    main.classList.remove("remove");
});