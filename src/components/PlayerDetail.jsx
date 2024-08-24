
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { soccerPlayers } from '../assets/data'; // Adjust path if needed

const PlayerDetail = () => {
  const { id } = useParams(); // Get the player ID from the URL
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Fetch player data based on ID
    const foundPlayer = soccerPlayers.find(player => player.id === parseInt(id));
    setPlayer(foundPlayer);
  }, [id]);

  if (!player) return <h2>Loading...</h2>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{player.name}</h1>
      <img src={player.imageUrl} alt={player.name} className="w-full h-auto mb-4" />
      <p className="text-lg mb-2">Country: {player.nationality}</p>
      <p className="text-lg mb-2">Position: {player.position}</p>
      <p className="text-lg">Club: {player.club}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PlayerDetail;
