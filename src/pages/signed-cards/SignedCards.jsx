import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { NavLink, useNavigate } from "react-router-dom";
import cardImgPreview from "../../assets/images/card_preview_template.jpg";

const SignedCards = () => {
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
    const response = await fetch(`${baseUrl}/get-user-cards`,{
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
            <h4>More</h4>
          </div>
          <div className="user_dashboard_item_row">
            {/*  */}

            <div className="user_dashboard_card_item">
              {/* <img src={cardImgPreview} alt="" className="dashboard_item_img" />
              <p className="card_preview_create_date">10 April 2023</p>
              <p className="card_preview_created_by">Chisom</p>
              <p className="card_preview_recipient">Chisom</p>
              <p className="card_preview_Entries">2</p>
              <p className="card_preview_status sent">Signed</p>
              <div className="update_card_preview_icons">
                <i className="ri-eye-line"></i>
                <i className="bx bx-link"></i>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div> */}
            </div>
            {/*  */}
            <div className="user_dashboard_card_item">
              {/* <img src={cardImgPreview} alt="" className="dashboard_item_img" />
              <p className="card_preview_create_date">10 April 2023</p>
              <p className="card_preview_created_by">Chisom</p>
              <p className="card_preview_recipient">Chisom</p>
              <p className="card_preview_Entries">2</p>
              <p className="card_preview_status sent">Signed</p>
              <div className="update_card_preview_icons">
                <i className="ri-eye-line"></i>
                <i className="bx bx-link"></i>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div> */}
            </div>
            {/*  */}
            <div className="user_dashboard_card_item">
              {/* <img src={cardImgPreview} alt="" className="dashboard_item_img" />
              <p className="card_preview_create_date">10 April 2023</p>
              <p className="card_preview_created_by">Chisom</p>
              <p className="card_preview_recipient">Chisom</p>
              <p className="card_preview_Entries">2</p>
              <p className="card_preview_status sent">Signed</p>
              <div className="update_card_preview_icons">
                <i className="ri-eye-line"></i>
                <i className="bx bx-link"></i>
                <i className="bx bx-dots-horizontal-rounded"></i>
              </div> */}
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignedCards;
