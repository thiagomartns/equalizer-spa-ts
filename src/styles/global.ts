import { createGlobalStyle } from "styled-components";
import Background from '../assets/img/bg-main-desktop.png'
import BackgroundTablet from '../assets/img/bg-main-tablet.png';
import BackgroundMobile from '../assets/img/bg-main-mobile.png';
import Media from './media';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;

    .App {
      width: 100vw;
      height: 1832px;
      background-image: url(${Background});
      width: 100vw;
      position: relative;

      ${Media.tablet} {
        background-image: url(${BackgroundTablet});
      }

      ${Media.mobile} {
        background-image: url(${BackgroundMobile});
      }

      .app-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 5rem;

        ${Media.tablet} {
          padding: 1rem 2rem;
        }

        ${Media.mobile} {
          padding: 1.75rem;
        }
      }
    }
  }

`