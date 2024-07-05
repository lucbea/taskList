import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { FormularioEditar } from './FormularioEditar';
import { MensajeBorrar } from './MensajeBorrar';

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

    const handleClose = () => {
        setMontarComponente(false);
        setOpen(false);
    }

  return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={{ ...style, bgcolor: '#F2F2F2', margin:'0', padding: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', minWidth: '220px', width: '90%', maxWidth: '300px', height: 'auto', border: '1px solid #6e6b6b' }}>
                    {montarComponente && (
                        <FormularioEditar tareas={tareas} setTareas={setTareas} tareaAEdit={tareaAEdit} setTareaAEdit={setTareaAEdit} setOpen={setOpen} montarComponente={montarComponente} setMontarComponente={setMontarComponente} />
                    )}
                    {montarComponenteBorrar && (
                        <MensajeBorrar tareas={tareas} setTareas={setTareas} tareaABorr={tareaABorr} setTareaABorr={setTareaABorr} setOpen={setOpen} montarComponenteBorrar={montarComponenteBorrar} setMontarComponenteBorrar={setMontarComponenteBorrar} />
                    )}
                </Box>
            </Modal>
        </div >
    );
};