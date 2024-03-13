// import React from "react";

// const Payment=()=>{

//     return(<>
    
//         <h1>payment page</h1>

//  </>  
//   )
// }
// export default Payment;



// PaymentPage.js
// PaymentPage.js
// PaymentPage.js
// PaymentPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [paymentError, setPaymentError] = useState(null);

  const handlePayment = (event) => {
    event.preventDefault();

    if (paymentMethod === "online") {
      // Handle online payment logic here (e.g., integrate with a payment gateway)
      // For simplicity, we'll just display a success message
      alert("Online Payment Successful!");
    } else {
      // Handle cash-on-delivery payment logic here
      alert("Cash on Delivery selected. You will pay upon delivery.");
    }
  };

  return (
    <div>
      <h1>Simple E-Commerce Payment</h1>
      <form onSubmit={handlePayment}>
        <div>
          <label>
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
            />
            Cash on Delivery
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
            />
            Online Payment
          </label>
        </div>
        {paymentMethod === "online" && (
          <div>
            {/* Additional fields for online payment can be added here */}
          </div>
        )}
        {paymentError && <div style={{ color: "red" }}>{paymentError}</div>}
       <Link to={"/add"}><button type="submit">Pay Now</button></Link>
      </form>
    </div>
  );
};

export default PaymentPage;
