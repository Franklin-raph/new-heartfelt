import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../../components/alert/ErrorAlert";
import { GoogleLogin } from '@react-oauth/google';

const SignIn = ({ baseUrl }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notPassword, setNotPassword] = useState(false);
  const [error, setError] = useState();
  const [loader, setLoader] = useState(false);
  const [resendVerificationEmailText, setResendVerificationEmailText] =
    useState(false);

  const navigate = useNavigate();
  //
  const user_info = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user_info) {
      navigate("/user-dashboard");
    }
  }, []);

  // on submit function
  async function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, password });
    if (!email || !password) {
      setError("Please fill in all fields");
    } else {
      setLoader(true);
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(response, data, response.status);
      if (response) setLoader(false);
      if (!response.ok) {
        setError(data.message);
      }
      if (response.status === 400) {
        setResendVerificationEmailText(true);
      } else {
        setResendVerificationEmailText(false);
      }

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      }
    }
  }

  function googleResponseMessage(response){
    let jwt = `${response.credential}`
    var tokens = jwt.split(".");
    const userDetails = JSON.parse(atob(tokens[1]))
    if(userDetails){
      console.log(userDetails)
        // handleLoginFromGoogleResponse(userDetails)
    }
  }

  //
  return (
    <div>
      {error && (
        <ErrorAlert
          baseUrl={baseUrl}
          error={error}
          resendVerificationEmailText={resendVerificationEmailText}
          email={email}
          setError={setError}
        />
      )}
      <form className="sign-in-form flex-center" onSubmit={handleSubmit}>
        <div className="header" style={{ marginBottom:"10px" }}>
          <h1>Welcome Back</h1>
          <p>
            Don't have an account? <Link to="/sign-up">Start for free</Link>{" "}
          </p>
        </div>
        <GoogleLogin
                onSuccess={googleResponseMessage}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
        {/* <div className="continue-with-google flex-center">
          <i className="ri-google-fill"></i>
          <p>Continue with Google</p>
        </div> */}
        <div className="center-line flex-center">
          <div className="line1 flex-center g-1">
            <p className="or_line"></p>
            <p>or</p>
            <p className="or_line"></p>
          </div>
        </div>
        <div className="inputs">
          <div>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input
              type={notPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
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
        {loader ? (
          <button className="submit-btn primary-button">
            <i className="fa-solid fa-spinner fa-spin"></i>
          </button>
        ) : (
          <input
            type="submit"
            value="Log in"
            className="submit-btn primary-button"
          />
        )}
        <Link to="/forgotPassword">Forgot Password?</Link>
      </form>
    </div>
  );
};

export default SignIn;
