import { useState, useEffect } from 'react';
import { Container, CssBaseline } from "@mui/material"

import { InicializarTareasArrayVacio, Recuperar } from "./layouts/localStorage/LocalStorage";

import { IngresoTarea } from './layouts/ingresoTarea/IngresoTarea'
import { ListaTareas } from './layouts/listaTareas/ListaTareas'
// import { local } from './utils/Local';
// import { Recuperar } from '../src/layouts/localStorage/LocalStorage'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareasLS= Recuperar();
    if (tareasLS !== null && tareasLS.length > 0) {
      setTareas(tareasLS);
    } else {
      setTareas([])
    }
  }, []); 

  return (
    <>
      <CssBaseline/>
      <InicializarTareasArrayVacio/>
      <Container sx={{ margin:'0px', padding:'0px', marginInline:'auto'}} >
        <h2 style={{textAlign: 'center', marginBottom: '10px'}} >LISTA  DE  TAREAS</h2>
        <IngresoTarea tareas={tareas} setTareas={setTareas}/>       
        <ListaTareas tareas={tareas} setTareas={setTareas}/>
      </Container>     
    </>
  )
}

export default App
