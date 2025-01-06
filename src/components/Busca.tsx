import React from "react";
import { TextField, InputAdornment  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface BuscaProps {
    buscaAtual: string;
    pesquisa: (event: React.ChangeEvent<HTMLInputElement>) => void;
    pesquisarClick: () => void;
}       

const Busca: React.FC<BuscaProps> = ({ buscaAtual, pesquisa, pesquisarClick}) => {
    return (
        <TextField 
            label="Buscar Personagem"
            variant="outlined" 
            value={buscaAtual}  
            onChange={pesquisa}  
            sx={{
              marginBottom: "20px",  
              width: "100%",
              maxWidth: "500px",  
            }}

            slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon 
                      sx={{ color: "black" }} 
                      onClick={pesquisarClick}
                    />
                    </InputAdornment>
                  ),
                },
              }}
        />
    )
}

export default Busca;