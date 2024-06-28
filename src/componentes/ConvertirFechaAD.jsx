export const ConvertirFechaAD = (fechaGuardada) => {
    console.log(fechaGuardada)
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