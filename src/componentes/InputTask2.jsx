import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { local } from '../utils/Local';

export const TuComponente = () => {
    const [cambioCheck, setCambioCheck] = useState(local);

    // Función para manejar el cambio de estado de cada fila
    const handleChange = (id) => (event) => {
        setCambioCheck(prevLocal =>
            prevLocal.map(loc =>
                loc.id === id
                    ? { ...loc, realizada: event.target.checked }
                    : loc
            )
        );
    };

    // Efecto para ejecutar algo después de que cambioCheck se actualice
    useEffect(() => {
        console.log('cambioCheck actualizado:', cambioCheck);
        // Aquí puedes realizar cualquier acción adicional que necesites
    }, [cambioCheck]); // Este efecto se ejecutará cada vez que cambioCheck cambie

    return (
        <div>
            {cambioCheck.map(loc => (
                <FormControlLabel
                    key={loc.id}
                    control={<Checkbox checked={loc.realizada} onChange={handleChange(loc.id)} />}
                    label={<Typography variant="body1" style={{ color: loc.realizada ? '#4CAF50' : '#F44336' }}>{loc.tarea}</Typography>}
                />
            ))}
        </div>
    );
};


