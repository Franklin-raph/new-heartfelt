import { useRef } from "react";
import Occasions from "../../components/occasions/Occasions";

const FAQ = () => {
  //references
  const faq_1 = useRef();
  const faq_2 = useRef();
  const faq_3 = useRef();
  const faq_4 = useRef();
  const faq_5 = useRef();
  // toggle faqs
  const toggle_faq_1 = () => {
    faq_1.current.classList.toggle("show_faq");
  };
  const toggle_faq_2 = () => {
    faq_2.current.classList.toggle("show_faq");
  };
  const toggle_faq_3 = () => {
    faq_3.current.classList.toggle("show_faq");
  };
  const toggle_faq_4 = () => {
    faq_4.current.classList.toggle("show_faq");
  };
  const toggle_faq_5 = () => {
    faq_5.current.classList.toggle("show_faq");
  };
  //
  return (
    <>
      <Occasions />
      <article className="faq_section">
        {/*  */}
        <figure className="faq_first_segment">
          <h2>We're ready to help!</h2>
          <div className="faq_first_segment_row">
            <div className="col faq_send_mail_col">
              <i className="ri-mail-unread-fill"></i>
              <h3>Send email</h3>
              <p>
                Send a mail to our customer service and receive response within
                24h in your mail box.
              </p>
            </div>
            <div className="col faq_chat_us_col">
              <i className="bx bxs-message-square-detail"></i>
              <h3>Chat with us</h3>
              <p>
                Send us a message here to our virtual customer service agent to
                respond to your instantly.
              </p>
            </div>
            <div className="col faq_start_call_col">
              <i className="bx bxs-phone-call"></i>
              <h3>Start a call</h3>
              <p>
                Call us on with our official office hotline, and have our
                customer service assist you.
              </p>
            </div>
          </div>
        </figure>
        {/*  */}
        <figure className="faq_second_segment">
          <div className="faq_header">
            <h4>Useful Information</h4>
            <h2>Frequently Asked Questions</h2>
          </div>
          {/*  */}
          <div className="faq_col_row">
            {/*  */}
            <div
              className="faq faq_col show_faq"
              ref={faq_1}
              onClick={toggle_faq_1}
            >
              <div className="faq_col_header flex-between g-3">
                <h4>How can i share gift cards with multiple people?</h4>
                <i className="ri-add-fill"></i>
              </div>
              <p className="faq_body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, quisquam, et impedit officiis deleniti vel natus
                distinctio, quaerat ipsa tempore dolores voluptatibus ipsam
                maiores.
              </p>
            </div>
            {/*  */}
            <div className="faq faq_col" ref={faq_2} onClick={toggle_faq_2}>
              <div className="faq_col_header flex-between g-3">
                <h4>Can i get refunded after purchase?</h4>
                <i className="ri-add-fill"></i>
              </div>
              <p className="faq_body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, quisquam, et impedit officiis deleniti vel natus
                distinctio.
              </p>
            </div>
            {/*  */}
            <div className="faq faq_col" ref={faq_3} onClick={toggle_faq_3}>
              <div className="faq_col_header flex-between g-3">
                <h4>Do i get a receipt for payment?</h4>
                <i className="ri-add-fill"></i>
              </div>
              <p className="faq_body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis, atque accusantium perferendis excepturi dolor non
                deserunt dicta quae sapiente harum!
              </p>
            </div>
            {/*  */}
            <div className="faq faq_col" ref={faq_4} onClick={toggle_faq_4}>
              <div className="faq_col_header flex-between g-3">
                <h4>Are there any disount for my group card?</h4>
                <i className="ri-add-fill"></i>
              </div>
              <p className="faq_body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, quisquam, et impedit officiis deleniti vel natus
                distinctio.
              </p>
            </div>
            {/*  */}
            <div className="faq faq_col" ref={faq_5} onClick={toggle_faq_5}>
              <div className="faq_col_header flex-between g-3">
                <h4>Can i contribute on someone else group card?</h4>
                <i className="ri-add-fill"></i>
              </div>
              <p className="faq_body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                velit, rerum quasi dignissimos impedit mollitia voluptates
                commodi illo ut iure delectus laborum vero numquam earum
                repellat eligendi, facilis eum quos!
              </p>
            </div>
            {/*  */}
          </div>
        </figure>
      </article>
    </>
  );
};

export default FAQ;
