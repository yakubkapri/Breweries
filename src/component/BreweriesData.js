import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardView from './CardView';

const BreweriesData = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const getUsers = async () => {
    try {
      const users = await axios.get('https://api.openbrewerydb.org/breweries');

      setUsers(users.data);

      console.log(users.data); // testing api
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container">
      <input
        placeholder="Search by City"
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button>Search Brewey</button>

      {users
        .filter((data) => {
          if (search === '') {
            return data;
          } else if (data.city.toLowerCase().includes(search.toLowerCase())) {
            return data;
          }
        })
        .map((user) => (
          <div className="Card">
            <div className="lower-container">
              <CardView
                name={user.name}
                brewery_type={user.brewery_type}
                city={user.city}
                id={user.id}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default BreweriesData;
