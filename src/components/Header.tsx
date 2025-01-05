//Título 'Garia de Fotos' centralizado
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={styles.container} >
            <Toolbar>
                <Typography variant="h4" component="div" sx={styles.titulo}>
                    Galeria de Fotos
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

const styles = {
    container: {
        backgroundColor:"rgb(49, 38, 31)",
        width : "100%",
        padding: "10px, 0"
    },
    titulo: {
        flexGrow: 1,
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase"
    }
}
