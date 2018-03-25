var signInButton = document.querySelector('button.signin'),
    closeButton = document.querySelector('button.close'),
    modal = document.querySelector('div.modal'),
    submitButton = document.querySelector('button.submit'),
    inputUserField = document.querySelector('#user'),
    inputPasswordField = document.querySelector('#pass');

signInButton.addEventListener('click', function(event) {
  modal.style.display = "block";
})

closeButton.addEventListener('click', function(event) {
  modal.style.display = "none";
  event.stopPropagation();
})

submitButton.addEventListener('click', function(event) {
  inputUserField.classList.add("error");
  inputPasswordField.classList.add("error");
  event.stopPropagation();
})

inputUserField.addEventListener('focus', function(event) {
  inputUserField.classList.remove("error");
})

inputPasswordField.addEventListener('focus', function(event) {
  inputPasswordField.classList.remove("error");
})

modal.addEventListener('click', function(event) {
  modal.style.display = "none";
})

modal.childNodes.forEach(function(child) {
  child.addEventListener('click', function(event) {
    event.stopPropagation();
  });
})
