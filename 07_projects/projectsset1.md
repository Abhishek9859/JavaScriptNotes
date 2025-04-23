# Projects realted to DOM

## projects link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution  code

## project1

```javascript 
console.log(Abhishek)

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    const color = e.target.id;
    switch (color) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;

      default:
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```


## project 2


```javaScript

const form = document.querySelector('form');

//this usecase will give you empty value
//const height = parseInt(document.querySelector('#height).value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    //results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `<span>under weight ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Normal weight ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Overweight ${bmi}</span>`;
    }
  }
});


```


## Project 3

``` javaScript
const clock = document.querySelector('#clock')

// it is used to update time every second or millisecond according to your requirements
setInterval(function(){
  let newDate = new Date()
  clock.innerHTML = newDate.toLocaleTimeString();
} , 1000)

```




## Project 4

``` JavaScript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowHi = document.querySelector('.lowOrHi');
const starOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  starOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    newGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    starOver.removeChild(p);

    playGame = true;
  });
}


```


## Project 5

``` JavaScript = keypress to know key , keycode and code

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'><table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key=== " " ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
 </div>
  `;
});


```


## Project 6

```JavaScript - change background when press start and stop

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
const startChangingColor = function () {
  if (!interval) {
    interval = setInterval(changeBg, 1000);
  }
  function changeBg() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```