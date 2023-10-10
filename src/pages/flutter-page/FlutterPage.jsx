import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FlutterPage = () => {
  const navigate = useNavigate();

  //
  return (
    <div className="flutter_page_card">
      <div className="flutter_card_header">
        <div className="flutter_page_img"></div>
      </div>

      <div className="flutter_page_context">
        <div>
          <span>NGN</span>
          <h4>2,000.00</h4>
        </div>
        <p>shaun@gmailcom</p>
      </div>
      <form className="flutter_page_form">
        <div className="flutter_input_one">
          <p>CARD NUMBER</p>
          <div>
            <input type="number" placeholder="0000 0000 0000 0000" />
            <i className="bx bxs-credit-card"></i>
          </div>
        </div>
        <div className="flutter_input_two">
          <div>
            <p>VALID TILL</p>
            <input type="number" placeholder="MM/YY" />
          </div>
          <div>
            <p>CVV</p>
            <input type="number" placeholder="123" />
          </div>
        </div>
        <div className="flutter_input_three">
          <input type="checkbox" id="remember_flutter_card" />
          <label htmlFor="remember_flutter_card">
            Remember this card next time
          </label>
        </div>
      </form>
      <button
        className="flutter_pay_btn"
        onClick={() => navigate("/payment-successful")}
      >
        Pay NGN2,000
      </button>
      <div className="flutter_other_btns">
        <button className="flutter_pay_with_btn">
          <i className="ri-bank-card-2-fill"></i>Pay with USSD
        </button>
        <button className="flutter_pay_with_btn">
          <i className="ri-bank-fill"></i>Pay with Bank
        </button>
        <button className="flutter_pay_with_btn">
          <i className="ri-bank-fill"></i>Pay with Bank Transfer
        </button>
        <button className="flutter_pay_with_btn">
          <i className="ri-flutter-fill"></i>Pay with Barta
        </button>
      </div>
    </div>
  );
};

export default FlutterPage;
