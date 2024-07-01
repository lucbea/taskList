export const tablaTaskStyles = {

    contTitFilt: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px',
        '@media (maxWidth: 650px)': { display: 'flex', flexDirection: 'column' },
    },
    titTabla: {
        // borderBottom: '1px solid #E1DEDE'
    },
    tableContainer: {
        maxHeight: '290px', 
        overflowY: 'auto', 
        position: 'relative'
    },
    table: {
        minWidth: '200px',
    },
    tableHead: {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: '#e2e7e3',
        '@media (max-width: 650px)': { position: 'relative', height: '0px', display: 'none' }
    },
    tableRowHead: {
        height: '35px',
        '@media (max-width: 650px)': { height: '0px' }
    },
    tableCellTarea: {
        padding: '3px',
        paddingLeft: '30px',
        height: '35px',
        width: '50%',
        fontSize: '14px',
        '@media (max-width: 650px)': {
            display: 'none', height: '0px'
        }
    },
    tableCellPriorHead: {
        padding: '3px',
        height: '35px',
        display: 'flex',
        marginRight: '90px',
        paddingLeft: '30px',
        gap: '20px',
        '@media (max-width: 650px)': { display: 'none', height: '0px' }
    },

    tableRow: {
        minWidth: '200px',
        height: '50px',
        borderTop: '1px solid #F2F2F2',
        '@media (max-width: 650px)': {
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            marginBottom:'5px',
        }
    },
    tableCell: {
        paddingInline: '3px',
        paddingBlock: '3px', 
        position: 'relative',
        //    width: '100%',
    },
    centrado: {
        position: 'relative',
    },
    checkBox: {
        color: '#33a733 !important', width: '18px', height: '18px', position: 'absolute', top: '0', left: '13px',
        '&:hover': {
            backgroundColor: '#33a733',
            borderRadius: '6px',
        },
    },
    tareaTabla: {
        display: 'flex',
         maxWidth: '100%',
         flexWrap: 'wrap',
        '@media (maxWidth: 650px)': { 
            fontSize: '58px' }
    },
    tableCellPriorRow: {
        minWidth: '100px',
        height: '50px',
        border: '0px',
        paddingTop: '3px',
        paddingBottom: '4px',
        paddingRight: '3px',
       
        display: 'flex',
        justifyContent: 'space-between',
       
        '@media (max-width: 650px)': {
            fontSize: '12px',
            justifyContent: 'flex-start',
            // paddingLeft: '30px',
            justifyContent: 'flex-end',

        },
    },
    contCellPriorRow: {
        minWidth: '210px',
        height: '50px',
        border: '0px',
        paddingTop: '3px',
        paddingBottom: '4px',
        paddingRight: '3px',
        paddingLeft: '20px',
        display: 'flex',
        
        justifyContent: 'space-between',
        // justifyContent: 'flex-end',
        '@media (max-width: 650px)': {
            flexDirection: 'column',
            // width:'100px',
            paddingBottom: '4px',
            // paddingLeft: '30px',
            // fontSize: '12px',
            justifyContent: 'flex-start',
            minWidth: '80px',

        },
    },
    contPrior: {
        display: 'flex',
        //   marginLeft: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '10px',
        '@media (max-width: 650px)': {
           width:'100px',

        }
    },
    contPalabraPrior: {
        display: 'none',
        '@media (max-width: 650px)': {
            display: 'block', // Se oculta en pantallas pequeñas
            fontSize: '10px',
            justifyContent: 'center',
            width:'50px',
            // borderBottom: '2px solid blue',
        },
    },
    palabraPrior: {
        marginRight: '3px',
        width: '57px',
        // backgroundColor: 'green',
        textAlign: 'left',
<<<<<<< HEAD
        // borderBottom: '2px solid red',
        // display: 'none', // Valor por defecto
        // '@media (maxWidth: 650px)': {
        //     // display: 'block', // Se oculta en pantallas pequeñas
        //     fontSize: '35px',
        //     justifyContent: 'center',
        //     borderBottom: '2px solid blue',
        // },
        '@media screen and (max-width: 650px)': {
            // justifyContent: 'flex-start',
            alignItems: 'start',
            fontSize: '8px',
        }
=======
        borderBottom: '2px solid red',
        display: 'none', // Valor por defecto
        '@media (maxWidth: 650px)': {
            display: 'block', // Se oculta en pantallas pequeñas
            fontSize: '35px',
            justifyContent: 'center',
            borderBottom: '2px solid blue',
        },
>>>>>>> 914809b6fb72efce2516b7786cadbdb8e44b3f45
    },
    contIconosTabla: {
        width: '70px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        marginRight: '18px',
        '@media screen and (max-width: 650px)': {
            gap: '10px',
            marginRight: '0px',
            minWidth:'70px',
            alignItems:'flex-start',
            justifyContent:'flex-start',
        }
    },
    iconoBtn: {
        marginLine: '5px',
        width: '30px', height: '30px', fontSize: '18px',
        '@media (max-width: 650px)': { fontSize: '15px' },
        '&:hover': { backgroundColor: '#00000012' },
    }
}