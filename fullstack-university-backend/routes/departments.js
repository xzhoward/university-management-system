import express from 'express';
import pool from '../db.js';
const router = express.Router();

// GET all departments
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM departments');
  res.json(result.rows);
});

// GET one department with faculty
router.get('/:id', async (req, res) => {
  const deptRes = await pool.query('SELECT * FROM departments WHERE id = $1', [req.params.id]);
  const facultyRes = await pool.query('SELECT * FROM faculty WHERE department_id = $1', [req.params.id]);
  const dept = deptRes.rows[0];
  dept.faculty = facultyRes.rows;
  res.json(dept);
});

// CREATE department
router.post('/', async (req, res) => {
  const { name, description, image_url, contact_info } = req.body;
  const result = await pool.query(
    'INSERT INTO departments (name, description, image_url, contact_info) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, description, image_url, contact_info]
  );
  res.json(result.rows[0]);
});

// UPDATE department
router.put('/:id', async (req, res) => {
  const { name, description, image_url, contact_info } = req.body;
  const result = await pool.query(
    'UPDATE departments SET name=$1, description=$2, image_url=$3, contact_info=$4 WHERE id=$5 RETURNING *',
    [name, description, image_url, contact_info, req.params.id]
  );
  res.json(result.rows[0]);
});

// DELETE department
router.delete('/:id', async (req, res) => {
  await pool.query('DELETE FROM departments WHERE id=$1', [req.params.id]);
  res.json({ message: 'Deleted' });
});

export default router;
