import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import pizza from '../../Assets/pizza.svg'
const Footer = () =>{
    return<>
     <div className="footer-wrapper">
        <div className="footer-image-container">
            <img src={pizza} alt="footer-conad" />
           
        </div>
        <div className="artist-cilesi">
                <p>The best pizzas.</p>
                <p>At our restaurant.</p>
            </div>
            <div className="contact-conad">
                <p>Contact:</p>
                <div className="location-conad">
                    <FontAwesomeIcon style={{color:"#fff"}} size="lg" icon={faLocationDot} />
                    <p>In all our locations.</p>
                </div>
                <div className="location-conad">
                    <FontAwesomeIcon style={{color:"#fff"}} size="lg" icon={faClock} />
                    <p>08:00 - 24:00</p>
                </div>
                <div className="location-conad">
                    <FontAwesomeIcon style={{color:"#fff"}} size="lg" icon={faEnvelope} />
                    <p>info@pizza-restaurant.com</p>
                </div>
                
            </div>
    </div>
    </>
}
export default Footer;