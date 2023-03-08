import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';


function ResponsiveAppBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent: 'space-around', gap: '20em'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Bill Xu
          </Typography>


          <Box sx={{ flexGrow: 0 }} onClick={() => {window.open("https://www.linkedin.com/in/billxu44/")}}>
            <Tooltip title="To my LinkedIn!">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Me" src="https://media.licdn.com/dms/image/C5603AQEUPUuBvrtxgA/profile-displayphoto-shrink_200_200/0/1652272450545?e=1683763200&v=beta&t=wFoHkEj3lsYbaNGL8QbteNTdZvjpCaDUBZyHkWXcdEw" />
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;