import * as React from "react";
import { AzureAD, LoginType, MsalAuthProviderFactory } from "react-aad-msal";
import { basicReduxStore } from "./reduxStore";
import { PropTypes } from "react";
import { Redirect } from "react-router-dom";

class SampleAppButtonLaunch extends React.Component {
  unauthenticatedFunction = loginFunction => {
    return (
      <button className="Button" onClick={loginFunction}>
        Login
      </button>
    );
  };

  userJustLoggedIn = receivedUserInfo => {
    console.log(receivedUserInfo);
  };

  authenticatedFunction = logout => {
    return <Redirect to="/dashboard" />;
  };
  render() {
    return (
      <AzureAD
        provider={
          new MsalAuthProviderFactory({
            clientID: "1763901e-56ed-4f8d-b40e-f7cd8b0c2edb",
            scopes: [
              "https://PanKanapkaTestAzureADB2C.onmicrosoft.com/api/user_impersonation"
            ],
            authority:
              "https://login.microsoftonline.com/tfp/PanKanapkaTestAzureADB2C.onmicrosoft.com/B2C_1_SignIN",
            redirectUri: "https://localhost:3000/dashboard", //https://pankanapkareact.azurewebsites.net/microsoft
            type: LoginType.Popup,
            persistLoginPastSession: true
          })
        }
        unauthenticatedFunction={this.unauthenticatedFunction}
        reduxStore={basicReduxStore}
        authenticatedFunction={this.authenticatedFunction}
        userInfoCallback={this.userJustLoggedIn}
      />
    );
  }
}
export default SampleAppButtonLaunch;
