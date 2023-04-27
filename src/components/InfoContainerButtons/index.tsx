import { InfoButtons } from "./styles";
import AppleLogo from '../../assets/img/icon-apple.svg';
import AndroidLogo from '../../assets/img/icon-android.svg';


const index = () => {
  return (
    <InfoButtons>
      <button className="apple-btn btn">
        <img src={AppleLogo} alt="" />
        iOS Download
      </button>
      <button className="android-btn btn">
        <img src={AndroidLogo} alt="" />
        Android Download
      </button>
    </InfoButtons>
  )
}

export default index