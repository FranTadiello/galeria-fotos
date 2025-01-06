/*Exiba o nome da foto centralizado abaixo da foto, 
em formato de grid. Aumentar a foto quando passar o  mouse.*/
import React, { useEffect, useState } from "react";
import { Box, Grid2  } from "@mui/material";
import FotoCard from "./FotoCard";
import Busca from "./Busca";


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
  const [buscar, setbuscar] = useState<string>("");

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

  const pesquisar = (event:React.ChangeEvent<HTMLInputElement>) => {
    setbuscar(event.target.value);
  };
  const pesquisarClick = () => {
    console.log("Pesquisando por:", buscar);
  };
  const fotosFiltradas = fotos.filter((foto)=>
    foto.name.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
  ); 
  

    return (
        <Box 
          sx={{ 
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems:"center", 
            flexDirection: "column"
          }}>
            < Busca buscaAtual={buscar} pesquisa={pesquisar} pesquisarClick={pesquisarClick}  />
            <Grid2 container spacing={3} >
                {fotosFiltradas.slice(0,10).map((foto) => (
                 <FotoCard name={foto.name} url={foto.url} />
                        

                ))}
       </Grid2>
        </Box>
    );
};

export default GaleriaFotos;