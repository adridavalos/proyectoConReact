
import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            textAlign="center"
        >
            <img src={"https://res.cloudinary.com/dg9fx8njd/image/upload/v1708972616/13315300_5203298_az1fbo.svg"} alt="Error 404" style={{ maxWidth: '20%', marginBottom: '20px' }} />
            <Typography variant="h3" gutterBottom>
                Error 404
            </Typography>
            <Typography variant="body1" gutterBottom>
                Lo sentimos, la página que buscas no se ha encontrado.
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">
                Volver a la página de inicio
            </Button>
        </Box>
    );
};