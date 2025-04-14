import { Link } from 'react-router-dom';

function DepartmentCard({ department }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
      <h2>{department.name}</h2>
      <img src={department.image_url} alt={department.name} width="200" />
      <p>{department.description}</p>
      <Link to={`/departments/${department.id}`}>View Details</Link>
    </div>
  );
}

export default DepartmentCard;
