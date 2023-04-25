import Logo from '../../assets/img/logo.svg'
import { HeroContainer } from './styles'
import Pattern from '../../assets/img/bg-pattern-1.svg'

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
        <div className="text-container">
          <h1 className="main-title">
            We make your music sound extraordinary.
          </h1>
          <p className="main-parag">
            A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!
          </p>
        </div>
      </div>
      <img src={Pattern} className="img"></img>
    </HeroContainer>
  )
}

export default index