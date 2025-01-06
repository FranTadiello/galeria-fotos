//Título 'Garia de Fotos' centralizado
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={styles.container} >
            <Toolbar>
                <Typography variant="h4" component="div" sx={styles.titulo}>
                    Galeria de Fotos <hr color="#e4a788"></hr>
                    Rick and Morty
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

const styles = {
    container: {
        backgroundColor:"#44281d",
        width : "100%",
        padding: "20px"
    },
    titulo: {
        flexGrow: 1,
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase"
    }
}
