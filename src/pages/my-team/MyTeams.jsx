import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { NavLink, useNavigate } from "react-router-dom";

const MyTeams = () => {
  //
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
          <h3>Annual Plan</h3>
        </div>
        {/*  */}
        <AnnualPlanMyTeamNavLinks />
        {/*  */}
        <div className="annual_plan_table my_teams">
          <table>
            {/*  */}
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Card Used</th>
                <th>Card Cap</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            {/*  */}
            <tbody>
              {/*  */}
              <tr>
                <td>Mary Blossom</td>
                <td>maryblossom@gmail.com</td>
                <td>2 of 25</td>
                <td>N / A</td>
                <td>Team Lead</td>
                <td>
                  <div className="team_table_icons">
                    <i className="bx bx-link"></i>
                    <i className="bx bx-trash"></i>
                  </div>
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Mary Blossom</td>
                <td>maryblossom@gmail.com</td>
                <td>2 of 25</td>
                <td>N / A</td>
                <td>Activated</td>
                <td>
                  <div className="team_table_icons">
                    <i className="bx bx-link"></i>
                    <i className="bx bx-trash"></i>
                  </div>
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Mary Blossom</td>
                <td>maryblossom@gmail.com</td>
                <td>2 of 25</td>
                <td>None</td>
                <td>Pending</td>
                <td>
                  <div className="team_table_icons">
                    <i className="bx bx-link"></i>
                    <i className="bx bx-trash"></i>
                  </div>
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Mary Blossom</td>
                <td>maryblossom@gmail.com</td>
                <td>2 of 25</td>
                <td>N / A</td>
                <td>Pending</td>
                <td>
                  <div className="team_table_icons">
                    <i className="bx bx-link"></i>
                    <i className="bx bx-trash"></i>
                  </div>
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Mary Blossom</td>
                <td>maryblossom@gmail.com</td>
                <td>2 of 25</td>
                <td>N / A</td>
                <td>Activated</td>
                <td>
                  <div className="team_table_icons">
                    <i className="bx bx-link"></i>
                    <i className="bx bx-trash"></i>
                  </div>
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Mary Blossom</td>
                <td>maryblossom@gmail.com</td>
                <td>2 of 25</td>
                <td>None</td>
                <td>Activated</td>
                <td>
                  <div className="team_table_icons">
                    <i className="bx bx-link"></i>
                    <i className="bx bx-trash"></i>
                  </div>
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Mary Blossom</td>
                <td>maryblossom@gmail.com</td>
                <td>2 of 25</td>
                <td>None</td>
                <td>Pending</td>
                <td>
                  <div className="team_table_icons">
                    <i className="bx bx-link"></i>
                    <i className="bx bx-trash"></i>
                  </div>
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Mary Blossom</td>
                <td>maryblossom@gmail.com</td>
                <td>2 of 25</td>
                <td>N / A</td>
                <td>Activated</td>
                <td>
                  <div className="team_table_icons">
                    <i className="bx bx-link"></i>
                    <i className="bx bx-trash"></i>
                  </div>
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Mary Blossom</td>
                <td>maryblossom@gmail.com</td>
                <td>2 of 25</td>
                <td>None</td>
                <td>Activated</td>
                <td>
                  <div className="team_table_icons">
                    <i className="bx bx-link"></i>
                    <i className="bx bx-trash"></i>
                  </div>
                </td>
              </tr>
            </tbody>
            {/*  */}
          </table>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default MyTeams;

//
//
// The links below the header
export const AnnualPlanMyTeamNavLinks = () => {
  return (
    <div className="dashboard_content_head my_team_nav_links">
      <NavLink to="/annual-plan" className="dashboard_content_head_link">
        Subscription History
      </NavLink>
      <NavLink
        to="/annual-plan-my-team"
        className="dashboard_content_head_link"
      >
        My Team
      </NavLink>
      <NavLink
        to="/annual-plan-logo-settings"
        className="dashboard_content_head_link"
      >
        Logo Settings
      </NavLink>
      <button className="annual_plan_my_team_nav_link_button">
        Add Team Members
      </button>
    </div>
  );
};
