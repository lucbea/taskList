import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { BsCheck2Square } from 'react-icons/bs';
import { MdOutlineEditOff } from "react-icons/md";
import { ArmadoArrayGuardar } from '../layouts/localStorage/LocalStorage';
import { formTaskStyles } from './StyleInputTask';

export const FormularioEditar = ({ tareas, setTareas, tareaAEdit, setTareaAEdit, setOpen, montarComponente, setMontarComponente }) => {
    const [tareaTextArea, setTareaTextArea] = useState("!");
    console.log(tareaAEdit.tarea, tareaAEdit)

    useEffect(() => {
        // Actualizamos el estado del textArea con la tarea actual
        setTareaTextArea(tareaAEdit.tarea);
    }, []);

    const [error, setError] = useState(false);

const handleTarea = () => {
    if (tareaAEdit.tarea) {
        console.log("haytarea para mostrar:", tareaAEdit.tarea)
        setTareaTextArea(tareaAEdit.tarea)}
}

    const handleChangeTarea = (e) => {
        setTareaTextArea(tareaAEdit.tarea)
        const auxTarea = e.target.value;
        setTareaTextArea(auxTarea); // Actualizar el estado con el nuevo valor del textarea

        // Validar la longitud de la tarea
        if (auxTarea.length < 3 || auxTarea.length > 50) {
            setError(true); // Mostrar error si la longitud es incorrecta
        } else {
            setError(false); // Ocultar error si la longitud es correcta
        }
    };

    const editando = () => {
        const tareaEditada = {
            id: tareaAEdit.id,
            tarea: tareaTextArea, // Usamos la tarea actualizada
            fechaLim: tareaAEdit.fechaLim, // Mantenemos la fecha límite original
            prioridad: tareaAEdit.prioridad, // Mantenemos la prioridad original
            realizada: tareaAEdit.realizada // Mantenemos el estado de realizada original
        };
        setTareaTextArea('');
        if (tareaTextArea.length > 2 && tareaTextArea.length < 50) {
            const tareasActualizadas = tareas.map(tarea => tarea.id === tareaAEdit.id ? tareaEditada : tarea);
            setTareas(tareasActualizadas);

            ArmadoArrayGuardar(tareaEditada, "edicion");
            setTareaTextArea(''); // Limpiamos el textArea después de editar
            setError(false);
            setTareaAEdit({});
            setMontarComponente(false);
            setOpen(false);
        
    }
};

    const cancelando = () => {
        // No se guardan los cambios y se cierra el formulario
        setTareaTextArea(''); // Limpiamos el textArea si se estaba editando
        setError(false);
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
                    style={{ width: '100%', height: '80px', paddingBlock: '10px', padding:'10px', marginInline:'25px',  }}
                ></textarea>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px', gap: '10px', marginInline:'25px' }}>
                <IconButton onClick={cancelando} type="submit" edge="end" aria-label="cancelar" sx={{ ...formTaskStyles.submitBtn, ...formTaskStyles.submitBtnRed }}>
                    <MdOutlineEditOff sx={formTaskStyles.iconoBtn} />
                </IconButton>
                <IconButton onClick={editando} type="submit" edge="end" aria-label="editar" sx={{ ...formTaskStyles.submitBtn, color: '#329c32' }}>
                    <BsCheck2Square sx={formTaskStyles.iconoBtn} />
                </IconButton>
            </Box>
        </div>
    );
};

