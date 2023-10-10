import image from "../../assets/images/Frame 1579.png";
import image2 from "../../assets/images/Edit card illustration.png";
import vectorImg from "../../assets/images/Vector.png";
import apple from "../../assets/images/apple.png";
import amazon from "../../assets/images/amazon.png";
import microsoft from "../../assets/images/microsoft.png";
import tiktok from "../../assets/images/tiktok.png";
import punctuation from "../../assets/images/Punctuation 12.png";
import rectangleImage1 from "../../assets/images/Rectangle 39499.png";
import rectangleImage2 from "../../assets/images/Rectangle 39500.png";
import rectangleImage3 from "../../assets/images/Rectangle 40223.png";
import underline from "../../assets/images/Underline 5.png";
import arrow6 from "../../assets/images/Arrow 6.png";
import { Link, useNavigate } from "react-router-dom";
import PriceCards from "../../components/price-cards/PriceCards";
import Occasions from "../../components/occasions/Occasions";
import { useEffect } from "react";

const Home = () => {
  //
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user_info"));
  useEffect(() => {
    if (!user) {
      // navigate("/");
    }
  }, []);
  //
  return (
    <div className="home-page">
      <Occasions />
      <div
        className="two-column flex-between container-width"
        style={{ textAlign: "start" }}
      >
        <div style={{ position: "relative" }}>
          <img src={vectorImg} alt="" className="vectorImage" />
          <h1>Spread love and joy, one card at a time</h1>
          <p>
            Whether it’s a special occasion or just because, our group greeting
            cards are the perfect way to brighten someone’s day.
          </p>
          <button className="primary-button">Send a card</button>
        </div>
        <img src={image} alt="" width={"45%"} />
      </div>

      <div className="company-logo-section flex-end">
        <div>
          <h1>650,000+</h1>
          <p>Customers worldwide</p>
        </div>
        <div className="company-logos grid-6">
          <img src={apple} alt="" />
          <img src={amazon} alt="" />
          <img src={microsoft} alt="" />
          <img src={microsoft} alt="" />
          <img src={microsoft} alt="" />
          <img src={tiktok} alt="" />
        </div>
      </div>

      <div className="ready-to-use-section container-width">
        <div className="two-column flex-between">
          <div>
            <h1>Ready to use card templates</h1>
            <p>
              Choose from our beautiful collection of card templates, edit it to
              fit your taste and add a personal touch at no extra cost.
            </p>
            <Link>
              Explore Cards <i className="ri-arrow-right-up-line"></i>
            </Link>
          </div>
          <img src={image2} alt="" />
        </div>
      </div>

      <div className="spread-love-section container-width">
        <div
          className="two-column flex-between"
          style={{ flexDirection: "row-reverse" }}
        >
          <div>
            <h1>Spread the love with endless messages!</h1>
            <p>
              Share your card with unlimited recipients and gather their
              heartfelt words for an unforgettable experience.
            </p>
            <Link>
              Share a card <i className="ri-arrow-right-up-line"></i>
            </Link>
          </div>
          <img src={image} alt="" />
        </div>
      </div>

      <div className="parent-container-padding get-started-steps-section">
        <div className="header">
          <h1>Here’s how to get started with spreading love on heartfelt.</h1>
          <Link>
            Get started for free <i className="ri-arrow-right-up-line"></i>
          </Link>
        </div>
        <div className="body grid-3 g-6">
          <div>
            <h1>1</h1>
            <h3>Customise card</h3>
            <p>
              Select a card design that suits the occasion and personalize it
              with your unique message.
            </p>
          </div>
          <div>
            <h1>2</h1>
            <h3>Share with others</h3>
            <p>
              Share with others Extend your invitation by sharing the card link
              and inviting others to sign.
            </p>
          </div>
          <div>
            <h1>3</h1>
            <h3>Sit back and relax</h3>
            <p>
              We’ll handle the delivery of your group e-card straight to the
              recipient’s email at the set date and time.
            </p>
          </div>
        </div>
      </div>

      <div className="add-gift-cards parent-container-padding">
        <div className="flex-between two-column">
          <div>
            <h1>Add gift cards to your greeting cards</h1>
            <p>
              Whether you’re celebrating a loved one or family, Heartfelt helps
              you to share the love and care virtually. Nothing is not a
              barrier.
            </p>
            <ul>
              <li className="flex-start g-1">
                <img src={punctuation} alt="" />
                <span>Purchase at Discounts</span>
              </li>
              <li className="flex-start g-1">
                <img src={punctuation} alt="" />
                <span>Share to multiple people</span>
              </li>
              <li className="flex-start g-1">
                <img src={punctuation} alt="" />
                <span>Deliver at any location</span>
              </li>
            </ul>
          </div>
          <img src={image} alt="" />
        </div>
      </div>

      <div className="testimonials parent-container-padding">
        <div className="header">
          <h1>Why people are choosing Heartfelt</h1>
          <p>Here is what they have to say.</p>
        </div>
        <div className="body flex-between g-4">
          <div className="carousel-item">
            <ul className="ratings">
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-half-fill"></i>
            </ul>
            <h3>Why people are choosing Heartfelt</h3>
            <p>
              Here is what they have to I gifted the family package to my
              younger brother, and he could download all mobile applications at
              ease..
            </p>
            <h4>Peter Willams</h4>
          </div>

          <div className="carousel-item">
            <ul className="ratings">
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-half-fill"></i>
            </ul>
            <h3>Why people are choosing Heartfelt</h3>
            <p>
              Here is what they have to I gifted the family package to my
              younger brother, and he could download all mobile applications at
              ease..
            </p>
            <h4>Peter Willams</h4>
          </div>

          <div className="carousel-item">
            <ul className="ratings">
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-s-fill"></i>
              <i className="ri-star-half-fill"></i>
            </ul>
            <h3>Why people are choosing Heartfelt</h3>
            <p>
              Here is what they have to I gifted the family package to my
              younger brother, and he could download all mobile applications at
              ease..
            </p>
            <h4>Peter Willams</h4>
          </div>
        </div>
      </div>

      <div className="how-we-help parent-container-padding">
        <div className="header">
          <h1>How we help the community</h1>
        </div>
        <div className="body">
          <div className="flex-between-start">
            <img src={rectangleImage1} className="rectangleImage1" alt="" />
            <img src={rectangleImage2} className="rectangleImage2" alt="" />
            <div className="top-body">
              <img src={underline} alt="" />
              <h1>Supporting the life of people around the world.</h1>
              <p>
                A portion of every card that is purchased helps save a life
                through our partnership with the non-profit organisation.
              </p>
              <div>
                <h2>30K</h2>
                <p>Partnered and verified NGOs</p>
              </div>
            </div>
          </div>
          <div className="flex-between-start bottom-body">
            <div>
              <img src={arrow6} className="arrow6" alt="" />
              <h2>95%</h2>
              <p>
                of the world’s population has felt the helping hands, and we
                saved lives with every gift card that you share!{" "}
              </p>
            </div>
            <img src={rectangleImage3} className="rectangleImage3" alt="" />
          </div>
        </div>
      </div>

      <PriceCards />
    </div>
  );
};

export default Home;
