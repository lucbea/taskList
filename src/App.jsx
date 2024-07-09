
import { useState, useEffect } from 'react';

import { InicializarLS, Recuperar } from "./layouts/localStorage/LocalStorage";
import { ThemeClaOsc } from './utils/Vars';
import { IngresoTarea } from './layouts/ingresoTarea/IngresoTarea'
import { ListaTareas } from './layouts/listaTareas/ListaTareas'
import { OrdenFechaPrioridad } from './componentes/OrdenFechaPrioridad';
import { AltoAnchoPantalla } from './utils/AltoAnchoPantalla';
import { AppStyles } from './AppStyles';



import { Container, CssBaseline, IconButton, ThemeProvider } from "@mui/material"
import { CiLight, CiDark } from "react-icons/ci";
import { PiMoonStarsThin } from "react-icons/pi";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("TODAS");
  const [altoVentana, setAltoVentana] = useState(window.innerHeight);
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth); // Estado para almacenar el tamaño de la ventana
  const [altoTabla, setAltoTabla] = useState(50);
  const [altoLista, setAltoLista] = useState(5);
  const [tamanioContTabla, setTamanioContTabla] = useState(true);
  const [modoOsc, setModoOsc] = useState(false);

  window.addEventListener('resize', () => {
    setTamanioContTabla(false);
    setTamanioContTabla(true);
  });

  useEffect(() => {
    const tareasLS = Recuperar();
    if (tareasLS !== null && tareasLS.length > 0) {
      let tareasLSOrdenadas = OrdenFechaPrioridad(tareasLS);
      setTareas(tareasLSOrdenadas);
    } else {
      setTareas([]);
    }
  }, []);

  const theme = ThemeClaOsc({ modoOsc });
  let appStyles = AppStyles({ theme });


  const toggleModo = () => {
    setModoOsc(!modoOsc)
    appStyles = AppStyles({ theme });
  }



  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <InicializarLS />
        {tamanioContTabla && (
          <AltoAnchoPantalla altoVentana={altoVentana} setAltoVentana={setAltoVentana} anchoVentana={anchoVentana} setAnchoVentana={setAnchoVentana} altoTabla={altoTabla} setAltoTabla={setAltoTabla} altoLista={altoLista} setAltoLista={setAltoLista} tamanioContTabla={tamanioContTabla} setTamanioContTabla={setTamanioContTabla} />)
        }
        <Container sx={{ margin: '0px', padding: '0px', marginInline: 'auto', position: 'relative' }}>
          {/* <IconButton type="button" edge="end" aria-label="claro u oscuro" onClick={toggleModo} sx={{...appStyles.btnClaOsc, display:'none'}}>{!modoOsc ? < CiLight sx={appStyles.iconoBtnClaOsc} /> : <PiMoonStarsThin sx={appStyles.iconoBtnClaOsc} />}
          </IconButton> */}
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>LISTA  DE  TAREAS</h2>
          <IngresoTarea tareas={tareas} setTareas={setTareas} filtro={filtro} setFiltro={setFiltro} theme={theme} />
          <ListaTareas tareas={tareas} setTareas={setTareas} filtro={filtro} setFiltro={setFiltro} altoTabla={altoTabla} altoLista={altoLista} theme={theme} />
        </Container>
        {/* </Theme> */}
      </ThemeProvider>
    </>
  );
}

export default App;
