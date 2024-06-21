import { Container, CssBaseline } from "@mui/material"

import { IngresoTarea } from './layouts/ingresoTarea/IngresoTarea'
import { ListaTareas } from './layouts/listaTareas/ListaTareas'
import { TuComponente } from "./componentes/InputTask2";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <>

    {/* <ThemeProvider theme={ Theme }> */}
      <CssBaseline/>
      <Container sx={{ margin:'0px', padding:'0px', marginInline:'auto'}} >
        <h2 style={{textAlign: 'center', marginBottom: '10px'}} >LISTA  DE  TAREAS</h2>
        <IngresoTarea />
        <ListaTareas/>
    {/* <TuComponente/> */}
      </Container>
     {/* </ThemeProvider> */}
     
    </>
  )
}

export default App
