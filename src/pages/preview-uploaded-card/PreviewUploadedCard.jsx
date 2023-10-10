import React, { useState } from "react";
import UploadCardNav from "../../components/upload-card-nav/UploadCardNav";
import deliver_details_icon from "../../assets/images/delivery-details-img.png";
import { useNavigate } from "react-router-dom";

const PreviewUploadedCard = ({baseUrl}) => {

  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user.accessToken)
  // states
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false)
  const imagePreview = localStorage.getItem("uploaded_card_img");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  async function uploadCardToMyLibrary(){
    console.log(JSON.stringify({image: localStorage.getItem("uploaded_card_img")}))
    if(isChecked){
      const response = await fetch(`${baseUrl}/upload`,{
        method:"POST",
        headers:{
          "Content-type":"multipath/form-data",
          Authorization: `Bearer ${user.accessToken}`
        },
        body: JSON.stringify({image: localStorage.getItem("uploaded_card_img")})
      })
      const data = await response.json()
      console.log(response, data)
    }else{
      navigate("/card-delivery-details")
    }
  }

  //
  return (
    <div className="upload-card">
      
      <div className="upload-card-container-preview flex-center">
        <div className="header">
          <h2>What card cover will you use?</h2>
        </div>
        <div className="body">
          {imagePreview && (
            <img src={imagePreview} className="uploaded_img" alt="" />
          )}
        </div>
        <div className="flex-center">
          <input type="checkbox" 
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
      </div>
      <div className="upload-card-nav flex-between g-3">
        <button onClick={() => navigate("/upload-card-cover-birthday")}>
          Cancel
        </button>
        <div className="edit_and_continue">
          <button
            className="primary-button"
            // onClick={() => navigate("/card-delivery-details")}
            onClick={() => uploadCardToMyLibrary()}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewUploadedCard;
