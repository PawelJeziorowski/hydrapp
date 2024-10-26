import JSConfetti from 'js-confetti';
const jsConfetti = new JSConfetti()

const number = document.querySelector(".numer--js");
const adder = document.querySelector(".add--js");
const subber = document.querySelector(".sub--js");
let time;
let hour;
let minute;
let key = new Date().toLocaleString().slice(0, 10);
console.log(key);

let glasNumber = localStorage.getItem(key);
console.log(glasNumber);

setInterval(() => {
    if (key !== new Date().toLocaleString().slice(0, 10)) {
        key = new Date().toLocaleString().slice(0, 10)
        glasNumber = 0
        localStorage.setItem(key, glasNumber)
    }
}, 60000);

if (glasNumber === null) {
    glasNumber = 0;
    console.log(glasNumber);
    localStorage.setItem(key, glasNumber);
    number.innerHTML = 0;
} else {
    glasNumber = parseInt(glasNumber);
    console.log(glasNumber);
    number.innerHTML = localStorage.getItem(key);
}

adder.addEventListener('click', () => {
    glasNumber = glasNumber + 1;
    localStorage.setItem(key, glasNumber)
    number.innerHTML = localStorage.getItem(key);
    console.log(localStorage.getItem(key));
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    })
});

subber.addEventListener('click', () => {
    if (glasNumber != 0) {
        glasNumber = glasNumber - 1;
        localStorage.setItem(key, glasNumber)
        number.innerHTML = localStorage.getItem(key);
    }
    console.log(localStorage.getItem(key));
});


setInterval(() => {
    time = new Date();
    console.log(time);
    hour = time.getHours();
    minute = time.getMinutes();
    if (hour === minute) {
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        });
    }
}, 60000);












//save.addEventListener('click', () => {
//   localStorage.setItem('wynik', comment.value);
//    console.log(comment.value);
//})

//load.addEventListener('click', () => {
//   const a = localStorage.getItem('wynik')
//   comment.value = a;
//})
