import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <GoogleOAuthProvider clientId="456249570232-g52u7sg2d6brdugelfju6k2jitjmrdbd.apps.googleusercontent.com">
  <GoogleOAuthProvider clientId="270770017482-02941d4m8k3ts2shn4oei3m05eerfusi.apps.googleusercontent.com">
      {/* <React.StrictMode> */}
          <App />
      {/* </React.StrictMode> */}
    </GoogleOAuthProvider>
);
// 