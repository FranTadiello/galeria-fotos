//Informações de copyright “© 2024 Galeria de Fotos. Todos os direitos reservados.”
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={styles.container}>
            <Typography variant="body2">
                © 2025 Galeria de Fotos. Todos os direitos reservados.
            </Typography>
        </Box>
    )
}

export default Footer;

const styles = {
    container: {
        backgroundColor:"rgb(49, 38, 31)",
        color: "white",
        width : "100%",
        textAlign: "center",
        padding: "10px, 0",
        marginTop: "auto"
    }
}