import { CheckFiltroSelect } from "../../componentes/CheckFiltro";
import { Guardar} from '../localStorage/LocalStorage';

export const Filtros = ({ tareas, setTareas, filtro, setFiltro }) => {
    let filtroSeleccionado = "TODAS";
    Guardar("filtro", filtro);
    
    const handleFiltroChange = (e) => {
        filtroSeleccionado = e.target.value;
        Guardar("filtro", filtroSeleccionado);
        setFiltro(filtroSeleccionado);
        CheckFiltroSelect({ tareas, setTareas });
    };

    return (
        <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'90px', marginBottom:'15px'}}>
            <label htmlFor="filtro" style={{ fontSize: '8px', textAlign:'center' }}>Filtro por tareas</label>
            <select name="filtro" id="filtro" onChange={handleFiltroChange} value={filtro} style={{fontSize:'8px', padding:'3px'}} >
                <option value="TODAS">TODAS</option>
                <option value="COMPLETAS">COMPLETAS</option>
                <option value="INCOMPLETAS">INCOMPLETAS</option>
            </select>
        </div>
    );
};
