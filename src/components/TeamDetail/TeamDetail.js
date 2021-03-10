import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import Male from '../../images/male.png'

const TeamDetail = () => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState([]);
    console.log(team)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam])
    return (
        <div>
            <div className='bgImg banner'>
                <img className='logo' src={team.strTeamBadge} alt="" />
            </div>
            <div className='description'>
                <div className="dynamic-info row d-flex justify-content-between">
                    <div className='col-md-5'>
                        <h1>{team.strTeam}</h1>
                        <p>Founded: {team.intFormedYear}</p>
                        <p>Country: {team.strCountry}</p>
                        <p>Sport type: Football</p>
                        <p>Gender: {team.strGender}</p>
                    </div>
                    <div className='team-img col-md-5'>
                        <img src={Male} alt="" />
                    </div>
                </div>
                <div>
                    <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum.</p>

                    <p className='details'>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;