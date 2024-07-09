//Toma fecha de local Storage AAAA-MM-DD, la convierte y la muestra con formato DD-MM-AAAA para mostrar
export const FechaLS_DDMMAAA = (fechaGuardada) => {
    const partes = fechaGuardada.split('-'); 
    if (partes.length === 3) {
        const fechaConvertida = `${partes[2]}-${partes[1]}-${partes[0]}`;
        return fechaConvertida;
    } 
}

//Convertir la fecha de local Storage AAAA-MM-DD a AAAAMMDD
export const FechaLS_AAAAMMDD = (fecha) => {
    return fecha.replace(/-/g, '');
}

//Convertir la fecha de máquina a formato AAAAMMDD
export const FechaAAAAMMDD = (fechaString) => {
    if (fechaString) {
        const fechaOriginal = new Date(fechaString);
        const año = fechaOriginal.getFullYear();
        let mes = (fechaOriginal.getMonth() + 1).toString().padStart(2, '0'); // Se agrega +1 porque los meses en JavaScript son de 0 a 11
        let dia = fechaOriginal.getDate().toString().padStart(2, '0');
        const fechaAAAAMMDD = `${año}${mes}${dia}`;
        return fechaAAAAMMDD;
    }

}