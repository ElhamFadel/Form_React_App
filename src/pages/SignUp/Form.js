import React, { Component } from "react";
import Input from "../../component/Input";
import Checkbox from "../../component/Checkbox";
import Button from "../../component/Button";
import Back from "../../component/Back";
import OR from "../../component/OR";
class Form extends Component {
  state = {
    infoFInput: [
      {
        type: "email",
        label: "Email address*",
        placehold: "Enter email address",
        name: "email",
      },
      {
        type: "Password",
        label: "Create password*",
        placehold: "Password",
        name: "Password",
      },
      {
        type: "Password",
        label: "Repeat password*",
        placehold: "Repeat password",
        name: "repassword",
      },
    ],
    email: "",
    password: "",
    repassword: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  checkPassword = (element) => {
    if (!this.state.password || this.state.password !== this.state.repassword) {
      element.style.borderColor = "red";
     
    }
    element.style.borderColor = "";
  };
  handleChange = (e) => {
    const element = e.target;
    const { name, value, checked } = e.target;
    let _value = value;
    if (e.target.type === "checkbox") _value = checked;
    // if (name === "repassword") {
    //   if (value !== this.state.password) _value = "";
    // }
    this.setState(
      {
        [name]: _value,
      },
      () => {
        if (name === "repassword") this.checkPassword(element);
        //كيف انا بدي اقدر اصل للعنصر نفسه في الفنكشن الي اسمها تشك باسورد -----س
      }
    );
  };
  render() {
    const { infoFInput } = this.state;
    return (
      <aside className="leftSide">
        <Back />
        <div className="container">
          <h2>Register Individual Account!</h2>
          <p className="para">
            For the purpose of gamers regulation, your details are required.
          </p>
          <form onSubmit={this.handleSubmit}>
            {infoFInput.map((input) => {
              return (
                <Input
                  label={input.label}
                  placehold={input.placehold}
                  type={input.type}
                  onChange={this.handleChange}
                  value={this.state[input.name]}
                  name={input.name}
                />
              );
            })}

            <Checkbox>I agree to terms & conditions </Checkbox>
            <Button style={{ backgroundColor: "blue", color: "#fff" }}>
              Register Account
            </Button>
            <OR />
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#000",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
              }}
            >
              Register with Google
            </Button>
          </form>
        </div>
      </aside>
    );
  }
}
export default Form;
