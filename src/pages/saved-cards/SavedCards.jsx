import React, { useEffect, useState } from "react";
import UploadCardNav from "../../components/upload-card-nav/UploadCardNav";
import { useNavigate } from "react-router-dom";
import amazonImage from "../../assets/images/delivery-details-img.png";

const SavedCards = ({baseUrl}) => {
  const navigate = useNavigate();
  const [isEditCardOpen, setIsEditCardOpen] = useState(false);
  const [allMyCardTemplates, setAllMyCardTemplates] = useState([])
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    getMySavedCards()
  },[])

  const gift_card = [
    {
      card_title: "Modern New Year Celeb....",
      card_text: "New Year",
    },
    {
      card_title: "Modern New Year Celeb....",
      card_text: "New Year",
    },
    {
      card_title: "Modern New Year Celeb....",
      card_text: "New Year",
    },
    {
      card_title: "Modern New Year Celeb....",
      card_text: "New Year",
    },
    {
      card_title: "Modern New Year Celeb....",
      card_text: "New Year",
    },
    {
      card_title: "Modern New Year Celeb....",
      card_text: "New Year",
    },
    {
      card_title: "Modern New Year Celeb....",
      card_text: "New Year",
    },
    {
      card_title: "Modern New Year Celeb....",
      card_text: "New Year",
    },
  ];

  async function getMySavedCards(){
    const response = await fetch(`${baseUrl}/fetch-user-templates`,{
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
    const data = await response.json()
    if(response.ok){
      setAllMyCardTemplates(data.data)
    }
    if(!response.ok){
      // alert("Something went wrong")
    }
    console.log(response, data)
  }

  return (
    <div className="saved-card">
      <UploadCardNav />
      <div className="upload-card-container flex-center">
        <div className="header">
          <h2>What card cover will you use?</h2>
          <div
            className="flex-center g-2"
            style={{ fontSize: "13px", color: "var(--body-texts)" }}
          >
            <p
              onClick={() => navigate("/upload-card")}
              style={{ all: "unset", cursor: "pointer" }}
            >
              Upload
            </p>
            <p
              onClick={() => navigate("/saved-card")}
              style={{
                border: "1px solid var(--primary-color)",
                padding: "2px 16px",
                color: "var(--primary-color)",
                borderRadius: "6px",
              }}
            >
              Saved Covers
            </p>
          </div>
        </div>
        <div className="body">
          {allMyCardTemplates.map((card, i) => (
            <div key={i} onClick={() => navigate("/card-delivery-details")}>
              {/* <div className="gift_card_segment_card_img image">
              </div> */}
                <img src={card.coverUrl} alt="" style={{ width:"120px" }}/>
              {/* <h4>{card.coverUrl}</h4> */}
              {/* <p>{card.card_text}</p> */}
            </div>
          ))}
        </div>
      </div>
      {/* {isEditCardOpen ? (
        <div className="editCardModalBg flex-center">
          <div className="editCardModal">
            <div className="header flex-between">
              <h4>Edit Card Cover</h4>
              <i
                className="ri-close-fill"
                onClick={() => setIsEditCardOpen(false)}
              ></i>
            </div>
            <div className="modal-body flex-center">
              <img src={amazonImage} alt="" />
              <div className="controls flex-center g-1">
                <i className="ri-zoom-in-line"></i>
                <i className="ri-zoom-out-line"></i>
                <i className="bx bx-rotate-right"></i>
                <i className="bx bx-rotate-left"></i>
                <i className="fa-solid fa-up-right-and-down-left-from-center upToDown"></i>
                <i className="fa-solid fa-up-right-and-down-left-from-center rightToLeft"></i>
                <i className="ri-loop-right-fill"></i>
              </div>
            </div>
            <div className="footer flex-between">
              <p></p>
              <div>
                <button
                  className="secondary-button"
                  onClick={() => setIsEditCardOpen(false)}
                >
                  Cancel
                </button>
                <button className="primary-button">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default SavedCards;
