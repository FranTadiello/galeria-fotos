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
        backgroundColor:"#44281d",
        color: "white",
        width : "100%",
        textAlign: "center",
        padding: "10px, 0",
        marginTop: "auto"
    }
}