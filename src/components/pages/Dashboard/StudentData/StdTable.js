import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Typography}  from '@mui/material'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, subj,subteacher, marks) {
  return {id, subj, subteacher, marks};
}

const rows = [
  createData(1,'English Language','Sir Shahid',96),
  createData(2,'Mathematics','Sir Imran',78),
  createData(3,'Physics','Sir Adeel khan',88),
  createData(4,'Biology', 'Sir Riaz',91),
  createData(5,'History', 'Mam Aneeta',76),
  createData(6,'Art', 'Mam Sidra',92),

];

export default function StdTable() {
  return (
<Box sx={{ width: {xs:'80%',sm:'70%',md:'90%',lg:"93%"}, margin: '20px auto',background:'white',padding:'20px',borderRadius:'20px' }}>
  {/* Table Heading */}
  <Typography 
    sx={{ 
      fontWeight: 'bold', 
      mb: 2, 
      color: 'black', 
      textAlign: 'left',
      fontSize:'25px' ,
      fontFamily:'sans-serif'
    }}
  >
    Subject Grades
  </Typography>

  <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '10px', height:'auto' }}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell sx={{fontWeight:'bold',fontSize:'20px'}}>#</StyledTableCell> 
          <StyledTableCell align="left" sx={{fontWeight:'bold',fontSize:'20px'}}>Subject</StyledTableCell>
          <StyledTableCell align="left" sx={{fontWeight:'bold',fontSize:'20px'}}>Subject Teacher</StyledTableCell>
          <StyledTableCell align="right" sx={{fontWeight:'bold',fontSize:'20px'}}>Marks</StyledTableCell> 
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <StyledTableRow key={index}>
            <StyledTableCell component="th" scope="row">
              {index + 1} 
            </StyledTableCell>
            <StyledTableCell align="left">
               {row.subj}
            </StyledTableCell>
            <StyledTableCell align="left">
               {row.subteacher}
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
              {row.marks} / 100
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Box>
  );
}