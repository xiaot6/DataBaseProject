import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'StateName', label: 'State Name', minWidth: 170 },
    { id: 'StateAbbreviations', label: 'State Abbreviations', minWidth: 100 },
    { id: 'StateSizeRank', label: 'State Size Rank', minWidth: 100 },
];

function createData(StateName, StateAbbreviations, StateSizeRank) {
  return { StateName, StateAbbreviations, StateSizeRank};
}

const rows = [
    createData('California', 'CA', 0),
    createData('Texas', 'TX', 1),
    createData('New York', 'NY', 2),
    createData('Florida', 'FL', 3),
    createData('Illinois', 'IL', 4),
    createData('Pennsylvania', 'PA', 5),
    createData('Ohio', 'OH', 6),
    createData('Michigan', 'MI', 7),
    createData('Georgia', 'GA', 8),
    createData('North Carolina', 'NC', 9),
    createData('New Jersey', 'NJ', 10),
    createData('Virginia', 'VA', 11),
    createData('Washington', 'WA', 12),
    createData('Massachusetts', 'MA', 13),
    createData('Indiana', 'IN', 14),
    createData('Arizona', 'AZ', 15),
    createData('Tennessee', 'TN', 16),
    createData('Missouri', 'MO', 17),
    createData('Maryland', 'MD', 18),
    createData('Wisconsin', 'WI', 19),
    createData('Minnesota', 'MN', 20),
    createData('Colorado', 'CO', 21),
    createData('Alabama', 'AL', 22),
    createData('South Carolina', 'SC', 23),
    createData('Louisiana', 'LA', 24),
    createData('Kentucky', 'KY', 25),
    createData('Oregon', 'OR', 26),
    createData('Oklahoma', 'OK', 27),
    createData('Connecticut', 'CT', 28),
    createData('Iowa', 'IA', 29),
    createData('Mississippi', 'MS', 30),
    createData('Arkansas', 'AR', 31),
    createData('Kansas', 'KS', 32),
    createData('Utah', 'UT', 33),
    createData('Nevada', 'NV', 34),
    createData('New Mexico', 'NM', 35),
    createData('West Virginia', 'WV', 36),
    createData('Nebraska', 'NE', 37),
    createData('Idaho', 'ID', 38),
    createData('Hawaii', 'HI', 39),
    createData('Maine', 'ME', 40),
    createData('New Hampshire', 'NH', 41),
    createData('Rhode Island', 'RI', 42),
    createData('Montana', 'MT', 43),
    createData('Delaware', 'DE', 44),
    createData('South Dakota', 'SD', 45),
    createData('Alaska', 'AK', 46),
    createData('North Dakota', 'ND', 47),
    createData('Vermont', 'VT', 48),
    createData('District of Columbia', 'DC', 49),
    createData('Wyoming', 'WY', 50),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
