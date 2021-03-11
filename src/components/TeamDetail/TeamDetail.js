import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import Male from '../../images/male.png';
import Female from '../../images/female.png';
import TeamDetailBanner from '../TeamDetailBanner/TeamDetailBanner';
import Twitter from '../../images/Twitter.png';
import Facebook from '../../images/Facebook.png';
import Youtube from '../../images/YouTube.png';

const TeamDetail = () => {
    window.scrollTo(0, 0);
    const { idTeam } = useParams();
    const [team, setTeam] = useState([]);
    const { strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strStadiumDescription, strDescriptionEN, strTwitter, strFacebook, strYoutube } = team;
    //conditional rendering
    const maleOrFemale = (strGender === "Male") ? <img src={Male} alt="" /> : (strGender === "Female") && <img src={Female} alt="" />;

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam]);
    return (
        <div>
            <TeamDetailBanner banner={strTeamBadge} />
            <div className='description'>
                <div className="dynamic-info row d-flex justify-content-between">
                    <div className='col-md-6'>
                        <h1>{strTeam}</h1>
                        <p>Founded: {intFormedYear}</p>
                        <p>Country: {strCountry}</p>
                        <p>Sport type: {strSport}</p>
                        <p>Gender: {strGender}</p>
                    </div>
                    <div className='team-img col-md-6'>
                        {maleOrFemale}
                    </div>
                </div>
                <div>
                    <p className="details">{strStadiumDescription}</p>
                    <p className='details'>{strDescriptionEN}</p>
                </div>
                <div className="connection">
                    <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer">
                        <img src={Twitter} alt=""/>
                    </a>
                    <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer">
                        <img src={Facebook} alt=""/>
                    </a>
                    <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer">
                        <img src={Youtube} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;