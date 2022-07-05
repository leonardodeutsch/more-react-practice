import React, { useState, useEffect } from 'react';
import peopleData from './Data.js';

const App = () => {
  const [people, setPeople] = useState(peopleData);
  const [sortAscending, setSortAscending] = useState(true);

  const sortNames = (people, header) => {
    const peopleCopy = [...people];
    const sortedPeople = peopleCopy.sort((a, b) => {
      if (sortAscending) return a[header] > b[header] ? 1 : -1;
      return a[header] < b[header] ? 1 : -1;
    })
    setPeople(sortedPeople);
    setSortAscending(prev => !prev);
  }

  const idGenerator = () => {
    return Math.floor(Math.random() * 10000);
  }

  return (
    <div>
      <h1>hi</h1>
      <table className="people-table">
        <thead>
          <tr>
            {Object.keys(people[0]).map(header => (
              <td key={idGenerator()} onClick={() => sortNames(people, header)}>{header[0].toUpperCase() + header.slice(1)}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={idGenerator()}>
              {Object.values(person).map(info =>(
                <td key={idGenerator()}>{info}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default App;