import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="811997879157-ugic8r1f91bef7h1v7tdtas7agso0fp4.apps.googleusercontent.com">
      {/* <React.StrictMode> */}
          <App />
      {/* </React.StrictMode> */}
    </GoogleOAuthProvider>
);
// 