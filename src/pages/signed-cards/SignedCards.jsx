import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { NavLink, useNavigate } from "react-router-dom";
import cardImgPreview from "../../assets/images/card_preview_template.jpg";

const SignedCards = ({baseUrl}) => {
  //
  const navigate = useNavigate();
  const [allMySignedCardTemplates, setAllMySignedCardTemplates] = useState([])
  //
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    getMySignedCards()
  }, []);
  //
  const sidebar = useRef();
  const openSidebar = () => {
    sidebar.current.classList.toggle("open_sidebar");
  };

  async function getMySignedCards(){
    const response = await fetch(`${baseUrl}/get-signed-cards`,{
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
    const data = await response.json()
    console.log(data)
    if(response.ok){
      setAllMySignedCardTemplates(data.data)
    }
    if(!response.ok){
      // alert("Something went wrong")
    }
    console.log(response, data)
  }

  //
  return (
    <section className="user_dashbaord_section">
      <i
        className="ri-align-justify user_dashboard_toggler open"
        onClick={openSidebar}
      ></i>
      <DashBoardNav sidebar={sidebar} openSidebar={openSidebar} />
      <div className="user_dashboard_col_2">
        <div className="dashboard_content_header">
          <h3>Signed Cards</h3>
        </div>
        {/*  */}
        <div className="userdashboard_content">
          <div className="dashboard_content_head">
            <NavLink
              to="/user-dashboard"
              className="dashboard_content_head_link"
            >
              Created
            </NavLink>
            <NavLink
              to="/user-dashboard-signed-cards"
              className="dashboard_content_head_link"
            >
              Signed
            </NavLink>
          </div>
          {/*  */}
          <div className="dashboard_item_row_header">
            <h4>Preview</h4>
            <h4>Status</h4>
            <h4>Created</h4>
            <h4>Recipient</h4>
            <h4>Entries</h4>
            <h4>Delivery</h4>
            <h4>Settings</h4>
          </div>
          {allMySignedCardTemplates && allMySignedCardTemplates.length === 0 && <p style={{ fontSize:"1.4rem", textAlign:"center", marginTop:"5rem" }}>You have no signed cards yet</p>}
          {allMySignedCardTemplates && 
            allMySignedCardTemplates.map(cardTemplate => (
              <div className="user_dashboard_item_row">
                <div className="user_dashboard_card_item">
                  <img src={cardTemplate.cardCoverUrl} alt="" className="dashboard_item_img" />
                  <p className="card_preview_create_date">{cardTemplate.status === 2 ? "Paid" : "Unpaid"}</p>
                  <p className="card_preview_created_by">{cardTemplate.created_at.slice(0, 10)}</p>
                  <p className="card_preview_recipient">{cardTemplate.recipientFullName}</p>
                  <p className="card_preview_Entries">{cardTemplate.signatureCount}</p>
                  <p className="card_preview_status">{cardTemplate.date}</p>
                  <p className="card_preview_status" onClick={() => navigateToCardSettings(cardTemplate.status)} ><i class="ri-settings-3-line"></i></p>
                  {/* <div className="update_card_preview_icons">
                    <i className="bx bx-link"></i>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div> */}
                </div>
              </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default SignedCards;
