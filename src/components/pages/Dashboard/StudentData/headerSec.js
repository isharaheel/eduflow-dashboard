import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

export default function HeaderSec() {
  return (
<Box sx={{width:{xs:'100%',sm:'90%',md:"100%",lg:'100%'},height:"60px",background:'rgb(14,29,57)',position:'sticky',top:0}}>
  <Box sx={{display:'flex',flexDirection:'row',width:'200px',alignItems:'center',justifyContent:'center',gap:'10px',marginLeft:{xs:'40%',sm:'40%',md:"70%",lg:"85%"},marginTop:'10px'}}>
    <Avatar src='./images/user.png' />
   <Box sx={{display:'flex',flexDirection:'column',justifyContent:'left'}}>
    <Typography sx={{fontSize:'14px',color:'white'}}>John Doe</Typography>
    <Typography sx={{fontSize:'14px',color:'white'}}>Grade 10th</Typography>
   </Box>
  </Box>
</Box>
  )
}
