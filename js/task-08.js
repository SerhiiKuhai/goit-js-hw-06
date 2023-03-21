const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const forElements = event.currentTarget.elements;
  const mail = forElements.email.value;
  const password = forElements.password.value;

  if (mail === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }
  const formData = {
    name: mail,
    password: password,
  };
  console.log(formData);

  event.currentTarget.reset();
}
