import React from 'react';

import CardInfo from '../components/CardInfo';

import Button from 'react-bootstrap/Button';


function Card(props) {
    
    return(
        <div className="container d-inline-block v-card">
            <div className="row mx-5 px-sm-1 px-md-3 px-lg-5">
                <div className="col-md-6 col-lg-4 w-75 m-auto">
                    <img className="v-card-image img-fluid w-100" src={props.item.imgSrc} alt={props.item.imgSrc} />
                </div>
                <div className="col-md-6 col-lg-8">
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