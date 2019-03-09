let userDatabase = [
    {
      login: "user1",
      password: "user1pass",
    },
    {
      email: "user2",
      password: "user2pass",
    }
];

function isUserValid(user, pass) {
  for (let i = 0; i < userDatabase.length; i++) {
    if(userDatabase[i].login === user && userDatabase[i].password === pass) {
      return true;
    }
  }
  return false;
}

function logInUser(user, pass) {
  if(isUserValid(user, pass)) {
    window.location.href="../Organizer/mainView.html";
  } else {
    alert("Wrong username or password");
  }
}

function openSession(user, pass) {
  const checkEmailInput = document.getElementById('emailInput').value;
  const checkPasswordInput = document.getElementById('passwordInput').value;
  logInUser(checkEmailInput, checkPasswordInput);
}

const passwordField = document.getElementById('passwordInput');
passwordField.addEventListener('keypress', function(e) {
  const key = e.which || e.keyCode;
  if(key === 13) {
    openSession();
  }
});

window.onload = function () {
    const loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
    console.log('Page load time is '+ loadTime);
}
