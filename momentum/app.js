const loginInput = document.querySelector("#login-form Input");
const loginForm = document.querySelector("#login-form");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm
}

function handleLinkClick(event) {
    event.preventDefault();
    alert("Clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);  