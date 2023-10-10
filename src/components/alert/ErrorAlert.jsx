import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// , fromEmailVerify, setFromEmailVerify
const ErrorAlert = ({ error, setError, resendVerificationEmailText, baseUrl, email }) => {
  console.log(error, resendVerificationEmailText, email);
  const [success, setSuccess] = useState("")
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();

  async function resendVerificationEmail(){
    console.log(email)
    setLoader(true)
    const response = await fetch(`${baseUrl}/regen-confirm-email`,{
      body: JSON.stringify({email:email}),
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await response.json()
    if(response) setLoader(false)
    if(response.ok){
      setSuccess(data.message)
    }

    if(!response.ok){
      setError(data.message)
    }
    console.log(data)
  }

  return (
    <div>
      <div className="successModalBg">
        <div
          className="failureModal flex items-center justify-center flex-col gap-10"
          style={{ position: "relative" }}
        >
          <i
            className="fa-solid fa-xmark"
            style={{
              color: "#333",
              position: "absolute",
              cursor: "pointer",
              top: "15px",
              right: "15px",
              fontSize: "22px",
            }}
            onClick={() => setError(false)}
          ></i>
          {!success && <svg
            className="cancel"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <path
              className="check__cancel"
              fill="none"
              d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8"
            />
          </svg>}
          {success && <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>}
          {!success && <p style={{ color: "black" }}>{error}</p>}
          {success && <p style={{ color: "black" }}>{success}</p>}
          
          {resendVerificationEmailText && 
          <div className="resendVerificationEmailText" onClick={()=> {
                    resendVerificationEmail()
                }}>
                  {!success && 
                    <>
                      {!loader ? <p>Click to resend verification email</p> : <i class="fa-solid fa-spinner fa-spin"></i>}
                    </>
                  }
          </div>}
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
