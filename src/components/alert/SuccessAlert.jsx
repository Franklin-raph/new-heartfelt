import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// , setFromEmailVerify, fromEmailVerify
const SuccessAlert = ({ success, setSuccess, children, noCloseIcon }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const closeIcon = useRef();
  return (
    <div>
      <div className="successModalBg">
        <div
          className="successModal flex items-center justify-center flex-col gap-5"
          style={{ position: "relative" }}
        >
          {location.pathname === "/upload-card" ? (
            <></>
          ) : (
            <i
              className="fa-solid fa-xmark"
              style={{
                color: "#333",
                position: "absolute",
                cursor: "pointer",
                top: "15px",
                right: "15px",
                fontSize: "22px",
                display: noCloseIcon && "none",
              }}
              onClick={() => setSuccess(false)}
              ref={closeIcon}
            ></i>
          )}
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <p style={{ color: "black" }}>{success}</p>
          {children}
          {location.pathname === "/upload-card" ? (
            <button
              className="upload_card_modal_btn"
              onClick={() => navigate("/card-delivery-details")}
            >
              Okay
            </button>
          ) : (
            <></>
          )}
          {/* {fromEmailVerify && <button onClick={()=> {
                    navigate("/login")
                    setFromEmailVerify(false)
                }}>Continue to login</button>} */}
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
