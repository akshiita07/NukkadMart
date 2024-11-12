// JavaScript to handle the toggle between User and Shopkeeper account types
document.addEventListener("DOMContentLoaded", function () {
    // Select the elements
    const userOption = document.getElementById("userOption");
    const shopkeeperOption = document.getElementById("shopkeeperOption");
    const welcomeText = document.getElementById("welcomeText");
  
    // Function to select the User option
    function selectUser() {
      userOption.classList.add("selected");
      shopkeeperOption.classList.remove("selected");
      welcomeText.textContent = "Hello user!";
    }
  
    // Function to select the Shopkeeper option
    function selectShopkeeper() {
      shopkeeperOption.classList.add("selected");
      userOption.classList.remove("selected");
      welcomeText.textContent = "Hello shopkeeper!";
    }
  
    // Add event listeners to the options
    userOption.addEventListener("click", selectUser);
    shopkeeperOption.addEventListener("click", selectShopkeeper);
  });
  