"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });
  const [editProject, setEditProject] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [statusMessage, setStatusMessage] = useState({ message: "", type: "" }); // New state for status message
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      fetchProjects();
    }
  }, [router]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/projects");
      setProjects(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setIsLoading(false);
      setStatusMessage({ message: "Failed to load projects.", type: "error" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/projects",
        newProject
      );
      setProjects([...projects, response.data]);
      setNewProject({ title: "", description: "", image: "", link: "" });
      setShowAddModal(false);
      // Display success message with SweetAlert
      Swal.fire({
        title: "Success!",
        text: "Project added successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error adding project:", error);
      // Display error message with SweetAlert
      Swal.fire({
        title: "Error!",
        text: "Failed to add project.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleEditProject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/projects/${editProject._id}`,
        editProject
      );
      const updatedProjects = projects.map((project) =>
        project._id === editProject._id ? response.data : project
      );
      setProjects(updatedProjects);
      setShowEditModal(false);
      // Display success message with SweetAlert
      Swal.fire({
        title: "Success!",
        text: "Project updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error editing project:", error);
      // Display error message with SweetAlert
      Swal.fire({
        title: "Error!",
        text: "Failed to update project.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleDeleteProject = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/projects/${projectToDelete}`
      );
      setProjects(
        projects.filter((project) => project._id !== projectToDelete)
      );
      setShowDeleteModal(false);
      // Display success message with SweetAlert
      Swal.fire({
        title: "Success!",
        text: "Project deleted successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error deleting project:", error);
      // Display error message with SweetAlert
      Swal.fire({
        title: "Error!",
        text: "Failed to delete project.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Status Message */}
      {statusMessage.message && (
        <div
          className={`p-4 mb-4 text-white rounded ${
            statusMessage.type === "success" ? "bg-green-500" : "bg-red-500"
          } animate__animated animate__fadeIn`}
        >
          {statusMessage.message}
        </div>
      )}

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Add New Project
            </h2>
            <form onSubmit={handleAddProject} className="space-y-4">
              <input
                type="text"
                name="title"
                value={newProject.title}
                onChange={handleInputChange}
                placeholder="Project Title"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
                placeholder="Project Description"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="image"
                value={newProject.image}
                onChange={handleInputChange}
                placeholder="Image URL"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="link"
                value={newProject.link}
                onChange={handleInputChange}
                placeholder="Project Link"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Add Project
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400 transition duration-200"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Project Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Edit Project
            </h2>
            <form onSubmit={handleEditProject} className="space-y-4">
              <input
                type="text"
                name="title"
                value={editProject.title}
                onChange={handleEditChange}
                placeholder="Project Title"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="description"
                value={editProject.description}
                onChange={handleEditChange}
                placeholder="Project Description"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="image"
                value={editProject.image}
                onChange={handleEditChange}
                placeholder="Image URL"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="link"
                value={editProject.link}
                onChange={handleEditChange}
                placeholder="Project Link"
                className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400 transition duration-200"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Project Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Delete Project
            </h2>
            <p className="text-gray-600">
              Are you sure you want to delete this project?
            </p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={handleDeleteProject}
                className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-200"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Project Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="bg-green-500 text-white py-2 px-4 rounded mb-6 hover:bg-green-600"
      >
        Add New Project
      </button>

      {/* Project List Table */}
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-20"
                  />
                </td>
                <td className="px-4 py-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => {
                      setEditProject(project);
                      setShowEditModal(true);
                    }}
                    className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setProjectToDelete(project._id);
                      setShowDeleteModal(true);
                    }}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
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
