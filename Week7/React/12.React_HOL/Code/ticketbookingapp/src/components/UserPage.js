import React from 'react';

export default function UserPage({ onLogout }) {
  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h1>Book Your Ticket</h1>
      <p>Select a flight and confirm your seat:</p>
      <ul>
        <li>
          Flight A123 — <button>Book Seat</button>
        </li>
        <li>
          Flight B456 — <button>Book Seat</button>
        </li>
        <li>
          Flight C789 — <button>Book Seat</button>
        </li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
