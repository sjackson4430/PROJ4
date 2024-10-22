import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomePage.css';

function HomePage() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    // Fetch data from the SpaceX API
    axios.get('https://api.spacexdata.com/v4/launches')
      .then(response => {
        setLaunches(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main className="homepage-container">
      <h2>Upcoming and Past SpaceX Launches</h2>
      <div className="launches-grid">
        {launches.slice(0, 20).map(launch => (
          <div key={launch.id} className="launch-card">
            <h3>{launch.name}</h3>
            <p><strong>Date:</strong> {new Date(launch.date_utc).toLocaleDateString()}</p>
            <p><strong>Details:</strong> {launch.details ? launch.details : 'No details available.'}</p>
            <p><strong>Rocket:</strong> {launch.rocket}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomePage;