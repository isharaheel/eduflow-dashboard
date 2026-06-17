import React, { useState } from 'react';
import { Box, Typography, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 280; 

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (text) => {
    if (text === 'Logout') {
      localStorage.removeItem('token'); 
      localStorage.removeItem('userRole'); 
      navigate('/login'); 
    } else {
    }
    
    if (mobileOpen) setMobileOpen(false);
  };

  const drawerContent = (
    <Box sx={{ 
      height: "100%", 
      padding: '20px', 
      background: 'rgb(14,29,57)', 
      color: 'white' 
    }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 5 
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src='./images/log.png' alt='logo' style={{ width: '45px' }} />
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Eduflow</Typography>
        </Box>

        <IconButton 
          onClick={handleDrawerToggle} 
          sx={{ 
            display: { sm: 'none' },
            color: 'white' ,
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <List sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[
          { text: 'My Portal', icon: <HomeIcon /> },
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'Students', icon: <GroupIcon /> },
          { text: 'Grades', icon: <GradeIcon /> },
          { text: 'Logout', icon: <LogoutIcon /> },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              onClick={() => handleNavigation(item.text)} 
              sx={{
                borderRadius: '8px',
                backgroundColor: index === 0 ? 'rgba(255, 255, 255, 0.1)' : 'transparent', 
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderLeft: '4px solid #007d80',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: '45px' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ 
          mr: 2, 
          display: mobileOpen ? 'none' : { xs: 'block', sm: 'none' }, 
          position: 'fixed',
          top: 15,
          left: 20,
          zIndex: 1100, 
          bgcolor: 'rgb(14,29,57)',
          color: 'white',
          '&:hover': { bgcolor: '#007d80' }
        }}
      >
        <MenuIcon sx={{marginTop:'4px'}}/>
      </IconButton>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} 
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 'none' },
          }}
        >
          {drawerContent}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth, 
              border: 'none',
              position: 'fixed', 
              height: '100vh'
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
    </Box>
  );
}