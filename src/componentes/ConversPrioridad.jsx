export const GetPrioridadText = (prioridad) =>  { 
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
        return '***';
}
};