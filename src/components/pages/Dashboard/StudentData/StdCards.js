import { Box, Typography } from '@mui/material'
import React from 'react'
import { PiChartLineUpLight } from 'react-icons/pi'
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';

export default function StdCards() {
return (
<Box sx={{width:{xs:'90%',sm:'80%',md:'95%',lg:'95%'},height:{xs:'auto',sm:'auto',md:"310px",lg:'150px'},display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},gap:{xs:'20px',sm:'20px',md:'20px',lg:'30px'},alignItems:{xs:'center',sm:'center',md:'center',lg:'center'},margin:'auto'}}>
{/* card 1 */}
<Box sx={{width:{xs:'80%',sm:'90%',md:"50%",lg:'500px'},padding:'25px',display:'flex',flexDirection:'row',gap:'10px',background:'rgb(20,55,72)',borderRadius:'20px'}}>
<Box 
  sx={{
    // Box size responsive hai
    width: { xs: '60px', sm: '80px', md: '70px', lg: '80px' }, 
    height: { xs: '60px', sm: '80px', md: '70px', lg: '80px' }, // Height fix karni hogi round shape ke liye
    border: '1px solid rgb(29,69,88)',
    boxShadow: '0px 0px 15px 5px rgb(29,69,88)',
    borderRadius: '100%',
    display: 'flex',           // Center karne ke liye flex best hai
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: 'transparent',
  }}
>
  <PiChartLineUpLight 
    style={{
      color: 'white',
      // Icon ka size responsive banane ka asli tareeka:
      fontSize: 'clamp(30px, 5vw, 70px)', 
      marginTop: '4px' 
    }} 
  />
</Box>
<Box sx={{width:{xs:'50%',sm:'50%',md:"auto",lg:"30%"},display:'flex',flexDirection:'column',gap:'7px',alignItems:'center',justifyContent:'center'}}>
<Typography sx={{fontSize:'14px',color:'white'}}>Your GPA</Typography>
<Typography sx={{fontSize:'20px',color:'white'}}>3.72</Typography>
<Typography sx={{fontSize:'14px',color:'rgb(74,185,128)',fontWeight:'bold'}}>Good Standing</Typography>
</Box>
</Box>
{/* 2 card */}
<Box sx={{width:{xs:'80%',sm:'90%',md:"50%",lg:'500px'},padding:'25px',display:'flex',flexDirection:'row',gap:'10px',background:'rgb(30,97,78)',borderRadius:'20px'}}>
<Box 
  sx={{
    // Box size responsive hai
    width: { xs: '60px', sm: '80px', md: '70px', lg: '80px' }, 
    height: { xs: '60px', sm: '80px', md: '70px', lg: '80px' }, // Height fix karni hogi round shape ke liye
    border: '1px solid rgb(50,131,98)',
    boxShadow: '0px 0px 15px 5px rgb(50,131,98)',
    borderRadius: '100%',
    display: 'flex',           // Center karne ke liye flex best hai
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: 'transparent',
  }}
>
  <EventAvailableOutlinedIcon 
    style={{
      color: 'white',
      // Icon ka size responsive banane ka asli tareeka:
      fontSize: 'clamp(30px, 5vw, 70px)', 
      marginTop: '4px' 
    }} 
  />
</Box>
<Box sx={{width:{xs:'50%',sm:'50%',md:"auto",lg:"30%"},display:'flex',flexDirection:'column',gap:'7px',alignItems:'center',justifyContent:'center'}}>
<Typography sx={{fontSize:'14px',color:'white'}}>Total Attendance</Typography>
<Typography sx={{fontSize:'20px',color:'white'}}>94.18 %</Typography>
<Typography sx={{fontSize:'14px',color:'rgb(74,185,128)',fontWeight:'bold'}}>Excellent</Typography> 
</Box>
</Box>
</Box>
)}
