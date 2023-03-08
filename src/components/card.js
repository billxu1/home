import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Box  sx={{ display:'flex', justifyContent: 'center', alignItems: 'center'}}> 
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

            <br />
            <br />
        (If you see this pls help me i dont know how to center a div/or source an image properly the wok is accessed from the internet)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">My projects</Button>
      </CardActions>
    </Card>
    </Box>
  );
}