import React from "react";

export default function ProjectTable({ isLoading, projects, onDeleteProject }) {
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Project List</h2>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Link</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td className="px-4 py-2">{project.title}</td>
              <td className="px-4 py-2">{project.description}</td>
              <td className="px-4 py-2">
                <img src={project.image} alt={project.title} className="w-20" />
              </td>
              <td className="px-4 py-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onDeleteProject(project._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
