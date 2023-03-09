import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from "react-router-dom";


export default function BasicCard() {
  const navigate = useNavigate();
  return (
    <Box  sx={{ display:'flex', justifyContent: 'center', alignItems: 'center', paddingTop:'18em'}}> 
    <Card sx={{ minWidth: 275, maxWidth: 500}}>
      <CardContent>
        <Typography variant="h5" component="div">
          Why is the background like that?
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Because it represents me and what I enjoy!
        </Typography>
        <Typography variant="body2">
          
        I could've put a nice interactive background that draws geometry when you hover over it
          <br />
          <br />
        There was even an among us constellation but, I think its a nice compromise!
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" variant="outlined" onClick={() => {navigate("/projects");}}>My projects</Button>
      </CardActions>
    </Card>
    </Box>
  );
}