import React from 'react';

export default function ListOfPlayers() {
  const players = [
    { name: 'Dhoni', score: 85 },
    { name: 'Kohli', score: 78 },
    { name: 'Rohit', score: 65 },
    { name: 'Rahul', score: 90 },
    { name: 'Jadeja', score: 55 },
    { name: 'Pant', score: 72 },
    { name: 'Shami', score: 48 },
    { name: 'Bumrah', score: 82 },
    { name: 'Kuldeep', score: 68 },
    { name: 'Jaiswal', score: 74 },
    { name: 'Gill', score: 60 },
  ];

  const listItems = players.map((p, idx) => (
    <li key={idx}>
      {p.name}: {p.score}
    </li>
  ));

  const highScorers = players
    .filter(p => p.score >= 70)           
    .map((p, idx) => <li key={idx}>{p.name}: {p.score}</li>);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{listItems}</ul>

      <h2>High Scorers (≥ 70)</h2>
      <ul>{highScorers}</ul>
    </div>
  );
}
