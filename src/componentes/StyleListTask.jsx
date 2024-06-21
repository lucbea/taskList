export const tablaTaskStyles = {
    titTabla: {
        borderBottom: '1px solid #E1DEDE'
    },
    tableContainer: { 
        maxHeight: '300px', overflowY: 'auto', position: 'relative' 
    },
    table: {
         minWidth: '274px', 
    },
    tableHead: { 
        position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#FFF',
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
    // tableCellAction: { 
    //     padding: '3px', height: '35px', width: '80px', paddingRight: '15px', color:'white', display: 'flex', '@media (max-width: 650px)': { display: 'none' }
    // },
    tableRow:{ 
        height: '30px',  
        borderTop: '1px solid #F2F2F2',
        // backgroundColor:'lightblue',
        '@media (max-width: 650px)': {  
        display:'flex',    
        flexDirection: 'column', 
        height: 'auto',
        // width:'100%',
        // backgroundColor:'pink',
        } 
    },   
    tableCell: {
         paddingInline: '3px', 
        //  paddingLeft: '30px', 
         paddingBlock: '3px', position: 'relative',
         width: '100%',
    },
    centrado: {
        position: 'relative',
    },
    checkBox: { 
        color: '#33a733 !important', width: '20px', position: 'absolute', top: '0', left: '13px' 
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
    // palabraPrior: { 
    //      display: 'none', 
    //      marginRight: '3px', 
    //      width:'57px',
    //      backgroundColor:'green',
    //      textAlign:'left',
    //      borderBottom:'2px solid red',
    //     '@media (maxWidth: 650px)': { 
    //         fontSize: '12px', 
    //     justifyContent:'center',
    //     display: 'flex',
    //     borderBottom:'2px solid blue',

    //        }
    // },
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
        
        width: '120px',
        // paddingRight: '14px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center', 
        '@media screen and (maxWidth: 650px)': { 
            // flexDirection: 'column',
            // alignItems: 'center',
            // justifyContent: 'center'
            gap: '15px',
            marginRight: '30px',
        }
    },
    iconoBtn: { marginLine: '5px', 
        // color: '#000', 
        width: '35px', height: '25px', fontSize: '15px', '@media (max-width: 650px)': { fontSize: '15px' } }


}