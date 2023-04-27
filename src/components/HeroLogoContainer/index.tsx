import { LogoContainer } from "./styles"
import Logo from '../../assets/img/logo.svg'


const index = () => {
  return (
    <LogoContainer>
      <img 
        src={Logo} 
        alt="Equalizer Logo" 
        className="logo--img" 
      />
    </LogoContainer>
  )
}

export default index