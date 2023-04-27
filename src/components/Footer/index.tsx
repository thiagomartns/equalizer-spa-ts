
import { FooterContainer } from "./styles"
import SocialMedia from '../FooterSocial/index';
import RightsContainer from '../FooterRights/index';

const index = () => {
  return (
    <FooterContainer>
      <RightsContainer />
      <SocialMedia />
    </FooterContainer>
  )
}

export default index