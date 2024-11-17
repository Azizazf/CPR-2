/*
Créez un projet à l'aide de create-react-app.

Créez un fichier appelé player.js, qui contient un tableau d'objets JSON contenant les détails des joueurs (au moins quatre joueurs).
Faites preuve de créativité dans votre choix de joueurs ! Vous pouvez choisir qui vous voulez !
Les attributs pour chaque joueur sont le nom, l'équipe, la nationalité, le numéro de maillot, l'âge et une URL d'image pour le joueur.
Créez un fichier appelé Player.js qui contient le composant joueur.
Le composant Player doit rendre une carte react-bootstrap. La carte affichera tous les attributs pour chaque joueur défini dans Players.js.
Déstructurez tous les attributs pour le composant Player.
Créer un composant appelé PlayersList.js
Importez à l'intérieur de PlayerList.js, le composant Player et les données des joueurs à partir de player.js.
Affichez tous les joueurs à l'intérieur de PlayerList.js, en parcourant tous les éléments du tableau de joueurs (consultez la fonction .map).
Lors du parcours des joueurs, transmettez les accessoires au composant Player (recherchez l'opérateur de propagation si vous souhaitez l'utiliser).
N'oubliez pas de définir des props par défaut pour chaque attribut (n'hésitez pas à définir des props par défaut).
Utilisez un style inline pour le composant Player.
Importez PlayerList.js dans App.js (composant racine) et affichez PlayerList.
*/ 
import './App.css';
import React from 'react';
import players from './player'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PlayersList from './PlayersList';



function App() {
  return (
    <div className="App player-container">
      <PlayersList players={players} />
    </div>
  );
}

export default App;
