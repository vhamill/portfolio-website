import React from 'react';

import Hero from '../components/Hero';
import CarouselContainer from '../components/CarouselContainer';

function HomePage(props){

    return(
        <div className="mx-sm-1 mx-md-3 mx-lg-5">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <CarouselContainer/>
        </div>
    );

}

export default HomePage;