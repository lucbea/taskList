
//________
// Guardar en Local Storage
// ------------------------
export const Guardar = (lugar, dato) => localStorage.setItem(lugar, JSON.stringify(dato));

// _______________
// funcion armado del array para guardarlo en LS
// ---------------------------------------------
export const ArmadoArrayGuardar = (nuevoObj, funcion) => {
    let tareasActual;
    let tareasLS = Recuperar();
    if (funcion === "nuevaTarea") {
        if (tareasLS) {
            tareasLS.push(nuevoObj);
            tareasActual = tareasLS;
        } else {
            tareasActual = [nuevoObj];
        }
        Guardar("tareas", tareasActual);
    } else {
            if (tareasLS) {
                const tareasActual = tareasLS.map(tarea => {
                    if (tarea.id === nuevoObj.id) {
                        return { ...nuevoObj }; 
                    } else {
                        return tarea;
                    }
                });
                Guardar("tareas", tareasActual);
            } else {
                const tareasActual = [nuevoObj];
                Guardar("tareas", tareasActual); 
            }       
        }
        return tareasActual 
   }


    // _________
    // Recuperar del Local Storage
    // ---------------------------
    export const Recuperar = () => {
        let datosLS = JSON.parse(localStorage.getItem('tareas'));
        return datosLS;
    }

    export const RecuperarFiltro = () => {
        let filtroLS = JSON.parse(localStorage.getItem('filtro'));
        return filtroLS;
    }

    // ___________________
    // Función que inicializa el array de tareas en el LS (como ejemplo)
    // ---------------------
    export const InicializarLS = () => {
        let hayTareas = Recuperar();
        if (!(hayTareas && hayTareas.length > 0 )) {
            Guardar("tareas",[])
        }
        const hayFiltro = RecuperarFiltro()
        if (!(hayFiltro)) {
            Guardar("filtro","TODAS")
        }
    }