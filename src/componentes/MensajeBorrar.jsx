import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import {  TbTrashOff, TbTrash } from "react-icons/tb";
import { PiSmileyWinkThin, PiSmileyXEyesLight } from "react-icons/pi";
import { Recuperar, Guardar } from '../layouts/localStorage/LocalStorage';
import { FormTaskStyles } from './StyleInputTask';
import { stylesModal } from './StylesModal';
import { GetPrioridadText } from './ConversPrioridad';
import { FechaLS_DDMMAAA } from './ConvertirFecha';
import { FechaPasada } from './FechaPasada';

export const MensajeBorrar = ({setTareas, tareaABorr, setOpen,  setMontarComponenteBorrar, theme}) => {
    let tareasLS = Recuperar("tareas");
    let alertaTiempo = FechaPasada (tareaABorr);
    const formTaskStyles = FormTaskStyles({ theme });
   
    const borrando = () => {
        tareasLS = Recuperar("tareas");
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
         const fechaDA = FechaLS_DDMMAAA (tareaABorr.fechaLim); 
         return fechaDA
    }

    return (
        <>
            <div style={{ background: tareaABorr.realizada ? theme.palette.primary.bgDegHecha : theme.palette.primary.bgDegSinHacer, ...stylesModal.contMjeBorr }}>
                {tareaABorr.realizada ?
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center', paddingInline:'15px', paddingBottom:'15px' }}>
                        <span style={{ fontSize: '30px', color: theme.palette.primary.textColor }}>
                            <PiSmileyWinkThin />
                        </span>
                        <p style={{ fontSize: '13px', color: theme.palette.primary.textColor }} > Tarea completa!!!</p>
                    </div>
                    : <div style={{ display: 'flex', gap: '15px', alignItems: 'center', paddingInline:'15px', paddingBottom:'15px'}}>
                        <span style={{ fontSize: '30px', color: theme.palette.primary.textColor }}>
                            <PiSmileyXEyesLight />
                        </span>
                        <p style={{ fontSize: '13px', color: theme.palette.primary.textColor }}> Tarea sin realizar</p>
                    </div>
                }
                <h4 style={{ textAlign: 'center', margin:'8px', color: theme.palette.primary.textColor }}>ELIMINACIÓN DE TAREA</h4>
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
                    <span style={{ fontWeight: '500', fontSize: '14px', color: theme.palette.primary.textColor }}>Quiere borrar la tarea </span> <span style={{  fontWeight: '700', fontSize: '15px', marginBottom:'5px', color: theme.palette.primary.textColor}}> `{tareaABorr.tarea}`, </span>
                    <div style= {{display:'flex', marginBlock:'5px'}}>
                    <span style={{ fontWeight: '500', fontSize: '12px', color: theme.palette.primary.textColor }}>que tiene prioridad </span> <span style={{fontWeight: '700', fontSize: '12px', paddingLeft:'5px', color: theme.palette.primary.textColor }}> {GetPrioridadText(tareaABorr.prioridad)}, </span>
                    </div>
                    <div style= {{display:'flex', marginBlock:'5px'}}>
                    <span style={{ fontWeight: '500', fontSize: '12px', marginTop:'5px', color: theme.palette.primary.textColor }}>y fecha de límite</span> 
                    <Box sx={{color: alertaTiempo? 'red': 'blue'}}>
                    <span style={{ fontWeight: '700', fontSize: '12px', paddingLeft:'5px', color: theme.palette.primary.textColor}}> {muestraFecha()}? </span>
                    </Box>
                    </div>


                </Box>
            </div >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end',  gap: '10px', marginInline: '25px', marginBottom:'30px', position:'relative', top:'0px', right:'0px'}}>
                
                <IconButton onClick={cancelando} type="submit" edge="end" aria-label="delete" sx={{ ...formTaskStyles.submitBtn,  ...formTaskStyles.submitBtnNormal, position: 'relative', color: theme.palette.primary.iconoColorCancelBorrar }}>
                   
                    < TbTrashOff sx={formTaskStyles.iconoBtn} />
                </IconButton>
                <IconButton onClick={borrando} type="submit" edge="end" aria-label="cancelar" sx={{ ...formTaskStyles.submitBtn, ...formTaskStyles.submitBtnRed, position: 'relative' }}>
                     <TbTrash />
                </IconButton>
            </Box>
        </>
    );
};

