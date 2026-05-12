import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

// Sample Data
const data = [
  { name: 'Term 1', English: 60, Math: 45, Physics: 75, Biology: 50, History: 75, Art: 60 },
  { name: 'Term 2', English: 75, Math: 52, Physics: 60, Biology: 75, History: 70, Art: 70 },
  { name: 'Term 3', English: 82, Math: 70, Physics: 80, Biology: 52, History: 60, Art: 75 },
  { name: 'Term 4', English: 85, Math: 72, Physics: 72, Biology: 78, History: 85, Art: 62 },
  { name: 'Term 5', English: 78, Math: 85, Physics: 65, Biology: 75, History: 75, Art: 75 },
];

const AcademicChart = () => {
  return (
    <Paper 
      sx={{ 
        p: { xs: 2, sm: 3 }, 
        borderRadius: '16px', 
        boxShadow: '0px 10px 30px rgba(0,0,0,0.05)',
        width: {xs:'80%',sm:'80%',md:"90%",lg:'88%'},
        overflow: 'hidden' // Mobile par scroll na aaye isliye
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 2, 
          fontWeight: 'bold', 
          fontSize: { xs: '1rem', sm: '1.25rem' } 
        }}
      >
        Academic Performance
      </Typography>
      
      {/* Yeh Box sabse zaroori hai height ke liye */}
      <Box sx={{ width: '100%', height: { xs: 300, sm: 350, md: 400,lg:300 } }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data} 
            margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 11 }} 
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 11 }}
              domain={[0, 100]} 
            />
            
            <Tooltip 
              contentStyle={{ 
                borderRadius: '10px', 
                border: 'none', 
                boxShadow: '0px 5px 15px rgba(0,0,0,0.1)' 
              }}
            />
            
            <Legend 
              verticalAlign="top" 
              height={50} 
              iconType="circle" 
              wrapperStyle={{ fontSize: '12px', paddingBottom: '10px' }}
            />

            {/* Lines */}
            <Line type="monotone" dataKey="English" stroke="#1d4558" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Math" stroke="#f06292" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Physics" stroke="#ffb74d" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Biology" stroke="#4db6ac" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="History" stroke="#7986cb" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="Art" stroke="#ffd54f" strokeWidth={3} dot={{ r: 3 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default AcademicChart;