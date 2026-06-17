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
import { Box, Modal, Typography, TextField, IconButton, Avatar, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import FilterListIcon from '@mui/icons-material/FilterList';

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
  }
}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '85%', sm: 450 }, 
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
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0 && !parsed[0].hasOwnProperty('sub')) {
        localStorage.removeItem("studentList"); 
        return studentsData; 
      }
      return parsed;
    }
    return studentsData; 
  });
  const [selectedSubject, setSelectedSubject] = React.useState('All');


  const filteredData = data.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.id.toString().includes(searchQuery);
    
    const matchesSubject = selectedSubject === 'All' || 
                           (student.sub && student.sub.toLowerCase() === selectedSubject.toLowerCase());

    return matchesSearch && matchesSubject;
  });

  const [open, setOpen] = React.useState(false);
  const [selectedStudent, setSelectedStudent] = React.useState(null);
  const [tempName, setTempName] = React.useState("");
  const [tempGPA, setTempGPA] = React.useState("");
  const [tempAtten , setTempAtten] = React.useState("");
  const [tempGender , setTempGender] = React.useState("");
  const [tempTeacher, setTempTeacher] = React.useState(""); 
  const [tempSub, setTempSub] = React.useState(""); 

  const [profileOpen, setProfileOpen] = React.useState(false);
  const [activeProfile, setActiveProfile] = React.useState(null);

  const handleOpen = (student) => {
    setSelectedStudent(student);
    setTempName(student.name); 
    setTempGPA(student.GPA); 
    setTempAtten(student.Attendance);
    setTempGender(student.gender);
    setTempTeacher(student.teacher || "");
    setTempSub(student.sub || ""); 
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
  };

  const handleSave = () => {
    if (selectedStudent) {
      const newData = data.map((std) => 
        std.id === selectedStudent.id 
          ? { ...std, name: tempName, GPA: tempGPA, Attendance: tempAtten, sub: tempSub, teacher: tempTeacher } 
          : std
      );
      setData(newData);
      localStorage.setItem('studentList', JSON.stringify(newData)); 
    } else {
      const nextId = 24100 + (data.length + 1);
      const newStudent = {
        id: nextId.toString(), 
        name: tempName,
        GPA: parseFloat(tempGPA) || 0.0,
        Attendance: parseInt(tempAtten) || 0,
        gender: tempGender,
        class: "10th", 
        sub: tempSub,
        teacher: tempTeacher || "Sarah Miller" 
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

  const handleStudentClick = (student) => {
    setActiveProfile(student);
    setProfileOpen(true);
  };

  const handleProfileClose = () => {
    setProfileOpen(false);
    setActiveProfile(null);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '10px', width: "93%", margin: '20px auto', height: '110vh',paddingTop:{xs:"20px",sm:'20px',md:'0px',lg:'0px'} }}>
        <Box sx={{width:'auto',display:'flex',flexDirection:{xs:'column',sm:'column',md:"row",lg:'row'},gap:'20px',alignItems:'center',justifyContent:'right'}}>
          <FormControl size="small" sx={{ minWidth: 180 }}>
                    <InputLabel id="subject-filter-label" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <FilterListIcon fontSize="small" />Filter Subj
                    </InputLabel>
                    <Select
                      labelId="subject-filter-label"
                      id="subject-filter"
                      value={selectedSubject}
                      label="Filter Subject"
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      sx={{ borderRadius: '8px' }}
                    >
                      <MenuItem value="All">All Subjects</MenuItem>
                      <MenuItem value="computer">Computer / IT</MenuItem>
                      <MenuItem value="science">Science</MenuItem>
                    </Select>
           </FormControl>
        <Box sx={{ width: 'auto', height: 'auto', textAlign: { xs: "left", sm: 'left', md: 'right', lg: 'right' }, paddingTop: '10px', paddingBottom: '10px', paddingRight: '10px', paddingLeft: '10px', cursor: 'pointer'}} 
          onClick={() => {
            setSelectedStudent(null); 
            setTempName("");          
            setTempGPA("");
            setTempAtten("");
            setTempGender("");
            setTempTeacher("");
            setTempSub("");
            setOpen(true);           
          }} 
        >
          
         
           
          <Button sx={{ color: 'black', fontSize: '15px', fontFamily: 'sans-serif', fontWeight: '500' ,fontWidth:'bold',textTransform:'none',borderRadius:'10%',background:"#007D80",padding:'10px',color:'white'}}>+ Add New Student</Button>
          </Box>
</Box>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Student ID</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>GPA</StyledTableCell>
              <StyledTableCell align="right">Class</StyledTableCell>
              <StyledTableCell align="right">Subject</StyledTableCell>
              <StyledTableCell align="right">Teacher Name</StyledTableCell>
              <StyledTableCell align="right">Attendance</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((student) => (
              <StyledTableRow key={student.id}>
                <StyledTableCell>{student.id}</StyledTableCell>
                
                <StyledTableCell>
                  <span 
                    onClick={() => handleStudentClick(student)}
                    style={{ cursor: 'pointer', color: '#1e293b', fontWeight: 'bold' }}
                    onMouseEnter={(e) => e.target.style.color = '#007d80'}
                    onMouseLeave={(e) => e.target.style.color = '#1e293b'}
                  >
                    {student.name}
                  </span>
                </StyledTableCell>
                
                <StyledTableCell>{student.GPA}</StyledTableCell>
                <StyledTableCell align="right">{student.class}</StyledTableCell>
                
                <StyledTableCell align="right" sx={{ fontWeight: '500', color: '#555' }}>
                  {student.sub || "N/A"} 
                </StyledTableCell>
                
                <StyledTableCell align="right" sx={{ fontWeight: '500', color: '#555' }}>
                  {student.teacher || "N/A"} 
                </StyledTableCell>
                
                <StyledTableCell align="right">{student.Attendance}%</StyledTableCell>
                <StyledTableCell align="right">{student.gender}</StyledTableCell>
                <StyledTableCell align="center">
                  <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
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
                      }}
                    >
                      Edit
                    </Button>
                    <IconButton 
                      onClick={() => handleDelete(student.id)}
                      sx={{ color: '#961414', '&:hover': { color: '#d32f2f', backgroundColor: 'rgba(150, 20, 20, 0.04)' } }}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 1. NEW: Student Profile Context Modal (Alert ki jaga yeh open hoga) */}
      <Modal open={profileOpen} onClose={handleProfileClose}>
        <Box sx={{ ...modalStyle, textAlign: 'center', p: 4 }}>
          <IconButton onClick={handleProfileClose} sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}>
            <CloseIcon />
          </IconButton>

          <Avatar sx={{ bgcolor: '#007d80', width: 70, height: 70, margin: '0 auto 15px auto' }}>
            <PersonIcon sx={{ fontSize: 40 }} />
          </Avatar>

          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1e293b', mb: 0.5 }}>
            {activeProfile?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.600', mb: 3 }}>
            Student ID: {activeProfile?.id} ({activeProfile?.class} Class)
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, textAlign: 'left', px: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 'bold', color: '#555' }}>Enrolled Course:</Typography>
              <Typography sx={{ color: '#007d80', fontWeight: '500' }}>{activeProfile?.sub || 'Not Assigned'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 'bold', color: '#555' }}>Assigned Teacher:</Typography>
              <Typography sx={{ color: '#1e293b' }}>{activeProfile?.teacher || 'Not Assigned'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 'bold', color: '#555' }}>Current GPA:</Typography>
              <Typography sx={{ color: '#1e293b' }}>{activeProfile?.GPA}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 'bold', color: '#555' }}>Attendance:</Typography>
              <Typography sx={{ color: activeProfile?.Attendance >= 75 ? 'green' : 'red', fontWeight: '500' }}>
                {activeProfile?.Attendance}%
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontWeight: 'bold', color: '#555' }}>Gender:</Typography>
              <Typography sx={{ color: '#1e293b' }}>{activeProfile?.gender}</Typography>
            </Box>
          </Box>

          <Button 
            onClick={handleProfileClose} 
            variant="contained" 
            sx={{ mt: 4, backgroundColor: '#007d80', '&:hover': { backgroundColor: '#005d60' }, width: '100%', borderRadius: '8px' }}
          >
            Close Profile
          </Button>
        </Box>
      </Modal>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}>
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" sx={{ mb: 3, color: '#007d80', fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
            {selectedStudent ? "Edit Student" : "Add New Student"}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <TextField label="Name" variant="outlined" fullWidth value={tempName} onChange={(e) => setTempName(e.target.value)} sx={{ mb: 2 }} />
            <TextField label="GPA" variant="outlined" fullWidth value={tempGPA} onChange={(e) => setTempGPA(e.target.value)} sx={{ mb: 2 }} />
            <TextField label="Attendance" variant="outlined" fullWidth value={tempAtten} onChange={(e) => setTempAtten(e.target.value)} sx={{ mb: 2 }} />
            <TextField label="Subject" variant="outlined" fullWidth value={tempSub} onChange={(e) => setTempSub(e.target.value)} sx={{ mb: 2 }} placeholder="Computer / Science" />
            <TextField label="Teacher Name" variant="outlined" fullWidth value={tempTeacher} onChange={(e) => setTempTeacher(e.target.value)} sx={{ mb: 2 }} placeholder="e.g. Sarah Miller" />
            
            {!selectedStudent && (
              <TextField label="Gender" variant="outlined" fullWidth value={tempGender} onChange={(e) => setTempGender(e.target.value)} sx={{ mb: 2 }} placeholder="Male / Female" />
            )}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, justifyContent: 'flex-end', gap: 2, mt: 3 }}>
            <Button onClick={handleClose} variant="outlined" sx={{ color: '#007d80', borderColor: '#007d80', width: { xs: '100%', sm: 'auto' } }}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSave} sx={{ backgroundColor: '#007d80', '&:hover': { backgroundColor: '#005d60' }, width: { xs: '100%', sm: 'auto' } }}>
              {selectedStudent ? "Save Changes" : "Add Student"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}