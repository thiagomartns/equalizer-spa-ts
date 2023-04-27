import styled from "styled-components";
import Media from "../../styles/media";
import Theme from '../../styles/theme'

export const RightsContent = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-between;

  ${Media.tablet} {
    flex-direction: column;
    gap: 1.5rem;
  }

  ${Media.mobile} {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }

  .logo {
    height: 30%;

    ${Media.tablet} {
      width: 30%;
    }

    ${Media.mobile} {
      width: 50%;
    }
  }

  .rights {
    font: ${Theme.typography.ibmR3};
    color: ${Theme.colors.purple};

    ${Media.mobile} {
      width: 100%;
    }

    span {
      font: 700 1rem/26px 'IBM Ples Sans', sans-serif;
    }
  }
`