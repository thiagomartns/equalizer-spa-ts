import styled from "styled-components";
import Theme from '../../styles/theme'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  .logo-text--container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 450px;

    .logo-container {
      .logo--img {
        margin-top: 1rem;
      }
    }

    .text-container {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
  
      .main-title {
        font: ${Theme.typography.ibmB1};
        color: ${Theme.colors.purple};
        padding-bottom: .85rem;
        letter-spacing: -1;
        width: 1015px;
      }
  
      .main-parag {
        font: ${Theme.typography.ibmR1};
        color: ${Theme.colors.purple};
        width: 825px;
      }
    }
  }

  .img {
    width: 20%;
    position: absolute;
    right: 17px;
    top: -40px;
  }


`