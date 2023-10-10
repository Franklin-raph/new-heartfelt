import React from 'react'
import Occasions from "../../components/occasions/Occasions"
import rectangleImage1 from "../../assets/images/Rectangle 39499.png"
import rectangleImage2 from "../../assets/images/Rectangle 39500.png"
import rectangleImage3 from "../../assets/images/Rectangle 40223.png"
import image from "../../assets/images/image.png"
import image2 from "../../assets/images/Rectangle 40227.png"
import crown from "../../assets/images/fi-sr-crown.png"
import bookmark from "../../assets/images/fi-sr-bookmark.png"
import rombus from "../../assets/images/fi-sr-rhombus.png"

const About = () => {
  return (
    <div>
      <Occasions />
      <div id="about">
        <div className="bringing-physical parent-container-padding">
          <div className="header">
            <h1>Bringing physical group greetings online</h1>
            <p>Express love to friends and family all over the world</p>
          </div>
          <div className="body flex-between-start">
            <div className='about-upper-text'>
              <div>
                <h3>Ready to use card template</h3>
                <p>Make adjustments to templates and create custom images to suit that special one with no extra cost. 
                  Make adjustments to templates and create custom images to suit that special one with no extra cost.</p>
                  <p>Make adjustments to templates and create custom images to suit that special one with no extra cost.  </p>
              </div>
              <div>
                <h3 className='second-header'>Ready to use card template</h3>
                <p>Make adjustments to templates and create custom images to suit that special one with no extra cost. 
                  Make adjustments to templates and create custom images to suit that special one with no extra cost.</p>
                  <p>Make adjustments to templates and create custom images to suit that special one with no extra cost.  </p>
              </div>
            </div>
            <div className='image-div'>
              {/* <img src={rectangleImage1}/> */}
              <img src={rectangleImage3} className='rectangleImage3'/>
              <img src={rectangleImage2} className='rectangleImage2'/>
            </div>

          </div>
        </div>
        <div className="discover-more-gifts parent-container-padding">
          <h1>Discover more Gifts Cards at your finger tips </h1>
          <div className="body flex-center">
            <div className='card'>
              <img src={image} alt="" />
              <div>
                <h4>Explore trending gift cards</h4>
                <p>Whether you’re celebrating a loved one or family, Heartfelt helps you to share the love and care virtually. Nothing is not a barrier.</p>
                <a href="#">Share a card</a>
              </div>
            </div>
            <div className='card'>
              <img src={image} alt="" />
              <div>
                <h4>Always ready to use templates</h4>
                <p>Tap into the gift bag to share love in the most amazing way. Change preference to suit that special one with no extra cost.</p>
                <a href="#">Explore cards</a>
              </div>
            </div>
          </div>
        </div>

        <div className="two-column flex-between container-width fastest-way">
          <div style={{ position:"relative" }}>
            <h1>
              The fastest way to share gift cards
            </h1>
            <p>
              Whether you’re celebrating a loved one or family, Heartfelt helps you to share the love and care virtually. Nothing is not a barrier. 
            </p>
            <button className="primary-button">Send a card</button>
          </div>
          <img src={image2} alt="" />
        </div>

          <div className="parent-container-padding get-started-steps-section">
            <div className="header">
              <h1>
                How Heartfelt meets you at every special moment
              </h1>
            </div>
            <div className="body grid-3 g-6">
              <div>
                <img src={bookmark} alt="" />
                <h3>Gift Cards</h3>
                <p>Tap into the gift bag to share love in the most amazing way. amazing.</p>
              </div>
              <div>
                <img src={crown} alt="" />
                <h3>Digital Signature</h3>
                <p>Tap into the gift bag to share love in the most amazing way amazing.</p>
              </div>
              <div>
                <img src={rombus} alt="" />
                <h3>Direct sharing</h3>
                <p>Tap into the gift bag to share love in the most amazing way amazing.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About