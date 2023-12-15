// Задание 1 
let bigStep = 0;
for (let step = 1; step <= 1000; step++){
  bigStep += step;
}
console.log(bigStep);

// Задание 2 

let number = Math.floor(Math.random() * (30 - 2) + 2);

let factorial = 1;
for (let i = 1; i <= number; i++) { 
  factorial *= i;
}

console.log("Заданное число:", number);
console.log("Факториал:", factorial);

// Задание 3

let vityaAge = 10; 
let bikePrice = 60000; 
let vityaSavings = 0; 
let momGift = 1000; 
let dadGift = 0;
while (vityaSavings < bikePrice) {
  if (vityaAge >= 11) {
    dadGift += 1200;
  }
  vityaSavings += momGift + dadGift;
  vityaAge++;
}

console.log("Витя получит велосипед через " + (vityaAge - 10) + " лет.");

// Задание 4 

const kGarden = "огород";
const Hut = "шалаш";

function isPalindrome(kGarden,Hut) {

  let firstLetter = kGarden[0];
  let lastLetter = kGarden[kGarden.length - 1];

  let firstLetter2 = Hut[0];
  let lastLetter2 = Hut[Hut.length - 1];


  if (firstLetter === lastLetter) {
    console.log(`Слово  ${kGarden}  является палиндромом`);
  } else {
    console.log(`Слово  ${kGarden}  не является палиндромом`);
  }

  if (firstLetter2 === lastLetter2) {
    console.log(`Слово  ${Hut}  является палиндромом`);
  } else {
    console.log(`Слово  ${Hut}  не является палиндромом`);
  }
} 



isPalindrome(kGarden,Hut);


// Задание 5 

let randomNum = Math.floor(Math.random() * 101);
let guessed = false; 

while (!guessed) {
  let userNum = parseInt(prompt('Угадайте число от 0 до 100:'));

  if (userNum === randomNum) {
    alert('Поздравляю, вы угадали число!');
    guessed = true; //
  } else if (userNum >= randomNum - 5 && userNum <= randomNum + 5) { 
    alert('Горячо!');
  } else if (userNum >= randomNum - 10 && userNum <= randomNum + 10) { 
    alert('Тепло!');
  } else { 
    alert('Холодно!');
  }
}