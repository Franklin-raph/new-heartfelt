import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { NavLink, useNavigate } from "react-router-dom";
import template_sample from "../../assets/images/card_preview_template.jpg";
import template_sample_2 from "../../assets/images/delivery-details-img.png";
import template_sample_3 from "../../assets/images/delivery-details-card-sample.png";
import template_sample_4 from "../../assets/images/birthday-card-template-image.jpg";

const AnnualPlans = () => {
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
        <AnnualPlanNavLinks />
        {/*  */}
        <div className="annual_plan_table">
          <table>
            {/*  */}
            <thead>
              <tr>
                <th>Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Card Used</th>
                <th>Receipt</th>
                <th>Tax Invoice</th>
              </tr>
            </thead>
            {/*  */}
            <tbody>
              {/*  */}
              <tr>
                <td>Sapling</td>
                <td>04 April 2022</td>
                <td>04 April 2023</td>
                <td>2 of 25</td>
                <td>
                  <img src={template_sample} alt="" />
                </td>
                <td>
                  <img src={template_sample} alt="" />
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Sapling</td>
                <td>04 April 2022</td>
                <td>04 April 2023</td>
                <td>2 of 25</td>
                <td>
                  <img src={template_sample_2} alt="" />
                </td>
                <td>
                  <img src={template_sample_2} alt="" />
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Sapling</td>
                <td>04 April 2022</td>
                <td>04 April 2023</td>
                <td>2 of 25</td>
                <td>
                  <img src={template_sample_3} alt="" />
                </td>
                <td>
                  <img src={template_sample_3} alt="" />
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Sapling</td>
                <td>04 April 2022</td>
                <td>04 April 2023</td>
                <td>2 of 25</td>
                <td>
                  <img src={template_sample} alt="" />
                </td>
                <td>
                  <img src={template_sample} alt="" />
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Sapling</td>
                <td>04 April 2022</td>
                <td>04 April 2023</td>
                <td>2 of 25</td>
                <td>
                  <img src={template_sample_4} alt="" />
                </td>
                <td>
                  <img src={template_sample_4} alt="" />
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Sapling</td>
                <td>04 April 2022</td>
                <td>04 April 2023</td>
                <td>2 of 25</td>
                <td>
                  <img src={template_sample_2} alt="" />
                </td>
                <td>
                  <img src={template_sample_2} alt="" />
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Sapling</td>
                <td>04 April 2022</td>
                <td>04 April 2023</td>
                <td>2 of 25</td>
                <td>
                  <img src={template_sample} alt="" />
                </td>
                <td>
                  <img src={template_sample} alt="" />
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Sapling</td>
                <td>04 April 2022</td>
                <td>04 April 2023</td>
                <td>2 of 25</td>
                <td>
                  <img src={template_sample_4} alt="" />
                </td>
                <td>
                  <img src={template_sample_4} alt="" />
                </td>
              </tr>
              {/*  */}
              <tr>
                <td>Sapling</td>
                <td>04 April 2022</td>
                <td>04 April 2023</td>
                <td>2 of 25</td>
                <td>
                  <img src={template_sample_2} alt="" />
                </td>
                <td>
                  <img src={template_sample_2} alt="" />
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

export default AnnualPlans;

//
//
// The links below the header
export const AnnualPlanNavLinks = () => {
  return (
    <div className="dashboard_content_head">
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
    </div>
  );
};
