import React, { useState } from "react";
import Occasions from "../../components/occasions/Occasions";

const ContactUs = ({ baseUrl }) => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    content: "",
    email: "",
    subject: "",
  });
  const [loading, setLoading] = useState(false);
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
      if (res.ok) setLoading(false);
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
        <div className="contact_us_inputs">
          <input
            type="text"
            placeholder="Full name"
            value={contactInfo.name}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Subject"
            value={contactInfo.subject}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, subject: e.target.value })
            }
          />
          <textarea
            rows="6"
            placeholder="Message..."
            value={contactInfo.content}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, content: e.target.value })
            }
          ></textarea>
        </div>
        <button>Send Mail</button>
      </form>
    </div>
  );
};

export default ContactUs;
