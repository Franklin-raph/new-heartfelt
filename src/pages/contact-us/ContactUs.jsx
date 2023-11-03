import React, { useState } from "react";
import Occasions from "../../components/occasions/Occasions";
import SuccessAlert from "../../components/alert/SuccessAlert";

const ContactUs = ({ baseUrl }) => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    content: "",
    email: "",
    subject: "",
  });

  const goBack = () => {};
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { name, email, content, subject } = contactInfo;
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !subject || !content) return setLoading(false);
    try {
      const res = await fetch(`${baseUrl}/submit-contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactInfo),
      });
      const data = await res.json();
      console.log(data);
      if (res) setLoading(false);
      if (!res.ok) setLoading(false);
      if (res.ok) {
        setLoading(false);
        setIsSuccess(true);
        setContactInfo({ name: "", content: "", email: "", subject: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  //
  return (
    <div>
      <Occasions />
      <form className="contact_us_form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <p>
          Need to get in touch with us? <br />
          Please fill out the form with the required details.
        </p>
        <div className="contact_us_inputs_holder">
          <div className="contact_us_inputs">
            <div className="contact_us_input">
              <label htmlFor="fullname">
                Full name <span>*</span>
              </label>
              <input
                type="text"
                id="fullname"
                value={name}
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, name: e.target.value })
                }
              />
            </div>
            <div className="contact_us_input">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, email: e.target.value })
                }
              />
            </div>
            <div className="contact_us_input">
              <label htmlFor="subject">
                Subject <span>*</span>
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, subject: e.target.value })
                }
              />
            </div>
            <div className="contact_us_input">
              <label htmlFor="content">
                Message <span>*</span>
              </label>
              <textarea
                id="content"
                rows="4"
                value={content}
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, content: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <button>Submit</button>
          {loading && (
            <div className="contact_us_loading_cont">
              <i className="fa-light fa-gear fa-spin contact_us_form_loading_icon"></i>
            </div>
          )}
          {isSuccess && (
            <SuccessAlert>
              <p>Message has been sent successfully</p>
              <i
                className="fa-light fa-xmark contact_us_form_close_modal"
                onClick={() => setIsSuccess(false)}
              ></i>
            </SuccessAlert>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
