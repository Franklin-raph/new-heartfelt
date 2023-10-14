import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { NavLink, useNavigate } from "react-router-dom";
import cardImgPreview from "../../assets/images/card_preview_template.jpg";

const UserDashboard = ({baseUrl}) => {
  const navigate = useNavigate();
  const [allMyCardTemplates, setAllMyCardTemplates] = useState()
  const [deleteCardModal, setDeleteCardModal] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  //
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      console.log("first")
      navigate("/");
    }
    getMySavedCards()
  }, []);
  // //

  const sidebar = useRef();
  const openSidebar = () => {
    sidebar.current.classList.toggle("open_sidebar");
  };

  async function getMySavedCards(){
    console.log("Hello")
    const response = await fetch(`${baseUrl}/get-user-cards`,{
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
    const data = await response.json()
    // console.log(data)
    if(response.ok){
      setAllMyCardTemplates(data.data)
    }
    // if(!response.ok){
    //   // alert("Something went wrong")
    // }
    console.log(response, data)
  }

  function navigateToCardSettings(){
    
  }

  function confirmCardDelete(id){
    const cardToDelete = allMyCardTemplates.find(cardTemplate => cardTemplate.id === id)
    setDeleteCardModal(cardToDelete)
    // /delete-card/:cardID
  }

  async function handleDeleteCard(id){
    console.log(id)
    const response = await fetch(`${baseUrl}/delete-card/${id}`,{
      method:"DELETE",
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
      
    })
    const data = await response.json()
    console.log(data)
    if(response.ok){
      // setSuccess(data.data)
    }
    if(!response.ok){
      setError(data.error)
    }
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
                  <img src={cardTemplate.cardCoverUrl} alt="" className="dashboard_item_img" />
                  <p className="card_preview_create_date">{cardTemplate.status === 2 ? "Paid" : "Unpaid"}</p>
                  <p className="card_preview_created_by">{cardTemplate.created_at.slice(0, 10)}</p>
                  <p className="card_preview_recipient">{cardTemplate.recipientFullName}</p>
                  <p className="card_preview_Entries">{cardTemplate.signatureCount}</p>
                  <p className="card_preview_status">{cardTemplate.date}</p>
                  <p className="card_preview_status" onClick={() => navigateToCardSettings(cardTemplate.status)} ><i class="ri-settings-3-line"></i></p>
                  <p className="card_preview_status"><i class="ri-delete-bin-fill" onClick={() => confirmCardDelete(cardTemplate.id)} style={{ fontSize:"18px", color:"red", padding:"5px" }}></i></p>
                </div>
              </div>
          ))
          }
          {deleteCardModal && 
            <div className="errorModalBg">
              {/* {} */}
              <div className="failureModal">
                <p>Are you sure sure you want to delete this card</p>
                <div>
                  <button className="delete-button" onClick={() => handleDeleteCard(deleteCardModal.id)}>Delete</button>
                  <button className="cancel-button" onClick={() => setDeleteCardModal(false)}>Cancel</button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
