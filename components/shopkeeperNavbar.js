function navbar() {
    return ` <div id="mainNav">
      <div id="logo">
        <img 
          src="./images/navLogo.png"
          alt=""
          height="100%"
          width="100%"
        />
      </div>
      <div id="searchbox">
        <button id="sbtn">
          <i class="material-icons">search</i>
        </button>
        <input type="text" id="search" placeholder="Search..." />
      </div>
      <div id="cat1">
        <a href="#">User</a>
      </div>
      <div id="cat2">
        <a href="#">Profile</a>
      </div>
      <div id="cat3">
        <a href="#">Orders</a>
      </div>
    </div>
    <div id="sugBox"></div>
    <!-- Dropdown menu -->
    <div id="myDropdown" class="dropdown-content">
      <h2>My Account</h2>
      <li>My Orders</li>
      <li>Saved Address</li>
      <li>My Wallet ₹0</li>
      <li>FAQ's</li>
      <li>Log Out</li>
    </div>
    `;
  }
  
  export default navbar;
  