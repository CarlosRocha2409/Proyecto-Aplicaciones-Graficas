const email = document.getElementById("email");
const name = document.getElementById("name");
const message = document.getElementById("message");
const form = document.getElementById("contact-form");

window.onload = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`correo: ${email.value}`);
    console.log(`nombre: ${name.value}`);
    console.log(`message: ${message.value}`);
  });
};
