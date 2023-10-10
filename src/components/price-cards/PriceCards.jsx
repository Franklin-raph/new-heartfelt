import React from "react";

const PriceCards = () => {
  return (
    <div>
      <div className="pricing parent-container-padding">
        <div className="section-header">
          <h1>Affordable Pricing</h1>
          <p>Here is what they have to say.</p>
          <div className="flex-center g-2">
            <h5>Pay yearly</h5>
            <span>+$80</span>
            <button className="secondary-button">Pay monthly</button>
          </div>
        </div>
        <div className="body flex-between g-3 price_cards_row">
          <div className="card">
            <div className="card-header">
              <p>Premium</p>
              <div className="price flex-align-end">
                <h1>$19</h1>
                <p>user / month</p>
              </div>
              <p>
                Aenean at lectus posuere enim id nec. Molestie neque, sed fusce
                faucibus.
              </p>
            </div>
            <ul className="body">
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-close-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-close-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
            </ul>
            <div className="card-footer">
              <a href="" className="secondary-button">
                Secondary Action
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="flex-between">
                <p>Team</p>
                <p className="most-popular">🔥 Most popular</p>
              </div>
              <div className="price flex-align-end">
                <h1>$39</h1>
                <p>user / month</p>
              </div>
              <p>
                Aenean at lectus posuere enim id nec. Molestie neque, sed fusce
                faucibus.
              </p>
            </div>
            <ul className="body">
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
            </ul>
            <div className="card-footer">
              <a href="" className="primary-button">
                Secondary Action
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <p>Business</p>
              <div className="price flex-align-end">
                <h1>$19</h1>
                <p>user / month</p>
              </div>
              <p>
                Aenean at lectus posuere enim id nec. Molestie neque, sed fusce
                faucibus.
              </p>
            </div>
            <ul className="body">
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
              <li>
                <i className="ri-checkbox-circle-fill"></i>
                <p>Tortor interdum condimentum nunc molestie quam lectus.</p>
              </li>
            </ul>
            <div className="card-footer">
              <a href="" className="secondary-button">
                Secondary Action
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCards;
