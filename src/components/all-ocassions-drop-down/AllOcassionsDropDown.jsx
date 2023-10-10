import React from "react";
import { useNavigate } from "react-router-dom";

const AllOcassionsDropDown = () => {
  const navigate = useNavigate();

  //
  const allOcassions = [
    "Farewell",
    "Love",
    "Birthday",
    "Sympathy",
    "Thank You",
    "Congrats",
    "Wedding",
    "Retirement",
    "Get Well Soon",
    "Annivasary",
    "Promotion",
    "Graduation",
    "Maternity",
    "New Home",
    "Christmass",
    "Thanksgiving",
    "Condolences",
    "Just Because",
    "Save the Date",
    "Work Annivasary",
    "Halloween",
    "New Year",
    "Admin Day",
    "Boss Day",
    "Welcome",
    "Baby/Birth Announcement",
  ];

  //
  const handleNavigateToPage = (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "Farewell") {
      navigate("/upload-card-cover-farewell");
    } else if (e.target.textContent === "Love") {
      navigate("/upload-card-cover-love");
    } else if (e.target.textContent === "Birthday") {
      navigate("/upload-card-cover-birthday");
    } else if (e.target.textContent === "Sympathy") {
      navigate("/upload-card-cover-sympathy");
    } else if (e.target.textContent === "Thank You") {
      navigate("/upload-card-cover-thank-you");
    } else if (e.target.textContent === "Congrats") {
      navigate("/upload-card-cover-congrats");
    } else if (e.target.textContent === "Wedding") {
      navigate("/upload-card-cover-wedding");
    } else if (e.target.textContent === "Retirement") {
      navigate("/upload-card-cover-retirement");
    } else if (e.target.textContent === "Get Well Soon") {
      navigate("/upload-card-cover-get-well-soon");
    } else if (e.target.textContent === "Annivasary") {
      navigate("/upload-card-cover-annivasary");
    } else if (e.target.textContent === "Promotion") {
      navigate("/upload-card-cover-promotion");
    } else if (e.target.textContent === "Graduation") {
      navigate("/upload-card-cover-graduation");
    } else if (e.target.textContent === "Maternity") {
      navigate("/upload-card-cover-maternity");
    } else if (e.target.textContent === "New Home") {
      navigate("/upload-card-cover-new-home");
    } else if (e.target.textContent === "Christmass") {
      navigate("/upload-card-cover-christmas");
    } else if (e.target.textContent === "Thanksgiving") {
      navigate("/upload-card-cover-thanksgiving");
    } else if (e.target.textContent === "Condolences") {
      navigate("/upload-card-cover-condolences");
    } else if (e.target.textContent === "Just Because") {
      navigate("/upload-card-cover-just-because");
    } else if (e.target.textContent === "Save the Date") {
      navigate("/upload-card-cover-save-the-date");
    } else if (e.target.textContent === "Work Annivasary") {
      navigate("/upload-card-cover-work-anniversary");
    } else if (e.target.textContent === "Halloween") {
      navigate("/upload-card-cover-halloween");
    } else if (e.target.textContent === "New Year") {
      navigate("/upload-card-cover-new-year");
    } else if (e.target.textContent === "Admin Day") {
      navigate("/upload-card-cover-admin-day");
    } else if (e.target.textContent === "Boss Day") {
      navigate("/upload-card-cover-boss-day");
    } else if (e.target.textContent === "Welcome") {
      navigate("/upload-card-cover-welcome-cards");
    } else if (e.target.textContent === "Baby/Birth Announcement") {
      navigate("/upload-card-cover-baby-birth-announcement");
    }
  };

  //
  return (
    <div>
      <ul className="allOcassionsDropDown">
        {allOcassions.map((occasion, i) => (
          <li key={i} onClick={handleNavigateToPage}>
            {occasion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllOcassionsDropDown;
