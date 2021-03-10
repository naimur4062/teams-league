import React from 'react';
import './TeamDetailBanner.css';

const TeamDetailBanner = (props) => {
    return (
        <div className='bgImg banner'>
            <img className='logo' src={props.banner} alt="" />
        </div>
    );
};

export default TeamDetailBanner;