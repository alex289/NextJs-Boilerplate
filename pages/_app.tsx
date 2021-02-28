import type { AppProps } from 'next/app';
import Router from 'next/router';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@theme';

import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Component {...pageProps} />
      </ThemeProvider>
      <style jsx global>{`
        #nprogress {
          pointer-events: none;
        }
        #nprogress .bar {
          background: #8739f9;
          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
        }
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #8739f9, 0 0 5px #8739f9;
          opacity: 1;
          -webkit-transform: rotate(3deg) translate(0, -4px);
          -ms-transform: rotate(3deg) translate(0, -4px);
          transform: rotate(3deg) translate(0, -4px);
        }
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }
        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;
          border: solid 2px transparent;
          border-top-color: #8739f9;
          border-left-color: #8739f9;
          border-radius: 50%;
          -webkit-animation: nprogress-spinner 0.4s linear infinite;
          animation: nprogress-spinner 0.4s linear infinite;
        }
        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }
        .nprogress-custom-parent #nprogress .bar,
        .nprogress-custom-parent #nprogress .spinner {
          position: absolute;
        }
        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        ::-webkit-scrollbar {
          width: 3px;
          height: 2px;
        }
        ::-webkit-scrollbar-button {
          width: 0;
          height: 0;
        }
        ::-webkit-scrollbar-thumb {
          background: #fff;
          border: 0 none #fff;
          border-radius: 50px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #afafaf;
        }
        ::-webkit-scrollbar-thumb:active {
          background: #707070;
        }
        ::-webkit-scrollbar-track {
          background: #666;
          border: 0 none #fff;
          border-radius: 50px;
        }
        ::-webkit-scrollbar-track:hover {
          background: #666;
        }
        ::-webkit-scrollbar-track:active {
          background: #333;
        }
        ::-webkit-scrollbar-corner {
          background: 0 0;
        }
      `}</style>
    </div>
  );
}
