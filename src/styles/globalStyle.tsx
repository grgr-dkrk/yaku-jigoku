import { createGlobalStyle } from 'styled-components';
import { BREAKPOINT, SITE_COLOR, LAYOUT_SIZE } from './valiables';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size:62.5%;
  }
  body {
    background: rgba(78,119,158,1);
background: -moz-linear-gradient(top, rgba(78,119,158,1) 0%, rgba(78,119,158,1) 8%, rgba(122,168,197,1) 43%, rgba(122,168,197,1) 51%, rgba(164,203,225,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(78,119,158,1)), color-stop(8%, rgba(78,119,158,1)), color-stop(43%, rgba(122,168,197,1)), color-stop(51%, rgba(122,168,197,1)), color-stop(100%, rgba(164,203,225,1)));
background: -webkit-linear-gradient(top, rgba(78,119,158,1) 0%, rgba(78,119,158,1) 8%, rgba(122,168,197,1) 43%, rgba(122,168,197,1) 51%, rgba(164,203,225,1) 100%);
background: -o-linear-gradient(top, rgba(78,119,158,1) 0%, rgba(78,119,158,1) 8%, rgba(122,168,197,1) 43%, rgba(122,168,197,1) 51%, rgba(164,203,225,1) 100%);
background: -ms-linear-gradient(top, rgba(78,119,158,1) 0%, rgba(78,119,158,1) 8%, rgba(122,168,197,1) 43%, rgba(122,168,197,1) 51%, rgba(164,203,225,1) 100%);
background: linear-gradient(to bottom, rgba(78,119,158,1) 0%, rgba(78,119,158,1) 8%, rgba(122,168,197,1) 43%, rgba(122,168,197,1) 51%, rgba(164,203,225,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4e779e', endColorstr='#a4cbe1', GradientType=0 );
    font-family: 
      'Hiragino Kaku Gothic ProN', 'Hiragino Kaku Gothic Pro', '游ゴシック Medium', YuGothic, YuGothicM, メイリオ, Meiryo,
      sans-serif;
    line-height: 1.4;
    font-size: 1.6rem;
		&.isFixed {
			position: fixed;
			height: 100%;
			overflow: hidden;
		}
  }
  ul,
  ol {
    list-style-type: none;
  }
  font-family: sans-serif;
  html,
  body,
  #app,
  .wrapper {
    height: 100%;
    width: 100%;
  }
	#root {
		min-height: 100%;
		position: relative;
		padding-bottom: ${LAYOUT_SIZE.footer}px;
	}
  a {
    text-decoration: none;
    color: inherit;
		transition: opacity .3s;
		word-break: break-all;
  }
	a, button {
		${BREAKPOINT.MID_MIN} {
			&:hover, &:focus {
			  opacity: .7;
		  }
		}
	}
  p {
    font-size: 1.7rem;
    line-height: 1.5;
    ${BREAKPOINT.MID} {
      font-size: 1.5rem;
    }
  }
  main {
    display: block;
  }
  div,
  h2,
  h3,
  p {
    outline: none;
  }
  button, input, select, textarea {
    background-color: transparent;
		border-radius: 0;
    border: none;
		font-size: 1.6rem;
    cursor: pointer;
    padding: 0;
    appearance: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

	.isPc {
		${BREAKPOINT.MID_MIN} {
			display: none;
		}
	}

	.isSp {
		${BREAKPOINT.MID_MIN} {
			display: none;
		}
	}

	p {
		font-size: 1.7rem;
	}

`;

export default GlobalStyle;
