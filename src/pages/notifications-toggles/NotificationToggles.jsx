import React, { useEffect, useRef, useState } from "react";
import DashBoardNav from "../../components/dashboard-nav/DashBoardNav";
import { useNavigate } from "react-router-dom";

const NotificationToggles = ({baseUrl}) => {
  const navigate = useNavigate();
  const[cardSentNotificationToggleState, setCardSentNotificationToggleState] = useState()
  const[cardOpenedNotificationToggleState, setCardOpenedNotificationToggleState] = useState()
  const[specialPromotionsToggleState, setSpecialPromotionsToggleState] = useState()
  const[newFeaturesToggleState, setNewFeaturesToggleState] = useState()
  const[systemUpdateToggleState, setSystemUpdateToggleState] = useState()
  const [loader, setLoader] = useState(false)
  //
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      // navigate("/");
    }
    getUserNotificationSettings()
  }, []);

  async function getUserNotificationSettings(){
    const response = await fetch(`${baseUrl}/get-user-notification-settings`,{
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
    const data = await response.json()
    console.log(data)
    if(response.ok){
      setCardSentNotificationToggleState(data.settings.cardSent)
      setCardOpenedNotificationToggleState(data.settings.cardOpened)
      setSpecialPromotionsToggleState(data.settings.specialPromotions)
      setNewFeaturesToggleState(data.settings.newFeatures)
      setSystemUpdateToggleState(data.settings.systemUpdates)
    }
    console.log(data.settings)
  }
  //
  const sidebar = useRef();
  const openSidebar = () => {
    sidebar.current.classList.toggle("open_sidebar");
  };

    const handleToggleCardSettingsNotification = async (cardSetting, value) => {
      console.log(`${baseUrl}/update-user-notification-service/${cardSetting}/${value}`)
      setLoader(true)
      const response = await fetch(`${baseUrl}/update-user-notification-service/${cardSetting}/${value}`,{
        method:"POST",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type":"application/json"
        },
        // body: JSON.stringify({setting:cardSetting, value:cardSentNotificationToggleState})
      })
      const data = await response.json()
      if(response) setLoader(false)
      if(response.ok){
        getUserNotificationSettings()
      }
      console.log(data)
    // cardSentNotificationToggle.current.classList.toggle("toggle_notification");
  };

  //
  return (
    <section className="user_dashbaord_section">
      {loader && 
      <div className="loader-bg1">
        <div className="loader-bg2">
          <i className="fa-solid fa-spinner fa-spin"></i>
        </div>
      </div>
      }
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
        <div className="card_sent_notification">
          <div className="card_notification_context">
            <h4>Card Sent</h4>
            <p>Recieve an email when your card is sent to receipient</p>
          </div>
          {cardSentNotificationToggleState ?
           <div
            className="card_sent_notification_toggle toggle_notification"
            onClick={() => handleToggleCardSettingsNotification("cardSent",!cardSentNotificationToggleState)}
            // ref={cardSentNotificationToggle}
          >
            <div></div>
          </div>:
          <div
          className="card_sent_notification_toggle"
          onClick={() => handleToggleCardSettingsNotification("cardSent",!cardSentNotificationToggleState)}
          // ref={cardSentNotificationToggle}
        >
          <div></div>
        </div>
          }
          
        </div>

        <div className="card_sent_notification">
          <div className="card_notification_context">
            <h4>Card Opened</h4>
            <p>Recieve an email when your card is opened by receipient</p>
          </div>
          {cardOpenedNotificationToggleState ?
           <div
            className="card_sent_notification_toggle toggle_notification"
            onClick={() => handleToggleCardSettingsNotification("cardOpened",!cardOpenedNotificationToggleState)}
            // ref={cardSentNotificationToggle}
            >
            <div></div>
          </div>
          :
          <div
          className="card_sent_notification_toggle"
          onClick={() => handleToggleCardSettingsNotification("cardOpened",!cardOpenedNotificationToggleState)}
          // ref={cardSentNotificationToggle}
        >
          <div></div>
        </div>
          }
          
        </div>

        <div className="card_sent_notification">
          <div className="card_notification_context">
           <h4>Special Promotions</h4>
           <p>Be notified when they are special promotions and discounts</p>
          </div>
          {specialPromotionsToggleState ?
           <div
            className="card_sent_notification_toggle toggle_notification"
            onClick={() => handleToggleCardSettingsNotification("specialPromotions",!specialPromotionsToggleState)}
            // ref={cardSentNotificationToggle}
            >
            <div></div>
          </div>
          :
          <div
          className="card_sent_notification_toggle"
          onClick={() => handleToggleCardSettingsNotification("specialPromotions",!specialPromotionsToggleState)}
          // ref={cardSentNotificationToggle}
        >
          <div></div>
        </div>
          }
          
        </div>

        <div className="card_sent_notification">
          <div className="card_notification_context">
            <h4>New Features</h4>
            <p>Be the first to hear about new features</p>
          </div>
          {newFeaturesToggleState ?
           <div
            className="card_sent_notification_toggle toggle_notification"
            onClick={() => handleToggleCardSettingsNotification("newFeatures",!newFeaturesToggleState)}
            // ref={cardSentNotificationToggle}
            >
            <div></div>
          </div>
          :
          <div
          className="card_sent_notification_toggle"
          onClick={() => handleToggleCardSettingsNotification("newFeatures",!newFeaturesToggleState)}
          // ref={cardSentNotificationToggle}
        >
          <div></div>
        </div>
          }
          
        </div>

        <div className="card_sent_notification">
          <div className="card_notification_context">
            <h4>System Updates</h4>
            <p>Be notified when they are important updates.</p>
          </div>
          {systemUpdateToggleState ?
           <div
            className="card_sent_notification_toggle toggle_notification"
            onClick={() => handleToggleCardSettingsNotification("sysTemUpdates",!systemUpdateToggleState)}
            // ref={cardSentNotificationToggle}
            >
            <div></div>
          </div>
          :
          <div
          className="card_sent_notification_toggle"
          onClick={() => handleToggleCardSettingsNotification("sysTemUpdates",!systemUpdateToggleState)}
          // ref={cardSentNotificationToggle}
        >
          <div></div>
        </div>
          }
          
        </div>

        </div>
      </div>
    </section>
  );
};

export default NotificationToggles;
