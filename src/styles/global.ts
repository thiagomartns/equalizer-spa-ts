import { createGlobalStyle } from "styled-components";
import Background from '../assets/img/bg-main-desktop.png'

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

      .app-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 5rem;
      }
    }
  }

`