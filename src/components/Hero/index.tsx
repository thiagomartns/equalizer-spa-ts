import { HeroContainer } from './styles'
import Pattern from '../../assets/img/bg-pattern-1.svg';
import HeroTextContainer from '../HeroTextContainer/index';
import HeroLogoContainer from '../HeroLogoContainer/index';

const index = () => {
  return (
    <HeroContainer>
      <div className="logo-text--container">
        <HeroLogoContainer />
        <HeroTextContainer />
      </div>
      <img src={Pattern} className="img"></img>
    </HeroContainer>
  )
}

export default index