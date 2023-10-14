import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { NavLink, useNavigate } from "react-router-dom";
import SuccessAlert from "../../components/alert/SuccessAlert";
import ErrorAlert from "../../components/alert/ErrorAlert";

const AccountInfo = ({baseUrl}) => {
  const navigate = useNavigate();
  //
  const [newName, setNewName] = useState("")
  const [newCountry, setNewCountry] = useState("")
  const [loader, setLoader] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!user) {
      // navigate("/");
    }
  }, []);
  //
  const sidebar = useRef();
  const openSidebar = () => {
    sidebar.current.classList.toggle("open_sidebar");
  };

  //
  const [accountProfilePicture, setAccountProfilePicture] = useState();

  //
  const handleUploadProfilePicture = (e) => {
    const files = e.target.files[0];
    let reader = new FileReader();

    reader.onload = (e) => {
      const profileImgUrl = e.target.result;
      setAccountProfilePicture(profileImgUrl);
    };
    reader.readAsDataURL(files);
  };

  async function updateNameAndCountry(){
    setLoader(true)
    if(!newName || !newCountry){
      setError("Please fill in all fields")
    }else{
      const response = await fetch(`${baseUrl}/update-user-details`,{
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({newName:newName, newCountry:newCountry})
      })
      if(response) setLoader(false)
      const data = await response.json()
    if(response.ok){
      setSuccess(data.message)
    }
      console.log(data)
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
          <h3>Account</h3>
        </div>
        {/*  */}
        <AccountInfoNavLinks />
        {/*  */}
        <div className="account_personal_info_form">
          <div className="account_personal_info_image_row">
            <div className="account_personal_info_img_div">
              <img src={accountProfilePicture} alt="" />
              <input
                type="file"
                id="account_image_profile_input"
                accept="image/*"
                onChange={handleUploadProfilePicture}
              />
            </div>
            <label htmlFor="account_image_profile_input">
              <i className="bx bxs-image"></i>
            </label>
            {/* <button className="account_personal_info_edit_btn">Edit</button> */}
          </div>
          <div className="account_info_input_div">
            <label htmlFor="last_name">Custom Name</label>
            <input type="text" id="last_name" placeholder="Blossom" onChange={e => setNewName(e.target.value)} value={newName}/>
          </div>
          {/* <div className="account_info_input_div">
            <label htmlFor="email_address">Email Address</label>
            <input
              type="email"
              id="email_address"
              placeholder="maryblossom@gmail.com"
            />
          </div> */}
          <div className="account_info_input_div">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" placeholder="Nigeria"  onChange={e => setNewCountry(e.target.value)} value={newCountry}/>
          </div>
          {!loader ? (
              <button className="save_password_change_btn" onClick={updateNameAndCountry}>Update Account</button>
            ) : (
              <button className="save_password_change_btn">
                <i className="fa-solid fa-spinner fa-spin"></i>
              </button>
          )}
        </div>
      </div>
      {success && <SuccessAlert success={success} setSuccess={setSuccess}/>}
      {error && <ErrorAlert error={error} setError={setError}/>}
    </section>
  );
};

export default AccountInfo;

// The links below the header
export const AccountInfoNavLinks = () => {
  return (
    <div className="dashboard_content_head">
      <NavLink
        to="/account-personal-info"
        className="dashboard_content_head_link"
      >
        Personal Info
      </NavLink>
      <NavLink
        to="/account-change-password"
        className="dashboard_content_head_link"
      >
        Change Password
      </NavLink>
      <NavLink
        to="/account-custom-name"
        className="dashboard_content_head_link"
      >
        Custom Name
      </NavLink>
      <NavLink
        to="/account-delete-account"
        className="dashboard_content_head_link"
      >
        Delete Account
      </NavLink>
    </div>
  );
};
