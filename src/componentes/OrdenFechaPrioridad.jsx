export const OrdenFechaPrioridad = (tareasAOrdenar) => {
    let tareasOrdenadasFech = tareasAOrdenar.sort((a, b) => {
        const fechaA = a.fechaLim.split('-').join('');
        const fechaB = b.fechaLim.split('-').join('');
        return fechaA.localeCompare(fechaB);
    });
    let tareasOrdenadasFechPrior = [];
    let parametroFecha = tareasOrdenadasFech[0].fechaLim;
    let arrayAux;
    let arrayParaReturn = [];
    for (let i = 0; i < tareasOrdenadasFech.length; i++) {
        let j = i;
        parametroFecha = tareasOrdenadasFech[i].fechaLim;
        arrayAux = [];
        while (j < tareasOrdenadasFech.length && parametroFecha === tareasOrdenadasFech[j].fechaLim) {
           arrayAux.push(tareasOrdenadasFech[j]);
            j++;
        }
        i= j-1;
        tareasOrdenadasFechPrior = arrayAux.sort((a, b) => {
                        return  b.prioridad - a.prioridad;
                    });      
        arrayParaReturn.push(...tareasOrdenadasFechPrior);
    }
    return arrayParaReturn;
}
