"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newProject, setNewProject] = useState({ title: "", description: "", image: "", link: "" });
  const [editingProject, setEditingProject] = useState(null); // Untuk menyimpan proyek yang sedang diedit
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login"); // Jika belum login, arahkan ke halaman login
    } else {
      fetchProjects();
    }
  }, [router]);

  // Fetch data proyek dari API atau backend
  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/projects");
      setProjects(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setIsLoading(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit untuk menambah proyek baru
  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/projects", newProject);
      setProjects([...projects, response.data]); // Menambahkan proyek baru ke daftar
      setNewProject({ title: "", description: "", image: "", link: "" }); // Reset form
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  // Handle edit proyek
  const handleEditProject = (project) => {
    setEditingProject(project); // Set proyek yang akan diedit
    setNewProject(project); // Isi form dengan data proyek yang dipilih
  };

  // Handle update proyek
  const handleUpdateProject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/projects/${editingProject._id}`, newProject);
      const updatedProjects = projects.map((project) =>
        project._id === editingProject._id ? response.data : project
      );
      setProjects(updatedProjects);
      setEditingProject(null); // Reset setelah update
      setNewProject({ title: "", description: "", image: "", link: "" }); // Reset form
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  // Handle delete proyek
  const handleDeleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      setProjects(projects.filter((project) => project._id !== id)); // Hapus proyek dari daftar
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Form untuk menambah atau mengedit proyek */}
      <h2 className="text-xl font-semibold mb-4">{editingProject ? "Edit Project" : "Add New Project"}</h2>
      <form onSubmit={editingProject ? handleUpdateProject : handleAddProject} className="mb-6">
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
          {editingProject ? "Update Project" : "Add Project"}
        </button>
      </form>

      {/* Tabel untuk menampilkan proyek */}
      <h2 className="text-xl font-semibold mb-4">Project List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
                    onClick={() => handleEditProject(project)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
