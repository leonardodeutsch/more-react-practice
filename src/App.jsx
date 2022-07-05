import React, { useState, useEffect } from 'react';
import peopleData from './Data.js';

const App = () => {
  const [people, setPeople] = useState(peopleData);
  const [sortAscending, setSortAscending] = useState(true);
  const [nameSearched, setNameSearched] = useState('');
  const [filteredPeople, setFilteredPeople] = useState(peopleData);

  useEffect(() => {
    setFilteredPeople(people.filter(person => person.name.toLowerCase().includes(nameSearched.toLowerCase())));
  }, [nameSearched, people]);


  const sortNames = (people, header) => {
    const peopleCopy = [...people];
    const sortedPeople = peopleCopy.sort((a, b) => {
      if (sortAscending) return a[header] > b[header] ? 1 : -1;
      return a[header] < b[header] ? 1 : -1;
    })
    setPeople(sortedPeople);
    setSortAscending(prev => !prev);
  }

  const searchName = (e) => {
    setNameSearched(e.target.value);
  }

  const idGenerator = () => {
    return Math.floor(Math.random() * 10000);
  }

  return (
    <div>
      <h1>hi</h1>
      <button className="my-button">hello</button>
      <input type="text" className="search-name" onChange={searchName}/>
      <table className="people-table">
        <thead>
          <tr>
            {Object.keys(people[0]).map(header => (
              <td key={idGenerator()} onClick={() => sortNames(people, header)}>{header[0].toUpperCase() + header.slice(1)}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map(person => (
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