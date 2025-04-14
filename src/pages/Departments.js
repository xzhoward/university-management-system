import { useEffect, useState } from 'react';
import API from '../api';
import DepartmentCard from '../components/DepartmentCard';

function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const res = await API.get('/departments');
        setDepartments(res.data);
      } catch (err) {
        console.error('Error fetching departments:', err);
      }
    }
    fetchDepartments();
  }, []);

  return (
    <div>
      <h1>Hogwarts Houses</h1>
      {departments.map((dep) => (
        <DepartmentCard key={dep.id} department={dep} />
      ))}
    </div>
  );
}

export default Departments;
