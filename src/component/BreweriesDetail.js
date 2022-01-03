import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const BreweriesDetail = () => {
  let { id } = useParams();
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const users = await axios.get(
        'https://api.openbrewerydb.org/breweries/' + id
      );
      setUsers(users.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="cardDetail">
      <h1 className="detail-info"> {users.name} info</h1>

      <p>
        <strong>Name:</strong> {users.name}
      </p>
      <p>
        <strong>Brewery Type:</strong> {users.brewery_type}
      </p>
      <p>
        <strong>Street:</strong> {users.street}
      </p>
      <p>
        <strong>Address 2:</strong> {users.address_2}
      </p>
      <p>
        <strong>Address 3:</strong> {users.address_3}
      </p>
      <p>
        <strong>City:</strong> {users.city}
      </p>
      <p>
        <strong>State:</strong> {users.state}
      </p>
      <p>
        <strong>Country Province:</strong> {users.country_province}
      </p>
      <p>
        <strong>Postal Code:</strong> {users.postal_code}
      </p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained">Go Back</Button>
      </Link>
    </div>
  );
};

export default BreweriesDetail;
