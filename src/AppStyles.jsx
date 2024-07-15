
export const AppStyles = ({theme}) =>  {

    return {       
        btnClaOsc: {
            backgroundColor: theme.palette.primary.bgBtnClaOsc,
            position:'absolute',
            top:'-25px', 
            right:'10px', 
            height:'34px',
            width:'34px',
            display:'flex', 
            alignItems:'center', 
            justifyContent:'center', 
            cursor:'pointer', 
            border: theme.palette.primary.borderBtn, 
            borderRadius:'30%',
            color: theme.palette.primary.textColor,
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
    };
};


