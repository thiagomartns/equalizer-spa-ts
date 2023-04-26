// import React from 'react'
import { MainContainer } from "./styles"
import MobileImage from '../../assets/img/illustration-app.png';
// import AppleLogo from '../../assets/img/icon-apple.svg';
// import AndroidLogo from '../../assets/img/icon-android.svg';
import MainPattern from '../../assets/img/bg-pattern-2.svg';

const index = () => {
  return (
    <MainContainer>
      <img className="image-1" src={MobileImage} alt="Mobile Image" />
      <div className="info-container">
        <h2 className="info-h2">Premium EQ</h2>
        <p className="info-p">Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
        <h1 className="info-h1">$4 <span> /month</span></h1>
        <div className="btns-container">
          <button className="apple-btn btn">
            {/* <img src={AppleLogo} alt="" /> */}
            iOS Download
          </button>
          <button className="android-btn btn">
            {/* <img src={AndroidLogo} alt="" /> */}
            Android Download
          </button>
        </div>
      </div>
      <img className="image-2" src={MainPattern} alt="Mobile Image" />
    </MainContainer>
  )
}

export default index