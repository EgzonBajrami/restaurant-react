import './CheckoutSuccess.scss'
import CarouselOne from '../../Assets/CarouselOne.jpg'
import Footer from '../../Components/Footer/Footer.jsx'
const CheckoutSuccess = () =>{
    return<>
    <div className="checkout-success">
        <div className="checkout-success-img">
            <img src={CarouselOne} alt="success" />
            

        </div>
        <div className="checkout-success-txt">

        <p>We thank you for choosing our restaurant. Please pick up your order at our location in an hour.</p>
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
    </>
}
export default CheckoutSuccess;