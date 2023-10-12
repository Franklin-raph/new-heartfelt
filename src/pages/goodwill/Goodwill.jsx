import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadCardCoverSideNav from "../../components/upload-card-cover-side-nav/UploadCardCoverSideNav";
import Occasions from "../../components/occasions/Occasions";
import deliver_details_image from "../../assets/images/delivery-details-img.png";

const Goodwill = ({ baseUrl }) => {
  const navigate = useNavigate();
  const [openPreviewCardModal, setOpenPreviewCardModal] = useState(false);
  const [gift_card, setGift_card] = useState([]);
  const [imgSrc, setImgSrc] = useState("");
  //
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }

    fetchCards();
  }, []);

  //
  async function fetchCards() {
    const response = await fetch(`${baseUrl}/fetch-cards-category/Goodwill`);
    const data = await response.json();
    setGift_card(data.data);
    console.log(data);
  }

  //
  function showCard(imgSrc) {
    setOpenPreviewCardModal(true);
    setImgSrc(imgSrc);
  }

  //
  const sidebar = useRef();
  const openSidebar = () => {
    sidebar.current.classList.toggle("open_sidebar");
  };

  return (
    <div className="upload-card-cover">
      <Occasions />
      <div className="header">
        <h1>Goodwill Cards</h1>
        <p>
          Express love to friends and family all over the world, with special
          memories of gifts.
        </p>
      </div>
      <section className="user_dashbaord_section">
        <i
          className="ri-align-justify user_dashboard_toggler open"
          onClick={openSidebar}
        ></i>
        <UploadCardCoverSideNav sidebar={sidebar} openSidebar={openSidebar} />
        <div className="user_dashboard_col_2">
          <div className="gift_card_segment_row_upload_card_cover row_2">
            <div className="gift_card_segment_card">
              <div
                className="upload_gift_card_segment_card flex-center"
                onClick={() => navigate("/upload-card")}
              >
                <i className="bx bx-upload"></i>
                <h4>Upload card cover</h4>
                <p>max 30mb</p>
              </div>
              <div className="gift_card_segment_card_context">
                <h5> Happy Birthday </h5>
                <p>Birthday</p>
              </div>
            </div>
            {gift_card.map((card, i) => (
              <div className="gift_card_segment_card" key={i}>
                <div className="gift_card_segment_card_img">
                  <div className="card_overlay">
                    <button onClick={() => setOpenPreviewCardModal(true)}>
                      Preview
                    </button>
                    <button onClick={() => navigate("/card-delivery-details")}>
                      Use Card
                    </button>
                  </div>
                  <img src={deliver_details_image} alt="" />
                </div>
                <div className="gift_card_segment_card_context">
                  <h5> {card.card_title} </h5>
                  <p>
                    <span>{card.card_price}</span>
                    <span>-</span>
                    <span>{card.card_maxPrice}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {openPreviewCardModal && (
        <div className="previewCardModal flex-center">
          <i
            className="ri-close-fill"
            onClick={() => showCard(gift_card.coverUrl)}
          ></i>
          <img src={imgSrc} alt="" width="15%" />
        </div>
      )}
    </div>
  );
};

export default Goodwill;
