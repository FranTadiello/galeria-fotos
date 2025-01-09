import React, { useEffect, useState } from "react";
import { Box, Grid2, Pagination, Typography } from "@mui/material";
import FotoCard from "./FotoCard";
import Busca from "./Busca";

interface Foto {
  id: number;
  name: string;
  url: string;
}

interface ApiResponse {
  results: {
    name: string,
    image: string,
  }[];
}

const GaleriaFotos: React.FC = () => {
  const [fotos, setFotos] = useState<Foto[]>([]);
  const [buscar, setbuscar] = useState<string>("");
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  const [totalPaginas, setTotalPaginas] = useState<number>(0);
  const [erro, setErro] = useState<string | null>(null);

  const fetchFotos = async (pagina: number, busca?: string) => {
    try {
      const baseUrl = "https://rickandmortyapi.com/api/character/";
      const query = busca ? `?name=${busca}` : `?page=${pagina}`;
      const response = await fetch(baseUrl + query);

      if (!response.ok) {
        throw new Error("Nenhum resultado encontrado.");
        
      }
      const data: ApiResponse & { info: {pages: number}}= await response.json();

      const fotosData: Foto[] = data.results.map((infos, index) => ({
        id: index + 1 + (pagina - 1) * 20,
        name: infos.name,
        url: infos.image,
      }));

      setFotos(fotosData);
      setTotalPaginas(data.info.pages);
      setErro(null);
    } catch (error) {
      console.error("Erro ao buscar as fotos:", error);
      setFotos([]);
      setTotalPaginas(0);
      setErro("Infelizmente não encontramos o resultado da sua pesquisa.");
    }
  };

  useEffect(() => {
    if (!buscar) {
      fetchFotos(paginaAtual);
    }}, [paginaAtual, buscar]);

  const pesquisarClick = () => {
    setPaginaAtual(1);
    fetchFotos(1, buscar);
    console.log("Pesquisando por:", buscar);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        
      }}>
      < Busca 
        buscaAtual={buscar}
        pesquisa= {(e) => setbuscar(e.target.value)}
        pesquisarClick={pesquisarClick} 
      />
      {erro ? (
        <Typography variant="h5" color="#44281d" sx={{ marginTop: "20px" }}>
          {erro}
        </Typography>
      ) : (
        <>
          <Grid2 container spacing={3}>
            {fotos.map((foto) => (
              <FotoCard key={foto.id} name={foto.name} url={foto.url} />
            ))}
          </Grid2>
          {totalPaginas > 1 && (
            <Pagination
              count={totalPaginas}
              page={paginaAtual}
              onChange={(_, value) => setPaginaAtual(value)}
              sx={{ marginTop: "20px" }}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default GaleriaFotos;