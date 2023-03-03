import SliderCarousel from "../../Components/Carousel/Carousel";
import Sandwiches from "../../Components/Sandwiches/Sandwiches";
import TopPizzas from "../../Components/TopPizzas/TopPizzas";
import TypeText from "../../Components/TypeText/TypeText";
import {useEffect} from 'react';
import ScrollReveal from "scrollreveal";
import Footer from "../../Components/Footer/Footer";
import './HomePage.scss'


const HomePage = () =>{
    useEffect(()=>{
        ScrollReveal().reveal('.writing',{
            
            delay:300
        })

    })
  
    return <>
    <div className="home-wrapper">

  
    <div className="carousel-wrapper">
        <SliderCarousel />
    </div>
  
    <div className="top-pizzas">
        <TopPizzas />
        
    </div>
    
    <div className="sandwich">
        <Sandwiches />
    </div>
    <div className="writing">
        <TypeText />
    </div>
    <div className="footer">
        <Footer />
    </div>
    </div>
    </>
}
export default HomePage;