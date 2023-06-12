function validateEmail() {
  const emailCheck = document.getElementById("email_input");
  const emailError = document.getElementById("email_error");

  if(!emailCheck.checkValidity()) {
     emailError.textContent = "Valid email required";
  } else {
    emailError.textContent = "";
  }
}



const Dismissing = document.getElementById("dismiss");
Dismissing.addEventListener("click", function() {
window.location.href = "index.html";
});



let userEmail = document.getElementById("user_email");
let emailParams = new URLSearchParams(window.location.search);
let email = emailParams.get("Email");
let decodedEmail = decodeURIComponent(email);
userEmail.textContent = decodedEmail;
