import { useState, useEffect } from 'react';
import API from '../api';

export default function AdminDashboard() {
  const [departments, setDepartments] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', image_url: '', contact_info: '' });

  useEffect(() => {
    API.get('/departments').then(res => setDepartments(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post('/departments', form);
    setDepartments([...departments, res.data]);
    setForm({ name: '', description: '', image_url: '', contact_info: '' });
  };

  const handleDelete = async (id) => {
    await API.delete(`/departments/${id}`);
    setDepartments(departments.filter(d => d.id !== id));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Image URL" value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} />
        <input placeholder="Contact Info" value={form.contact_info} onChange={e => setForm({ ...form, contact_info: e.target.value })} />
        <button type="submit">Add Department</button>
      </form>

      <ul>
        {departments.map(dep => (
          <li key={dep.id}>
            {dep.name}
            <button onClick={() => handleDelete(dep.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
