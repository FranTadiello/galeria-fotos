import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface BuscaProps {
    buscaAtual: string;
    pesquisa: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pesquisarClick: () => void;
}       

const Busca: React.FC<BuscaProps> = ({ buscaAtual, pesquisa, pesquisarClick}) => {

    const clique = () => {
        pesquisarClick();
    };
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginBottom: "20px" }}>
          <TextField
            value={buscaAtual}
            onChange={pesquisa}
            placeholder="Digite para buscar..."
            variant="outlined"
            size="small"
            sx={{ flexGrow: 1 }}
          />
          <IconButton onClick={clique}>
            <SearchIcon />
          </IconButton>
        </Box>
      );
}

export default Busca;