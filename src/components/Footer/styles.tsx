import styled from "styled-components";
import Theme from '../../styles/theme';

export const FooterContainer = styled.div`
  margin-top: 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  padding: 2rem 0 5rem;

  .rights-content {
    display: flex;
    width: 55%;
    justify-content: space-between;

    .logo {
      height: 30%;
    }
    .rights {
      font: ${Theme.typography.ibmR3};
      color: ${Theme.colors.purple};

      span {
        font: 700 1rem/26px 'IBM Ples Sans', sans-serif;
      }
    }
  }

  .social-media {
    display: flex;
    align-self: center;
    gap: 1rem;

    .icon {
      &:hover {
        cursor: pointer;
      }

      &:hover path {
        fill: ${Theme.colors.orange};
      }
    }
  }
`