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
  setupCurrentDate();
  getFirstDay();
  addClassTableDays();
  addDaysToCalendar();
  disablePastDays();
  disableEmptyCells();
}


let dateSpan = document.getElementsByClassName('dateAndMonth');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let dateInstance = new Date();
let currentDay = dateInstance.getDate();
let currentYear = dateInstance.getFullYear();
let monthNumber = dateInstance.getMonth();
let currentMonth = monthNames[dateInstance.getMonth()];

function setupCurrentDate() {
  let dateSpan = document.getElementsByClassName('dateAndMonth');
  dateSpan[0].innerHTML += (currentMonth + " " + currentYear);
}

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

function disableDay(day) {
  day.classList.add('disabled');
  day.classList.remove('editable', 'tableDaysHover');
}

function disablePastDays() {
  let daysToDraw = addDaysToCalendar();
  for (let i = currentDay-2; i >= 0; i--) {
    disableDay(daysToDraw[i])
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


buildCalendar();

function buildNote() {
  createNote();
  createAddItemSpan();
  createNewTaskInput();
  createAddTaskButton();
  createTodoSpan();
  createCloseNoteButton();
  createSaveNoteButton();
  addValueToTodo();
  createTasksContainer();
}

function createNote() {
  let noteDiv = document.createElement('div');
  noteDiv.classList.add('note');
  document.body.appendChild(noteDiv);
  return noteDiv;
}

function createAddItemSpan() {
  let addItem = document.createElement('span');
  let note = document.getElementsByClassName('note');
  addItem.classList.add('addItemSpan');
  addItem.innerHTML = 'ADD ITEM';
  note[0].appendChild(addItem);
}

function createNewTaskInput(){
  let taskInput = document.createElement('input');
  let note = document.getElementsByClassName('note');
  taskInput.setAttribute("type", "text");
  taskInput.classList.add('taskInput');
  note[0].appendChild(taskInput);
}

function createAddTaskButton() {
  let addTask = document.createElement('button');
  let note = document.getElementsByClassName('note');
  addTask.classList.add('addTaskButton');
  addTask.innerHTML = 'add';
  note[0].appendChild(addTask);
}

function createTodoSpan() {
  let todoSpan = document.createElement('span');
  let note = document.getElementsByClassName('note');
  todoSpan.classList.add('todoSpan');
  todoSpan.innerHTML = 'TODO';
  note[0].appendChild(todoSpan);
}

function createTasksContainer() {
  let spanContainer = document.createElement('div');
  let note = document.getElementsByClassName('note');
  spanContainer.classList.add('spanContainer');
  note[0].appendChild(spanContainer);
}

function createCloseNoteButton() {
  let deleteButton = document.createElement('a');
  let note = document.getElementsByClassName('note');
  deleteButton.classList.add('delete', 'deleteButton');
  note[0].appendChild(deleteButton);
}

function createSaveNoteButton() {
  let saveButton = document.createElement('button');
  let note = document.getElementsByClassName('note');
  saveButton.classList.add('button', 'is-primary', 'saveButton');
  saveButton.innerHTML = 'save';
  note[0].appendChild(saveButton);
}

function createTask(){
  let valueToAdd = document.querySelector('input').value;
  let newTaskSpan = document.createElement('ul');
  let spanContainer = document.getElementsByClassName('spanContainer');
  newTaskSpan.innerHTML = valueToAdd;
  spanContainer[0].appendChild(newTaskSpan);
}

function addValueToTodo() {
  let addButton = document.getElementsByClassName('addTaskButton');
  addButton[0].addEventListener('click', createTask);
}

let editableCells = document.getElementsByClassName('editable');
for(let i = 0; i < editableCells.length; i++) {
  editableCells[i].addEventListener('click', buildNote);
};
