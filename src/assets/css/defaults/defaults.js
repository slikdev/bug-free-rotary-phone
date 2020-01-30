import { createGlobalStyle } from 'styled-components'
import vars from '../vars/vars'

export const DefaultStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html {
    font-size: 10px;
    color: ${vars.COLOR_BLACK_2};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${vars.FONT_1};
    font-weight: ${vars.FONT_WEIGHT_REGULAR};
  }

  body {
    font-size: 1.8rem;
  }

  html, body, #app {
    position: relative;
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: unset;
    color: unset;
  }

  select:focus {
    outline: none;
  }

  input::placeholder {
    color: ${vars.COLOR_GRAY_2};
  }

  // mobile input fix
  input, input:before, input:after {
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: initial;
  }

  .plyr--video .plyr__control.plyr__tab-focus,
  .plyr--video .plyr__control:hover,
  .plyr--video .plyr__control[aria-expanded=true] {
    background: ${vars.COLOR_RED_1} !important;
  }

  .plyr--full-ui input[type=range] {
    color: ${vars.COLOR_RED_1} !important;
  }

  .plyr__control--overlaid {
    background: rgba(228, 0, 0, 0.8) !important;
  }

  .swiper-pagination {
    position: relative;
    display: flex;
  }

  .swiper-pagination-bullet {
    width: 13px;
    height: 13px;
    background: rgba(255, 255, 255, 0.4);
    margin-right: 10px;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: ${vars.COLOR_WHITE_1};
  }
`
