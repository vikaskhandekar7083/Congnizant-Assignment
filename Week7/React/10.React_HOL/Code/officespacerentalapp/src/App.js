import React from 'react';
import officeImg from './Office.jpg'; 

function App() {
  const office = {
    name: 'Downtown Suite',
    rent: 55000,
    address: '123 Main St, Metropolis'
  };

  const offices = [
    { name: 'Downtown Suite',   rent: 55000, address: '123 Main St' },
    { name: 'Uptown Office',    rent: 75000, address: '456 Broad Ave' },
    { name: 'Suburb Workspace', rent: 45000, address: '789 Elm Rd' }
  ];

  const rentStyle = (amount) => ({
    color: amount > 60000 ? 'green' : 'red'
  });

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Office Space Rental Listings</h1>

      <img src={officeImg} alt="Office Space" width="300" />

      <section style={{ margin: '20px 0' }}>
        <h2>{office.name}</h2>
        <p>Address: {office.address}</p>
        <p style={rentStyle(office.rent)}>Rent: ₹{office.rent}</p>
      </section>

      <section>
        <h2>All Available Offices</h2>
        <ul>
          {offices.map((o, idx) => (
            <li key={idx} style={{ marginBottom: '10px' }}>
              <strong>{o.name}</strong><br />
              Address: {o.address}<br />
              <span style={rentStyle(o.rent)}>
                Rent: ₹{o.rent}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
