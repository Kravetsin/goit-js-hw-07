const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    alert("All form fields must be filled in");
  }

  const customer = {
    login: login.trim(),
    password: password.trim(),
  };
  console.log(customer);
  form.reset();
}
