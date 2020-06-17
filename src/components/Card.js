import React from 'react';

import CardInfo from '../components/CardInfo';

import Button from 'react-bootstrap/Button';


function Card(props) {
    
    return(
        <div className="container d-inline-block v-card">
            <div className="row mx-5 px-5">
                <div className="col ml-5">
                    <img className="v-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                </div>
                <div className="col mr-5">
                    <div className="card-body">
                        <CardInfo className="break-text" title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
                        <Button href={props.item.link}>View</Button>
                    </div>
                </div>
                
            </div> 
        </div>
    );

}

export default Card;