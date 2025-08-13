import React from 'react';

export default function GuestPage({ onLogin }) {
  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h1>Welcome, Guest!</h1>
      <p>Browse our flight schedules below.</p>
      <ul>
        <li>Flight A123 — 10:00 AM → 12:00 PM</li>
        <li>Flight B456 — 2:00 PM → 4:30 PM</li>
        <li>Flight C789 — 6:00 PM → 8:45 PM</li>
      </ul>
      <button onClick={onLogin}>Login to Book</button>
    </div>
);
}
