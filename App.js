import './App.css';
import Users from './Users';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]); // Corrected useState declaration

  // Use useEffect properly with an async function
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(); // Call the async function inside useEffect
  }, []);

  return (
    <div className="App">
      {data.map((obj) => {
        const { name, username, email, phone, website } = obj;
        return (
          <Users
            key={obj.id} // Important: add a unique key for each rendered component
            name={name}
            username={username}
            email={email}
            phone={phone}
            website={website}
          />
        );
      })}
    </div>
  );
}

export default App;