import { FechaAAAAMMDD, FechaLS_AAAAMMDD } from "./ConvertirFecha";

export const FechaPasada = (tarea) => {
    let hoy = new Date();
    let hoyAAAAMMDD = FechaAAAAMMDD(hoy);
    const fechaGuardAD = FechaLS_AAAAMMDD(tarea.fechaLim)
    let alertaTiempo = 0;
    if (tarea.realizada === false) {
        if (hoyAAAAMMDD > fechaGuardAD) {
            alertaTiempo = 1;
        } else {
            const fechaGuardNum = parseInt(fechaGuardAD)
            const hoyAAAAMMDDNum = parseInt(hoyAAAAMMDD)
            if (fechaGuardNum === hoyAAAAMMDDNum || fechaGuardNum+1 === hoyAAAAMMDDNum ) {
                alertaTiempo = 2
            } else {
                alertaTiempo = 3;
            }
        }
    }
    return alertaTiempo
}
