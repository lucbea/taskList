// import { useState } from 'react';
// import { useForm } from "react-hook-form";
// import { Box } from '@mui/material';
// import { BsCheck2Square } from "react-icons/bs";
// import { v4 as uuidv4 } from 'uuid';

// import { formTaskStyles, inputNormal, inputError } from './StyleInputTask'



// export const InputTask = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const [prioridad, setPrioridad] = useState(1);
//     const today = new Date();
//     const year = today.getFullYear();
//     let month = today.getMonth() + 1;
//     let day = today.getDate();

//     // Formatear la fecha como "YYYY-MM-DD"
//     if (month < 10) { month = '0' + month; }
//     if (day < 10) { day = '0' + day; }

//     const formattedDate = `${year}-${month}-${day}`;

//     const onSubmit = (data, formState, setPrioridad) => {
//         const id = uuidv4();
//         console.log("id", id)
//         data.id = id;
//         data.completa= false;
//         data.fechaRealiz="";
//         setPrioridad(1); 
//         console.log(data, formState.errors, prioridad);
//     };

//     return (
//         <>
//             <h4>INGRESO  DE  TAREA</h4>
//             <form onSubmit={handleSubmit(onSubmit)}  style={formTaskStyles.formCont}>
//                 <Box sx={formTaskStyles.inputCont}>
//                     <div style={formTaskStyles.tareaInput}>
//                         <label htmlFor="ingresoTarea" style={formTaskStyles.labelSmall}>Ingreso de tarea</label>
//                         <input id="ingresoTarea" type="textarea" name="ingresoTarea" {...register('tarea', {
//                             required: true,
//                             maxLength: 50,
//                             minLength: 3
//                         })}
//                             style={{ ...(errors.tarea ? inputError : inputNormal), ...formTaskStyles.inputStyle }} />
//                         {errors.tarea?.type === 'required' && <p role="alert" style={formTaskStyles.labelControl}>Tarea requerida</p>}
//                         {errors.tarea?.type === 'minLength' && <p style={formTaskStyles.labelControl}>Tarea debe tener más de 3 caracteres</p>}
//                         {errors.tarea?.type === 'maxLength' && <p style={formTaskStyles.labelControl}>Se aceptan 50 caracteres como máximo</p>}
//                         {console.log(errors.tarea)}
//                     </div>
//                     <div style={formTaskStyles.inputFechaPrior}>
//                         <div style={formTaskStyles.inputFecha}>
//                             <label htmlFor="fechaLim" style={formTaskStyles.labelSmall}>Fecha límite</label>
//                             <input type="date" name="fechaLim" defaultValue={formattedDate} min={formattedDate} {...register('fechaLim', {
//                             })} style={formTaskStyles.inputStyle} />
//                         </div>
//                         <div style={formTaskStyles.inputPrior}>
//                             <label htmlFor="prioridad" style={formTaskStyles.labelSmall}>Prioridad</label>
//                             <input id='inpPrioridad' type="range" name="prioridad" defaultValue={-3} min={1} max={5} step={1} {...register('prioridad', {
//                                 required: true,
//                                 min: 1,
//                                 value: prioridad,
//                                 // {{console.log(inpPrioridad.value)}},
//                             })} />
//                             <div style={formTaskStyles.labelMinMax}>
//                                 <span style={formTaskStyles.spanMinMax}>Mínima</span>
//                                 <span style={formTaskStyles.spanMinMax}>Máxima</span>
//                             </div>
//                         </div>
//                     </div>
//                 {/* </div> */}
//                 </Box>
//                 <button type="submit"
//                     style={formTaskStyles.submitBtn}>
//                     <BsCheck2Square
//                         style={formTaskStyles.iconoBtn} />
//                 </button>


//             </form>
//         </>
//     )
// }

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Box } from '@mui/material';
import { BsCheck2Square } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';

import { formTaskStyles, inputNormal, inputError } from './StyleInputTask'

export const InputTask = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [prioridad, setPrioridad] = useState(1);
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    // Formatear la fecha como "YYYY-MM-DD"
    if (month < 10) { month = '0' + month; }
    if (day < 10) { day = '0' + day; }
    const formattedDate = `${year}-${month}-${day}`;

    const onSubmit = (data, formState) => {
        const id = uuidv4();
        console.log("id", id)
        data.id = id;
        data.completa = false;
        data.fechaRealiz = "";
        setPrioridad(1); // Restablecer prioridad a 1 después de enviar el formulario
        console.log(data, formState.errors, prioridad);
        reset(); // Reiniciar el formulario después del envío
    };

    return (
        <>
            <h4>INGRESO DE TAREA</h4>
            <form onSubmit={handleSubmit(onSubmit)} style={formTaskStyles.formCont}>
                <Box sx={formTaskStyles.inputCont}>
                    <div style={formTaskStyles.tareaInput}>
                        <label htmlFor="ingresoTarea" style={formTaskStyles.labelSmall}>Ingreso de tarea</label>
                        <input
                            id="ingresoTarea"
                            type="textarea"
                            name="ingresoTarea"
                            {...register('tarea', {
                                required: true,
                                maxLength: 50,
                                minLength: 3
                            })}
                            style={{ ...(errors.tarea ? inputError : inputNormal), ...formTaskStyles.inputStyle }}
                        />
                        {errors.tarea?.type === 'required' && <p role="alert" style={formTaskStyles.labelControl}>Tarea requerida</p>}
                        {errors.tarea?.type === 'minLength' && <p style={formTaskStyles.labelControl}>Tarea debe tener más de 3 caracteres</p>}
                        {errors.tarea?.type === 'maxLength' && <p style={formTaskStyles.labelControl}>Se aceptan 50 caracteres como máximo</p>}
                    </div>
                    <div style={formTaskStyles.inputFechaPrior}>
                        <div style={formTaskStyles.inputFecha}>
                            <label htmlFor="fechaLim" style={formTaskStyles.labelSmall}>Fecha límite</label>
                            <input
                                type="date"
                                name="fechaLim"
                                defaultValue={formattedDate}
                                min={formattedDate}
                                {...register('fechaLim')}
                                style={formTaskStyles.inputStyle}
                            />
                        </div>
                        <div style={formTaskStyles.inputPrior}>
                            <label htmlFor="prioridad" style={formTaskStyles.labelSmall}>Prioridad</label>
                            <input
                                id='inpPrioridad'
                                type="range"
                                name="prioridad"
                                defaultValue={1} // Establecer valor inicial dentro del rango permitido
                                min={1}
                                max={5}
                                step={1}
                                {...register('prioridad', {
                                    required: true,
                                    min: 1,
                                    value: prioridad,
                                })}
                            />
                            <div style={formTaskStyles.labelMinMax}>
                                <span style={formTaskStyles.spanMinMax}>Mínima</span>
                                <span style={formTaskStyles.spanMinMax}>Máxima</span>
                            </div>
                        </div>
                    </div>
                </Box>
                <button type="submit" style={formTaskStyles.submitBtn}>
                    <BsCheck2Square style={formTaskStyles.iconoBtn} />
                </button>
            </form>
        </>
    )
}
