import React from 'react';
import "./global.module.css"
import AppSection from "./components/AppSection";
import AppHeader from "./components/AppHeader";
import ProjectCard from "./components/ProjectCard";

const projects = ['project1', 'project2', 'project3']
export default function ButtonAppBar() {
  return (
    <>
      <AppHeader/>
      <AppSection>

        <ProjectCard
          text={'test'}
        />
      </AppSection>
    </>
  );
}