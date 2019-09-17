import React from "react";

const Pin = props => {
  const inputs = [];
  for (let i = 0; i < props.length; i++) {
    inputs.push(
      <input
        id={i}
        className="mini"
        key={i}
        type="text"
        name="pin"
        placeholder="0"
        maxLength="1"
        onChange={props.handleOtp}
      />
    );
  }
  return (
    <React.Fragment>
      <div className="header">
        <h1>ตั้ง PIN</h1>
        <div>
          {props.isConfirm ? "ระบุอีกครั้ง" : "เพื่อใช้ยืนยันตัวในครั้งต่อไป"}
        </div>
      </div>
      <div className="main">
        <div className="form">
          <div className="inputs">{inputs}</div>
        </div>
      </div>
      <div className="error">{props.error}</div>
    </React.Fragment>
  );
};

export default Pin;
