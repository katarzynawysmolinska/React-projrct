import React from "react";
import TableRowC from "./TableRow";
import Table from "@mui/material/Table/Table"; // <table>
import TableContainer from "@mui/material/TableContainer/TableContainer";
import Card from "@mui/material/Card/Card";
import TableBody from "@mui/material/TableBody/TableBody"; // <tbody>
import TableHead from "@mui/material/TableHead/TableHead"; // <thead>
import TableRow from "@mui/material/TableRow/TableRow"; // <tr>
import TableCell from "@mui/material/TableCell/TableCell"; // <th>
import Fade from "@mui/material/Fade/Fade";

const TableC = (props) => {
  const nameList = props.repoList.map((el) => el.name);
  return (
    <Fade in={true} timeout={2000}>
      <TableContainer component={Card}>
        <Table sx={{ minWidth: 650 }} aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Repo's name </TableCell>
              <TableCell align="center"> Stars </TableCell>
              <TableCell align="center"> Language data</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.repoList.map((el) => {
              return (
                <TableRowC
                  key={el.name}
                  name={el.name}
                  stargazers_count={el.stargazers_count}
                  username={props.username}
                  nameList={nameList}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Fade>
  );
};

export default TableC;
