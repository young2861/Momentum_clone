const loginForm = document.querySelector("#login-form");  // for login form event
const loginInput = document.querySelector("#login-form input");  // for input value (name)
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function getTimeOfDay() {
    const currentHour = new Date().getHours();
    let timeOfDay;

    if (currentHour >= 4 && currentHour < 12) {
        timeOfDay = "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        timeOfDay = "afternoon";
    } else if ((currentHour >= 18 && currentHour <= 23) ||
                (currentHour >= 0 && currentHour < 4)) {
        timeOfDay = "evening";
    } else {
        timeOfDay = "We are in twilight zone";
    }
    return timeOfDay;
}

function paintGreetings(username) {
    const currentTime = getTimeOfDay();
    greeting.innerText = `Good ${currentTime}, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}