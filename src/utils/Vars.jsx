
import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export const ThemeClaOsc = ({ modo }) => {
  let theme = {};
  if (modo) {
    theme = createTheme({
      palette: {
        primary: {
          main: '#52A5E0',
          bgBody: '#F2F2F2',
          bgContent: '#FFFFFF',
          contentShadow: '0px 0px 10px 0px #a19c9c',
          titleColor: '#000000DE',
          textColor: '#000000DE',
          textShadow: '0.2px 0.2px 0px #504c4c',

          bgTableHead: '#E2E7E3',
          colorLightGreen: '#B9C9BB',
          colorOrange: '#F67C2F',
          colorRed: '#C72424',
          colorLightRed: '#D99595',
          colorGreen: '#33A733',
          colorGreenText: '#3DA03D',
          colorBlue: 'blue',

          inputBorderColor: '2px ridge #E1DEDE',
          inputTextColor: '#000000DE',
          inputBgColor: '#FFF',

          borderRow: '1px solid #F2F2F2',
          borderModal: '2px ridge #000',
          borderContModal: '2px ridge #c0b7b7',
          shadowmodal: ' 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',

          //Tabla diseño
          bgColorTableHead: '#e2e7e3',

          //Btns diseño
          iconBtn: '#329c32',
          bgBtnClaOsc: '#00000000',
          borderBtn: '1px solid #F2F2F2',
          bgBtnClaOscHover: '#d6e0d7',
          borderBtnContNULO: '0px solid grey',
          hoverBtnBgClaro: '#d6e0d7',
          btnBgTablaHover: '#00000012',

          //fondo modal borrado
          bgDegHecha: 'linear-gradient(to bottom, #3ec741 35%, #f2f2f2 100%) 0% 0% / 100% 90% no-repeat, 0% 0% / 100% 40%',
          bgDegSinHacer: 'linear-gradient(to bottom, #ec4e4e 35%, #f2f2f2 100%) 0% 0% / 100% 90% no-repeat, 0% 0% / 100% 40%',
          iconoColorCancelBorrar: '#706d6d',
        },
      },
      typography: {
        fontFamily: 'roboto',
        fontWeightBold: 900,
      },
    });
  } else {
    theme = createTheme({
      palette: {
        primary: {
          main: '#52A5E0',
          bgBody: '#1d2d38',
          bgContent: '#324049',
          contentShadow: '0px 0px 10px 0px black',
          titleColor: '#e8e6e6',
          textColor: '#e8e6e6',
          textShadow: '0.2px 0.2px 0px #eaebef',

          bgTableHead: '#4b575f',
          colorLightGreen: '#5A835F',
          colorOrange: '#F67C2F',
          colorRed: '#ed4d4d',
          colorLightRed: '#B25C5C',
          colorGreen: '#70bb70',
          colorGreenText: '#3DA03D',
          colorBlue: 'blue',

          inputBorderColor: '2px ridge #E1DEDE',
          inputTextColor: '#e8e6e6',
          inputBgColor: '#324049',

          borderRow: '1px solid #F2F2F2',
          borderModal: '2px ridge #000',
          borderContModal: '2px ridge #6e6b6b',
          shadowModal: '0px 11px 15px -7px rgb(0 0 0 / 86%), 0px 24px 38px 3px rgb(0 0 0 / 84%), 0px 9px 46px 8px rgb(0 0 0 / 86%)',

          //Btns diseño
          iconBtn: '#4ab64a',
          bgBtnClaOsc: '#00000000',
          borderBtn: '1px solid #1d2d38',
          bgBtnClaOscHover: '#486273',
          borderBtnContNULO: '0px solid grey',
          hoverBtnBgClaro: '#c2d4c8;',
          btnBgTablaHover: '#a4a8a5',

          //fondo modal borrado
          bgDegHecha: 'linear-gradient(to bottom, #19821b 35%, #1d2d38 100%) 0% 0% / 100% 90% no-repeat, 0% 0% / 100% 40%',
          bgDegSinHacer: 'linear-gradient(to bottom, #d02f2f 35%, #1d2d38 100%) 0% 0% / 100% 90% no-repeat, 0% 0% / 100% 40%',
          iconoColorCancelBorrar: '#8d8989',

        },
      },
      typography: {
        fontFamily: 'roboto',
        fontWeightBold: 900,
      },
    });
  }

  return theme;
};






