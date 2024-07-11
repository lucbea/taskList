

export const AppStyles = ({theme}) =>  ({
    btnClaOsc: {
        backgroundColor: theme.palette.primary.bgBtnClaOsc,
        position:'absolute',
        top:'-20px', 
        right:'10px', 
        height:'50px',
        width:'50px',
        
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center', 
        cursor:'pointer', 
        border: theme.palette.primary.borderBtn, 
        borderRadius:'30%',
        '&:hover': { 
            backgroundColor: theme.palette.primary.bgBtnClaOscHover, 
            borderRadius:'30%',
            fontWeight: theme.typography.fontWeightBold,
        },
    },
    iconoBtnClaOsc: {
        fontSize:'30px', 
        '&:hover': { 
          fontWeight: theme.typography.fontWeightBold,
        },
    }

})

