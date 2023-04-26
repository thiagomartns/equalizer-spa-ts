import styled from "styled-components";
import Theme from '../../styles/theme';
import Media from '../../styles/media';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 10rem;

  ${Media.mobile} {
    padding: 1.75rem;
    margin-bottom: 6rem;
  }

  .logo-text--container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 450px;

      ${Media.tablet} {
        height: 100%;
        gap: 3rem;
      }

      ${Media.mobile} {
        height: 100%;
        gap: 3.75rem;
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
          height: 100%;
          width: 75%;
          gap: 1.5rem;
        }
  
      .main-title {
        font: ${Theme.typography.ibmB1};
        color: ${Theme.colors.purple};
        padding-bottom: .85rem;
        letter-spacing: -1;
        width: 1015px;
        z-index: 2;

        ${Media.tablet} {
          font: ${Theme.typography.ibmB2};
          height: 100%;
          width: 100%;
        }

        ${Media.mobile} {
          font: ${Theme.typography.ibmB3};
          width: 100%;
        }
      }
  
      .main-parag {
        font: ${Theme.typography.ibmR1};
        color: ${Theme.colors.purple};
        width: 825px;

        ${Media.tablet} {
          font: ${Theme.typography.ibmR2};
          height: 100%;
          width: 100%;
          font-size: 1.125rem;
          line-height: 28px;
          width: 80%;
        }

        ${Media.mobile} {
          font: ${Theme.typography.ibmR3};
          width: 100%;
          text-align: justify;
        }
      }
    }
  }

  .img {
    width: 20%;
    position: absolute;
    right: 0;
    top: -40px;

    ${Media.tablet} {
      width: 25%;
      /* right: -5%; */
      top: -25px;
    }

    ${Media.mobile} {
      display: none;
    }
  }


`