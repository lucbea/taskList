import { ModalComp } from "../../componentes/Modal"
{/* <Modal tareas={tareas} setTareas={setTareas} open={open} setOpen={setOpen} tareaAEdit={tareaAEdit} tarAux={tarAux} setTarAux={setTarAux} /> */}
export const VentModalEdit = () => {
    return (
        <ModalComp tareas={tareas} setTareas={setTareas} open={open} setOpen={setOpen} tareaAEdit={tareaAEdit} tarAux={tarAux} setTarAux={setTarAux} />
    )
}

export const VentModalBorrar = () => {
    return(
    <ModalComp tareas={tareas} setTareas={setTareas} openBorr={open} setOpenBorr={setOpen} tareaAEdit={tareaAEdit} tarAux={tarAux} setTarAux={setTarAux} />
      
)
}