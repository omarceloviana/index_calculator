import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';


export default function Home() {
  return (
    <div>
    <Container maxWidth="md">
    <h1>Calculadora de Índice de Negociação</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Valor da dívida" variant="outlined" />
      <TextField id="outlined-basic" label="Valor juros e multa" variant="outlined" />
      <TextField id="outlined-basic" label="Desconto" variant="outlined" />
      <TextField id="outlined-basic" label="Valor da parcela" variant="outlined" />
      <TextField id="outlined-basic" label="Número de vezes" variant="outlined" />
      <TextField id="outlined-basic" label="Índice de reajuste" variant="outlined" />

    <Button variant="outlined">Calcular</Button>
    <Button variant="outlined">Limpar</Button>  
    </Box>
    </Container>
    </div>
  );
}