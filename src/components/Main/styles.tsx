import styled from "styled-components";
// import MainPattern from '../../assets/img/bg-pattern-2.svg';
import Theme from '../../styles/theme';

export const MainContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${Theme.colors.purple};
  border-radius: 12px;
  z-index: 1;
  position: relative;
  margin-top: 5.5rem;

  .image-1 {
    width: 25%;
    position: absolute;
    left: 110px;
    top: -200px;
    z-index: 2;
  }

  .info-container {
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
      gap: .5rem;
      font-size: 2.5rem;

      span {
        font: ${Theme.typography.ibmR1};
        line-height: 32px;
      }
    }

    .btns-container {
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
        text-align: center;
        border: none;

        &:hover {
          cursor: pointer;
        }

        img {
          height: 20px;
          width: 20px;
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
    }
  }

  .image-2 {
    position: absolute;
    left: 24.45%;
    z-index: 0;
    top: -15%;
    width: 468px;
  }
`
