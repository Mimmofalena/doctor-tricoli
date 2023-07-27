import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  TableBody,
} from "@mui/material";

const orari = [
  { day: "Lunedì", pomeriggio: "15:15 - 17:15" },
  { day: "Martedì", mattina: "09:30 - 11:30" },
  { day: "Mercoledì", pomeriggio: "15:15 - 17:15" },
  { day: "Giovedì", pomeriggio: "15:15 - 17:15" },
  { day: "Venerdì", mattina: "11:00 - 13:00" },
];

const OrariStudio = () => {
  return (
    <Box>
      <TableContainer >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell align="center">
                <strong>Giorni</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Mattino</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Pomeriggio</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orari.map((item) => {
              return (
                <TableRow key={Math.random()}>
                  <TableCell align="center">{item.day}</TableCell>
                  <TableCell align="center">{item.mattina}</TableCell>
                  <TableCell align="center">{item.pomeriggio}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography mt={2}>
        Lo studio è aperto negli orari su indicati e solo su &nbsp;
        <strong>appuntamento</strong>. Variazioni Vi verranno comunicate tramite
        broadcast whatsapp.
      </Typography>
    </Box>
  );
};

export default OrariStudio;
