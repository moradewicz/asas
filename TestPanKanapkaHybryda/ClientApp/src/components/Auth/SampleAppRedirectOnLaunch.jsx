import * as React from "react";
import { AzureAD, LoginType, MsalAuthProviderFactory } from "react-aad-msal";

class SampleAppRedirectOnLaunch extends React.Component {
  constructor(props) {
    super(props);

    this.interval = null;
    let redirectEnabled = sessionStorage.getItem("redirectEnabled") || false;
    this.state = {
      counter: 5,
      redirectEnabled: redirectEnabled
    };
  }

  handleCheck = () => {
    this.setState({ redirectEnabled: !this.state.redirectEnabled }, () => {
      if (!this.state.redirectEnabled) {
        this.clearRedirectInterval();
      } else {
        sessionStorage.setItem("redirectEnabled", true);
      }
    });
  };

  unauthenticatedFunction = loginFunction => {
    if (this.state.redirectEnabled && !this.interval) {
      this.interval = setInterval(() => {
        if (this.state.counter > 0) {
          this.setState({ counter: this.state.counter - 1 });
        } else {
          this.clearRedirectInterval();
          this.setState({ redirectEnabled: false });
          loginFunction();
        }
      }, 1000);
    }

    if (this.state.redirectEnabled) {
      return <div>Redirecting in {this.state.counter} seconds...</div>;
    }

    return <div />;
  };

  clearRedirectInterval() {
    clearInterval(this.interval);
    this.setState({ counter: 5 });
    sessionStorage.removeItem("redirectEnabled");
    this.interval = null;
  }

  userJustLoggedIn = receivedUserInfo => {
    this.props.userInfoCallback(receivedUserInfo);
  };

  authenticatedFunction = logout => {
    return (
      <div>
        <button
          onClick={() => {
            logout();
          }}
          className="Button"
        >
          Logout
        </button>
      </div>
    );
  };

  render() {
    return (
      <div>
        {!this.props.userInfo ? (
          <div>
            <input
              type="checkbox"
              value={this.state.redirectEnabled}
              onChange={this.handleCheck}
            />{" "}
            Enable redirect
          </div>
        ) : (
          <div />
        )}
        <AzureAD
          provider={
            new MsalAuthProviderFactory({
              clientID: "1763901e-56ed-4f8d-b40e-f7cd8b0c2edb",
              scopes: [
                "https://PanKanapkaTestAzureADB2C.onmicrosoft.com/api/user_impersonation"
              ],
              authority:
                "https://login.microsoftonline.com/tfp/PanKanapkaTestAzureADB2C.onmicrosoft.com/B2C_1_SignIN",
              redirectUri: "https://localhost:3000/dashboard",
              type: LoginType.Popup,
              persistLoginPastSession: true
            })
          }
          unauthenticatedFunction={this.unauthenticatedFunction}
          userInfoCallback={this.userJustLoggedIn}
          authenticatedFunction={this.authenticatedFunction}
        />
      </div>
    );
  }
}

export default SampleAppRedirectOnLaunch;
