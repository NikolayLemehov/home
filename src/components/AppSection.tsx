import React from 'react';
import {Box, Container, Typography} from "@mui/material";

interface IProps {
  children: React.ReactNode
}

const AppSection: React.FC<IProps> = ({children}) => {
  return (
    <Box sx={{p: 2}}>
      <Container>
        <Typography variant='h4'>AppSection</Typography>
        {children}
      </Container>
    </Box>
  );
};

export default AppSection;