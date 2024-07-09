import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { FormularioEditar } from './FormularioEditar';
import { MensajeBorrar } from './MensajeBorrar';
<<<<<<< Updated upstream

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '300px',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const VentModal = ({ tareas, setTareas, open, setOpen, tareaAEdit, setTareaAEdit, tareaABorr, setTareaABorr, montarComponente, setMontarComponente, montarComponenteBorrar, setMontarComponenteBorrar }) => {
=======


>>>>>>> Stashed changes

export const VentModal = ({ tareas, setTareas, open, setOpen, tareaAEdit, setTareaAEdit, tareaABorr, setTareaABorr, montarComponente, setMontarComponente, montarComponenteBorrar, setMontarComponenteBorrar, theme }) => {

    const handleClose = () => {
        setMontarComponente(false);
        setOpen(false);
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: '300px',
        bgcolor: 'white',
        // border: '2px solid #000',
        border: theme.palette.primary.borderModal,
        boxShadow: 24,
        p: 4,
    };

  return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={{ ...style, bgcolor: theme.palette.primary.bgBody, margin:'0', padding: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', minWidth: '220px', width: '90%', maxWidth: '300px', height: 'auto', border: theme.palette.primary.borderContModal, }}>
                    {montarComponente && (
                        <FormularioEditar tareas={tareas} setTareas={setTareas} tareaAEdit={tareaAEdit} setTareaAEdit={setTareaAEdit} setOpen={setOpen} montarComponente={montarComponente} setMontarComponente={setMontarComponente} theme={theme} />
                    )}
                    {montarComponenteBorrar && (
                        <MensajeBorrar tareas={tareas} setTareas={setTareas} tareaABorr={tareaABorr} setTareaABorr={setTareaABorr} setOpen={setOpen} montarComponenteBorrar={montarComponenteBorrar} setMontarComponenteBorrar={setMontarComponenteBorrar}/>
                    )}
                </Box>
            </Modal>
        </div >
    );
};