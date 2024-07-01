//Toma fecha de local Storage AAAA-MM-DD, la convierte y la muestra con formato DD-MM-AAAA para mostrar
export const FechaLS_DDMMAAA = (fechaGuardada) => {

    const partes = fechaGuardada.split('-'); // Dividir la fecha en partes por el separador '-'
    if (partes.length === 3) {
        const fechaConvertida = `${partes[2]}-${partes[1]}-${partes[0]}`; // Reordenar las partes en el nuevo formato
        console.log(`Fecha convertida: ${fechaConvertida}`);
        return fechaConvertida;
        // Aquí puedes usar la fechaConvertida como necesites
    } else {
        console.error('Formato de fecha no válido');
    }
}

//Convertir la fecha de local Storage AAAA-MM-DD a AAAAMMDD
export const FechaLS_AAAAMMDD = (fecha) => {
    return fecha.replace(/-/g, '');
}

//Convertir la fecha gps a formato AAAAMMDD
export const FechaAAAAMMDD = (fechaString) => {
    console.log(fechaString)
    if (fechaString) {
        const fechaOriginal = new Date(fechaString);
        const año = fechaOriginal.getFullYear();
        let mes = (fechaOriginal.getMonth() + 1).toString().padStart(2, '0'); // Se agrega +1 porque los meses en JavaScript son de 0 a 11
        let dia = fechaOriginal.getDate().toString().padStart(2, '0');

        // Formato AAAAMMDD
        const fechaAAAAMMDD = `${año}${mes}${dia}`;
        console.log(`fecha ${año}${mes}${dia} `)

        return fechaAAAAMMDD;
    } else {
        console.log("fecha erronea: ", fechaString)
    }

}