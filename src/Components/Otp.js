import React from "react";

const Otp = props => {
  const inputs = [];
  for (let i = 0; i < props.length; i++) {
    inputs.push(
      <input
        id={i}
        className="mini"
        key={i}
        type="text"
        name="userOtp"
        placeholder="0"
        maxLength="1"
        onChange={props.handleOtp}
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
          <div className="inputs">{inputs}</div>
        </div>
      </div>
      <div className="error">{props.error}</div>
    </React.Fragment>
  );
};

export default Otp;
