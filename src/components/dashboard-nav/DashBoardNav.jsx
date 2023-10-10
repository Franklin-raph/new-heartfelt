import React from "react";
import { NavLink } from "react-router-dom";

const DashBoardNav = ({ sidebar, openSidebar }) => {
  //
  const user = JSON.parse(localStorage.getItem("user"));

  //
  return (
    <article className="sidebar_nav" ref={sidebar}>
      <i
        className="ri-close-line user_dashboard_toggler close"
        onClick={openSidebar}
      ></i>
      <div className="sidebar_header g-1">
        <h4>{user && user.user.email.charAt(0)}</h4>
        <div className="sidebar_header_text">
          <h5>{user && user.user.email}</h5>
          <p style={{ fontSize: "13px" }}>Welcome</p>
        </div>
      </div>
      {/*  */}
      <div className="sidebar_links">
        <div className="sidebar_link">
          <i className="bx bx-memory-card"></i>
          <NavLink to="/user-dashboard">My cards</NavLink>
        </div>
        <div className="sidebar_link">
          <i className="bx bxs-file-plus"></i>
          <NavLink to="/saved-card">Saved Covers</NavLink>
        </div>
        <div className="sidebar_link">
          <i className="bx bx-cog"></i>
          <NavLink to="/account-personal-info">Accounts</NavLink>
        </div>
        <div className="sidebar_link">
          <i className="bx bxs-calendar"></i>
          <NavLink to="/annual-plan">Annual Plan</NavLink>
        </div>
        <div className="sidebar_link">
          <i className="ri-user-2-line"></i>
          <NavLink to="/tax-exemption">Tax Exemption</NavLink>
        </div>
        <div className="sidebar_link">
          <i className="ri-notification-2-fill"></i>
          <NavLink to="/notifications">Notifications</NavLink>
        </div>
      </div>
    </article>
  );
};

export default DashBoardNav;
