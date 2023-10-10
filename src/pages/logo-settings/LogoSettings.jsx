import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { NavLink, useNavigate } from "react-router-dom";
import { AnnualPlanNavLinks } from "../annual-plans/AnnualPlans";

const LogoSettings = () => {
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
  const annual_logo_toggle = useRef();
  const toggle_annual_logo = () => {
    annual_logo_toggle.current.classList.toggle("toggle_annual_plan");
  };

  //
  const [logoIsUploaded, setLogoIsUploaded] = useState(false);
  const [theUploadedLogo, setTheUploadedLogo] = useState();

  //
  const handleUploadLogo = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileUrl = e.target.result;
      setTheUploadedLogo(fileUrl);
    };
    reader.readAsDataURL(file);
    setLogoIsUploaded(true);
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
        {logoIsUploaded ? (
          <div className="annual_plan_logo_preview">
            <img src={theUploadedLogo} alt="" />
            <div className="annual_plan_logo_context">
              <p>Show in all cards created</p>
              <div
                className="annual_plan_logo_toggle"
                ref={annual_logo_toggle}
                onClick={toggle_annual_logo}
              >
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="annual_plan_header">
            <p>You have no logo uploaded</p>
            <input
              type="file"
              id="annual_plan_logo_upload"
              onChange={handleUploadLogo}
            />
            <label
              htmlFor="annual_plan_logo_upload"
              className="annual_plan_upload_logo_btn"
            >
              Upload Logo
            </label>
          </div>
        )}

        {/*  */}
      </div>
    </section>
  );
};

export default LogoSettings;
