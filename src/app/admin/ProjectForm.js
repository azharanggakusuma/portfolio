import React from "react";

export default function ProjectForm({ newProject, onAddProject }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onAddProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProject(newProject);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleInputChange}
          placeholder="Project Title"
          className="block w-full mb-4 p-2 border rounded"
        />
        <textarea
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
          placeholder="Project Description"
          className="block w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          name="image"
          value={newProject.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          className="block w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          name="link"
          value={newProject.link}
          onChange={handleInputChange}
          placeholder="Project Link"
          className="block w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}
