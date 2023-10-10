import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { NavLink, useNavigate } from "react-router-dom";
import cardImgPreview from "../../assets/images/card_preview_template.jpg";

const UserDashboard = ({baseUrl}) => {
  const navigate = useNavigate();
  const [allMyCardTemplates, setAllMyCardTemplates] = useState([])
  //
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    getMySavedCards()
  }, []);
  //
  const sidebar = useRef();
  const openSidebar = () => {
    sidebar.current.classList.toggle("open_sidebar");
  };

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
          <h3>My Cards</h3>
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

          {allMyCardTemplates && allMyCardTemplates.length === 0 && <p style={{ fontSize:"1.4rem", textAlign:"center", marginTop:"5rem" }}>You have no saved cards yet</p>}
          {allMyCardTemplates && 
            allMyCardTemplates.map(cardTemplate => (
              <div className="user_dashboard_item_row">
                <div className="user_dashboard_card_item">
                  <img src={cardTemplate.coverUrl} alt="" className="dashboard_item_img" />
                  <p className="card_preview_create_date">10 April 2023</p>
                  <p className="card_preview_created_by">Chisom</p>
                  <p className="card_preview_recipient">Chisom</p>
                  <p className="card_preview_Entries">2</p>
                  <p className="card_preview_status unpaid">Unpaid</p>
                  <div className="update_card_preview_icons">
                    <i className="ri-eye-line"></i>
                    <i className="bx bx-link"></i>
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </div>
                </div>
              </div>
          ))
          }
          
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
