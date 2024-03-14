import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";

import { CartWidget } from "../../common"
import { Link } from "react-router-dom"
import { menuNavegation } from "../../../router/menuNavegation";
CartWidget
const NavBar = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#fff9c4' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Avatar
                            alt="Logo de la empresa"
                            component={Link}
                            to={"/"}
                            src="https://res.cloudinary.com/dg9fx8njd/image/upload/v1706976810/WhatsApp_Image_2024-02-03_at_13.05.08_g7j98f.jpg"
                            style={{ width: 100, height: 100 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component={Link}
                            to={"/"}
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                flexGrow: 4,
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                textDecoration: 'none',
                                margin: '30px',
                                color: '#424242',
                            }}
                        >
                            LITTLE BUNNY
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <MenuItem >
                                {
                                    menuNavegation.map(({ id, text, path }) => (
                                        <Link key={id} to={path} style={{ textDecoration: 'none', color: 'black', paddingRight: 50, fontSize: '1.2rem' }}>
                                            {text}
                                        </Link>
                                    ))
                                }
                            </MenuItem>
                        </Box>
                        <Link to="/cart">
                            <CartWidget />
                        </Link>

                    </Toolbar>
                </Container>
            </AppBar >
        </>
    )
}

export default NavBar
