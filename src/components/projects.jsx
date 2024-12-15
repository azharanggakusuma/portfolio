"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Ambil data dari backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className="bg-neutral-900 text-white py-20" id="projects">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-bold text-3xl sm:text-4xl text-white text-center mb-12">
            My <span className="text-yellow-500">Projects</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-800 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    alt="Project Image"
                    src={project.image}
                    className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute top-0 right-0 rounded-bl-xl text-xs font-medium bg-yellow-500 text-white py-1.5 px-3 dark:bg-gray-900">
                    Completed
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="block text-xs text-gray-400">
                      Cirebon, Indonesia
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="text-xl font-bold text-white hover:text-yellow-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </a>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-400">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
                  >
                    View Website
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
