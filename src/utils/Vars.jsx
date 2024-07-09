
import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export const ThemeClaOsc = ({ modoOsc }) => {
  let theme = {};
  if (!modoOsc) {
    theme = createTheme({
      palette: {
        primary: {
          main: '#52A5E0',
          bgBody: '#F2F2F2',
          bgContent: '#FFFFFF',
          contentShadow: '0px 0px 10px 0px black',
          titleColor: '#000000DE',
          textColor: '#000000DE',
          bgTableHead: '#E2E7E3',
          colorLightGreen: '#B9C9BB',
          colorOrange: '#F67C2F',
          colorRed: '#C72424',
          colorLightRed: '#D99595',
          colorGreen: '#33A733',
          colorGreenText:'#3DA03D',
          colorBlue: 'blue',
          borderColorInp: '1px solid #E1DEDE',
          borderRow: '1px solid #F2F2F2',
          borderBtn:'1px solid #F2F2F2',
          iconBtn: '#329c32',

          borderModal : '2px solid #000',
          borderContModal: '1px solid #6e6b6b',
          borderContModal2: '1px solid #c0b7b7',

          bgBtnClaOsc:'#00000000',
          bgBtnClaOscHover: '#9cc19e63',
        
        },
        iconButton: '#329c32', // Ejemplo de cambio de color iconButton basado en modoOsc
      },
      typography: {
        fontFamily: 'roboto',
        fontWeightBold: 900,
      },
      // Otras opciones de tema según sea necesario
    });
  } else {
    theme = createTheme({
      palette: {
        primary: {
          main: '#52A5E0',
          bgBody: '#F2F2F2',
          bgContent: '#FFFFFF',
          contentShadow: '0px 0px 10px 0px black',
          titleColor: '#000000DE',
          textColor: '#000000DE',
          colorLightGreen: '#B9C9BB',
          colorOrange: '#F67C2F',
          colorRed: '#C72424',
          colorLightRed: '#D99595',
          colorGreen: '#33A733',
          colorGreenText:'#3DA03D',
          borderColorInp: '1px solid #E1DEDE',
          borderRow: '1px solid #F2F2F2',
          borderBtn:'1px solid #F2F2F2',

          borderModal : '2px solid #000',
          borderContModal: '1px solid #6e6b6b',
          bgBtnClaOsc:'#00000000',

          bgBtnClaOscHover: '#9cc19e63',
        },
        iconButton: '#1A73E8', // Ejemplo de cambio de color iconButton basado en modoOsc
      },
      typography: {
        fontFamily: 'roboto',
        fontWeightBold: 700,
      },
      // Otras opciones de tema según sea necesario
    });
  }



  return theme;
};






