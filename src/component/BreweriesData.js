import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardView from './CardView';
import '../style/card.css';

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

  const searchStyle = {
    margin: 30,
    width: '60%',
  };
  return (
    <>
      <input
        style={searchStyle}
        placeholder="Search by City"
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <button>Search Brewey</button>
      <div className="container">
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
    </>
  );
};

export default BreweriesData;
