import { RightsContent } from "./styles"
import Logo from '../../assets/img/logo.svg'

const index = () => {
  return (
    <RightsContent>
      <img src={Logo} alt="" className="logo" />
        <p className="rights">
          All rights reserved © Equalizer 2021 <br /> Have any problems? Contact us via social media or <br />email us at <span>equalizer@example.com</span>
        </p>
    </RightsContent>
  )
}

export default index