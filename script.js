const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmationValue = passwordConfirmation.value;

  // Checa o user name
  if (usernameValue == "") {
    setErrorFor(username, "O nome de usuário é obrigatório");
  } else {
    setSuccessFor(username);
  }

  //   Checa o email

  if (emailValue == "") {
    setErrorFor(email, "O email é obrigatório!");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um e-mail válido!");
  } else {
    setSuccessFor(email);
  }

  //   Checa o password

  if (passwordValue == "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  //   Checa a confirmação do password

  if (passwordConfirmation == "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória");
  } else if (confirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }
  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Adicionando Mensagem de Error ao input

  small.innerText = message;

  // Adicionando o ID Error ao input

  formControl.className = "form-control error";

  console.log("Impossível adicionar msg");
}

// Função que adiciona o ID Success

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

// Função para validar os caracteres do e-mail

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
