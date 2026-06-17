import React from 'react'
import {Avatar, Box, TextField, Typography} from '@mui/material'
import StdNavbar from './StdNav'
import { PiChartLineUpLight } from "react-icons/pi";
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import StdTable from './StdTable';
import { SlCalender } from "react-icons/sl";
import HeaderSec from './headerSec';
import StdCards from './StdCards';
import HeaderTwo from './headerTwo';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import PerformanceChart from './Chart';
import AcademicChart from './Chart';



export default function StdDashboard(){
return(
  <>
<Box sx={{display:'flex',flexDirection:'row',width:{xs:'99%',sm:'99%',md:'100%',lg:'100%'},}}>
<StdNavbar/>
<Box sx={{display:'flex',flexDirection:'column',gap:'30px',width:{xs:"100%",sm:"70%",md:"100%",lg:"100%"}}}>

<HeaderSec/>
<HeaderTwo/>
<Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:"column",lg:"row"},width:{xs:'100%',sm:'90%',md:'100%',lg:'100%'},gap:'30px'}}>
<Box sx={{width:{xs:'100%',sm:'100%',md:'100%',lg:"70%"},display:'flex',flexDirection:'column'}}>

<StdCards/>
<StdTable/>
</Box>
<Box sx={{width:{xs:'100%',sm:'100%',md:"100%",lg:"27%"},height:'auto',display:'flex',flexDirection:'column',gap:'20px',alignItems:{xs:'center',sm:'center',md:"center",lg:"normal"}}}>
<Box sx={{width:{xs:'80%',sm:'80%',md:'80%',lg:'90%'},height:'100px',padding:'20px',borderRadius:'20px',display:'flex',flexDirection:'row',gap:'30px',background:'white'}}>
<Box 
    sx={{
      width: { xs: '50px', sm: '80px', md: '60px', lg: '50px' }, 
      height: { xs: '50px', sm: '80px', md: '60px', lg: '50px' }, 
      border: '1px solid rgb(246,235,229)',
      background:'rgb(246,235,229)',
      borderRadius: '100%',
      display: 'flex',          
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      marginTop:'10px'
    }}
>
<QueryBuilderIcon 
      sx={{
        color: 'rgb(166,139,108)',
        fontSize: 'clamp(36px, 5vw, 40px)', 
        marginTop: '4px' 
      }} 
/>
</Box>
<Box sx={{width:{xs:'auto',sm:'auto',md:"auto",lg:"50%"},display:'flex',flexDirection:'column',gap:'7px',alignItems:'left',justifyContent:'center'}}>
<Typography sx={{fontSize:'18px',color:'black',fontWeight:'bold'}}>My Next Class</Typography>
<Typography sx={{fontSize:'15px',color:'gray'}}>9:30 AM-Intro to Python</Typography>
<Typography sx={{fontSize:'15px',color:'gray'}}><span style={{fontWeight:'bold',color:'black'}}>Teacher :</span> Sir Shehroz</Typography>

<Typography sx={{fontSize:'14px',color:'gray',fontWeight:'bold'}}>Room 302</Typography>
</Box>
</Box> 
 {/*  */}
<Box sx={{width:{xs:'80%',sm:'80%',md:'80%',lg:'90%'},height:'100px',padding:'20px',borderRadius:'20px',display:'flex',flexDirection:'row',gap:'30px',background:'white'}}>
<Box 
    sx={{
      // Box size responsive hai
      width: { xs: '50px', sm: '80px', md: '60px', lg: '50px' }, 
      height: { xs: '50px', sm: '80px', md: '60px', lg: '50px' }, 
      border: '1px solid rgb(231,236,234)',
      background:'rgb(231,236,234)',
      borderRadius: '100%',
      display: 'flex',          
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      marginTop:'10px'
    }}
>
<PendingActionsOutlinedIcon
 
      sx={{
        color: 'rgb(73,107,88)',
        fontSize: 'clamp(36px, 5vw, 40px)', 
        marginTop: '4px' 
      }} 
/>
</Box>
<Box sx={{width:{xs:'auto',sm:'auto',md:"auto",lg:"50%"},display:'flex',flexDirection:'column',gap:'7px',alignItems:'left',justifyContent:'center'}}>
<Typography sx={{fontSize:'18px',color:'black',fontWeight:'bold'}}>Due Soon</Typography>
<Typography sx={{fontSize:'15px',color:'gray'}}>History Essay - 12 Hours Left</Typography>
</Box>
</Box> 
{/*  */}
<AcademicChart/>
</Box>
</Box>
</Box>  


</Box>






  </>

)}