import React, { Component } from "react";

import Name from "./Name";
import Otp from "./Otp";

import "./Register.css";
import { switchCase } from "@babel/types";

export default class Register extends Component {
  state = {
    page: 0,
    name: null,
    number: null,
    userOtp: null,
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
    }
  };

  handleName = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOtp = e => {
    this.setState(
      { [e.target.name[e.target.key]]: e.target.value },
      console.log(this.state.userOtp)
    );
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
