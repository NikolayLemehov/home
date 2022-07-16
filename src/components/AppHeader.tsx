import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Container} from "@mui/material";

const navItems = ['Home', 'About', 'Contact'];
export default function AppHeader() {
    return (
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
              <Container>
                  <Box sx={{ display: 'block' }}>
                      {navItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }}>
                            {item}
                        </Button>
                      ))}
                  </Box>
              </Container>
          </AppBar>
      </Box>
    );
}