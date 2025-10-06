import React from "react";
import { StyledTableContainer } from "./styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(
  name: string,
  description: string,
  animalType: string,
  size: string,
  furSize: string,
  race: string,
  furIsTangled: Boolean,
  time: string
) {
  return {
    name,
    description,
    animalType,
    size,
    furSize,
    race,
    furIsTangled,
    time,
  };
}

const rows = [
  createData(
    "Amora",
    "Banho e Tosa",
    "Cachorro",
    "Médio",
    "Curto",
    "Vira-lata",
    false,
    "12h00"
  ),
  createData(
    "Nina",
    "Banho e Tosa",
    "Cachorro",
    "Pequeno",
    "Curto",
    "Vira-lata",
    false,
    "12h00"
  ),
  createData(
    "Luna",
    "Banho e Tosa",
    "Cachorro",
    "Médio",
    "Curto",
    "Vira-lata",
    false,
    "12h00"
  ),
  createData(
    "Maggie",
    "Banho e Tosa",
    "Cachorro",
    "Grande",
    "Longo",
    "Golden Retriever",
    true,
    "09h00"
  ),
  createData(
    "Mia",
    "Banho e Tosa",
    "Gato",
    "Pequeno",
    "Curto",
    "Vira-lata",
    false,
    "12h00"
  ),
  createData(
    "Loki",
    "Banho e Tosa",
    "Cachorro",
    "Médio",
    "Curto",
    "Vira-lata",
    false,
    "12h00"
  ),
];

export default function BasicTable() {
  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className="table-head">
              Name
            </TableCell>
            <TableCell align="left" className="table-head">
              Descrição
            </TableCell>
            <TableCell align="left" className="table-head">
              Animal
            </TableCell>
            <TableCell align="left" className="table-head">
              Tamanho
            </TableCell>
            <TableCell align="left" className="table-head">
              Tamanho do Pêlo
            </TableCell>
            <TableCell align="left" className="table-head">
              Raça
            </TableCell>
            <TableCell align="left" className="table-head">
              Pelos Embolados?
            </TableCell>
            <TableCell align="left" className="table-head">
              Horário
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.animalType}</TableCell>
              <TableCell align="left">{row.size}</TableCell>
              <TableCell align="left">{row.furSize}</TableCell>
              <TableCell align="left">{row.race}</TableCell>
              <TableCell align="left">
                {!!row.furIsTangled ? "Sim" : "Não"}
              </TableCell>
              <TableCell align="left">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
