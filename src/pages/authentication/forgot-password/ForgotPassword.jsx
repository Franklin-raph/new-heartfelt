import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "../../../components/alert/ErrorAlert";
import SuccessAlert from "../../../components/alert/SuccessAlert";

const ForgotPassword = ({ baseUrl }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loader, setLoader] = useState(false)
  //
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoader(true)
    console.log(JSON.stringify({ email: email }));
    const response = await fetch(`${baseUrl}/password-reset`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({email:email})
    })
    const data = await response.json()
    if(response) setLoader(false)
    if(response.ok){
      setSuccess("A pasword reset link has been sent to your emial")
    }

    if(!response.ok){
      setError("An error occured please resend the request")
    }
    console.log(data)
  };

  //
  return (
    <div>
      <form
        className="sign-in-form flex-center"
        onSubmit={handleForgotPassword}
      >
        <div className="header">
          <h1>Forgot your passord?</h1>
          <p>
            Enter email linked to your account. We'll send you a password reset
            email.
          </p>
        </div>
        <div className="inputs">
          <div>
            <label>Email Adress</label>
            <input
              type="email"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {loader ?
          <button className="submit-btn primary-button">
            <i className="fa-solid fa-spinner fa-spin"></i>
          </button>
          :
          <input
          type="submit"
          value="Send reset email"
          className="submit-btn primary-button"
        />
        }
        
        <Link to="/sign-in">Back to Login</Link>
      </form>
      {success && <SuccessAlert success={success} setSuccess={setSuccess} />}
      {error && <ErrorAlert error={error} setError={setError} />}
    </div>
  );
};

export default ForgotPassword;
