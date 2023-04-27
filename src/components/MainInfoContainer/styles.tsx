import styled from "styled-components";
import Theme from '../../styles/theme';
import Media from '../../styles/media';

export const InfoContainer = styled.div`
  padding: 2.75rem 2.75rem 2rem;
    background-color: ${Theme.colors.orange};
    border-radius: 12px;
    color: ${Theme.colors.white};
    width: 446px;
    height: 625px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    bottom: -100px;
    right: 110px;
    z-index: 2;

    ${Media.mobile} {
      width: 100%;
      position: initial;
      gap: 1.25rem;
    }

    .info-h2 {
      font: ${Theme.typography.ibmB3};
      line-height: 52px;
    }

    .info-p {
      font: ${Theme.typography.ibmR1};
      line-height: 34px;
    }

    .info-h1 {
      font: ${Theme.typography.ibmB2};
      line-height: 52px;
      display: flex;
      align-items: center;
      gap: 1rem;

      span {
        font: ${Theme.typography.ibmR1};
        line-height: 32px;
      }
    }
`