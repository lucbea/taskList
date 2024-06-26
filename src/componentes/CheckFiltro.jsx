import { Recuperar, RecuperarFiltro } from "../layouts/localStorage/LocalStorage";


export const CheckFiltroSelect = ({tareas, setTareas}) => {
  const tareasLS = Recuperar();
  const filtroLS = RecuperarFiltro()
  let tareasFiltradas = [];
  switch (filtroLS) {
    case 'TODAS':
      tareasFiltradas = tareasLS;
      setTareas(tareasFiltradas);
      break;
    case 'COMPLETAS':
      tareasFiltradas = tareasLS.filter(tarea => tarea.realizada);
      setTareas(tareasFiltradas);
      break;
    case 'INCOMPLETAS':
      tareasFiltradas = tareasLS.filter(tarea => !tarea.realizada);
      setTareas(tareasFiltradas);
      break;
    default:
      tareasFiltradas = tareas;
  }
  return (
    <></>
  );
}

