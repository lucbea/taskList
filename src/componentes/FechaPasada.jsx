import { FechaAAAAMMDD, FechaLS_AAAAMMDD } from "./ConvertirFecha";

export const FechaPasada = (tarea) => {
    console.log("estoy en fechaPasada: tarea", tarea)
    let hoy = new Date();
    let hoyAAAAMMDD = FechaAAAAMMDD(hoy);
    const fechaGuardAD = FechaLS_AAAAMMDD(tarea.fechaLim)
    let alertaTiempo = 0;
    if (tarea.realizada === false) {
        if (hoyAAAAMMDD > fechaGuardAD) {
            alertaTiempo = 1;
            console.log("FechaPasada por verdadero y tarea no realizada?:", alertaTiempo)
        } else {
            // alertaTiempo = 0;
            console.log("FechaPasada por falso?:", alertaTiempo)
            const fechaGuardNum = parseInt(fechaGuardAD)
            const hoyAAAAMMDDNum = parseInt(hoyAAAAMMDD)
            if (fechaGuardNum === hoyAAAAMMDDNum || fechaGuardNum+1 === hoyAAAAMMDDNum ) {
                console.log("alerta Tiempo con fecha mas 1  Mañana vence", fechaGuardNum, hoyAAAAMMDDNum)
                alertaTiempo = 2
            } else {
                alertaTiempo = 3;
            }
        }
    }
    return alertaTiempo
}
