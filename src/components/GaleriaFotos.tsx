/*Exiba o nome da foto centralizado abaixo da foto, 
em formato de grid. Aumentar a foto quando passar o  mouse.*/
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Grid2 } from '@mui/material';

interface Foto {
  id: number;
  name: string;
  url: string;
}

interface ApiResponse {
  results:{
    name: string,
    image: string,
  } [];
}

const GaleriaFotos: React.FC = () => {
  const [fotos, setFotos] = useState<Foto[]>([]);

  const fetchFotos = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character/?page=16"); 
      const data: ApiResponse = await response.json();

      const fotosData: Foto[] = data.results.map((infos, index) => ({
        id: index + 1,
        name: infos.name,  
        url: infos.image,  
      }));

      setFotos(fotosData);
    } catch (error) {
      console.error("Erro ao buscar as fotos:", error);
    }
  };

  useEffect(() => {
    fetchFotos();
  }, []);
    
    return (
        <Box 
          sx={{ 
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            
          }}>
            <Grid2 container spacing={4} >
                {fotos.slice(0,10).map((foto) => (
                 
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
                                src={foto.url}
                                alt={foto.name}
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
                                {foto.name}
                            </Typography>
                        </Box>

                ))}
       </Grid2>
        </Box>
    );
};

export default GaleriaFotos;