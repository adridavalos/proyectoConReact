import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";

import { CartWidget } from "../../common"
import { Link } from "react-router-dom"
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
                            {
                                <MenuItem
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    <Link to="/category/bebas" style={{ textDecoration: 'none', color: 'black' }}>
                                        Bebas
                                    </Link>
                                </MenuItem>
                            }
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {
                                <MenuItem
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    <Link to="/category/bebes" style={{ textDecoration: 'none', color: 'black' }}>
                                        Bebes
                                    </Link>
                                </MenuItem>
                            }
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {
                                <MenuItem
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    <Link to="/category/accesorio" style={{ textDecoration: 'none', color: 'black' }}>
                                        Accesorios
                                    </Link>
                                </MenuItem>
                            }
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
