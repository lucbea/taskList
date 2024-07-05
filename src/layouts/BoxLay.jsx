import { Box } from '@mui/material';
import { Theme } from '../utils/Vars'

export const BoxLay = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        borderRadius: '5px',
        paddingInline: '16px',
        paddingTop:'10px',
        paddingBottom: '5px',
        minWidth: '228px',
        maxWidth: '800px',
        marginInline: 'auto',
        marginBottom:'15px',
        bgcolor: Theme.palette.primary.main,
        transition: 'background-color 0.3s ease',
        fontFamily: Theme.typography.fontFamily,
      }}
    >
      {children}
    </Box>
  );
}