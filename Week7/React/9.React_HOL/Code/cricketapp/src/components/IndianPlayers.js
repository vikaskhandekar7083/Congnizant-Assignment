import React from 'react';

export default function IndianPlayers() {
  const T20players    = ['Kohli', 'Rohit', 'UV Chahal'];
  const RanjiPlayers  = ['Pujara', 'Rahane', 'Jadeja'];

  const allPlayers = [...T20players, ...RanjiPlayers];

  const [a, b, c, ...evenTeam] = allPlayers;
  const oddTeam = [a, b, c];

  return (
    <div>
      <h2>Merged Players</h2>
      <p>{allPlayers.join(', ')}</p>

      <h2>Odd-Team Players</h2>
      <p>{oddTeam.join(', ')}</p>

      <h2>Even-Team Players</h2>
      <p>{evenTeam.join(', ')}</p>
    </div>
  );
}
