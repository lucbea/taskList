import { Tabla } from '../layouts/listaTareas/Tabla';

export function ListTask( {tareas, setTareas, filtro, setFiltro, altoTabla, altoLista, theme}) {
   return (
    <>
     <Tabla  tareas = { tareas } setTareas = { setTareas }  filtro= {filtro} setFiltro={setFiltro} altoTabla={altoTabla} altoLista={altoLista}  theme={theme}/>
     </>
   )
}
