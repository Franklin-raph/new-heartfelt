import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { useNavigate } from "react-router-dom";
import { AccountInfoNavLinks } from "../account-personal-info/AccountInfo";
import SuccessAlert from "../../components/alert/SuccessAlert";
import ErrorAlert from "../../components/alert/ErrorAlert";

const AccountCustomName = ({baseUrl}) => {
  const navigate = useNavigate();
  //
  const user = JSON.parse(localStorage.getItem("user"));
  const [newCustomName, setNewCustomName] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loader, setLoader] = useState(false);
  
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
  // update-custom-name

  async function updateUserName(e){
    setLoader(true);
    console.log(user.accessToken)
    e.preventDefault()
    const response = await fetch(`${baseUrl}/update-custom-name`,{
      method:"POST",
      body: JSON.stringify({newCustomName}),
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        "Content-Type":"application/json"
      },
    })
    const data = await response.json()
    if(response) setLoader(false);
    if(!response.ok){
      setError(data.message)
    }

    if(response.ok){
      setSuccess(data.message)
    }
    console.log(data, response)
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
        <form className="account_personal_info_form">
          <div className="account_info_input_div">
            <label htmlFor="first_name">Custom Name</label>
            <input
              className="change_password_input"
              type="text"
              id="first_name"
              placeholder="Mary"
              onChange={e => setNewCustomName(e.target.value)}
            />
            <p>This Refrects as "From" in all group cards sent.</p>
          </div>
          {!loader ? (
              <button className="save_password_change_btn" onClick={updateUserName}>Save</button>
            ) : (
              <button className="save_password_change_btn">
                <i className="fa-solid fa-spinner fa-spin"></i>
              </button>
          )}
        </form>
      </div>
      {error && <ErrorAlert error={error} setError={setError}/> }
      {success && <SuccessAlert success={success} setSuccess={setSuccess}/> }
    </section>
  );
};

export default AccountCustomName;
