//________
// Guardar en Local Storage
// ------------------------
export const Guardar = (dato) => localStorage.setItem ("tareas", JSON.stringify(dato));

// _______________
// funcion armado del array para guardarlo en LS
// ---------------------------------------------
export const ArmadoArrayGuardar = (nuevoObj, funcion) => {
    let tareasActual;
    let  tareasLS = Recuperar();
    if (funcion === "nuevaTarea") {
         if (tareasLS) {
            tareasLS.push(nuevoObj);
            tareasActual = tareasLS;
        } else {
            tareasActual = [nuevoObj];
        }
        Guardar (tareasActual);
    }
    return tareasActual
};

// _________
// Recuperar del Local Storage
// ---------------------------
export const Recuperar = () => {
    let datosLS = JSON.parse(localStorage.getItem('tareas'));
    return datosLS;
}

// ___________________
// Función que inicializa el array de tareas en el LS (como ejemplo)
// ---------------------
export const InicializarTareasArrayVacio = () => {
    let hayTareas = Recuperar();
    if (!(hayTareas && hayTareas.length > 0)) {
        Guardar([])
    } 
}