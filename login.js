function showPassword() {
  var password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

const form = document.getElementById("form");
const text = document.getElementById("text");
const pass = document.getElementById("password");


form.addEventListener("submit", (e) => {
    swal("Welcome",
        "Sign In Successful",
        "success").then(() => {
            text.value = "";
            pass.value = "";
        });
    e.preventDefault();

});

