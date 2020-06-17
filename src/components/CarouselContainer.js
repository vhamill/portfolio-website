import React from 'react';

import Card from './Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

import savage_six_screenshot from '../assets/images/savage_six_screenshot.PNG';
import lighthouse_screenshot from '../assets/images/lighthouse_screenshot.PNG';
import lootgame_screenshot from '../assets/images/lootgame_screenshot.PNG';

class CarouselContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            items: [
                {
                    id: 0,
                    title: 'Lighthouse Android App',
                    subTitle: 'Emergency "Notify a Friend" app sldjfklasdjf jdkalsjfkdlsjf jdsklfjdsalkjfsklj jkdsal',
                    imgSrc: lighthouse_screenshot,
                    link: 'https://drive.google.com/file/d/1z6rYg8aJAKEY-BwjOG0sSkB6M2aCkHVc/view?usp=sharing',
                    selected: false
                },
                {
                    id: 1,
                    title: 'NSMLTG: A 3D Open World Video Game',
                    subTitle: '3D video game made in Unity',
                    imgSrc: lootgame_screenshot,
                    link: 'https://drive.google.com/file/d/1UwG2QWnPJrbY-JG8b-IYgr1c1Kr3nk6h/view?usp=sharing',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Savage Six Site',
                    subTitle: 'Website developed for a local client',
                    imgSrc: savage_six_screenshot,
                    link: 'https://vimeo.com/333180339',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
            let items = [...this.state.items];

            items[id].selected = items[id].selected ? false : true;

            items.forEach(item => {
                if (item.id !== id) {
                    item.selected = false;
                }
            });

            this.setState({
                items
            });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card className="carousel-item" item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {

        const handleSelect = (selectedIndex, e) => {
            this.setState({index: selectedIndex});
        };

        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Carousel activeIndex={this.state.index} onSelect={handleSelect}>
                            <Carousel.Item> 
                                <Card item={this.state.items[0]}/> 
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card item={this.state.items[1]}/> 
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card item={this.state.items[2]}/> 
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CarouselContainer;