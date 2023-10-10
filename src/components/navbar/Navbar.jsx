import { useContext, useEffect } from "react";
import heartFeltLogo from "../../assets/images/heartfelt logo 2.png";
import heartFeltMobileLogo from "../../assets/images/heartfelt logo 3.png";
import { Link, useNavigate } from "react-router-dom";
import LoggedInNav from "./LoggedInNav";

const Navbar = () => {
  const navigate = useNavigate();
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

  //
  const user_info = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {user_info ? (
        <LoggedInNav />
      ) : (
        <div className="nav">
          <nav className="parent-container-padding flex-between">
            <div className="flex-between mobile-nav">
              <div className="desktop-mobile-logo">
                <a href="/">
                  <img src={heartFeltLogo} alt="" className="desktop-logo" />
                </a>
                <a href="/">
                  <img
                    src={heartFeltMobileLogo}
                    alt=""
                    className="mobile-logo"
                  />
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
                  <Link to="/sign-in" className="secondary-button">
                    Sign in
                  </Link>
                  <button className="primary-button">Send a card</button>
                  <div className="nav_bar_mobile_nav_links">
                    <li onClick={() => navigate("/upload-card-cover-birthday")}>
                      Birthday
                    </li>
                    <li
                      onClick={() => navigate("/upload-card-cover-annivasary")}
                    >
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
                    <li
                      onClick={() =>
                        navigate("/upload-card-cover-relationship")
                      }
                    >
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
              <button className="secondary-button">
                <Link to="/sign-in">Sign in</Link>
              </button>
              <button className="primary-button">Send a card</button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
