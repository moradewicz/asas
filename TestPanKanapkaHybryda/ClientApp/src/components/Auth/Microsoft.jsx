import React, { Component } from "react";
import SampleAppButtonLaunch from "./SampleAppButtonLaunch";
import SampleAppRedirectOnLaunch from "./SampleAppRedirectOnLaunch";
import axios from "axios";

class Microsoft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
      sampleType: null,
      token: "top"
    };
    this.httpGetAuth = this.httpGetAuth.bind(this);
  }

  componentWillMount = () => {
    this.token = "topkek";
    if (localStorage.getItem("sampleType")) {
      this.setState({ sampleType: localStorage.getItem("sampleType") });
    }
    this.httpGetAuth;
  };

  userInfoCallback = userInfo => {
    console.log(userInfo);
    this.token = userInfo.jwtAccessToken;
    this.setState({ userInfo });
  };

  handleClick = sampleType => {
    this.setState({ sampleType });
    localStorage.setItem("sampleType", sampleType);
  };
  httpGetAuth() {
    console.log(this.token);

    var headers = {
      withCredentials: true,
      headers: { Authorization: "Bearer " + this.token }
    };

    axios
      .get(
        "https://pankanapkasignalrcore.azurewebsites.net/api/message",
        headers
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let sampleBox;
    let sampleButtons;

    if (this.state.sampleType === "popup") {
      sampleBox = (
        <div className="SampleBox">
          <h2 className="SampleHeader">Button Login</h2>
          <p>popup dialog to allow for authentication Azure AD B2C</p>
          <SampleAppButtonLaunch userInfoCallback={this.userInfoCallback} />
          <button onClick={this.httpGetAuth}>
            HTTP GET AUTHorization Test
          </button>
        </div>
      );
    } else if (this.state.sampleType === "redirect") {
      sampleBox = (
        <div className="SampleBox">
          <h2 className="SampleHeader">Automatic Redirect</h2>
          <p>
            This example shows how you can use the AzureAD component to redirect
            the login screen automatically on page load. Click the checkbox
            below to enable the redirect and refresh your browser window.
          </p>
          <SampleAppRedirectOnLaunch
            userInfoCallback={this.userInfoCallback}
            userInfo={this.state.userInfo}
          />
        </div>
      );
    }

    if (!this.state.userInfo) {
      sampleButtons = (
        <div>
          <button onClick={() => this.handleClick("popup")} className="Button">
            Popup Sample
          </button>{" "}
          <button
            onClick={() => this.handleClick("redirect")}
            className="Button"
          >
            Redirect Sample
          </button>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> React aad msal </h1>
        </header>
        <br /> <br />
        {sampleButtons}
        <div className="SampleContainer">
          {sampleBox}
          <div className="SampleBox">
            <h2 className="SampleHeader">Authenticated Values</h2>
            <p>When logged in, this box will show your tokens and user info</p>
            {this.state.userInfo && (
              <div style={{ wordWrap: "break-word" }}>
                <span style={{ fontWeight: "bold" }}>User Information:</span>{" "}
                <br />
                <span style={{ fontWeight: "bold" }}>ID Token:</span>{" "}
                {this.state.userInfo.jwtIdToken} <br />
                <span style={{ fontWeight: "bold" }}>Access Token:</span>{" "}
                {this.state.userInfo.jwtAccessToken} <br />
                <span style={{ fontWeight: "bold" }}>email:</span>{" "}
                {this.state.userInfo.user.idToken.emails} <br />
                <span style={{ fontWeight: "bold" }}>family_name :</span>{" "}
                {this.state.userInfo.user.idToken.family_name} <br />
                <span style={{ fontWeight: "bold" }}>given_name :</span>{" "}
                {this.state.userInfo.user.idToken.given_name} <br />
                <span style={{ fontWeight: "bold" }}>Object ID</span>{" "}
                {this.state.userInfo.user.idToken.oid}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Microsoft;
