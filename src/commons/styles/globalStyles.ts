import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "globalFont";
  }
  ol,
  ul {
    list-style: none;
    padding-left: 0;
  }
  // prettier-ignore
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    color: #000;
  }
  html {
    font-size: 62.5%; // root폰트 기준 설정: 10px
    --antd-wave-shadow-color: #000 !important;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    color: #000; // default color
  }
  ol,
  ul,
  li {
    list-style: none;
    padding-left: 0px;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
  img {
    vertical-align: top;
  }
  a {
    color: #000 !important;
    font-family: "globalFont" !important;
  }
  @font-face {
    font-family: "globalFont";
    src: url("fonts/PretendardVariable.ttf") format("ttf");
  }

  ::selection {
    background: #000 !important;
  }

  .MuiCalendarPicker-root {
    overflow: visible !important;
  }

  .MuiPickersCalendarHeader-root {
    width: 100% !important;
    height: 35px;
    margin: 0 !important;
    position: relative !important;
    display: flex !important;
    justify-content: center !important;
    overflow: visible !important;
  }

  .MuiButtonBase-root {
    font-size: 1.9rem !important;
    color: #5e5e5e !important;
  }

  .MuiPickersCalendarHeader-labelContainer {
    background-color: #ececec !important;
    padding: 4px 10px;
    border-radius: 4px;
    margin: 0 !important;
    cursor: default !important;
  }

  .MuiPickersCalendarHeader-label {
    font-size: 18px;
    font-weight: 600;
    color: #4e4e4e;
  }

  .MuiPickersArrowSwitcher-button {
    background-color: transparent !important;
    position: absolute !important;
    left: 0 !important;
    top: -5px !important;

    svg {
      width: 27px !important;
      height: 27px !important;
      color: #000 !important;
    }

    &:nth-of-type(1) {
      left: 30px !important;
    }

    &:nth-of-type(2) {
      left: 244px !important;
    }
  }

  .MuiDayPicker-header {
    margin-top: 32px !important;
  }

  .MuiTypography-root {
    font-size: 1.9rem !important;
    color: #5e5e5e !important;
  }

  .MuiPickersDay-today {
    background: #3ebd5d !important;
    border-radius: 4px !important;
    color: #fff !important;
    border-color: transparent !important;
  }

  .MuiPickersArrowSwitcher-button {
    display: none !important;
  }
`;
