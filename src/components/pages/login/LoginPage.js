import React, { useState, useContext } from 'react'
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/Auth';

export default function LoginPage({ setIsLoggedIn }) {
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'teacher@school.com') {
      login('teacher')
      alert('Welcome Teacher!');
      navigate('/TeacherDashboard');
    }
    else if (email === 'student@school.com') {
      login('student')
      alert('Welcome Student!');
      navigate('/StudentDashboard');
    }
    else {
      alert('wrong email');
    }
  };

  return (
<Box 
 component="form" 
  onSubmit={handleLogin} 
  sx={{
  width: { xs: '85%', sm: '60%', md: '40%', lg: '28%' }, 
  maxWidth: '450px',   
  minHeight: "550px", 
  margin: 'auto',
  marginTop: { xs: '20%', md: '8%' }, 
  borderRadius: '15px',
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px 20px', 
  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)' 
}}>
<img src='./images/logopor.png' alt='logo' style={{ width: '70px' }} />
    
<Typography sx={{ fontSize: '30px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
   EduFlow
</Typography>
      
<Typography 
  sx={{ 
    fontSize: { xs: '20px', sm: '24px' }, 
    fontFamily: 'sans-serif', 
    fontWeight: 'bold', 
    marginTop: '20px',
    textAlign: 'center' 
  }}>
  Sign In To Your Unified Portal
</Typography>

   {/* Email Section */}
<Box sx={{ display: 'flex', flexDirection: 'column', gap: "7px", width: '100%', marginTop: '30px' }}>
  <Typography sx={{ fontSize: '15px', fontWeight: 'bold', ml: 1 }}>User ID OR Email</Typography>
  <TextField
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    placeholder="user@domain.com"
    sx={{
      width: '100%',
      "& .MuiOutlinedInput-root": { borderRadius: "40px" },
    }} 
/>
</Box>
<Box sx={{ display: 'flex', flexDirection: 'column', gap: "7px", width: '100%', marginTop: '20px' }}>
<Typography sx={{ fontSize: '15px', fontWeight: 'bold', ml: 1 }}>Password</Typography>
<TextField 
  type="password" 
  autoComplete="current-password" 
  defaultValue='.......'
  sx={{
    width: '100%',
    "& .MuiOutlinedInput-root": { borderRadius: "40px" },
   }} 
/>
</Box>
<Button 
  type='submit' 
  variant="contained"
    sx={{
    width: '100%',
    background: 'rgb(0,125,128)',
    textTransform: 'none',
    borderRadius: '40px', 
    fontSize: '18px',
    color: 'white',
    marginTop: '30px',
    padding: '10px',
    '&:hover': { background: 'rgb(0,105,108)' }
  }}
>
  Sign In
</Button>

<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px', marginTop: '30px' }}>
<Typography sx={{ fontFamily: 'sans-serif', fontSize: '14px' }}>
    New to EduFlow?
</Typography>
<Typography 
  sx={{ 
    textDecoration: 'underline', 
    cursor: 'pointer', 
    fontSize: '14px',
    color: 'rgb(0,125,128)',
    fontWeight: 'bold'
   }}
>
Contact Administration
</Typography>
</Box>
</Box>
)}