function navbar() {
  return ` <div id="mainNav">
    <div id="logo">
      <img 
        src="../images/navLogo.png"
        alt=""
        height="100%"
          width="100%"
      />
    </div>
    <div id="location">
      <img
        src="https://cdn.grofers.com/assets/ui/out_for_delivery_icon.png"
        alt=""
      />
      <div id="locName"></div>
    </div>
    <div id="searchbox">
      <button id="sbtn">
        <i class="material-icons">search</i>
      </button>
      <input type="text" id="search" />
    </div>
    <div id="cat1">
      <a href="category.html">Categories</a>
    </div>
    <div id="cat2">
    <a href="index.html">Logout</a>
</div>

    <div id="mycart">
      <span class="material-icons carticon">shopping_cart</span>
      <span id="myCart">my cart</span>
    </div>
  </div>
  <div id="sugBox"></div>
  <!--         dropdown                  -->
  <div id="myDropdown" class="dropdown-content">
    <h2>My Account</h2>
    <p id="localName"></p>
    <li>My Orders</li>
    <li>Saved Address</li>
    <li>My Wallet ₹0</li>
    <li>FAQ's</li>
    <li>Log Out</li>
    </div>
  </div>
  <!--         dropdown                  -->

  <div id="sideCart">
    <div id="openClose">
      <div><h2>My Cart</h2></div>
      <div><button id="closeCart">X</button></div>
    </div>
    <div id="cartEmptyImg">
      <img
        src="../images/cartBanner.png"
        alt=""
      />
      <h3>You don't have any items in your cart</h3>
      <p>Your favourite items are just a click away</p>
      <button id="mycart" class="startShoppingBtn" onclick="startShopping()">Start Shopping</button>
    </div>
    <div id="subcart"></div>
    <div id="zz"></div>
    <div id="bill">
      <h2>Bill Details</h2>
      <p id="totalBill"></p>
      <p>Convenience & Safety fee: ₹5</p>
      <button class="bill_takeaway" id="billed1"> <a style="color:white;font-weight:bold" href="./address.html"> Delivery </a></button>
      <button class="bill_delivery" id="billed2"> <a style="color:white;font-weight:bold" href="./payment.html"> Takeaway </a></button>
      <button class="bill_delivery" id="clr_cart" style="color:white;font-weight:bold" onclick="clearmycart()">CLEAR CART</button>
    </div>
    <!-- cart items appending div -->
  </div>
  <div id="login">
    <div id="phoneHead"><h2>Phone Number Verification</h2></div>
    <div id="dialPad">
      <h3 id="changeToOtp">Enter your phone number to Login/Sign up</h3>
      <input
        id="cusNum"
        type="number"
        placeholder="Enter Phone Number"
        required
      />
      <input id="cusOTP" type="number" placeholder="Enter OTP" required />
      <br />
      <br />
      <button id="getOtp"><b> NEXT</b></button>
      <p id="timerOTP"></p>
    </div>
  </div>`;
}

export default navbar;