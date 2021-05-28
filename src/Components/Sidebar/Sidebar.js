import React from 'react';
import image from '../../images/shutterstock_583717939.jpg';
const Sidebar = () => {
    return (
        <div className="sidebar home">
            <h5>Filters</h5>
            <div>
                <h2>Company</h2>
                <h6>HelloCo</h6>
                <h6>Director: Charles Dennis</h6>
                <img style={{width: '40px'}} src={image} alt="" />
                <p>104 Campbell Unions Suite 863\nZavalahaven, KS 93758</p>
            </div>
        </div>
    );
};

export default Sidebar;