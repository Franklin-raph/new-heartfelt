import React, { useEffect, useRef, useState } from "react";
import UploadCardNav from "../../components/upload-card-nav/UploadCardNav";
import { useNavigate } from "react-router-dom";
import SuccessAlert from "../../components/alert/SuccessAlert";

const UploadCard = ({ baseUrl }) => {
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  //
  const getUploadFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgFile(e.target.files[0]);
    }
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  async function uploadImageToServer() {
    // if (isChecked) {
      setLoader(true);
      const fd = new FormData();
      fd.append("image", imgFile);
      console.log(imgFile);
      const response = await fetch(`${baseUrl}/upload`, {
        method: "POST",
        body: fd,
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      const data = await response.json();
      console.log(data)
      if (response) setLoader(false);
      if (response.ok) {
        setSuccess(true);
        // setSuccessMsg(data.message);
        localStorage.setItem("uploaded-card", JSON.stringify(data.response.url));
        navigate("/card-delivery-details");
      }
      if(!response.ok){
        setError("Something went wrong please try uploading the card again")
      }
  }

  async function uploadImageToServerAndSave(){
    setLoader(true);
    const fd = new FormData();
    fd.append("image", imgFile);
    console.log(imgFile);
    const response = await fetch(`${baseUrl}/upload-custom-card-cover`, {
      method: "POST",
      body: fd,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    const data = await response.json();
    console.log(response, data)
    if (response) setLoader(false);
    if (response.ok) {
      setSuccess(true);
      setSuccessMsg(data.message);
      localStorage.setItem("uploaded-card", JSON.stringify(data.url));
      navigate("/card-delivery-details");
    }
    if(!response.ok){
      setError("Something went wrong please try uploading the card again")
    }
  }


  //
  return (
    <div className="upload-card">
      <div className="upload-card-container flex-center">
        <div className="header">
          <h2>What card cover will you use?</h2>
          <div className="flex-center g-2">
            <p onClick={() => navigate("/upload-card")}>Upload</p>
            <p onClick={() => navigate("/saved-card")}>Saved Covers</p>
          </div>
        </div>

        {!imgFile && (
          <>
            <div className="body">
              <label
                className="first_upload_card_label"
                htmlFor="upload_card_input"
              >
                <i className="bx bx-images"></i>
              </label>
              <input
                type="file"
                id="upload_card_input"
                onChange={(e) => getUploadFile(e)}
              />
              <p>
                Please upload and image or,
                <label
                  className="second_upload_card_label"
                  htmlFor="upload_card_input"
                >
                  Browse
                </label>
              </p>
              <p>
                Maximum 5mb file size. 440px width and 550px height recommended
              </p>
              <p>
                <span></span>Animated Gifs
              </p>
              <p>
                <span></span>Files should contain 50 frames or less
              </p>
            </div>
          </>
        )}
      </div>

      {imgFile && (
        <div style={{ textAlign: "center" }}>
          <img
            src={URL.createObjectURL(imgFile)}
            alt="Current image"
            className="uploaded_img"
            style={{ margin: "3rem auto 10px" }}
          />
          <div className="upload-card-nav flex-between g-3">
            <button onClick={() => navigate("/upload-card-cover-birthday")}>
              Cancel
            </button>
            <div className="flex-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p
                style={{
                  color: "var(--body-texts)",
                  fontSize: "13px",
                  margin: "3px 0 0 5px",
                }}
              >
                Save my card cover
              </p>
            </div>
            {isChecked ? 
              <>
                {!loader ? (
                  <div className="edit_and_continue">
                    <button
                      className="primary-button"
                      onClick={uploadImageToServerAndSave}
                    >
                      Continue....
                    </button>
                  </div>
                ) : (
                  <div className="edit_and_continue">
                    <button className="primary-button">
                      <i className="fa-solid fa-spinner fa-spin"></i>
                    </button>
                  </div>
                )}
              </>
             : 
             <>
              {!loader ? (
                <div className="edit_and_continue">
                  <button
                    className="primary-button"
                    onClick={uploadImageToServer}
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <div className="edit_and_continue">
                  <button className="primary-button">
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  </button>
                </div>
              )}
             </>
             }
            
          </div>
        </div>
      )}
      {success ? <SuccessAlert success={successMsg} /> : <></>}
    </div>
  );
};

export default UploadCard;
