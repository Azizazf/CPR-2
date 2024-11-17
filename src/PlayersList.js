import React from "react";

import Player from "./Pplayer";
import players from "./player";

function PlayersList() {
    return (
        <div className="player-container">
            {players.map((player, index) => (
                <Player
                    key={index}
                    name={player.name}
                    equipe={player.team}
                    nationality={player.nationality}
                    imageUrl={player.imageUrl}
                    age={player.age}
                    numero={player.maillot}
                />
                ))}
            </div>
    );
}
export default PlayersList;