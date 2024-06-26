export const formTaskStyles = {
    formCont: {
        display: 'flex',
        gap: '10px',
        minWidth: '220px',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:'6px',
    },
    inputCont: {
        width: '100%',
        maxWidth: '850px',
        transition: 'color 0.3s ease',
        '@media (min-width: 650px)': {
            display: 'flex',
            flexDirection: 'row',
            gap:'10px',
          },
    },
    tareaInput: {
        marginBottom: '4px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position:'relative',
    },
    labelSmall: {
        fontSize: '10px',
        marginBottom: '0',
        paddingLeft: '3px',
    },
    inputStyle:{
        outline:'none',
        paddingInline: '8px',
        paddingBlock: '2px',
        fontSize: '11px',
        border: ' 1px solid #E1DEDE',
        height: '25px',
        borderRadius:'3px',
    },
    labelControl: {
        fontSize: '10px',
        marginBottom: '0',
        paddingLeft: '3px',
        color:'#C72424',  
        position:'absolute',
        top:'40px',
        fontWeight:'600',
    },
    inputTarea: {
        width: '100%',
        marginRight: '10px',
    },
    inputFechaPrior: {
        display: 'flex', 
        justifyContent: 'spaceBetween', 
        gap: '10px', 
        alignItems:'flex-start',
    },
    inputFecha: {
        width: '100px',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '10px',
    },
    inputPrior: {
        display: 'flex',
        flexDirection: 'column',
        width: '-webkit-fill-available',
    },
    labelMinMax: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    spanMinMax: {
        paddingInline: '5px', 
        fontSize: '7px',
    },
    submitBtn: {
        padding: '10px',
        width:'53px',
        height:'50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border:'0px solid grey',
        borderRadius:'50%',
        // marginInline:"5px", 
        marginBottom:"6px", 
        fontSize:"30px",
        '&:hover': { backgroundColor: '#9cc19e63', }, 
    },

    submitBtnRed: {
        color: 'red', 
        fonSize:'26px',
        fontWeight:'400',
        '&:hover': { backgroundColor: '#bf828275', },
    },

    iconoBtn: {
        display:'flex', 
        alignItems:'center', 
        width: '30px',
        height:'35px',
        color:'blue',
        
    },
};

export const inputError = {
    border:'2px double #C72424',
};

export const inputNormal = {
    border: ' 0.5px solid #E1DEDE',
};