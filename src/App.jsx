import { Container, CssBaseline } from "@mui/material"
import { IngresoTarea } from './layouts/ingresoTarea/IngresoTarea'
import { ListaTareas } from './layouts/listaTareas/ListaTareas'

function App() {
  return (
    <div>

    {/* <ThemeProvider theme={ Theme }> */}
      <CssBaseline/>
      <Container sx={{ margin:'0px', padding:'0px', marginInline:'auto'}} >
        <h2 style={{textAlign: 'center', marginBottom: '10px'}} >LISTA  DE  TAREAS</h2>
        <IngresoTarea />
        <ListaTareas/>
      </Container>
     {/* </ThemeProvider> */}
     
    </div>
  )
}

export default App
