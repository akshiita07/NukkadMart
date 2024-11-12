function address() { 
    return `
    <div id="address">
        <div id="inside_address">
            <h2 id="address_title">Add New Delivery Address</h2>
            <h4>Please Enter the Accurate Address as it Will Help Us Serve You Better</h4>
            <label for="area">Area/Locality</label><br>
            <input type="text" id="area">
            <hr>
            <div id="address_info">
                <div id="name">
                    <label for="title">Name</label><br>
                    <select id="title">
                        <option value="">Title</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                    </select>
                    <input type="text" id="first_last" placeholder="First and Last Name">
                </div>
                <div id="flat">
                    <label for="flat_no">Flat/House No</label><br>
                    <input type="text" id="flat_no">
                </div>
                <div id="street">
                    <label for="street_no">Street/Society</label><br>
                    <input type="text" id="street_no">
                </div>
                <div id="home_office_other">
                    <input type="radio" id="home" name="address_type"><label for="home">Home</label>
                    <input type="radio" id="office" name="address_type"><label for="office">Office</label>
                    <input type="radio" id="other" name="address_type"><label for="other">Other</label>
                </div>
                <div id="continue_cancel">
                    <button id="continue_btn">Continue</button>
                    <button id="cancel_btn">Cancel</button>
                </div>
            </div>
        </div>
    </div>`
}
export default address;
