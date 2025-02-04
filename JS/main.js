const emailConfirmation = document.getElementById("email-confirm");
const confirmTextAdd = document.createElement("p");
const submitButton = document.getElementById("submit-button");
const emailBox = document.getElementById("email-box");

submitButton.addEventListener("click", function (event) {
  let enteredEmail = emailBox.value;

  if (enteredEmail !== "") {
    confirmTextAdd.innerText =
      "Thank you for contacting! A confirmation will be sent to your email at: " +
      enteredEmail;
  } else confirmTextAdd.innerText = "Please add an Email";
});

emailConfirmation.appendChild(confirmTextAdd);
