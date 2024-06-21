
import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BsTrash3, BsPencilSquare } from "react-icons/bs";
import { local } from '../utils/Local';
import { tablaTaskStyles } from './StyleListTask'

export function ListTask() {
    const [cambioCheck, setCambioCheck] = useState(local);

    const handleChange = (id) => (e) => {
        setCambioCheck(prevLocal =>
            prevLocal.map(loc =>
                loc.id === id
                    ? { ...loc, realizada: e.target.checked }
                    : loc
            )
        );
    };

    useEffect(() => {
        console.log('cambioCheck actualizado:', cambioCheck);
    }, [cambioCheck]);


    // Función para obtener el texto de prioridad según el número
    const getPrioridadText = (prioridad) => {
        switch (prioridad) {
            case 1:
                return 'Muy baja';
            case 2:
                return 'Baja';
            case 3:
                return 'Media';
            case 4:
                return 'Alta';
            case 5:
                return 'Muy alta';
            default:
                return ''; // Manejo por si hay algún valor no esperado
        }
    };


    return (
        <>
            <h4 style={tablaTaskStyles.titTabla}>LISTA  DE  TAREAS</h4>
            <TableContainer sx={tablaTaskStyles.tableContainer}>
                <Table sx={tablaTaskStyles.table} aria-label="simple table">
                    <TableHead sx={tablaTaskStyles.tableHead}>
                        <TableRow sx={tablaTaskStyles.tableRowHead}>
                            <TableCell sx={tablaTaskStyles.tableCellTarea}>Tarea</TableCell>
                            <TableCell align="center" sx={tablaTaskStyles.tableCellPriorHead}>Prioridad</TableCell>

                            {/* <TableCell align="center" sx={ tablaTaskStyles.tableCellAction }>Acciones</TableCell> */}
                            {/* 
                            <TableCell colSpan={3} sx={{ padding: 0, backgroundColor:'red', height:'5px' }} /> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cambioCheck.map((loc) => {
                            const { id, realizada, tarea, prioridad } = loc; // Destructura los campos del objeto

                            const labelId = `checkbox-${id}`;
                            const editId = `edit-${id}`;
                            const deleteId = `delete-${id}`;

                            return (
                                
                                    <TableRow key={id}
                                        sx={tablaTaskStyles.tableRow}>
                                        <TableCell component="th" scope="row"
                                            sx={{ ...tablaTaskStyles.tableCell, border: '0px' }}>
                                            <div style={tablaTaskStyles.centrado}>
                                                <Checkbox
                                                    edge="start"
                                                    checked={realizada}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                    onClick={handleChange(id)}
                                                    sx={{ ...tablaTaskStyles.checkBox, padding: '0px' }}
                                                />

                                                <p id='tareaTabla' style={{ ...tablaTaskStyles.tareaTabla, color: realizada ? '#b9c9bb' : 'black', paddingLeft: '30px' }}>{tarea}</p>
                                            </div>
                                        </TableCell>
                                        <>
                                            <TableCell align="center"
                                                sx={tablaTaskStyles.tableCellPriorRow}>
                                                <div style= { tablaTaskStyles.contPrior }>
                                                <span style={{ ...tablaTaskStyles.palabraPrior, color: realizada ? '#b9c9bb' : 'black' }}>Prioridad: </span>
                                                <p style={{ color: realizada ? '#b9c9bb' : 'black', width: '60px', textAlign: 'left' }}>
                                                    {getPrioridadText(prioridad)}
                                                </p>
                                                </div>
                                                <div style={tablaTaskStyles.contIconosTabla}>
                                                    <IconButton edge="end" aria-label="edit" id={editId} sx={{ ...tablaTaskStyles.iconoBtn, color: realizada ? '#b9c9bb' : 'black' }}>
                                                        <BsPencilSquare />
                                                    </IconButton>
                                                    <IconButton edge="end" aria-label="delete" id={deleteId} sx={{ ...tablaTaskStyles.iconoBtn, color: realizada ? '#d99595' : 'red' }}>
                                                        <BsTrash3 />
                                                    </IconButton>
                                                </div>
                                            </TableCell>

                                            {/* <TableCell align="center"
                                            sx={{ paddingBlock: '3px', paddingInline: '3px' }}>
                                           
                                        </TableCell> */}
                                        </>
                                    </TableRow>
                            
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}