import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "type your email below"
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(event) {
    this.setState({
      email: event.target.value
    });
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input name="email" type="email" onChange={this.updateEmailField} />
      </div>
    );
  }
}

export default SignUp;
