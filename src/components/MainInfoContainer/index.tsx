import { InfoContainer } from "./styles"
import InfoButtonsContainer from '../InfoContainerButtons';

const index = () => {
  return (
    <InfoContainer>
      <h2 className="info-h2">Premium EQ</h2>
      <p className="info-p">Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
      <h1 className="info-h1">$4 <span> /month</span></h1>
      <InfoButtonsContainer />
    </InfoContainer>
  )
}

export default index