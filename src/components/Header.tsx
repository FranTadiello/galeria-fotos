//Título 'Garia de Fotos' centralizado
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={styles.container} >
            <Toolbar>
                <Typography variant="h4" sx={styles.titulo}>
                    Galeria de Fotos
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

const styles = {
    container: {
        backgroundColor: "#de7e3e",
        width : "100%"
    },
    titulo: {
        flexGrow: 1,
        textAlign: "center"
    }
}
