import React, { useEffect, useRef } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { useNavigate } from "react-router-dom";

const NotificationToggles = () => {
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
        <div className="dashboard_content_header tax_exempt notifications">
          <div>
            <h3>Notification</h3>
            <p>Create settings for your email notifications.</p>
          </div>
          {/* <button className="notifications_page_explore_cards_btn">
            Explore Cards
          </button> */}
        </div>
        {/*  */}
        <div className="notifications_row">
          <CardSentNotification />
          <CardOpenedNotification />
          <SpecialPromotionsNotification />
          <NewFeaturesNotification />
          <SystemUpdatesNotification />
        </div>
      </div>
    </section>
  );
};

export default NotificationToggles;

//
//
//CARD SENT NOTIFICATION
//
//
export const CardSentNotification = () => {
  const cardSentNotificationToggle = useRef();

  //
  const handleToggleCardSentNotification = () => {
    cardSentNotificationToggle.current.classList.toggle("toggle_notification");
  };

  //
  return (
    <div className="card_sent_notification">
      <div className="card_notification_context">
        <h4>Card Sent</h4>
        <p>Recieve an email when your card is sent to receipient</p>
      </div>
      <div
        className="card_sent_notification_toggle toggle_notification"
        onClick={handleToggleCardSentNotification}
        ref={cardSentNotificationToggle}
      >
        <div></div>
      </div>
    </div>
  );
};

//
//
//CARD OPENED NOTIFICATION
//
//
export const CardOpenedNotification = () => {
  const cardSentNotificationToggle = useRef();

  //
  const handleToggleCardSentNotification = () => {
    cardSentNotificationToggle.current.classList.toggle("toggle_notification");
  };

  //
  return (
    <div className="card_sent_notification">
      <div className="card_notification_context">
        <h4>Card Opened</h4>
        <p>Recieve an email when your card is opened by receipient</p>
      </div>
      <div
        className="card_sent_notification_toggle"
        onClick={handleToggleCardSentNotification}
        ref={cardSentNotificationToggle}
      >
        <div></div>
      </div>
    </div>
  );
};

//
//
//SPECIAL PROMOTIONS
//
//
export const SpecialPromotionsNotification = () => {
  const cardSentNotificationToggle = useRef();

  //
  const handleToggleCardSentNotification = () => {
    cardSentNotificationToggle.current.classList.toggle("toggle_notification");
  };

  //
  return (
    <div className="card_sent_notification">
      <div className="card_notification_context">
        <h4>Special Promotions</h4>
        <p>Be notified when they are special promotions and discounts</p>
      </div>
      <div
        className="card_sent_notification_toggle toggle_notification"
        onClick={handleToggleCardSentNotification}
        ref={cardSentNotificationToggle}
      >
        <div></div>
      </div>
    </div>
  );
};

//
//
//NEW FEATURES
//
//
export const NewFeaturesNotification = () => {
  const cardSentNotificationToggle = useRef();

  //
  const handleToggleCardSentNotification = () => {
    cardSentNotificationToggle.current.classList.toggle("toggle_notification");
  };

  //
  return (
    <div className="card_sent_notification">
      <div className="card_notification_context">
        <h4>New Features</h4>
        <p>Be the first to hear about new features</p>
      </div>
      <div
        className="card_sent_notification_toggle toggle_notification"
        onClick={handleToggleCardSentNotification}
        ref={cardSentNotificationToggle}
      >
        <div></div>
      </div>
    </div>
  );
};

//
//
//SYSTEM UPDATES
//
//
export const SystemUpdatesNotification = () => {
  const cardSentNotificationToggle = useRef();

  //
  const handleToggleCardSentNotification = () => {
    cardSentNotificationToggle.current.classList.toggle("toggle_notification");
  };

  //
  return (
    <div className="card_sent_notification">
      <div className="card_notification_context">
        <h4>System Updates</h4>
        <p>Be notified when they are important updates.</p>
      </div>
      <div
        className="card_sent_notification_toggle"
        onClick={handleToggleCardSentNotification}
        ref={cardSentNotificationToggle}
      >
        <div></div>
      </div>
    </div>
  );
};
