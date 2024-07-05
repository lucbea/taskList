export const tablaTaskStyles = {

    contTitFilt: {
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        //  marginTop: '5px',
        '@media (maxWidth: 650px)': { 
            display: 'flex', 
            flexDirection: 'column' 
        },
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
        '@media (max-width: 650px)': { 
            position: 'relative', 
            height: '0px', 
            display: 'none' 
        }
    },
    tableRowHead: {
        height: '35px',
        '@media (max-width: 650px)': { 
            height: '0px' 
        }
    },
    tableCellTarea: {
        padding: '3px',
        paddingLeft: '30px',
        height: '35px',
        width: '50%',
        fontSize: '14px',
        '@media (max-width: 650px)': {
            display: 'none', 
            height: '0px'
        }
    },
    tableCellPriorHead: {
        padding: '3px',
        height: '35px',
        display: 'flex',
        marginRight: '90px',
        paddingLeft: '30px',
        gap: '20px',
        '@media (max-width: 650px)': {
             display: 'none', 
             height: '0px' }
    },

    tableRow: {
        minWidth: '200px',
        borderTop: '1px solid #F2F2F2',
        '@media (max-width: 650px)': {
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
        }
    },
    tableCell: {
        paddingInline: '3px',
        paddingBlock: '3px', 
        position: 'relative',
    },
    centrado: {
        position: 'relative',
        paddingRight: '10px',
    },
    checkBox: {
        color: '#33a733 !important', 
        padding: '0px',
        width: '18px', 
        height: '18px', 
        position: 'absolute', 
        top: '0', 
        left: '13px',
        '&:hover': {
            backgroundColor: '#33a733',
            borderRadius: '6px',
        },
    },
    tareaTabla: {
        display: 'flex',
         maxWidth: '100%',
         flexWrap: 'wrap',
         paddingLeft: '30px',
        '@media (maxWidth: 650px)': { 
            fontSize: '128px' }
    },
    tableCellPriorRow: {
        paddingInline:'0px',
        paddingBlock:'3px',
        minWidth: '100px',
        border: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 650px)': {
            fontSize: '12px',
            justifyContent: 'flex-end',
            marginBottom: '4px',
            paddingTop: '3px',
        },
    },
    contCellPriorRow: {
        minWidth: '210px',
        border: '0px',
        paddingLeft: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        '@media (max-width: 650px)': {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            minWidth: '80px',
        },
    },
    contFecha: {
        display: 'flex',
        flexDirection: 'column',
        marginTop:'2px',
        fontSize:'12px',
        justifyContent: 'center',
        alignItems:'flex-end',
        marginRight: '3px',
        width: '85px',
       
        '@media screen and (max-width: 650px)': {
            alignItems:'flex-start',
            fontSize: '8px',
        }

    },
    contPrior: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '10px',
        '@media (max-width: 650px)': {
           width:'100px',
        //    alignItems:'flex-start',
        }
    },
    contPalabraPrior: {
        display: 'none',
        '@media (max-width: 650px)': {
            display: 'block', 
            fontSize: '10px',
            justifyContent: 'center',
            width:'50px',
        },
    },
    palabraPrior: {
        marginRight: '3px',
        width: '57px',
        textAlign: 'left',
        '@media screen and (maxWidth: 650px)': {
            alignItems: 'start',
            fontSize: '8px',
        }
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