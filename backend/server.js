const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Inisialisasi Express
const app = express();
app.use(cors());
app.use(express.json());

// Koneksi ke MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/mern_projects', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Schema MongoDB
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
});

const Project = mongoose.model('Project', projectSchema);

// Routes CRUD
// GET: Ambil semua data
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// POST: Tambah data baru
app.post('/api/projects', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// PUT: Update data
app.put('/api/projects/:id', async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProject);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE: Hapus data
app.delete('/api/projects/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
