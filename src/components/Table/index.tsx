import { useEffect, useState } from 'react';
import { StyledTableContainer } from './styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from '@mui/material';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { searchAppointments } from '../../domain/appointments';

type AppointmentType = {
  name: string;
  description: string;
  animalType: string;
  size: string;
  furSize: string;
  race: string;
  furIsTangled: Boolean;
  startTime: Date;
};

export default function BasicTable() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);
  const [loading, setLoading] = useState(true);

  const handleRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const loadAppointments = async () => {
    const appointmentsFound = await searchAppointments();

    if (appointmentsFound.data.length) setAppointments(appointmentsFound.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    loadAppointments();
  }, []);

  return loading ? (
    <p>Carregando...</p>
  ) : (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className="table-head">
              Nome
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
          {appointments.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                {!!row.furIsTangled ? 'Sim' : 'Não'}
              </TableCell>
              <TableCell align="left">
                {row.startTime
                  ? format(new Date(row.startTime), 'dd/MM/yyyy HH:mm', {
                      locale: ptBR
                    })
                  : '-'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={appointments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleRowsPerPage}
      />
    </StyledTableContainer>
  );
}
