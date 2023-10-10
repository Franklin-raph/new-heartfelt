import React, { useEffect, useRef } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { useNavigate } from "react-router-dom";
import { AccountInfoNavLinks } from "../account-personal-info/AccountInfo";

const AccountDeletAccount = () => {
  const navigate = useNavigate();
  //
  const user = JSON.parse(localStorage.getItem("user_info"));
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
            <label htmlFor="first_name">Type in Password to confirm</label>
            <input
              className="change_password_input"
              type="text"
              id="first_name"
            />
            <p>Once this action is done, you loose access to your account</p>
          </div>
          <button className="save_password_change_btn delete_account">
            Delete Account
          </button>
        </form>
      </div>
    </section>
  );
};

export default AccountDeletAccount;
