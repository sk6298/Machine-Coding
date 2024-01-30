import { useEffect, useRef, useState } from "react";

import "./OTPInput.css";
const OTPInput = ({ length = 4, onOTPSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const { value } = e.target;
    // ignoring text value
    if (isNaN(value)) {
      return;
    }
    const newValue = [...otp];
    newValue[index] = value.substring(value.length - 1);
    setOtp(newValue);

    // on value entered taking focus to next input
    if (value && index + 1 < length && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
    // not using otp bcoz its asyn
    const combinedOtp = newValue.join("");
    // if all 4 number are submitted
    if (combinedOtp.length === length) {
      onOTPSubmit(combinedOtp);
    }
  };
  const handleClick = (e,index) => {
    // if user click on left side then cursor automatically goes to right side
   e.target.setSelectionRange(1,1);
  };

  const handleKeyDown = (e,index) => { 
    console.log(e.key)

    // on backspace taking focus to prev input
    if (e.key == 'Backspace') {
        if (index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index -1].focus();
        }
    }
  }
  //   console.log(inputRefs);
  return (
    <div className="otpInput">
      {otp.map((value, index) => (
        <input
          type="text"
          ref={(input) => (inputRefs.current[index] = input)}
          value={value}
          key={index}
          onChange={(e) => handleChange(e, index)}
          onClick={(e) => handleClick(e,index)}
          onKeyDown={(e) => handleKeyDown(e,index)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
