document.addEventListener("DOMContentLoaded", function () {
  // Select the elements
  const userOption = document.getElementById("userOption");
  const shopkeeperOption = document.getElementById("shopkeeperOption");
  const welcomeText = document.getElementById("welcomeText");
  const loginButton = document.getElementById("loginButton");
  let selectedRole = "user"; // default to user

  // Function to select the User option
  function selectUser() {
      userOption.classList.add("selected");
      shopkeeperOption.classList.remove("selected");
      welcomeText.textContent = "Hello user!";
      selectedRole = "user";
  }

  // Function to select the Shopkeeper option
  function selectShopkeeper() {
      shopkeeperOption.classList.add("selected");
      userOption.classList.remove("selected");
      welcomeText.textContent = "Hello shopkeeper!";
      selectedRole = "shopkeeper";
  }

  // Add event listeners to the options
  userOption.addEventListener("click", selectUser);
  shopkeeperOption.addEventListener("click", selectShopkeeper);

  // Add event listener to the login button
  loginButton.addEventListener("click", function () {
      if (selectedRole === "user") {
          window.location.href = "./userHomePage.html";
      } else if (selectedRole === "shopkeeper") {
          window.location.href = "./shopkeeperHomePage.html";
      }
  });
});
