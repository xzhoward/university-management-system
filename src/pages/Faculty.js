import { useEffect, useState } from 'react';
import API from '../api';
import FacultyCard from '../components/FacultyCard';

function Faculty() {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaculty() {
      try {
        const response = await API.get('/faculty');
        setFacultyList(response.data);
      } catch (err) {
        console.error('Error fetching faculty:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchFaculty();
  }, []);

  if (loading) return <p>Loading faculty...</p>;

  return (
    <div>
      <h1>Faculty</h1>
      {facultyList.map(prof => (
        <FacultyCard key={prof.id} faculty={prof} />
      ))}
    </div>
  );
}

export default Faculty;
