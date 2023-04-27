import styled from "styled-components";
import Theme from '../../styles/theme';
import Media from '../../styles/media';

export const MainContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${Theme.colors.purple};
  border-radius: 12px;
  z-index: 1;
  position: relative;
  margin-top: 4rem;

  ${Media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 850px;
  }

  .image-1 {
    width: 25%;
    position: absolute;
    left: 110px;
    top: -200px;
    z-index: 2;

    ${Media.mobile} {
      width: 50%;
      position: initial;
    }
  }

  .image-2 {
    position: absolute;
    left: 24.45%;
    z-index: 0;
    top: -15%;
    width: 468px;

    ${Media.mobile} {
      top: 0;
      left: 10%;
      width: 80%;
    }
  }
`
