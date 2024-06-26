import { ListTask } from "../../componentes/ListTask"
import { BoxLay } from "../BoxLay"

export const ListaTareas = ({tareas, setTareas, filtro, setFiltro}) => {
    return(
        <BoxLay sx={{ maxHeight: '300px', overflowY: 'auto' }}>
            <ListTask tareas = { tareas } setTareas = { setTareas }  filtro= {filtro} setFiltro={setFiltro}  />
        </BoxLay>
    )
}