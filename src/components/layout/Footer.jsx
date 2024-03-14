
import { Typography, Link, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center', marginTop: '30px' }}>
            <Typography variant="h6" gutterBottom>
                Consulta con nosotros
            </Typography>
            <Typography variant="body1" gutterBottom>
                Estamos aquí para ayudarte. Contáctanos si tienes alguna pregunta.
            </Typography>
            <Typography variant="h6" gutterBottom>
                Nuestras redes
            </Typography>
            <div>
                <Link href="https://www.instagram.com/little_bunny_ar?igsh=MWY5bTZkMG9zOXMzaQ==" target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <FontAwesomeIcon icon={faInstagram} />
                    </IconButton>
                </Link>
                <Link href="https://www.facebook.com/littlebunnytiendadebebes?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <FontAwesomeIcon icon={faFacebook} />
                    </IconButton>
                </Link>
                <Link href="https://wa.me/+5493487302328" target="_blank" rel="noopener noreferrer">
                    <IconButton>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </IconButton>
                </Link>
            </div>
        </footer>
    );
};
