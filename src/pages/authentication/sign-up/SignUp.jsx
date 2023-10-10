import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "../../../components/alert/ErrorAlert";
import SuccessAlert from "../../../components/alert/SuccessAlert";

const SignUp = ({ baseUrl }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [notPassword, setNotPassword] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  console.log(baseUrl);

  async function handleAccountSignUp(e) {
    e.preventDefault();
    if (!name || !password || !email || !country) {
      setError("Please fill in all fields");
    } else {
      setLoader(true);
      const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          country: country,
        }),
      });
      localStorage.setItem("userEmail", email);
      const data = await response.json();
      if (response) setLoader(false);
      if (response.ok) {
        setSuccess(data.message);
      }
      if (!response.ok) {
        setError(data.error);
      }
      console.log(response, data);
    }
  }

  return (
    <div>
      {error && <ErrorAlert error={error} setError={setError} />}
      {success && <SuccessAlert success={success} setSuccess={setSuccess} />}
      <form className="sign-in-form flex-center" onSubmit={handleAccountSignUp}>
        <div className="header">
          <h1>Get started for free</h1>
          <p>
            Already have an account? <Link to="/sign-in">login</Link>
          </p>
        </div>
        <div className="continue-with-google flex-center">
          <i className="ri-google-fill"></i>
          <p>Continue with Google</p>
        </div>
        <div className="center-line flex-center">
          <div className="line1 flex-center g-1">
            <p className="or_line"></p>
            <p>or</p>
            <p className="or_line"></p>
          </div>
        </div>
        <div className="inputs">
          <div>
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="full name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type={notPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
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
            <small className="password_hint">
              Password must be 8 characters long, must have a number, must have
              a special character, must have one uppercase and one lowercase.
            </small>
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="country"
            />
          </div>
        </div>
        {loader ? (
          <button className="submit-btn primary-button">
            <i className="fa-solid fa-spinner fa-spin"></i>
          </button>
        ) : (
          <button type="submit" className="submit-btn primary-button">
            Create Account
          </button>
        )}

        {/* <input
          type="submit"
          value="Create Account"
          
        /> */}
        <div className="sign-up-form-footer">
          By signing up, i agree to Heartfelt's{" "}
          <Link to="/terms-and-conditions">Terms of services</Link> and{" "}
          <Link to="/terms-and-conditions">Privacy Policy</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
