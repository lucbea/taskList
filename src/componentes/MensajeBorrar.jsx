import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { BsCheck2Square, BsTrash3 } from 'react-icons/bs';

import {  TbTrashOff, TbTrash } from "react-icons/tb";
import { MdOutlineEditOff } from "react-icons/md";
import { PiSmileyWinkThin, PiSmileyXEyesLight } from "react-icons/pi";
import { Recuperar, Guardar } from '../layouts/localStorage/LocalStorage';
import { formTaskStyles } from './StyleInputTask';
import { stylesModal } from './StylesModal';
import { GetPrioridadText } from './ConversPrioridad';
<<<<<<< HEAD
import { FechaAAAAMMDD, FechaLS_AAAAMMDD, FechaLS_DDMMAAA } from './ConvertirFecha';
import { FechaPasada } from './FechaPasada';

export const MensajeBorrar = ({ tareas, setTareas, tareaABorr, setTareaAborr, setOpen, montarComponenteBorrar, setMontarComponenteBorrar, tiempoVencido, setTiempoVencido }) => {
    let tareasLS = Recuperar();
    
    let alertaTiempo = FechaPasada (tareaABorr)
   
=======
import { ConvertirFechaAD } from './ConvertirFechaAD';

export const MensajeBorrar = ({ tareas, setTareas, tareaABorr, setTareaAborr, setOpen, montarComponenteBorrar, setMontarComponenteBorrar }) => {
    console.log(tareaABorr.tarea, tareaABorr)
    let tareasLS = Recuperar();
    let tiempoVencido = false;

>>>>>>> 914809b6fb72efce2516b7786cadbdb8e44b3f45
    const borrando = () => {
        tareasLS = Recuperar();
        let tareasDepurada = tareasLS.filter(tarea => tarea.id !== tareaABorr.id);
        Guardar("tareas", tareasDepurada);
        setTareas(tareasDepurada);
        setMontarComponenteBorrar(false);
        setOpen(false);
    };

    const cancelando = () => {
        setMontarComponenteBorrar(false);
        setOpen(false);
    };

    const muestraFecha = () => {
<<<<<<< HEAD
         const fechaDA = FechaLS_DDMMAAA (tareaABorr.fechaLim); 
         return fechaDA
=======

         const fechaDA = ConvertirFechaAD (tareaABorr.fechaLim);
         const hoy = new Date();
         const fechaGuard = new Date (tareaABorr.fechaLim)
         hoy.setHours(0, 0, 0, 0);
         console.log("hoy", hoy, fechaGuard)
         hoy > fechaGuard ? tiempoVencido = true : null;
         console.log("tiempo vencido", tiempoVencido)
         return fechaDA
        //  if fechaDA 
>>>>>>> 914809b6fb72efce2516b7786cadbdb8e44b3f45
    }

    return (
        <>
            <div style={{ background: tareaABorr.realizada ? 'linear-gradient(to bottom, #83d985 35%, #f2f2f2 100%) 0% 0% / 100% 90% no-repeat, 0% 0% / 100% 40%' : 'linear-gradient(to bottom, #ea8585 35%, #f2f2f2 100%) 0% 0% / 100% 90% no-repeat, 0% 0% / 100% 40%', ...stylesModal.contMjeBorr }}>
                {tareaABorr.realizada ?
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center', paddingInline:'15px', paddingBottom:'15px' }}>
                        <span style={{ fontSize: '30px', }}>
                            <PiSmileyWinkThin />
                        </span>
                        <p style={{ fontSize: '13px' }} > Tarea completa!!!</p>
                    </div>
                    : <div style={{ display: 'flex', gap: '15px', alignItems: 'center', paddingInline:'15px', paddingBottom:'15px'}}>
                        <span style={{ fontSize: '30px' }}>
                            <PiSmileyXEyesLight />
                        </span><p > Tarea sin realizar</p>
                    </div>
                }
                <h4 style={{ textAlign: 'center', margin:'8px' }}>ELIMINACIÓN DE TAREA</h4>
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
                    <span style={{ fontWeight: '500', fontSize: '14px' }}>Quiere borrar la tarea </span> <span style={{  fontWeight: '700', fontSize: '15px', marginBottom:'5px'}}> `{tareaABorr.tarea}`, </span>
                    <div style= {{display:'flex', marginBlock:'5px'}}>
                    <span style={{ fontWeight: '500', fontSize: '12px' }}>que tiene prioridad </span> <span style={{fontWeight: '700', fontSize: '12px', paddingLeft:'5px' }}> {GetPrioridadText(tareaABorr.prioridad)}, </span>
                    </div>
                    <div style= {{display:'flex', marginBlock:'5px'}}>
<<<<<<< HEAD
                    <span style={{ fontWeight: '500', fontSize: '12px', marginTop:'5px' }}>y fecha de límite</span> 
                    <Box sx={{color: alertaTiempo? 'red': 'blue'}}>
                    <span style={{ fontWeight: '700', fontSize: '12px', paddingLeft:'5px'}}> {muestraFecha()}? </span>
                    </Box>
=======
                    <span style={{ fontWeight: '500', fontSize: '12px' }}>y fecha de límite</span> <span style={{ color: tiempoVencido? 'red': 'orange', fontWeight: '700', fontSize: '12px', paddingLeft:'5px' }}> {muestraFecha()}? </span>
>>>>>>> 914809b6fb72efce2516b7786cadbdb8e44b3f45
                    </div>


                </Box>
            </div >
<<<<<<< HEAD
            <Box sx={{ display: 'flex', justifyContent: 'flex-end',  gap: '10px', marginInline: '25px', marginBottom:'30px', position:'relative', top:'0px', right:'0px'}}>
                
                <IconButton onClick={cancelando} type="submit" edge="end" aria-label="delete" sx={{ ...formTaskStyles.submitBtn,  ...formTaskStyles.submitBtnNormal, position: 'relative' }}>
                   
                    < TbTrashOff sx={formTaskStyles.iconoBtn} />
                </IconButton>
                <IconButton onClick={borrando} type="submit" edge="end" aria-label="cancelar" sx={{ ...formTaskStyles.submitBtn, ...formTaskStyles.submitBtnRed, position: 'relative' }}>
=======
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '15px', gap: '10px', marginInline: '25px', padding:'12px'}}>
                
                <IconButton onClick={cancelando} type="submit" edge="end" aria-label="delete" sx={{ ...formTaskStyles.submitBtn,  ...formTaskStyles.submitBtnNormal }}>
                   
                    < TbTrashOff sx={formTaskStyles.iconoBtn} />
                </IconButton>
                <IconButton onClick={borrando} type="submit" edge="end" aria-label="cancelar" sx={{ ...formTaskStyles.submitBtn, ...formTaskStyles.submitBtnRed }}>
>>>>>>> 914809b6fb72efce2516b7786cadbdb8e44b3f45
                     <TbTrash />
                </IconButton>
            </Box>
        </>
    );
};

