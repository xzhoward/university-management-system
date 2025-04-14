import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../api';

function FacultyDetail() {
  const { id } = useParams();
  const [prof, setProf] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await API.get(`/faculty/${id}`);
      setProf(res.data);
    }
    fetchData();
  }, [id]);

  if (!prof) return <p>Loading...</p>;

  return (
    <div>
      <h1>{prof.name}</h1>
      <img src={prof.image_url} width="200" />
      <p>{prof.bio}</p>
      <p>Email: {prof.email}</p>
      <p>Contact: {prof.contact_info}</p>
      <p>Department ID: {prof.department_id}</p>
    </div>
  );
}

export default FacultyDetail;
