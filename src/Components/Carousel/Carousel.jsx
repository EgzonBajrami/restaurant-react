import Carousel from 'react-bootstrap/Carousel';
import CarouselOne from '../../Assets/CarouselOne.jpg'
import './Carousel.scss'
import TwoPizzas from '../../Assets/TwoPizzas.jpg'
import PizzaOven from '../../Assets/PizzaOven.jpg'

const SliderCarousel =() =>{


  return (
    <Carousel
    autoPlay={true}
    interval={4500}
    indicators={false}>
      <Carousel.Item>
        <div className="carousel-icon-wrapper">

     
        <img
          className="d-block w-100"
          src={CarouselOne}
          alt="First slide"
        />
           </div>
        <Carousel.Caption className="caption-holder">
            
          <h3>All kinds of pizzas, all baked with love.</h3>
          <p>Be first of your friends to grab the slice or else it is gone.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-icon-wrapper">

     
        <img
          className="d-block w-100"
          src={PizzaOven}
          alt="First slide"
        />
           </div>
        <Carousel.Caption className="caption-holder">
            
          <h3>Our pizzas are baked with you in mind!</h3>
          <p>We take outmost care in baking your pizza!</p>
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
        <div className="carousel-icon-wrapper">

     
        <img
          className="d-block w-100"
          src={TwoPizzas}
          alt="First slide"
        />
           </div>
        <Carousel.Caption className="caption-holder">
            
          <h3>Limited offer!</h3>
          <p>Order two pizzas and get one for free!</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default SliderCarousel;