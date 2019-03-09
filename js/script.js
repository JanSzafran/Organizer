function buildCalendar() {
  setupCurrentDate();
  getFirstDay();
  addClassTableDays();
  addDaysToCalendar();
  changeColorOfCurrentDay();
  disablePastDays();
  disableEmptyCells();
  createNoteOnClick();
}

const dateSpan = document.getElementsByClassName('dateAndMonth');

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dateInstance = new Date();
const currentDay = dateInstance.getDate();
const currentYear = dateInstance.getFullYear();
const monthNumber = dateInstance.getMonth();
const currentMonth = monthNames[dateInstance.getMonth()];

function setupCurrentDate() {
  dateSpan[0].innerHTML += (currentMonth + " " + currentYear);
}

const getDaysInMonth = new Date(dateInstance.getFullYear(), dateInstance.getMonth()+1, 0).getDate();

function getFirstDay() {
  let firstDayDate = new Date(currentYear, monthNumber, 1);
  let firstDay = firstDayDate.getDay();
  return firstDay;
};

function addClassTableDays() {
  const start = getFirstDay();
  const sevenDays = document.getElementsByClassName('first7');
  if (start === 0) {
    zero.classList.add('tableDays')
  }
  for (let i = start-1; i<=6; i++) {
    sevenDays[i].classList.add('tableDays');
  }
}


function addDaysToCalendar() {
  const daysToDraw = document.getElementsByClassName('tableDays');
  for(let i = 0; i <= getDaysInMonth-1; i++) {
    daysToDraw[i].innerHTML = i+1;
    if (daysToDraw.length > 0) {
      daysToDraw[i].classList.add('tableDaysHover', 'editable');
    }
  }
  return daysToDraw;
}


function changeColorOfCurrentDay() {
  const daysToColor = document.getElementsByClassName('tableDays');
  daysToColor[currentDay-1].style.color = "blue";
}

function disableDay(day) {
  day.classList.add('disabled');
  day.classList.remove('editable', 'tableDaysHover');
}

function disablePastDays() {
  const daysToDraw = addDaysToCalendar();
  for (let i = currentDay-2; i >= 0; i--) {
    disableDay(daysToDraw[i])
  }
}

function disableEmptyCells(){
  const allCells = Array.prototype.slice.call(document.querySelectorAll('td'));
  for(let i = 0; i <= allCells.length -1; i++) {
    if(allCells[i].innerText === "") {
      allCells[i].classList.add('empty');
    }
  }
}

function createNoteOnClick() {
const editableCells = document.getElementsByClassName('editable');
for(let i = 0; i < editableCells.length; i++) {
    editableCells[i].addEventListener('click', buildNote);
  };
}

buildCalendar();

function buildNote() {
  createNote();
  createAddItemSpan();
  createTaskAndButtonContainer()
  createNewTaskInput();
  createAddTaskButton();
  createTodoSpan();
  createCloseNoteButton();
  createSaveNoteButton();
  addValueToTodo();
  addValueToTodoOnKeyPress();
  createTasksContainer();
  closeNote();
}

function deleteOldNote() {
  const note = document.getElementsByClassName('note');
  if(note.length) {
    note[0].parentNode.removeChild(note[0]);
  }
}

function createNote() {
  deleteOldNote();
  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note');
  document.body.appendChild(noteDiv);
  return noteDiv;
}

function createAddItemSpan() {
  const addItem = document.createElement('span');
  const note = document.getElementsByClassName('note');
  addItem.classList.add('addItemSpan');
  addItem.innerText = "ADD ITEM";
  note[0].appendChild(addItem);
}

function createTaskAndButtonContainer() {
  const newContainer = document.createElement('div');
  const note = document.getElementsByClassName('note');
  newContainer.classList.add('newContainer');
  note[0].appendChild(newContainer);
}

function createNewTaskInput(){
  const taskInput = document.createElement('input');
  const container = document.getElementsByClassName('newContainer');
  taskInput.setAttribute("type", "text");
  taskInput.classList.add('taskInput');
  container[0].appendChild(taskInput);
}

function createAddTaskButton() {
  const addTask = document.createElement('button');
  const container = document.getElementsByClassName('newContainer');
  addTask.classList.add('addTaskButton');
  addTask.innerText = 'add';
  container[0].appendChild(addTask);
}

function createTodoSpan() {
  let todoSpan = document.createElement('span');
  let note = document.getElementsByClassName('note');
  todoSpan.classList.add('todoSpan');
  todoSpan.innerText = 'TO DO';
  note[0].appendChild(todoSpan);
}

function createTasksContainer() {
  const spanContainer = document.createElement('div');
  const note = document.getElementsByClassName('note');
  spanContainer.classList.add('spanContainer');
  note[0].appendChild(spanContainer);
}

function createCloseNoteButton() {
  const deleteButton = document.createElement('a');
  const note = document.getElementsByClassName('note');
  deleteButton.classList.add('delete', 'deleteButton');
  note[0].appendChild(deleteButton);
}

function createSaveNoteButton() {
  const saveButton = document.createElement('button');
  const note = document.getElementsByClassName('note');
  const saveButtonText = document.createTextNode('save');
  saveButton.classList.add('button', 'is-primary', 'saveButton');
  saveButton.appendChild(saveButtonText);
  note[0].appendChild(saveButton);
}

function createTask(){
  let valueToAdd = document.querySelector('input').value;
  const newTaskSpan = document.createElement('span');
  newTaskSpan.classList.add('taskSpan', 'pointer');
  const spanContainer = document.getElementsByClassName('spanContainer');
  newTaskSpan.innerText = valueToAdd;
  newTaskSpan.addEventListener('click', function() {
    if(newTaskSpan && newTaskSpan.classList && newTaskSpan.classList.toggle) {
      newTaskSpan.classList.toggle('checked');
    }
  });
  valueToAdd.length ? spanContainer[0].appendChild(newTaskSpan) : alert('Enter value!');
}

function addValueToTodo() {
  const addButton = document.getElementsByClassName('addTaskButton');
  addButton[0].addEventListener('click', createTask);
}

function addValueToTodoOnKeyPress() {
  const taskInput = document.getElementsByClassName('taskInput');
  taskInput[0].addEventListener('keypress', function(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      createTask();
    }
  })
}

function closeNote() {
  const button = document.getElementsByClassName('deleteButton');
  const note = document.getElementsByClassName('note');
  button[0].addEventListener('click', function() {
    note[0].parentNode.removeChild(note[0]);
  })
}
