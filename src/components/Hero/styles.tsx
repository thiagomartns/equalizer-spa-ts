import styled from "styled-components";
import Theme from '../../styles/theme';
import Media from '../../styles/media';

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

      ${Media.tablet} {
        height: 332px;
      }

    .logo-container {
      .logo--img {
        margin-top: 1rem;
      }
    }

    .text-container {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

        ${Media.tablet} {
          gap: 0;
        }
  
      .main-title {
        font: ${Theme.typography.ibmB1};
        color: ${Theme.colors.purple};
        padding-bottom: .85rem;
        letter-spacing: -1;
        width: 1015px;

        ${Media.tablet} {
          font: ${Theme.typography.ibmB2};
          width: 70%;
        }
      }
  
      .main-parag {
        font: ${Theme.typography.ibmR1};
        color: ${Theme.colors.purple};
        width: 825px;

        ${Media.tablet} {
          font-size: 1.125rem;
          line-height: 28px;
          width: 80%;
        }
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