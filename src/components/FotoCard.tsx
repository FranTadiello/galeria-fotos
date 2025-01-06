import React from "react";
import { Box, Typography } from "@mui/material";

interface FotoCardProps {
    name: string;
    url: string;
}

const FotoCard: React.FC<FotoCardProps> = ({ name, url}) => {
    return (
        <Box
                            sx={{
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: "8px",
                                boxShadow: 3,
                                "&:hover": {
                                    transform: "scale(1.12)",
                                    transition: "transform 0.3s ease-in-out",
                                },
                            }}
                        >
                            <img
                                src={url}
                                alt={name}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    padding: "10px",
                                    backgroundColor: "white",
                  
                                }}
                            >
                                {name}
                            </Typography>
                        </Box>
    );
};

export default FotoCard;

