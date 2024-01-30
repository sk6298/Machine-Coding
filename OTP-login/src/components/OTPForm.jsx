import { useState } from "react";
import OTPInput from "./OTPInput";

const OTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
        alert("Invalid phone number");
        return;
    }
    if (phoneNumber.length == 10) {
      setShowOtp(true);
    }
  };

  const handleOTPSubmit = (e) => {
    console.log("Login successful with OTP: ",e);
  };

  return (
    <div>
      <h1>LOGIN WITH OTP</h1>
      {showOtp ? (
        <div>
          <h2>Enter OTP for {phoneNumber}</h2>
          <OTPInput length={4} onOTPSubmit={handleOTPSubmit}/>
        </div>
      ) : (
        <form onSubmit={handleOnSubmit}>
          {/* <label htmlFor="phoneNumber">Phone Number</label> */}
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            maxLength={10}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default OTPForm;
