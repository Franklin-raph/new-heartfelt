import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadCardCoverSideNav from "../../components/upload-card-cover-side-nav/UploadCardCoverSideNav";
import Occasions from "../../components/occasions/Occasions";
import deliver_details_image from "../../assets/images/delivery-details-img.png";

const Maternity = ({baseUrl}) => {
  const navigate = useNavigate();
  const [openPreviewCardModal, setOpenPreviewCardModal] = useState(false);
  const [gift_card, setGift_card] = useState([])
 
  //
  const sidebar = useRef();
  const openSidebar = () => {
    sidebar.current.classList.toggle("open_sidebar");
  };


  async function fetchCards() {
    const response = await fetch(`${baseUrl}/fetch-cards-category/Getwellsoon`);
    const data = await response.json();
    setGift_card(data.data);
    console.log(data);
  }
  //
  // const user = JSON.parse(localStorage.getItem("user_info"));
  useEffect(() => {
    // if (!user) {
    //   navigate("/");
    // }
    fetchCards()
  }, []);

  return (
    <div className="upload-card-cover">
      <Occasions />
      <div className="header">
        <h1>Maternity Cards</h1>
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
            </div>
            {gift_card.length < 1 ? (
              <div
                style={{
                  gridColumn: "2/-1",
                  fontSize: "18px",
                  alignSelf: "center",
                }}
              >
                No cards uploaded here yet
              </div>
            ) : (
              gift_card.map((card, i) => (
                <div className="gift_card_segment_card" key={i}>
                  <div className="card_overlay">
                    <button onClick={() => showCard(card.coverUrl)}>
                      Preview
                    </button>
                    <button
                      onClick={() =>
                        navigateToCardDeliveryDetails(card.coverUrl)
                      }
                    >
                      Use Card
                    </button>
                  </div>
                  <img src={card.coverUrl} alt="" />
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      {openPreviewCardModal && (
        <div className="previewCardModal flex-center">
          <i
            className="ri-close-fill"
            onClick={() => setOpenPreviewCardModal(false)}
          ></i>
          <img src={deliver_details_image} alt="" />
        </div>
      )}
    </div>
  );
};

export default Maternity;
