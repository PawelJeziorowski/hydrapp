const number = document.querySelector(".numer--js");
const adder = document.querySelector(".add--js");
const subber = document.querySelector(".sub--js");
const key = new Date().toISOString().slice(0,10);
console.log(key);

let glasNumber = localStorage.getItem('key');
console.log(glasNumber);

if (glasNumber === null){
    glasNumber = 0;
    console.log(glasNumber);
    localStorage.setItem(key, glasNumber);
    number.innerHTML = 0;
} else{
    glasNumber = parseInt(glasNumber);
    console.log(glasNumber);
    number.value = localStorage.getItem(key);
}

adder.addEventListener('click', () => {
    glasNumber = glasNumber + 1;
    localStorage.setItem(key, glasNumber)
    number.innerHTML = localStorage.getItem(key);
    console.log(localStorage.getItem(key));
});

subber.addEventListener('click', () => {
    if (glasNumber != 0) {
        glasNumber = glasNumber - 1;
        localStorage.setItem(key, glasNumber)
        number.innerHTML = localStorage.getItem(key);
    }
    console.log(localStorage.getItem(key));
});


//save.addEventListener('click', () => {
 //   localStorage.setItem('wynik', comment.value);
//    console.log(comment.value);
//})

//load.addEventListener('click', () => {
 //   const a = localStorage.getItem('wynik')
 //   comment.value = a;
//})
