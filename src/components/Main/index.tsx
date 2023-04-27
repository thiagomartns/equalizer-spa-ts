// import React from 'react'
import { MainContainer } from "./styles"
import MobileImage from '../../assets/img/illustration-app.png';
import MainPattern from '../../assets/img/bg-pattern-2.svg';
import MainInfoContainer from '../MainInfoContainer/index';

const index = () => {
  return (
    <MainContainer>
      <img className="image-1" src={MobileImage} alt="Mobile Image" />
      <MainInfoContainer />
      <img className="image-2" src={MainPattern} alt="Mobile Image" />
    </MainContainer>
  )
}

export default index