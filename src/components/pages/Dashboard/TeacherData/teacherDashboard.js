import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import TableEx from './Table'
import Navbar from './Navbar'
import Cards from './Cards'

export default function TeacherDashboard() {
const [searchQuery, setSearchQuery] = React.useState("");
return (
<Box sx={{display:'flex',flexDirection:'row',width:{xs:'100%',sm:'100%',md:'100%',lg:'100%'}}}>
<Navbar/>
<Box sx={{display:'flex',flexDirection:'column',gap:'30px',width:{xs:"100%",sm:"70%",md:"100%",lg:"100%"}}}>
<Box sx={{background:'rgb(14,29,57)',width:{xs:'90%',sm:'100%',md:'94.3%',lg:'100%'},padding:{xs:'25px',sm:'23px',md:'21px',lg:'20px'},textAlign:'center',position:'sticky',top:0,zIndex:'1000'}}>
<Typography sx={{color:'white',fontSize:'20px'}}>Teacher Dashboard</Typography>
</Box>
<Box sx={{display:'flex',flexDirection:'column',gap:"7px",width:'92%',marginTop:'30px',margin:'auto'}}>
<TextField
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
required
id="outlined-required"
placeholder="🔍 Search Students (Name or ID)" 
sx={{
  width: '100%',
  "& .MuiOutlinedInput-root": {
  borderRadius: "10px",
},
}}/>
</Box>
<Cards />
<TableEx searchQuery={searchQuery}/>
</Box>
</Box>
)
}
