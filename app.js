const form = document.getElementById("form");
const emailInput = document.getElementById("email");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail(emailInput.value)) {
    form.classList.add("form--error");
    return;
  }

  form.classList.remove("form--error");

  alert("Form sent!");
  form.reset();
});
