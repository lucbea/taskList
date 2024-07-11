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
        backgroundColor: `${theme.palette.primary.bgContent}`,
        boxShadow: `${theme.palette.primary.boxShadow}`,
        transition: 'background-color 0.3s ease',
        fontFamily: `${theme.typography.fontFamily}`,
      
      }}
    >
      {children}
    </Box>
  );
}
