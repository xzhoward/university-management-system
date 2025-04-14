import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../api';

function DepartmentDetail() {
  const { id } = useParams();
  const [dept, setDept] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await API.get(`/departments/${id}`);
      setDept(res.data);
    }
    fetchData();
  }, [id]);

  if (!dept) return <p>Loading...</p>;

  return (
    <div>
      <h1>{dept.name}</h1>
      <img src={dept.image_url} width="200" />
      <p>{dept.description}</p>
      <h2>Faculty</h2>
      <ul>
        {dept.faculty.map(f => (
          <li key={f.id}>{f.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentDetail;
