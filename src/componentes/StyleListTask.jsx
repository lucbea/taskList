export const tablaTaskStyles = {

    contTitFilt: { 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px', 
        '@media (maxWidth: 650px)': { display:'flex', flexDirection:'column'},
    },
    titTabla: {
        // borderBottom: '1px solid #E1DEDE'
    },
    tableContainer: { 
        maxHeight: '290px', overflowY: 'auto', position: 'relative' 
    },
    table: {
         minWidth: '220px', 
    },
    tableHead: { 
        position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#e2e7e3',
        '@media (max-width: 650px)': { position: 'relative' , height: '0px', display:'none'} 
    },
    tableRowHead: { 
        height: '35px',
        '@media (max-width: 650px)': { height: '0px'}
    },
    tableCellTarea: {
        padding: '3px', paddingLeft: '30px', height: '35px',
        '@media (max-width: 650px)': { display: 'none', height:'0px' } 
    },
    tableCellPriorHead: { 
        padding: '3px',
        height: '35px',
        display: 'flex',
        paddingLeft: '30px',
        justifyContent: 'flex-start',
        '@media (max-width: 650px)': { display: 'none', height:'0px'} 
    },
   
    tableRow:{ 
        height: '30px',  
        borderTop: '1px solid #F2F2F2',
        '@media (max-width: 650px)': {  
        display:'flex',    
        flexDirection: 'column', 
        height: 'auto',
        } 
    },   
    tableCell: {
         paddingInline: '3px',
         paddingBlock: '3px', position: 'relative',
         width: '100%',
    },
    centrado: {
        position: 'relative',
    },
    checkBox: { 
        color: '#33a733 !important', width: '18px', height:'18px', position: 'absolute', top: '0', left: '13px',
        '&:hover': { backgroundColor: '#33a733',
            borderRadius: '6px', },
    },
    tareaTabla: {
        display: 'flex', maxWidth: '100%', 
        '@media (maxWidth: 650px)': { fontSize: '58px' }
    },
    tableCellPriorRow: {
         border: '0px', paddingBlock: '3px', paddingInline: '3px', 
         display: 'flex',
         justifyContent: 'space-between',
        '@media (max-width: 650px)': { fontSize: '12px', 
        justifyContent:'flex-end',

           }
    },
    contPrior: {
        display: 'flex',
        marginLeft: '30px',
        justifyContent:'center',
        alignItems: 'center',
    },
    palabraPrior: {
        marginRight: '3px',
        width: '57px',
        backgroundColor: 'green',
        textAlign: 'left',
        borderBottom: '2px solid red',
        display: 'none', // Valor por defecto
        '@media (maxWidth: 650px)': {
            display: 'block', // Se oculta en pantallas pequeñas
            fontSize: '12px',
            justifyContent: 'center',
            borderBottom: '2px solid blue',
        },
    },
    contIconosTabla: {
        width: '70px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '20px',
        marginRight: '18px',        
        '@media screen and (maxWidth: 650px)': { 
            gap: '15px',
            marginRight: '30px', 
        }
    },
    iconoBtn: { 
        marginLine: '5px', 
        width: '30px', height: '30px', fontSize: '18px', 
        '@media (max-width: 650px)': { fontSize: '15px' },
        '&:hover': { backgroundColor: '#00000012' },
    }
}