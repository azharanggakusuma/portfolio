import axios from "axios";

const API_URL = "http://localhost:5000/api/projects";

export const fetchProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching projects");
  }
};

export const addProject = async (newProject) => {
  try {
    const response = await axios.post(API_URL, newProject);
    return response.data;
  } catch (error) {
    throw new Error("Error adding project");
  }
};

export const deleteProject = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error("Error deleting project");
  }
};
