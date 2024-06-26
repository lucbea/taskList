
import { InputTask } from "../../componentes/InputTask"
import { BoxLay } from "../BoxLay"

export const IngresoTarea = ({tareas, setTareas, filtro, setFiltro}) => {
    return(
            <BoxLay>
                 <h5>INGRESO DE TAREA</h5> 
                <InputTask tareas={tareas} setTareas={setTareas} filtro= {filtro} setFiltro={setFiltro} />
            </BoxLay>
    )
}