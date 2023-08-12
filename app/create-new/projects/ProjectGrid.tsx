// components/ProjectGrid.tsx
import React from 'react';

interface Project {
    name: string;
    description: string;
}

interface ProjectGridProps {
    projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
    if (!projects || projects.length === 0) {
        return <p>No projects available.</p>;
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                >
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600">{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectGrid;
