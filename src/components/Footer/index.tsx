
import { FooterContainer } from "./styles"
import Logo from '../../assets/img/logo.svg'
import SocialMedia from '../FooterSocial/index';

const index = () => {
  return (
    <FooterContainer>
      <div className="rights-content">
        <img src={Logo} alt="" className="logo" />
        <p className="rights">
          All rights reserved © Equalizer 2021 <br /> Have any problems? Contact us via social media or <br />email us at <span>equalizer@example.com</span>
        </p>
      </div>
      <SocialMedia />
    </FooterContainer>
  )
}

export default index