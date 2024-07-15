import { Recuperar } from "../layouts/localStorage/LocalStorage";
import { OrdenFechaPrioridad } from "./OrdenFechaPrioridad";


export const CheckFiltroSelect = ({tareas, setTareas}) => {
  const tareasLS = Recuperar("tareas");
  const filtroLS = Recuperar("filtro")
  let tareasFiltradas = [];
  let tareasFiltradasOrden = [];
  switch (filtroLS) {
    case 'TODAS':
      tareasFiltradas = tareasLS;
      tareasFiltradasOrden = OrdenFechaPrioridad (tareasFiltradas);
      setTareas(tareasFiltradasOrden);
      break;
    case 'COMPLETAS':
      tareasFiltradas = tareasLS.filter(tarea => tarea.realizada);
      tareasFiltradasOrden = OrdenFechaPrioridad (tareasFiltradas);
      setTareas(tareasFiltradasOrden);
      break;
    case 'INCOMPLETAS':
      tareasFiltradas = tareasLS.filter(tarea => !tarea.realizada);
      tareasFiltradasOrden = OrdenFechaPrioridad (tareasFiltradas);
      setTareas(tareasFiltradasOrden);
      break;
    default:
      tareasFiltradas = OrdenFechaPrioridad (tareas);
  }
  return (
    <></>
  );
}

