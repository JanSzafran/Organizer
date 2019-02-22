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

function callFunctions() {
  getFirstDay();
  addClassTableDays();
  addDaysToCalendar();
}

//dates STARTS HERE
let dateSpan = document.getElementsByClassName('dateAndMonth');
let allCells = Array.prototype.slice.call(document.querySelectorAll('td'));

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let d = new Date();
let currentDay = d.getDate();
let currentYear = d.getFullYear();
    //number of month
let m = d.getMonth();
    //name of month
let currentMonth = monthNames[d.getMonth()];
    //add name of month and year to span
dateSpan[0].innerHTML += (currentMonth + " " + currentYear);

    //check how many days in a month
let getDaysInMonth = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();

    // get the first date of a month
function getFirstDay() {
  let firstDayDate = new Date(currentYear, m, 1);
  let firstDay = firstDayDate.getDay();
  return firstDay;
};

//dates ENDS HERE

//create calendar starts here

    //adds class "tableDays" to first seven days
function addClassTableDays() {
  let start = getFirstDay();
  let sevenDays = document.getElementsByClassName('first7');
  if (start === 1) {
    for (let i = 0; i <= 6; i++) {
      sevenDays[i].classList.add('tableDays');
    }
  } else if (start === 2) {
    for (let i = 1; i <= 6; i++) {
      sevenDays[i].classList.add('tableDays');
    }
  } else if (start === 3) {
    for (let i = 2; i <= 6; i++) {
      sevenDays[i].classList.add('tableDays');
    }
  } else if (start === 4) {
    for (let i = 3; i <= 6; i++) {
      sevenDays[i].classList.add('tableDays');
    }
  } else if (start === 5) {
    for (let i = 4; i <= 6; i++) {
      sevenDays[i].classList.add('tableDays');
    }
  } else if (start === 6) {
    for (let i = 5; i <= 6; i++) {
      sevenDays[i].classList.add('tableDays');
    }
  } else if (start === 0) {
    zero.classList.add('tableDays')
  }
}

    //create numbers for each day in a month && disable past days + empty cells
function addDaysToCalendar() {
  let daysToDraw = document.getElementsByClassName('tableDays');
  for(let i = 0; i <= getDaysInMonth-1; i++) {
    daysToDraw[i].innerHTML = i+1;
    //adding hover to month days
    if (daysToDraw.length > 0) {
      daysToDraw[i].classList.add('tableDaysHov', 'editable');
    }
  } //adds disabled class to past days
  for (let i = currentDay-2; i >= 0; i--) {
    daysToDraw[i].classList.add('disabled');
    daysToDraw[i].classList.remove('editable', 'tableDaysHov');
  }
  //add disable class (starts with 7 to avoid adding a class to day name)
      //add disable class for empty cells
  try {
    for (let i = 7; i <= allCells.length; i++) {
      if(allCells[i].classList.contains('editable') == false) {
        allCells[i].classList.add('disabled');
      }
    }
  }
  catch(error) {

  }
}
  //creates note div after clicking on cells

function createNotes() {
  
}

//create calendar ends here

callFunctions();
