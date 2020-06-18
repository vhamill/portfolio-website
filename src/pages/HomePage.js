import React from 'react';

import Hero from '../components/Hero';
import CarouselContainer from '../components/CarouselContainer';

function HomePage(props){

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <CarouselContainer />
        </div>
    );

}

export default HomePage;