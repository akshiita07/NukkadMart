document.addEventListener("DOMContentLoaded", function () {
  // Select the elements
  const userOption = document.getElementById("userOption");
  const shopkeeperOption = document.getElementById("shopkeeperOption");
  const welcomeText = document.getElementById("welcomeText");
  const loginForm = document.getElementById("loginForm");
  let selectedRole = "user"; // default to user

  // Function to select the User option
  function selectUser() {
      userOption.classList.add("selected");
      shopkeeperOption.classList.remove("selected");
      welcomeText.textContent = "Hello User!";
      selectedRole = "user";
  }

  // Function to select the Shopkeeper option
  function selectShopkeeper() {
      shopkeeperOption.classList.add("selected");
      userOption.classList.remove("selected");
      welcomeText.textContent = "Hello Shopkeeper!";
      selectedRole = "shopkeeper";
  }

  // Add event listeners to the options
  userOption.addEventListener("click", selectUser);
  shopkeeperOption.addEventListener("click", selectShopkeeper);

  // Add event listener to the login form submission
  loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting immediately

      // Check if the password meets the requirements
      if (validatePassword()) {
          // If password is valid, proceed based on selected role
          if (selectedRole === "user") {
              window.location.href = "./userHomePage.html";
          } else if (selectedRole === "shopkeeper") {
              window.location.href = "./shopkeeperHomePage.html";
          }
      }
  });
});

// Password validation logic
function validatePassword() {
  const passwordField = document.getElementById("password").value;
  const errorField = document.getElementById("passwordError");

  // Check if the password meets the requirements
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(passwordField);
  const isExactLength = passwordField.length === 7;

  if (!isExactLength || !hasSpecialCharacter) {
      errorField.style.display = "block";
      return false; // Prevent form submission
  }

  errorField.style.display = "none";
  return true; // Allow form submission
}
