// document.addEventListener("DOMContentLoaded", function () {
//   // Select the elements
//   const userOption = document.getElementById("userOption");
//   const shopkeeperOption = document.getElementById("shopkeeperOption");
//   const welcomeText = document.getElementById("welcomeText");
//   const loginButton = document.getElementById("loginButton");
//   let selectedRole = "user"; // default to user

//   // Function to select the User option
//   function selectUser() {
//       userOption.classList.add("selected");
//       shopkeeperOption.classList.remove("selected");
//       welcomeText.textContent = "Hello User!";
//       selectedRole = "user";
//   }

//   // Function to select the Shopkeeper option
//   function selectShopkeeper() {
//       shopkeeperOption.classList.add("selected");
//       userOption.classList.remove("selected");
//       welcomeText.textContent = "Hello Shopkeeper!";
//       selectedRole = "shopkeeper";
//   }

//   // Add event listeners to the options
//   userOption.addEventListener("click", selectUser);
//   shopkeeperOption.addEventListener("click", selectShopkeeper);

//   // Add event listener to the login button
//   loginButton.addEventListener("click", function () {
//       if (selectedRole === "user") {
//           window.location.href = "./userHomePage.html";
//       } else if (selectedRole === "shopkeeper") {
//           window.location.href = "./shopkeeperHomePage.html";
//       }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
    // Select the elements
    const userOption = document.getElementById("userOption");
    const shopkeeperOption = document.getElementById("shopkeeperOption");
    const welcomeText = document.getElementById("welcomeText");
    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");
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
      event.preventDefault();  // Prevent the form from submitting immediately
  
      // Check if the form is valid (i.e., required fields are filled)
      if (loginForm.checkValidity()) {
        // Proceed with redirection based on the selected role
        if (selectedRole === "user") {
          window.location.href = "./userHomePage.html";
        } else if (selectedRole === "shopkeeper") {
          window.location.href = "./shopkeeperHomePage.html";
        }
      } else {
        // If form is not valid, let the browser show the default error message
        loginForm.reportValidity();  // Triggers browser's built-in validation message
      }
    });
  });
  