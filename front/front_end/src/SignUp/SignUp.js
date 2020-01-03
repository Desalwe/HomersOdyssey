import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Email:",
      password: "Password:",
      passwordConf: "Confirm password:",
      firstname: "First name:",
      lastname: "Last Name:"
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updatePasswordConfField = this.updatePasswordConfField.bind(this);
    this.updateFirstnameField = this.updateFirstnameField.bind(this);
    this.updateLastnameField = this.updateLastnameField.bind(this);
  }

  updateEmailField = event => {
    this.setState({ email: event.target.value });
  };

  updatePasswordField = event => {
    this.setState({ password: event.target.value });
  };

  updatePasswordConfField = event => {
    this.setState({ passwordConf: event.target.value });
  };

  updateFirstnameField = event => {
    this.setState({ firstname: event.target.value });
  };

  updateLastnameField = event => {
    this.setState({ lastname: event.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.email}</p>
          <input name="email" type="email" onChange={this.updateEmailField} />

          <p>{this.state.password}</p>
          <input
            name="password"
            type="text"
            onChange={this.updatePasswordField}
          />

          <p>{this.state.passwordConf}</p>
          <input
            name="passwordConf"
            type="text"
            onChange={this.updatePasswordConfField}
          />

          <p>{this.state.firstname}</p>
          <input
            name="firstname"
            type="text"
            onChange={this.updateFirstnameField}
          />

          <p>{this.state.lastname}</p>
          <input
            name="lastname"
            type="text"
            onChange={this.updateLastnameField}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
