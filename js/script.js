let userDatabase = [
    {
      email: "marek@gmail.com",
      password: "wanczewski",
    },
    {
      email: "jan@gmail.com",
      password: "szafran",
    }
];

function isUserValid(user, pass) {
  for (let i = 0; i < userDatabase.length; i++) {
    if(userDatabase[i].email === user && userDatabase[i].password === pass) {
      return true;
    }
  }
  return false;
}

function logInUser(user, pass) {
  if(isUserValid(user, pass)) {
    alert("Works fine");
  } else {
    alert("Wrong username or password");
  }
}

function openSession(user, pass) {
  let checkEmailInput = document.getElementById('emailInput').value;
  let checkPasswordInput = document.getElementById('passwordInput').value;
  logInUser(checkEmailInput, checkPasswordInput);
}

function buildCalendar() {
  getFirstDay();
  addClassTableDays();
  addDaysToCalendar();
  disablePastDays();
  disableEmptyCells();
  getEditableCells();
}

//dates STARTS HERE
let dateSpan = document.getElementsByClassName('dateAndMonth');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let dateInstance = new Date();
let currentDay = dateInstance.getDate();
let currentYear = dateInstance.getFullYear();
let monthNumber = dateInstance.getMonth();
let currentMonth = monthNames[dateInstance.getMonth()];

dateSpan[0].innerHTML += (currentMonth + " " + currentYear);

let getDaysInMonth = new Date(dateInstance.getFullYear(), dateInstance.getMonth()+1, 0).getDate();

function getFirstDay() {
  let firstDayDate = new Date(currentYear, monthNumber, 1);
  let firstDay = firstDayDate.getDay();
  return firstDay;
};

function addClassTableDays() {
  let start = getFirstDay();
  let sevenDays = document.getElementsByClassName('first7');
  if (start === 0) {
    zero.classList.add('tableDays')
  }
  for (let i = start-1; i<=6; i++) {
    sevenDays[i].classList.add('tableDays');
  }
}


function addDaysToCalendar() {
  let daysToDraw = document.getElementsByClassName('tableDays');
  for(let i = 0; i <= getDaysInMonth-1; i++) {
    daysToDraw[i].innerHTML = i+1;
    if (daysToDraw.length > 0) {
      daysToDraw[i].classList.add('tableDaysHover', 'editable');
    }
  }
  return daysToDraw;
}

function disablePastDays() {
  let daysToDraw = addDaysToCalendar();
  for (let i = currentDay-2; i >= 0; i--) {
    daysToDraw[i].classList.add('disabled');
    daysToDraw[i].classList.remove('editable', 'tableDaysHover');
  }
}

function disableEmptyCells(){
  let allCells = Array.prototype.slice.call(document.querySelectorAll('td'));
  for (let i = 7; i <= allCells.length - 1; i++) {
    if(allCells[i].classList.contains('editable') === false) {
      allCells[i].classList.add('disabled');
    }
  }
}

function getEditableCells() {
  let editableCells = document.getElementsByClassName('editable');
  return editableCells;
}

function createNote() {
  let noteDiv = document.createElement('div');
  noteDiv.classList.add('note');
  document.body.appendChild(noteDiv);
}

buildCalendar();
