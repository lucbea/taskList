import { ListTask } from "../../componentes/ListTask"
import { BoxLay } from "../../componentes/BoxLay"

export const ListaTareas = ({tareas, setTareas, filtro, setFiltro, altoTabla, altoLista, theme}) => {
    return(
        <BoxLay altoTabla={altoTabla} theme={theme} sx={{ overflowY: 'auto' }}>  {/* Agregar sólo aquí si se incorpora en estilos de BoyLay lo aplica en todos los Box */}
            <ListTask tareas = { tareas } setTareas = { setTareas }  filtro= {filtro} setFiltro={setFiltro} altoTabla={altoTabla} altoLista={altoLista} theme={theme} />
        </BoxLay>
    )
}