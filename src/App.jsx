import { useState, useEffect } from 'react';

import { Guardar, InicializarLS, Recuperar } from "./layouts/localStorage/LocalStorage";
import { ThemeClaOsc } from './utils/Vars';
import { IngresoTarea } from './layouts/ingresoTarea/IngresoTarea'
import { ListaTareas } from './layouts/listaTareas/ListaTareas'
import { CheckFiltroSelect } from './componentes/CheckFiltro';
import { AltoAnchoPantalla } from './utils/AltoAnchoPantalla';
import { AppStyles } from './AppStyles';

import { Container, CssBaseline, IconButton, ThemeProvider } from "@mui/material"
import { CiLight } from "react-icons/ci";
import { PiMoonStarsThin } from "react-icons/pi";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("TODAS");
  const [altoVentana, setAltoVentana] = useState(window.innerHeight);
  const [anchoVentana, setAnchoVentana] = useState(window.innerWidth); 
  const [altoTabla, setAltoTabla] = useState(50);
  const [altoLista, setAltoLista] = useState(5);
  const [tamanioContTabla, setTamanioContTabla] = useState(true);
  const modoLSaux = Recuperar("claro");
  const [modo, setModo] = useState(modoLSaux);
  
  //Manejo de pantalla
  const handleResize = () => {
    setTamanioContTabla(false); 
    setTimeout(() => {
      setTamanioContTabla(true);
    }, 100);
  };
 
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //Manejo de tema
  let appStyles;
  let theme={};
  useEffect(() => {
    Guardar("claro", modo)
    theme = ThemeClaOsc({ modo });
    appStyles = AppStyles({ theme });

    document.body.style.backgroundColor = theme.palette.primary.bgBody;
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
      copyrightElement.style.backgroundColor = theme.palette.primary.bgBody;
      copyrightElement.style.color = theme.palette.primary.textColor;
    }
    CheckFiltroSelect ({tareas, setTareas})
  }, [modo]);

 
  const toggleModo = () => {
    setModo(!modo); 
  };

  theme = ThemeClaOsc({ modo });
  appStyles = AppStyles({ theme });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <InicializarLS />
        {tamanioContTabla && (
          <AltoAnchoPantalla altoVentana={altoVentana} setAltoVentana={setAltoVentana} anchoVentana={anchoVentana} setAnchoVentana={setAnchoVentana} altoTabla={altoTabla} setAltoTabla={setAltoTabla} altoLista={altoLista} setAltoLista={setAltoLista} tamanioContTabla={tamanioContTabla} setTamanioContTabla={setTamanioContTabla} />)
        }
        <Container sx={{ margin: '0px', padding: '0px', marginInline: 'auto', position: 'relative' }}>
          <IconButton type="button" edge="end" aria-label="claro u oscuro" onClick={toggleModo} sx={appStyles.btnClaOsc}>{ modo ? < CiLight sx={appStyles.iconoBtnClaOsc} /> : <PiMoonStarsThin sx={appStyles.iconoBtnClaOsc} />}
          </IconButton>
          <h2 style={{ textAlign: 'center', marginBottom: '10px', color: theme.palette.primary.textColor, }}>LISTA  DE  TAREAS</h2>
          <IngresoTarea tareas={tareas} setTareas={setTareas} filtro={filtro} setFiltro={setFiltro} theme={theme} />
          <ListaTareas tareas={tareas} setTareas={setTareas} filtro={filtro} setFiltro={setFiltro} altoTabla={altoTabla} altoLista={altoLista} theme={theme} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
