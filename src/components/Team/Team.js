import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Team.css'

const Team = (props) => {
    const { strTeam, strTeamBadge } = props.team;
    console.log(props);
    return (
        <div className="team-card">
            <Card style={{ width: '22rem', height: '22rem'}}>
                <Card.Img style={{width: '10rem'}} className="rounded mx-auto d-block mt-4" variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Sports type: Football</Card.Text>
                    <Button variant="primary">Explore</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;