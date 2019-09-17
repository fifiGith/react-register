import React, { Component } from "react";

import Name from "./Name";
import Otp from "./Otp";
import Pin from "./Pin";
import User from "./User";

import "./Register.css";

export default class Register extends Component {
  state = {
    page: 0,
    name: null,
    number: null,
    userOtp: "",
    otp: "102938",
    length: 6,
    error: null,
    pin: "",
    confirmedPin: ""
  };

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
      let userOtp = this.state.userOtp.join("");
      if (userOtp === this.state.otp) {
        return this.setState({ page: page + 1, error: "" });
      }
      return this.setState({
        error: "*กรุณาใส่หมายเลข OTP ให้ถูกต้อง"
      });
    } else if (page === 2) {
      let pinReg = new RegExp(/[0-9]{6}/);
      if (this.state.pin.length === 6 && pinReg.test(this.state.pin.join(""))) {
        return this.setState({ page: page + 1, error: "" });
      }
      return this.setState({
        error: "*กรุณาใส่หมายเลข PIN ให้ถูกต้อง"
      });
    } else if (page === 3) {
      if (this.state.pin.join("") === this.state.confirmedPin.join("")) {
        return this.setState({ page: page + 1, error: "" });
      }
      return this.setState({
        error: "*กรุณาใส่หมายเลข PIN ให้ถูกต้อง"
      });
    }
  };

  handleName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOtp = e => {
    let userOtp = [...this.state.userOtp];
    userOtp[e.target.id] = e.target.value;
    return this.setState({ userOtp: userOtp });
  };

  handlePin = e => {
    let pin = [...this.state.pin];
    pin[e.target.id] = e.target.value;
    return this.setState({ pin: pin });
  };

  handleConfirmedPin = e => {
    let confirmedPin = [...this.state.confirmedPin];
    confirmedPin[e.target.id] = e.target.value;
    return this.setState({ confirmedPin: confirmedPin });
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
              length={this.state.length}
              error={this.state.error}
              handleOtp={this.handleOtp}
            />
          ) : (
            ""
          )}
          {this.state.page === 2 ? (
            <Pin
              pin={this.state.pin}
              length={this.state.length}
              error={this.state.error}
              handleOtp={this.handlePin}
            />
          ) : (
            ""
          )}
          {this.state.page === 3 ? (
            <Pin
              pin={this.state.confirmedPin}
              length={this.state.length}
              isConfirm={true}
              error={this.state.error}
              handleOtp={this.handleConfirmedPin}
            />
          ) : (
            ""
          )}
          {this.state.page === 4 ? (
            <User
              name={this.state.name}
              number={this.state.number}
              pin={this.state.pin}
            />
          ) : (
            ""
          )}
          {this.state.page !== 4 ? (
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
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
