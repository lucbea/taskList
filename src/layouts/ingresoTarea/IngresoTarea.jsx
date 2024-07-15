
import { InputTask } from "../../componentes/InputTask"
import { BoxLay } from "../../componentes/BoxLay"


export const IngresoTarea = ({tareas, setTareas, filtro, setFiltro, altoTabla, theme}) => {
  
    return(
            <BoxLay altoTabla={altoTabla} theme={theme}>
                 <h5 style={{color: theme.palette.primary.textColor}}>INGRESO DE TAREA</h5> 
                <InputTask  setTareas={setTareas}  setFiltro={setFiltro} theme={theme} />
            </BoxLay>
    )
}