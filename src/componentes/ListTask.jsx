import { Tabla } from '../layouts/listaTareas/Tabla';

export function ListTask( {tareas, setTareas, filtro, setFiltro}) {
   return (
    <>
     <Tabla  tareas = { tareas } setTareas = { setTareas }  filtro= {filtro} setFiltro={setFiltro}/>
     </>
   )
}
