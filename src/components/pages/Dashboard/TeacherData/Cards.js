import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Cards() {
  return (
<Box sx={{width:'100%',height:'auto',display:'flex',flexDirection:{xs:'column',sm:'column',md:'column',lg:'row'},gap:'30px',alignItems:'center',justifyContent:'center'}}>
<Box sx={{width:{xs:'80%',sm:"70%",md:'80%',lg:'26%'},height:"120px",padding:'20px',borderLeft:'10px solid rgb(86, 111, 128)',borderBottom:'10px solid rgb(86, 111, 128)',borderTop:'4px solid rgb(86, 111, 128)',borderRight:'4px solid rgb(86, 111, 128)',borderRadius:'10px',background:'rgb(16,60,87)'}}>
<Typography sx={{color:'white',fontFamily:'sans-serif',fontSize:'30px'}}>Active Students :</Typography>
<Typography sx={{color:'white',fontSize:'30px',fontWeight:'bold',fontFamily:'sans-serif',marginTop:'10px'}}>120</Typography>
</Box>
<Box sx={{width:{xs:'80%',sm:"70%",md:'80%',lg:'26%'},height:"120px",padding:'20px',borderLeft:'10px solid rgb(183, 159, 98)',borderBottom:'10px solid rgb(183, 159, 98)',borderTop:'4px solid rgb(183, 159, 98)',borderRight:'4px solid rgb(183, 159, 98)',borderRadius:'10px',background:'rgb(195,160,79)'}}>
<Typography sx={{color:'white',fontFamily:'sans-serif',fontSize:'30px'}}>Average GPA :</Typography>
<Typography sx={{color:'white',fontSize:'30px',fontWeight:'bold',fontFamily:'sans-serif',marginTop:'10px'}}>3.5</Typography>
  </Box>
 <Box sx={{width:{xs:'80%',sm:"70%",md:'80%',lg:'26%'},height:"120px",padding:'20px',border:'1px solid black',borderLeft:'10px solid rgb(27, 89, 80)',borderBottom:'10px solid rgb(27, 89, 80)',borderTop:'4px solid rgb(27, 89, 80)',borderRight:'4px solid rgb(27, 89, 80)',borderRadius:'10px',background:'rgb(40,132,120)'}}>
<Typography sx={{color:'white',fontFamily:'sans-serif',fontSize:'30px'}}>Attendance :</Typography>
<Typography sx={{color:'white',fontSize:'30px',fontWeight:'bold',fontFamily:'sans-serif',marginTop:'10px'}}>92%</Typography>
</Box>
</Box>
)}
