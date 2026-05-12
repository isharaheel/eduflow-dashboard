import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { studentsData } from './studentData'; 
import { Box, Modal, Typography, TextField, IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#007d80',
    color: theme.palette.common.white,
    fontWeight: 'bold',
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
  '&:hover': {
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
  }
}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '80%', sm: 450 }, 
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs: 3, sm: 4 },
  borderRadius: '12px',
  outline: 'none',
  maxHeight: '90vh',
  overflowY: 'auto', 
};

export default function TableEx({ searchQuery }) {
const [data, setData] = React.useState(() => {
const saved = localStorage.getItem("studentList");
return saved ? JSON.parse(saved) : studentsData; 
});
const filteredData = data.filter((student) => 
student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
student.id.toString().includes(searchQuery));
const [open, setOpen] = React.useState(false);
const [selectedStudent, setSelectedStudent] = React.useState(null);
const [tempName, setTempName] = React.useState("");
const [tempGPA, setTempGPA] = React.useState("");
const [tempAtten , setTempAtten] = React.useState("")
const [tempGender , setTempGender] = React.useState("")

const handleOpen = (student) => {
  setSelectedStudent(student);
  setTempName(student.name); 
  setTempGPA(student.GPA); 
  setTempAtten(student.Attendance)
  setOpen(true);
};

  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
  };
const handleSave = () => {
  if (selectedStudent) {
    const newData = data.map((std) => 
      std.id === selectedStudent.id ? { ...std, name: tempName, GPA: tempGPA, Attendance: tempAtten } : std
    );
    setData(newData);
    localStorage.setItem('studentList', JSON.stringify(newData)); 
  } else {
    const nextId = 24100 + (data.length + 1);
    const newStudent = {
     id: nextId, 
      name: tempName,
      GPA: tempGPA,
      Attendance: tempAtten,
      gender: tempGender,
      class: "10th", 
    };
    const updatedData = [...data, newStudent];
    setData(updatedData);
    localStorage.setItem('studentList', JSON.stringify(updatedData)); 
  }
  handleClose();
};
React.useEffect(() => {
  localStorage.setItem("studentList", JSON.stringify(data));
}, [data]);

const handleDelete = (id) => {
  setData(prevData => prevData.filter((student) => student.id !== id));
};
  return (
    <>
<TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '10px', width: "93%", margin: '20px auto',height:'110vh' }}>
<Box sx={{width:'auto',height:'auto',textAlign:{xs:"left",sm:'left',md:'right',lg:'right'},paddingTop:'10px',paddingBottom:'10px',paddingRight:'10px',paddingLeft:'10px',cursor:'pointer'}} onClick={() => {
setSelectedStudent(null); 
setTempName("");          
setTempGPA("");
setTempAtten("");
setTempGender("");
setOpen(true);           
}} >
<Typography sx={{color:'black',fontSize:'18px',fontFamily:'sans-serif'}}>+ Add New Student</Typography>
</Box>

<Table sx={{ minWidth: 700 }} aria-label="customized table">
  <TableHead>
      <TableRow>
        <StyledTableCell>Student ID</StyledTableCell>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell>GPA</StyledTableCell>
        <StyledTableCell align="right">Class</StyledTableCell>
        <StyledTableCell align="right">Attendance</StyledTableCell>
        <StyledTableCell align="right">Gender</StyledTableCell>
        <StyledTableCell align="center">Actions</StyledTableCell>
      </TableRow>
  </TableHead>
  <TableBody>
      {filteredData.map((student) => (
         <StyledTableRow key={student.id}>
         <StyledTableCell>{student.id}</StyledTableCell>
         <StyledTableCell><b>{student.name}</b></StyledTableCell>
         <StyledTableCell>{student.GPA}</StyledTableCell>
         <StyledTableCell align="right">{student.class}</StyledTableCell>
         <StyledTableCell align="right">{student.Attendance}%</StyledTableCell>
         <StyledTableCell align="right">{student.gender}</StyledTableCell>
         <StyledTableCell align="center">
<Box 
sx={{ 
      display: 'flex', 
      flexDirection: 'row', 
      gap: '10px', 
      justifyContent: {xs:'right',sm:'right',md:'right',lg:'center'}, 
      alignItems: 'center' ,
}}>
<Button 
  startIcon={<CreateIcon />}
  variant="contained" 
  size="small"
  onClick={() => handleOpen(student)} 
  sx={{ 
    backgroundColor: '#007d80', 
    borderRadius: '20px',
    textTransform: 'none',
    '&:hover': { backgroundColor: '#005a5c' }
  }}>
  Edit
</Button>
<Button 
  onClick={() => handleDelete(student.id)} // Delete function yahan add karein
  sx={{ 
  color: '#961414', 
  minWidth: 'auto', 
  '&:hover': { color: '#d32f2f', backgroundColor: 'rgba(150, 20, 20, 0.04)' }
  }}>
<DeleteOutlineOutlinedIcon />
</Button>
</Box>
</StyledTableCell>
                
</StyledTableRow>
))}
</TableBody>
</Table>
        
</TableContainer>

<Modal open={open} onClose={handleClose}>
<Box sx={modalStyle}>
  <IconButton 
      onClick={handleClose} 
      sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}
>
 <CloseIcon />
</IconButton>

  {/* Title */}
  <Typography 
  variant="h6" 
   sx={{ 
     mb: 3, 
     color: '#007d80', 
     fontWeight: 'bold',
     fontSize: { xs: '1.1rem', sm: '1.25rem' } 
  }}
 >
  {selectedStudent ? "Edit Student" : "Add New Student"}
 </Typography>
 {/* Input Fields */}
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
   <TextField 
    label="Name" 
     variant="outlined"
    fullWidth
    value={tempName} 
    onChange={(e) => setTempName(e.target.value)} 
    sx={{ mb: 2 }}
/>
<TextField 
  label="GPA" 
  variant="outlined"
  fullWidth
  value={tempGPA} 
  onChange={(e) => setTempGPA(e.target.value)}
  sx={{ mb: 2 }} 
/>

<TextField 
  label="Attendance" 
  variant="outlined"
  fullWidth
  value={tempAtten} 
  onChange={(e) => setTempAtten(e.target.value)}
  sx={{ mb: 2 }} 
/>

{!selectedStudent && (
  <TextField 
    label="Gender" 
    variant="outlined"
    fullWidth
    value={tempGender} 
    onChange={(e) => setTempGender(e.target.value)}
    sx={{ mb: 2 }} 
    placeholder="Male / Female"
  />
)}
    </Box>

    {/* Action Buttons */}
    <Box 
sx={{ 
  display: 'flex', 
  flexDirection: { xs: 'column-reverse', sm: 'row' }, // Mobile par buttons ek ke upar ek
  justifyContent: 'flex-end', 
  gap: 2, 
  mt: 3 
}}
    >
<Button 
  onClick={handleClose} 
  variant="outlined" 
  fullWidth={false} // Default behavior
  sx={{ 
    color: '#007d80', 
    borderColor: '#007d80',
    width: { xs: '100%', sm: 'auto' } // Mobile par button full width
  }}
>
  Cancel
</Button>
<Button 
  variant="contained" 
  onClick={handleSave} 
  sx={{ 
    backgroundColor: '#007d80',
    '&:hover': { backgroundColor: '#005d60' },
    width: { xs: '100%', sm: 'auto' } // Mobile par button full width
  }}
>
  {selectedStudent ? "Save Changes" : "Add Student"}
</Button>
    </Box>
  </Box>
</Modal>
</>
);}