import React, {useState} from 'react';
import {createGlobalStyle} from "styled-components";
import {useRecoilState, useRecoilValue} from "recoil";
import {hourSelector, minuteState} from "./atoms";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500;700&family=Noto+Sans:wght@700&display=swap');

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
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;

    ol, ul {
      list-style: none;
    }

    blockquote, q {
      quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }

    * {
      box-sizing: border-box;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`

function App() {
    const [minutes, setMinutes] = useRecoilState(minuteState)
    const [hours, setHours] = useRecoilState(hourSelector)
    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value)
    }
    const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value)
    }
    return (
        <>
            <GlobalStyle/>
            <div>
                <input type="number" placeholder="Minutes" onChange={onMinutesChange} value={minutes}/>
                <input type="number" placeholder="Hours" onChange={onHoursChange} value={hours}/>
            </div>
        </>
    );
}

export default App;
