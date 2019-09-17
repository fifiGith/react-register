import React from "react";

const Name = props => {
  return (
    <React.Fragment>
      <div className="header">
        <h1>ยืนยันตัวตน</h1>
        <div>เพื่อความถูกต้องของข้อมูล</div>
      </div>
      <div className="main">
        <div className="form">
          <div id="name">ชื่อ นามสกุล*</div>
          <input
            type="text"
            name="name"
            placeholder="ชื่อ นามสกุล"
            onChange={props.handleName}
          />
          <div id="number">เบอร์โทรศัพท์*</div>
          <input
            type="text"
            name="number"
            placeholder="เบอร์โทรศัพท์"
            onChange={props.handleName}
          />
        </div>
      </div>
      <div className="error">{props.error}</div>
    </React.Fragment>
  );
};

export default Name;
