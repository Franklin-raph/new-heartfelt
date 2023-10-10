import { useEffect, useState } from "react";
import heartFeltLogo from "../../assets/images/heartfelt logo 2.png";
import heartFeltMobileLogo from "../../assets/images/heartfelt logo 3.png";
import { Link, useNavigate } from "react-router-dom";

const LoggedInNav = () => {
  const navigate = useNavigate();
  const [userInfoModal, setUserInfoModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)

  //
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const navOpen = document.querySelector(".ri-menu-line");
    const navClose = document.querySelector(".ri-close-fill");
    const nav = document.querySelector("nav ul");

    function closeNav() {
      nav.style.top = "-100%";
      navOpen.style.display = "block";
      navClose.style.display = "none";
    }

    navOpen.addEventListener("click", () => {
      nav.style.top = "12%";
      navOpen.style.display = "none";
      navClose.style.display = "block";
    });

    navClose.addEventListener("click", () => {
      closeNav();
    });

    document.querySelectorAll("nav ul a").forEach((navlink) => {
      navlink.addEventListener("click", () => {
        closeNav();
      });
    });
  }, []);

  const openUserInfo = () => {
    setUserInfoModal(!userInfoModal);
  };

  const navigateToUserDashboard = () => {
    navigate("/user-dashboard");
    openUserInfo();
  };

  useEffect(() => {
    checkTokenStatus()
        
    const interval = setInterval(() => {
        checkTokenStatus()
      }, 300000);
    
      return () => clearInterval(interval);
  },[])

  const logoutUser = () => {
    localStorage.clear();
    location.href = "/";
  };

async function checkTokenStatus(){
    const response = await fetch(`https://heartfelt-new.vercel.app/verify-token/`,{
      method:"POST",
      headers:{
        Authorization: `Bearer ${user.accessToken}`
      }
    })
    const data = await response.json()
    console.log(response, data)
    if(response.status === 401){
        logoutUser()
    }
}

  return (
    <div className="nav">
      <nav className="parent-container-padding flex-between">
        <div className="flex-between mobile-nav">
          <div className="desktop-mobile-logo">
            <a href="/">
              <img src={heartFeltLogo} alt="" className="desktop-logo" />
            </a>
            <a href="/">
              <img src={heartFeltMobileLogo} alt="" className="mobile-logo" />
            </a>
          </div>
          <div className="toggler">
            <i className="ri-menu-line"></i>
            <i className="ri-close-fill"></i>
          </div>
          <ul className="flex-between">
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/try-demo">Try Demo</Link>
            </li>
            <div className="flex-between mobile-search">
              <div className="search-input flex-between">
                <i className="ri-search-line"></i>
                <input type="text" placeholder="Search" />
              </div>
              <div className="nav_profile_wrapper">
                <i className="bx bxs-user nav_profile_icon"></i>
                <i className="bx bx-caret-down user_nav_chevron mobile"></i>
              </div>
              <button className="primary-button">Send a card</button>
              <div className="nav_bar_mobile_nav_links">
                <li onClick={() => navigate("/upload-card-cover-birthday")}>
                  Birthday
                </li>
                <li onClick={() => navigate("/upload-card-cover-annivasary")}>
                  Annivasary
                </li>
                <li onClick={() => navigate("/upload-card-cover-goodwill")}>
                  Goodwill
                </li>
                <li onClick={() => navigate("/upload-card-cover-festival")}>
                  Festival
                </li>
                <li onClick={() => navigate("/upload-card-cover-sympathy")}>
                  Sympathy
                </li>
                <li onClick={() => navigate("/upload-card-cover-love")}>
                  Love
                </li>
                <li onClick={() => navigate("/upload-card-cover-relationship")}>
                  Relationship
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className="flex-between desktop-search">
          <div className="search-input flex-between">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav_profile_wrapper" onClick={openUserInfo}>
            <div>
              {/* <i className="bx bxs-user nav_profile_icon"></i> */}
              <i className="ri-user-3-line nav_profile_icon"></i>
            </div>
            <i className="ri-arrow-down-s-line user_nav_chevron"></i>
          </div>
          <button className="primary-button">Send a card</button>
        </div>
      </nav>
      {userInfoModal && (
        <div className="user-info-drop-down">
          <div className="user-name-icon flex-start">
            <div className="drop-down-chevron">
              <i className="ri-user-3-line nav_profile_icon"></i>
            </div>
            <div onClick={() => navigateToUserDashboard()}>
              <h5>{user && user.user.email}</h5>
              <p>View Public Profile</p>
            </div>
          </div>
          <ul>
            <li className="flex-between">
              <div className="flex-start g-1">
                <i className="bx bx-star"></i>
                <p onClick={() => navigate("/upload-card")}>Send a card</p>
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </li>
            <li className="flex-between">
              <div className="flex-start g-1">
                <i className="bx bx-memory-card"></i>
                <p onClick={() => navigate("/user-dashboard")}>My cards</p>
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </li>
            <li className="flex-between">
              <div className="flex-start g-1">
                <i className="bx bxs-file-plus"></i>
                <p onClick={() => navigate("/saved-card")}>Saved Covers</p>
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </li>
          </ul>
          <ul>
            <li className="flex-between">
              <div className="flex-start g-1">
                <i className="ri-settings-3-line"></i>
                <p onClick={() => navigate("/account-personal-info")}>
                  Account
                </p>
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </li>
            <li className="flex-between">
              <div className="flex-start g-1">
                <i className="ri-phone-line"></i>
                <p onClick={() => navigate("/faq")}>Support</p>
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </li>
            <li className="flex-between" onClick={logoutUser}>
              <div className="flex-start g-1">
                <i className="ri-logout-box-line"></i>
                <p>Logout</p>
              </div>
              <i className="ri-arrow-right-s-line"></i>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoggedInNav;
