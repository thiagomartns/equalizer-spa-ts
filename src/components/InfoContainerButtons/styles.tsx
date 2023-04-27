import styled from "styled-components";
import Theme from '../../styles/theme';

export const InfoButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  .btn {
    font: 700 1.125rem/32px 'IBM Plex Sans', sans-serif;
    width: 100%;
    padding: 1rem;
    border-radius: 12px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    &:first-child img {
      height: 20px;
      margin-bottom: 2.5px;
    }
  }
  .apple-btn {
    background-color: ${Theme.colors.purple};
    color: ${Theme.colors.white};

    &:hover {
      background-color: ${Theme.colors.blue};
    }
  }

  .android-btn {
    background-color: ${Theme.colors.white};
    color: ${Theme.colors.purple};

    &:hover {
      background-color: ${Theme.colors.gold};
    }
  }
`