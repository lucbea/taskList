import { Tabla } from '../layouts/listaTareas/Tabla';

export function ListTask( {tareas, setTareas}) {
   return (
     <Tabla tareas={tareas} setTareas={setTareas}/>
   )
}
