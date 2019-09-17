import React from "react";
import "./User.css";

const Pin = props => {
  return (
    <div className="user">
      <h1 id="user-header" className="header">
        ข้อมูลสมาชิก
      </h1>
      <div className="user-content">
        <div>ชื่อ - นามสกุล: {props.name}</div>
        <div>หมายเลขโทรศัพท์: {props.number}</div>
        <div>PIN: {props.pin}</div>
      </div>
    </div>
  );
};

export default Pin;
