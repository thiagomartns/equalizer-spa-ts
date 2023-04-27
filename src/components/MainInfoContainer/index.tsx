import { InfoContainer } from "./styles"
import AppleLogo from '../../assets/img/icon-apple.svg';
import AndroidLogo from '../../assets/img/icon-android.svg';

const index = () => {
  return (
    <InfoContainer>
      <h2 className="info-h2">Premium EQ</h2>
      <p className="info-p">Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
      <h1 className="info-h1">$4 <span> /month</span></h1>
      <div className="btns-container">
        <button className="apple-btn btn">
          <img src={AppleLogo} alt="" />
          iOS Download
        </button>
        <button className="android-btn btn">
          <img src={AndroidLogo} alt="" />
          Android Download
        </button>
      </div>
    </InfoContainer>
  )
}

export default index