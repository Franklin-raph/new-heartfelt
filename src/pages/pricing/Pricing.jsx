import Occasions from "../../components/occasions/Occasions";
import PriceCards from "../../components/price-cards/PriceCards";

const Pricing = () => {
  return (
    <div>
      <Occasions />
      <PriceCards />
      <div className="keyfeatures parent-container-padding">
        <div className="header">
          <h1>Key Features</h1>
          <p>
            We know trying a new service out can be scary. That’s why we offer a
            7 day money-back guarantee if you aren’t happy with our work, no
            questions asked
          </p>
        </div>
        <div className="body">
          <div className="table-header">
            <h4>Website</h4>
            <h4>Basic</h4>
            <h4>CMS</h4>
            <h4>Business</h4>
            <h4>Enterprice</h4>
          </div>
          <div className="table-body">
            <ul>
              <li>Customain Domain</li>
              <li>Pages</li>
              <li>Monthly Visits</li>
              <li>Collection Items</li>
              <li>Form Submissions</li>
              <li>Form File Upload</li>
              <li>CDN</li>
              <li>CDN Bandwidth</li>
              <li>API requests per minute</li>
            </ul>
            <ul>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>100</li>
              <li>25,000</li>
              <li>0</li>
              <li>100/mo</li>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>50 GB</li>
              <li>-</li>
            </ul>
            <ul>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>100</li>
              <li>100,000</li>
              <li>2,000</li>
              <li>1,000/mo</li>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>200 GB</li>
              <li>60 RPM</li>
            </ul>
            <ul>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>100</li>
              <li>500,000</li>
              <li>10,000</li>
              <li>2,000/mo</li>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>400 GB</li>
              <li>120 RPM</li>
            </ul>
            <ul>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>100</li>
              <li>Custom</li>
              <li>10,000</li>
              <li>Unlimited</li>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>
                <i className="ri-check-line"></i>
              </li>
              <li>400 GB+</li>
              <li>Custom</li>
            </ul>
          </div>
          <div className="table-buttons">
            <button></button>
            <button className="secondary-button">Action</button>
            <button className="primary-button">Action</button>
            <button className="secondary-button">Action</button>
            <button className="secondary-button">Action</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
