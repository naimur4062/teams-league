import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;
    const history = useHistory();
    const handleClick = idTeam =>{
        const url = (`/team/${idTeam}`)
        history.push(url)
    }
    return (
        <div className="team-card">
            <Card style={{ width: '22rem', height: '22rem' }}>
                <Card.Img style={{ width: '10rem' }} className="rounded mx-auto d-block mt-4" variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Sports type: {strSport}</Card.Text>
                        <Button onClick={()=>handleClick(idTeam)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;