import { CheckFiltroSelect } from "../../componentes/CheckFiltro";
import { Guardar} from '../localStorage/LocalStorage';

export const Filtros = ({ tareas, setTareas, filtro, setFiltro, theme }) => {
    let filtroSeleccionado = "TODAS";
    Guardar("filtro", filtro);
    
    const handleFiltroChange = (e) => {
        filtroSeleccionado = e.target.value;
        Guardar("filtro", filtroSeleccionado);
        setFiltro(filtroSeleccionado);
        CheckFiltroSelect({ tareas, setTareas });
    };

    return (
        <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'90px', marginBottom:'5px'}}>
            <label htmlFor="filtro" style={{ fontSize: '8px', textAlign:'center', color: theme.palette.primary.textColor }}>Filtro por tareas</label>
            <select name="filtro" id="filtro" onChange={handleFiltroChange} value={filtro} style={{fontSize:'8px', padding:'3px', color: theme.palette.primary.textColor, background: theme.palette.primary.inputBgColor}} >
                <option value="TODAS">TODAS</option>
                <option value="COMPLETAS">COMPLETAS</option>
                <option value="INCOMPLETAS">INCOMPLETAS</option>
            </select>
        </div>
    );
};
