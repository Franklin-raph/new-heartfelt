import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ErrorAlert from "../../../components/alert/ErrorAlert";
import SuccessAlert from "../../../components/alert/SuccessAlert";

const PasswordReset = ({ baseUrl }) => {
  const user_info = JSON.parse(localStorage.getItem("user_info"));
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loader, setLoader] = useState(false);
  const [password, setPassword] = useState("");
  const [notPassword, setNotPassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState("");
  const [btnLoader, setBtnLoader] = useState(false);
  const [signInOnReset, setSignInOnReset] = useState(false);
  const { token } = useParams();

  //
  const password_regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

  useEffect(() => {
    console.log(token);
    verifyToken();
  }, []);

  async function verifyToken() {
    setLoader(true);
    console.log(JSON.stringify({ token: token }));
    const response = await fetch(`${baseUrl}/verify-password-reset`, {
      method: "POST",
      body: JSON.stringify({ token: token }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) setLoader(false);
    const data = await response.json();
    if (response.ok) {
      setSuccess(data.message);
    }
    if (!response.ok) {
      setError(data.message);
    }
    console.log(data);
  }

  async function resetPassword(e) {
    e.preventDefault();
    if (password === "" || confirmPassword === "") {
      setError("Plesae fill in the fields");
      return;
    } else if (password !== confirmPassword) {
      setError("Password fields do not match");
      return;
    } else {
      setBtnLoader(true);
      const response = await fetch(`${baseUrl}/update-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: password, token: token }),
      });
      const data = await response.json();
      console.log(response, data);
      if (response) setBtnLoader(false);
      if (response.ok) {
        setSuccess(
          "Your password has been successfully updated you can proceed to login"
        );
        setSignInOnReset(true);
      }

      if (!response.ok) {
        setError("An error occured please try again later");
      }
    }
  }

  return (
    <div>
      {loader && (
        <div className="pageLoader-bg">
          <div className="pageLoader">
            <i className="fa-solid fa-spinner fa-spin"></i>
            <p>Verifying password reset token please wait</p>
          </div>
        </div>
      )}
      <form className="sign-in-form flex-center">
        <div className="header" style={{ marginBottom: "1rem" }}>
          <h1>Passord Reset</h1>
        </div>
        <div className="inputs">
          <div>
            <label>Password</label>
            <input
              type={notPassword ? "text" : "password"}
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type={notPassword ? "text" : "password"}
              placeholder="**********"
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
            <small className="password_hint">
              Password must be 8 characters long, must have a number, must have
              a special character, must have one uppercase and one lowercase.
            </small>
          </div>
          <div
            style={{
              display: "flex",
              gap: "7.5px",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              onChange={() => setNotPassword(!notPassword)}
              id="password_reset_is_pass_check"
            />
            <label
              htmlFor="password_reset_is_pass_check"
              style={{ fontSize: "11.5px" }}
            >
              Show password
            </label>
          </div>
        </div>

        {btnLoader ? (
          <button className="submit-btn primary-button">
            <i className="fa-solid fa-spinner fa-spin"></i>
          </button>
        ) : (
          <input
            type="submit"
            value="Submit"
            className="submit-btn primary-button"
            onClick={resetPassword}
          />
        )}
      </form>
      {success && (
        <SuccessAlert
          noCloseIcon={signInOnReset}
          success={success}
          setSuccess={setSuccess}
        >
          {signInOnReset && (
            <Link
              to="/sign-in"
              className="password_reset_success_modal_login_btn"
            >
              Sign In
            </Link>
          )}
        </SuccessAlert>
      )}
      {error && <ErrorAlert error={error} setError={setError} />}
    </div>
  );
};

export default PasswordReset;
