'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Ambil data dari backend
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-neutral-900 text-white py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-bold text-3xl sm:text-4xl text-white">
          My <span className="text-yellow-500">Projects</span>
        </h2>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt="Project Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white text-left">
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-2 text-left">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
