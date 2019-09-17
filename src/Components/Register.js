import React, { Component } from "react";

import Name from "./Name";
import Otp from "./Otp";

import "./Register.css";

export default class Register extends Component {
  state = {
    page: 0,
    name: null,
    number: null,
    userOtp: "",
    otp: "102938",
    error: null
  };

  error = "";

  handleButton = page => {
    if (page === 0) {
      let number = new RegExp(/0[0-9]{9}/);
      if (this.state.name && this.state.number) {
        if (this.state.number.length <= 10 && number.test(this.state.number)) {
          return this.setState({ page: page + 1, error: "" });
        }
        return this.setState({ error: "*กรุณาใส่เบอร์โทรศัพท์ให้ถูกต้อง" });
      } else {
        return this.setState({
          error: "*กรุณาใส่ชื่อ นามสกุล และเบอร์โทรศัพท์"
        });
      }
    } else if (page === 1) {
      let userOtp = this.state.userOtp.join("").toString();
      if (userOtp === this.state.otp) {
        return this.setState({ page: page + 1, error: "" });
      }
      return this.setState({
        error: "*กรุณาใส่หมายเลข OTP ให้ถูกต้อง"
      });
    }
  };

  handleName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  setCharAt = (str, index, chr) => {
    if (index > str.length - 1) return str;
    console.log(str, index, chr);
    return str.substr(0, index) + chr + str.substr(index + 1);
  };

  handleOtp = e => {
    let userOtp = [...this.state.userOtp];
    userOtp[e.target.id] = e.target.value.toString();
    return this.setState({ userOtp: userOtp });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          {this.state.page === 0 ? (
            <Name handleName={this.handleName} error={this.state.error} />
          ) : (
            ""
          )}
          {this.state.page === 1 ? (
            <Otp
              userOtp={this.state.userOtp}
              otp={this.state.otp}
              number={this.state.number}
              error={this.state.error}
              handleOtp={this.handleOtp}
            />
          ) : (
            ""
          )}
          <div className="footer">
            <div>
              <div
                className="button"
                onClick={() => this.handleButton(this.state.page)}
              >
                ต่อไป
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
