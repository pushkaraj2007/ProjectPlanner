// pages/projects.tsx
import React from 'react';
import ProjectGrid from './ProjectGrid';

const projects = [
    {
        name: 'Project 1',
        description: 'Description for Project 1...',
    },
    {
        name: 'Project 2',
        description: 'Description for Project 2...',
    },
    {
        name: 'Project 3',
        description: 'Description for Project 3...',
    },
    {
        name: 'Project 4',
        description: 'Description for Project 4...',
    },
    {
        name: 'Project 5',
        description: 'Description for Project 5...',
    },
];

const ProjectsPage: React.FC = () => {
    return (
        <div className="container mx-auto mt-8 min-h-screen">
            <h1 className="text-2xl font-semibold mb-4 ml-3">Generated Project ideas</h1>
            <ProjectGrid projects={projects} />
        </div>
    );
};

export default ProjectsPage;
