'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/chanakaHetti/repos?sort=updated&per_page=3`
        );
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="w-full bg-darkbg text-white py-16">
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg p-4"
            >
              <img
                src={`/images/project.jpg`}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
