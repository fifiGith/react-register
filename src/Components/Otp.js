import React from "react";

const Otp = props => {
  var inputs = [];
  console.log(props.otp);
  for (let i = 0; i < props.otp.length; i++) {
    inputs.push(
      <input
        id="otp"
        type="text"
        name="userOTP"
        placeholder="0"
        onChange={props.handleName}
      />
    );
  }
  return (
    <React.Fragment>
      <div className="header">
        <h1>ยืนยัน OTP</h1>
        <div>ของหมายเลข {props.number}</div>
      </div>
      <div className="main">
        <div className="form">
          <div>กรุณาระบุ OTP</div>
          {inputs}
        </div>
      </div>
      <div className="error">{props.error}</div>
    </React.Fragment>
  );
};

export default Otp;
