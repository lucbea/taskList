import { Box } from '@mui/material';
import { ThemeClaOsc } from '../utils/Vars'

export const BoxLay = ({altoTabla, theme, children }) => {
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
        bgColor: `${theme.palette.primary.main}`,
        bgcolor: '#FFF',
        boxShadow: '0px 0px 6px #c6c6c6',
        transition: 'background-color 0.3s ease',
        fontFamily: `${theme.typography.fontFamily}`,
      
      }}
    >
      {children}
    </Box>
  );
}
