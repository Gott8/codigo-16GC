const inputPassword = document.querySelector("#input-password");

const checkBoxShowPassword = document.querySelector("#checkbox-show-password");

checkBoxShowPassword.onchange = function () {
  // if (this.checked) {
  //   inputPassword.type = "text"
  // } else {
  //   inputPassword.type = "password"
  // }

  // Conversion a ternario
  inputPassword.type = this.checked ? "text" : "password";
};

inputPasswordConfirm.onkeyup = function () {
    console.log(this.value);
  };