import React from 'react';

import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';





const Player = ({ name, equipe, nationality, age, imageUrl, maillot }) => {
    return (
        <div className='Player '>

            <Card className="Card" style={{ width: '18rem', }}>
                <Card.Img variant="top" src={imageUrl} alt={`${name}'s image`} className='image' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <strong> Equipe: </strong>{equipe}<br />
                        <strong>Nationalité</strong>{nationality}<br />
                        <strong>Numéro:</strong>{maillot}<br />
                        <strong> Age:</strong>{age}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>

    );
}

/*Player.defaultProps = {
    name: 'Player Name',
    equipe: 'équipe inconnue ',
    nationality: 'Nationalité inconnue',
    age: 'Age inconnu',
    imageUrl: 'https://via.placeholder.com/150',
    maillot: 'Maillot inconnu'
};
*/
export default Player;