import React, { Component } from "react";
import Icon from "../../component/conection";
import OR from "../../component/OR";
import Input from "../../component/Input";
import Checkbox from "../../component/Checkbox";
import Button from "../../component/Button";

class Form extends Component {
  state = {
    infoFInput: [
      {
        type: "email",
        label: "Your Email",
        placehold: "Write your email",
        name: "email",
      },
      {
        type: "Password",
        label: "Choose a password",
        placehold: "•••••••••",
        name: "Password",
      },
    ],
    email: "",
    password: "",
    checkbox_1: true,
    checkbox_2: false,
  };

  handleChange = (e) => {
    const element = e.target;
    const { name, value, checked } = e.target;
    let _value = value;
    if (e.target.type === "checkbox") _value = checked;
    // if (name === "repassword") {
    //   if (value !== this.state.password) _value = "";
    // }
    this.setState({
      [name]: _value,
    });
  };
  render() {
    const { infoFInput } = this.state;
    return (
      <div className="leftSign">
        <div className="header_Form">
          <h1>Join the game!</h1>
          <p>Go inside the best gamers social network!</p>
          <Icon />
        </div>
        <OR />
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
        <Checkbox name="checkbox_1" checked={this.state.checkbox_1}>
          I agree to terms & conditions
        </Checkbox>
        <Checkbox name="checkbox_2" checked={this.state.checkbox_2}>
          I’d like being informed about latest news and tips
        </Checkbox>
        <Button style={{ backgroundColor: "blue", color: "#fff" }}>
          Sign up for free
        </Button>
        <p className="paraQuestion">
          Do you already have an account? <a href="#">Log in</a>{" "}
        </p>
      </div>
    );
  }
}
export default Form;
