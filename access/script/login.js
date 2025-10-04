var login_form = document.getElementById("login-form");
var register_btn = document.getElementById("login");
var register_form = document.getElementById("register-form");
var btn_register = document.querySelector(".btn-register");

register_btn.addEventListener("click", () => {
  login_form.classList.add("form-none");
  register_form.classList.add("form-active");
});

btn_register.addEventListener("click", () => {
  alert("Đăng kí thành công!");
  register_form.classList.remove("form-active");
  login_form.classList.remove("form-none");
});
