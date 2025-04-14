import { Link } from 'react-router-dom';

function FacultyCard({ faculty }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem' }}>
      <h3>{faculty.name}</h3>
      <img src={faculty.image_url} alt={faculty.name} width="150" />
      <p>{faculty.bio}</p>
      <Link to={`/faculty/${faculty.id}`}>View Profile</Link>
    </div>
  );
}

export default FacultyCard;
