import React, { useEffect, useRef } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { useNavigate } from "react-router-dom";

const TaxExemption = () => {
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
        <div className="dashboard_content_header tax_exempt">
          <h3>Tax Exemption</h3>
          <p>To make payment without tax, upload your tax certificate.</p>
        </div>
        {/*  */}

        <form className="account_personal_info_form">
          <div className="account_info_input_div">
            <label htmlFor="first_name">Support only Doc, Pdf (max 3mb)</label>
            <label htmlFor="first_name" className="file_choose_custom_btn">
              Bowse File
            </label>
            <input
              className="change_password_input tax_exempt_input"
              type="file"
              accept=".docx,.doc,.pdf"
              id="first_name"
            />
          </div>
          <button className="save_password_change_btn">Upload</button>
        </form>
      </div>
    </section>
  );
};

export default TaxExemption;
