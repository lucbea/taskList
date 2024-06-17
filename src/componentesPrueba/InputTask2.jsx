import { Form }, React from 'react';
import { useForm } from "react-hook-form"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { BsCheck2Square } from "react-icons/bs";

export const InputTask = () => {
  const { register, handleSubmit } = useForm;
  const [dateInputValue, setDateInputValue] = React.useState('');

  const handleDateInputClick = () => {
    if (dateInputValue === '') {
      setDateInputValue('dd/mm/aa');
    }
  };

  const handleDateInputChange = (event) => {
    setDateInputValue(event.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > :not(style)': { m: 0.4 }, }}
      >
        <TextField
          id="task-input"
          label="Ingrese tarea"
          type="textarea"
          sx={{
            '& .MuiInputLabel-root': {
              color: 'gray',
            },
          }}
        />
        <TextField
          id="deadline-input"
          label="Ingrese fecha límite"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          onClick={handleDateInputClick}
          onChange={handleDateInputChange}
          value={dateInputValue}
          InputProps={{
            inputProps: {
              min: '01-01-2024', 
            },
          }}
          sx={{
            '& .MuiInputLabel-root': {
              color: 'gray',
            },
          }}
        />
        <Box sx={{ width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <BsCheck2Square style={{ fontSize: '100%' }} />
        </Box>
      </Form>
    </div>
  );
}
