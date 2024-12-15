"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProjectForm from "./ProjectForm";
import ProjectTable from "./ProjectTable";
import { fetchProjects, addProject, deleteProject } from "../utils/api";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newProject, setNewProject] = useState({ title: "", description: "", image: "", link: "" });
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
      loadProjects();
    }
  }, [router]);

  const loadProjects = async () => {
    try {
      const data = await fetchProjects();
      setProjects(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setIsLoading(false);
    }
  };

  const handleAddProject = async (newProjectData) => {
    try {
      const addedProject = await addProject(newProjectData);
      setProjects((prevProjects) => [...prevProjects, addedProject]);
      setNewProject({ title: "", description: "", image: "", link: "" });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
      setProjects((prevProjects) => prevProjects.filter((project) => project._id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Form to add new project */}
      <ProjectForm newProject={newProject} onAddProject={handleAddProject} />

      {/* Table to display projects */}
      <ProjectTable
        isLoading={isLoading}
        projects={projects}
        onDeleteProject={handleDeleteProject}
      />
    </div>
  );
}
