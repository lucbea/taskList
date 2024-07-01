import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { BsCheck2Square } from 'react-icons/bs';
import { MdOutlineEditOff } from "react-icons/md";
import { ArmadoArrayGuardar } from '../layouts/localStorage/LocalStorage';
import { formTaskStyles } from './StyleInputTask';

export const FormularioEditar = ({ tareas, setTareas, tareaAEdit, setTareaAEdit, setOpen, montarComponente, setMontarComponente }) => {
    const [tareaTextArea, setTareaTextArea] = useState("");

    // useEffect(() => {
    //     // Actualizamos el estado del textArea con la tarea actual
    //     setTareaTextArea(tareaAEdit.tarea);
    // }, []);

    const [error, setError] = useState(false);



    const handleChangeTarea = (e) => {
        setTareaTextArea(tareaAEdit.tarea)
        const auxTarea = e.target.value;
        setTareaTextArea(auxTarea); 
        if (auxTarea.length < 3 || auxTarea.length > 50) {
            setError(true); 
        } else {
            setError(false); 
        }
    };

    const editando = () => {
        const tareaEditada = {
            id: tareaAEdit.id,
            tarea: tareaTextArea, 
            fechaLim: tareaAEdit.fechaLim, 
            prioridad: tareaAEdit.prioridad, 
            realizada: tareaAEdit.realizada 
        };
        // setTareaTextArea('');
        if (tareaTextArea.length > 2 && tareaTextArea.length < 51) {
            const tareasActualizadas = tareas.map(tarea => tarea.id === tareaAEdit.id ? tareaEditada : tarea);
            setTareas(tareasActualizadas);

            ArmadoArrayGuardar(tareaEditada, "edicion");
            // setTareaTextArea(''); 
            setError(false);
            setTareaAEdit({});
            setMontarComponente(false);
            setOpen(false);
    }
};

    const cancelando = () => {
        // setTareaTextArea(''); 
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
                    style={{ width: '100%', height: '80px', paddingBlock: '10px', padding:'10px', marginInline:'25px',  }}
                ></textarea>
                <input type= "date" defaultValue={tareaAEdit.fechaLim}>
                </input>


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

