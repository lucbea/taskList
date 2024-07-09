export const ConvertirFechaAD = (fechaGuardada) => {
    const partes = fechaGuardada.split('-'); 
    if (partes.length === 3) {
        const fechaConvertida = `${partes[2]}-${partes[1]}-${partes[0]}`; 
        return fechaConvertida;
    } 
}