import React from 'react';
import './MegaStore.css';

const MegaDetails = (props) => {
    
    const {name, brand, price, image, date,location,description} = props.mega
    console.log('props', props.mega)
    return (
       
                  
                     
                           <div className="col-md-4 megaStore">
                   <div className="store">
                   <div className="d-flex">
                       <img style={{width:'150px'}} src={image} alt="" />
                       <div>
                         <h6>{name}</h6>
                         <h6>{brand}</h6>
                         <p>${price}</p>
                       </div>
                   </div>
                   <div className="d-flex justify-content-around">
                       
                       <div>
                       <p>{location.city}</p>
                       <p>{location.state}</p>
                       </div>
                       <p>{date}</p>
                   </div>
                   </div>
                   </div>
              
                     
                  
    );
};

export default MegaDetails;