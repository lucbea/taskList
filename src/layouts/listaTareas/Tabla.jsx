import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import { BsTrash3, BsPencilSquare } from "react-icons/bs";
import { TablaTaskStyles } from '../../componentes/StyleListTask';
import { Guardar, Recuperar } from '../localStorage/LocalStorage';
import { VentModal } from '../../componentes/Modal';
import { Filtros } from '../filtros/Filtros';
import { GetPrioridadText } from '../../componentes/ConversPrioridad';
import { FechaLS_DDMMAAA } from '../../componentes/ConvertirFecha';
import { FechaPasada } from '../../componentes/FechaPasada';
import { OrdenFechaPrioridad } from '../../componentes/OrdenFechaPrioridad';


export const Tabla = ({ tareas, setTareas, filtro, setFiltro, altoTabla , altoLista, theme}) => {
    let tareasLS;
    let tareaAEditar;
    let tareaABorrar;
    let nuevasTareasOrd;
    const [open, setOpen] = useState(false);
    const [tareaAEdit, setTareaAEdit] = useState({});
    const [tareaABorr, setTareaABorr] = useState({})
    const [montarComponente, setMontarComponente] = useState(false);
    const [montarComponenteBorrar, setMontarComponenteBorrar] = useState(false);
    const tablaTaskStyles = TablaTaskStyles({theme})
    
    const handleChangeCheck = (id) => {
        let tareasLS = Recuperar("tareas");
        const nuevasTareas = tareasLS.map(tarea => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    realizada: !tarea.realizada
                };
            }
            return tarea;
        });
        nuevasTareasOrd = OrdenFechaPrioridad (nuevasTareas);
        Guardar("tareas", nuevasTareas);
        setTareas(nuevasTareasOrd);

        tareasLS = Recuperar("tareas");
        let filtroLS = Recuperar("filtro");
        let tareasFiltradas = [];
        switch (filtroLS) {
            case 'TODAS':
                tareasFiltradas = tareasLS;
                break;
            case 'COMPLETAS':
                tareasFiltradas = tareasLS.filter(tarea => tarea.realizada);
                break;
            case 'INCOMPLETAS':
                tareasFiltradas = tareasLS.filter(tarea => !tarea.realizada);
                break;
            default:
                tareasFiltradas = tareas;
        }
        let tareasFiltradasOrden = OrdenFechaPrioridad (tareasFiltradas);
        setTareas(tareasFiltradasOrden);
    };

    const editarTarea = (id) => {
        tareasLS = Recuperar("tareas");
        tareaAEditar = tareasLS.find(tarea => tarea.id === id);
        setTareaAEdit(tareaAEditar);
        setOpen(true);
        setMontarComponente(true); 
    };

    const borrarTarea = (id) => {
        tareasLS = Recuperar("tareas");
        tareaABorrar = tareasLS.find(tarea => tarea.id === id);
        setTareaABorr(tareaABorrar);
        setOpen(true);
        setMontarComponenteBorrar(true);
    };

    const elegirMje = (alertaTiempo) => {
        if (alertaTiempo === 1) {
            return ("¡Fecha pasada!")
        }
        if (alertaTiempo === 2) {
            return ("Fecha límite, HOY")
        }
        if (alertaTiempo === 3) {
            return ("Aún hay tiempo")
        }
        if (alertaTiempo === 0) {
            return ("")
        }
    }

    return (
        <>
            <div style={tablaTaskStyles.contTitFilt}>
                <h5 style={{color: theme.palette.primary.textColor}}>LISTA  DE  TAREAS</h5>
                <Filtros tareas={tareas} setTareas={setTareas} filtro={filtro} setFiltro={setFiltro} theme={theme}/>
            </div>
            {tareas.length > 0 ? (
                <TableContainer sx={{...tablaTaskStyles.tableContainer, height:altoLista}}>
                    <Table sx={tablaTaskStyles.table} aria-label="simple table">
                        <TableHead sx={tablaTaskStyles.tableHead}>
                            <TableRow sx={tablaTaskStyles.tableRowHead}>
                                <TableCell sx={tablaTaskStyles.tableCellTarea}>Tarea</TableCell>
                                <TableCell align="center" sx={tablaTaskStyles.tableCellPriorHead}>
                                    <div style={{ fontSize: '14px', width: '85px', display: 'flex', alignItems:'center', color: theme.palette.primary.textColor }}>Fecha Límite</div>
                                    <div style={{ fontSize: '14px', width: '95px', paddingLeft: '10px', display: 'flex', alignItems:'center', color: theme.palette.primary.textColor }}>Prioridad</div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tareas.map((loc) => {
                                const { id, realizada, tarea, prioridad, fechaLim } = loc;
                                const labelId = `checkbox-${id}`;
                                const editId = `edit-${id}`;
                                const deleteId = `delete-${id}`;
                                const alertaTiempo = FechaPasada(loc)
                                const mje = elegirMje(alertaTiempo)
                                return (
                                    <TableRow key={id} sx={tablaTaskStyles.tableRow}>
                                        <TableCell component="th" scope="row" sx={{ ...tablaTaskStyles.tableCell, border: '0px' }}>
                                            <div style={tablaTaskStyles.centrado}>
                                                <Checkbox
                                                    edge="start"
                                                    checked={realizada}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                    onClick={() => handleChangeCheck(id)}
                                                    sx={tablaTaskStyles.checkBox}                                                />
                                                <p id='tareaTabla' style={{ ...tablaTaskStyles.tareaTabla, color: realizada ? theme.palette.primary.colorLightGreen : theme.palette.primary.textColor }}>{tarea}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell align="center" sx={tablaTaskStyles.tableCellPriorRow}>
                                            <Box sx={ tablaTaskStyles.contCellPriorRow }>
                                                <Box sx={{ ...tablaTaskStyles.contFecha, 
                                                color: alertaTiempo === 3 ? theme.palette.primary.colorGreenText : (alertaTiempo === 2 ? theme.palette.primary.colorOrange : (alertaTiempo === 1 ? theme.palette.primary.colorRed : theme.palette.primary.colorLightGreen)) }}>
                                                    {FechaLS_DDMMAAA(fechaLim)} <span style={{ fontSize: '8px', fontWeight: 700, textAlign: 'center', display: mje === "" ? "none": "flex" }}>{mje}</span>
                                                </Box>
                                                <Box sx={tablaTaskStyles.contPrior}>
                                                    <Box sx={{ ...tablaTaskStyles.contPalabraPrior }}>
                                                        <span style={{ ...tablaTaskStyles.palabraPrior, color: realizada ? theme.palette.primary.colorLightGreen : theme.palette.primary.textColor, marginTop: '15px' }}>Prioridad </span>
                                                    </Box>
                                                    <Box sx={{ width: '55px', display: 'flex', justifyContent: 'flex-start' }}>
                                                        <p style={{ color: realizada ? theme.palette.primary.colorLightGreen : theme.palette.primary.textColor, width: '60px', textAlign: 'left' }}>
                                                            {GetPrioridadText(prioridad)}
                                                        </p>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box sx={tablaTaskStyles.contIconosTabla}>
                                                <IconButton onClick={() => editarTarea(id)} edge="end" aria-label="edit" id={editId} sx={{ ...tablaTaskStyles.iconoBtn, color: realizada ? theme.palette.primary.colorLightGreen : theme.palette.primary.textColor }}>
                                                    <BsPencilSquare />
                                                </IconButton>
                                                <IconButton onClick={() => borrarTarea(id)} edge="end" aria-label="delete" id={deleteId} sx={{ ...tablaTaskStyles.iconoBtn, color: realizada ? theme.palette.primary.colorLightRed : theme.palette.primary.colorRed }}>
                                                    <BsTrash3 />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <div style={{ border: theme.palette.primary.borderContModal, borderRadius: '4px', paddingBlock: '20px', paddingInline: '15px' }}>
                    <p style={{ textAlign: 'center', color: theme.palette.primary.colorRed, fontSize: '15px' }}>No hay tareas para mostrar.</p>
                    <p style={{ marginTop: '10px', textAlign: 'center', color:theme.palette.primary.colorGreenText, fontSize: '12px', textShadow: theme.palette.primary.textShadow }}>Modifique el filtro o ingrese una nueva tarea.</p>
                </div>
            )}
            <VentModal tareas={tareas} setTareas={setTareas} open={open} setOpen={setOpen} tareaAEdit={tareaAEdit} setTareaAEdit={setTareaAEdit} tareaABorr={tareaABorr} setTareaABorr={setTareaABorr} montarComponente={montarComponente} setMontarComponente={setMontarComponente} montarComponenteBorrar={montarComponenteBorrar} setMontarComponenteBorrar={setMontarComponenteBorrar} theme={theme} />
        </>
    );
};
