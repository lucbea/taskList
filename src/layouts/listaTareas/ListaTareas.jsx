import { ListTask } from "../../componentes/ListTask"
import { BoxLay } from "../BoxLay"

export const ListaTareas = ({tareas, setTareas}) => {
    return(
        <BoxLay sx={{ maxHeight: '300px', overflowY: 'auto' }}>
            <ListTask tareas={tareas} setTareas={setTareas}  />
        </BoxLay>
    )
}