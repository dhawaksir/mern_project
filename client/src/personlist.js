import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PersonList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/people')
      .then(response => {
        setPeople(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>People List</h1>
      <ul>
        {people.map(person => (
          <li key={person._id}>
            {person.firstName} {person.lastName}, Age: {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;
