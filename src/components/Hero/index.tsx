import Logo from '../../assets/img/logo.svg'
import { HeroContainer } from './styles'
import Pattern from '../../assets/img/bg-pattern-1.svg';
import HeroTextContainer from '../HeroTextContainer/index';

const index = () => {
  return (
    <HeroContainer>
      <div className="logo-text--container">
        <div className="logo-container">
          <img 
            src={Logo} 
            alt="Equalizer Logo" 
            className="logo--img" 
          />
        </div>
        <HeroTextContainer />
      </div>
      <img src={Pattern} className="img"></img>
    </HeroContainer>
  )
}

export default index