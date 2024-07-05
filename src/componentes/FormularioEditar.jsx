
import  { useState } from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { BsCheck2Square } from 'react-icons/bs';
import { MdOutlineEditOff } from "react-icons/md";
import { ArmadoArrayGuardar } from '../layouts/localStorage/LocalStorage';
import { formTaskStyles } from './StyleInputTask';
import { FechaAAAAMMDD, FechaLS_AAAAMMDD } from './ConvertirFecha';
import { OrdenFechaPrioridad } from './OrdenFechaPrioridad';

export const FormularioEditar = ({ tareas, setTareas, tareaAEdit, setTareaAEdit, setOpen, setMontarComponente }) => {
    const [error, setError] = useState(false);
    const [errorFech, setErrorFech] = useState (false);
    const [fechaNuevaParaLS, setFechaNuevaParaLS] = useState (tareaAEdit.fechaLim);
    const [tareaNuevaParaLS, setTareaNuevaParaLS] = useState (tareaAEdit.tarea)
    const [nuevaPrioridadParaLS, setNuevaPrioridadParaLS] = useState(tareaAEdit.prioridad)
    let nuevaPrioridad= tareaAEdit.prioridad;
    let auxTarea = tareaAEdit.tarea;

 
    const handleChangeTarea = (e) => {
        auxTarea = e.target.value;
        if (auxTarea.length < 3 || auxTarea.length > 50) {
            setError(true); 
        } else {
            setError(false); 
            setTareaNuevaParaLS(auxTarea);
        }
    };

    const handleChangeFecha = (e) => {
        let hoy = new Date ();
        hoy = parseInt(FechaAAAAMMDD (hoy));      
        let fechaNueva = e.target.value
        fechaNueva = parseInt(FechaLS_AAAAMMDD(fechaNueva));
        if (fechaNueva < hoy) {
            setErrorFech(true);
        } else { 
            setErrorFech(false)
        } 
        setFechaNuevaParaLS( e.target.value ); 
    }

    const handleChangePrioridad = (e) => {
        nuevaPrioridad = e.target.value;
        nuevaPrioridad= parseInt(nuevaPrioridad);
        setNuevaPrioridadParaLS(nuevaPrioridad);
    }

    const editando = () => {
        const tareaEditada = {
            id: tareaAEdit.id,
            tarea: tareaNuevaParaLS, 
            fechaLim: fechaNuevaParaLS, 
            prioridad: nuevaPrioridadParaLS, 
            realizada: tareaAEdit.realizada 
        };
        if (auxTarea.length > 2 && auxTarea.length < 51) {
            const tareasActualizadas = tareas.map(tarea => tarea.id === tareaAEdit.id ?  tareaEditada : tarea)
             let nuevasTareasOrd = OrdenFechaPrioridad (tareasActualizadas);
            setTareas(nuevasTareasOrd);
            ArmadoArrayGuardar(tareaEditada, "edicion");
            setError(false);
            setTareaAEdit({});
            setMontarComponente(false);
            setOpen(false);
    }
};

    const cancelando = () => {
        setError(false);
        setMontarComponente(false);
        setOpen(false);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '300px' }}>
            <h4 style={{ textAlign: 'center' }}>EDICIÓN DE TAREA</h4>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: '200px !important',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <p style={{ visibility: error ? "visible" : "hidden", color: 'red', fontWeight: '700', fontSize: '8px' }}>La tarea debe tener entre 3 y 50 caracteres</p>
                <textarea
                    id="filled-textarea"
                    defaultValue={tareaAEdit.tarea}
                    onChange={handleChangeTarea}
                    style={{ width: '100%', height: '80px', paddingBlock: '10px', padding:'10px', marginInline:'25px', marginBottom:'13px'  }}
                ></textarea>
                <p style={{ visibility: errorFech ? "visible" : "hidden", color: 'red', fontWeight: '700', fontSize: '8px' }}>Está eligiendo una fecha del pasado</p>
                <input  style= {{ marginBlock: '3px'}} type= "date" defaultValue={tareaAEdit.fechaLim} onChange={handleChangeFecha}>
                </input>
                <div style={{...formTaskStyles.inputPrior, marginBlock:'3px'}}>
                            <label htmlFor="prioridad" style={formTaskStyles.labelSmall}>Prioridad</label>
                            <input
                                id='inpPrioridad'
                                type="range"
                                name="prioridad"
                                defaultValue={tareaAEdit.prioridad} 
                                min={1}
                                max={5}
                                step={1}
                                onChange={handleChangePrioridad}
                            />
                            <div style={formTaskStyles.labelMinMax}>
                                <span style={formTaskStyles.spanMinMax}>Mínima</span>
                                <span style={formTaskStyles.spanMinMax}>Máxima</span>
                            </div>
                        </div>
            </Box>
            <Box sx={{ position:'relative', justifyContent: 'flex-end', marginTop: '15px', height:'50px' }}>
                <IconButton onClick={cancelando} type="submit" edge="end" aria-label="cancelar" sx={{ ...formTaskStyles.submitBtn, ...formTaskStyles.submitBtnRed , position:'absolute', bottom:'2px', right:'50px'}}>
                    <MdOutlineEditOff sx={{...formTaskStyles.iconoBtn}} />
                </IconButton>
                <IconButton onClick={editando} type="submit" edge="end" aria-label="editar" sx={{ ...formTaskStyles.submitBtn, color: '#329c32', position:'absolute', bottom:'2px', right:'2px' }}>
                    <BsCheck2Square sx={{...formTaskStyles.iconoBtn, }} />
                </IconButton>
            </Box>
        </div>
    );
};

