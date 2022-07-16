import React from 'react';
import {Card, Typography} from "@mui/material";

interface IProps {
  text: string
}

const ProjectCard: React.FC<IProps> = ({text}) => {
  return (
    <Card sx={{maxWidth: 345, minHeight: 300, padding: 2}}>
      <Typography>{text}</Typography>
    </Card>
  );
};

export default ProjectCard;