import styled from "styled-components";
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