import { Box, Typography } from '@mui/material'
import React from 'react'
import { SlCalender } from 'react-icons/sl'

export default function HeaderTwo() {
return (
<Box sx={{width:{xs:'95%',sm:"80%",md:"95%",lg:'95%'},height:{xs:'auto',sm:'auto',md:'auto',lg:'100px'},margin:'auto',display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},justifyContent:'space-between',gap:{xs:'40px',sm:'20px',md:"20px",lg:0},alignItems:'center'}}>
<Box sx={{width:{xs:'90%',sm:'80%',md:'350px',lg:'500px'},display:'flex',flexDirection:'column',gap:'10px',justifyContent:'center'}}>
<Typography sx={{fontWeight:'bold',fontSize:'30px',fontFamily:'sans-serif'}}>Welcome back, John!</Typography>
<Typography sx={{color:'gray',fontSize:"16px",fontFamily:'sans-serif'}}>Here's an overview of your academic performance</Typography>
</Box>
{/*  */}
<Box sx={{width:'250px',height:'80px',borderRadius:'10px',display:'flex',flexDirection:'row',gap:'10px',justifyContent:'center',alignItems:'center',boxShadow:'0px 0px 15px 5px white'}}>
<SlCalender/>

<Typography sx={{fontWeight:'bold',fontSize:'16px',fontFamily:'sans-serif'}}>May 13,2026</Typography>
<Typography sx={{color:'gray',fontSize:"16px",fontFamily:'sans-serif'}}>(Tuesday)</Typography>
</Box>
{/*  */}
</Box>
  )
}
