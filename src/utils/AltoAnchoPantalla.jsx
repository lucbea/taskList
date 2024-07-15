
import  { useEffect } from 'react';

export const AltoAnchoPantalla = ({ altoVentana, setAltoVentana, anchoVentana, setAnchoVentana, altoTabla, setAltoTabla, altoLista, setAltoLista, tamanioContTabla, setTamanioContTabla }) => {

    // let alto = 3;
    // let ancho = 3;
    // let auxAltoTabla = 1;
    // let auxAltoLista = 1;

    useEffect(() => {
        if (tamanioContTabla) {
            setAltoVentana(1);
            setAnchoVentana(1);
            setAltoTabla(1);
            setAltoLista(1);

            const obtenerAltoPantalla = () => {
                let alto = window.innerHeight;
                setAltoVentana(alto);

                let ancho = window.innerWidth;
                setAnchoVentana(ancho);

                let auxAltoTabla, auxAltoLista;
                if (ancho > 650) {
                    auxAltoTabla = alto - 220;
                    auxAltoLista = auxAltoTabla - 65;
                } else {
                    auxAltoTabla = alto - 240;
                    auxAltoLista = auxAltoTabla - 85;
                }

                setAltoTabla(auxAltoTabla);
                setAltoLista(auxAltoLista);
            };

            obtenerAltoPantalla();

            const handleResize = () => {
                obtenerAltoPantalla(); 
            };

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [tamanioContTabla, setAltoVentana, setAnchoVentana]); 

    return null;
};