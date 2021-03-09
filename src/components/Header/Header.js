import React from 'react';
import bgImg from '../../bgImg/bg.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className='bgImg' style={{ backgroundImage: `url(${bgImg})`}}>
           <h1 className='heading'>Team Selection</h1>
        </div>
    );
};

export default Header;