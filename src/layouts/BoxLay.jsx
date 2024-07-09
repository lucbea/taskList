import { Box } from '@mui/material';
import { ThemeClaOsc } from '../utils/Vars'

export const BoxLay = ({altoTabla, theme, children }) => {
  console.log("BoxLay", altoTabla)
  return (
    <Box
      sx={{
        width: '100%',
        maxHeight: altoTabla,
        borderRadius: '5px',
        paddingInline: '16px',
        paddingTop:'10px',
        paddingBottom: '5px',
        minWidth: '228px',
        maxWidth: '800px',
        marginInline: 'auto',
        marginBottom:'15px',
        bgColor: `${theme.palette.primary.bgContent}`,
        transition: 'background-color 0.3s ease',      
      }}
    >
      {children}
    </Box>
  );
}
