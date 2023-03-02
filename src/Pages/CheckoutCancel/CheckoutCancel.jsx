import './CheckoutCancel.scss';
import CarouselOne from '../../Assets/CarouselOne.jpg'
const CheckoutCancel = () =>{
    return<>
    <div className="checkout-success">
        <div className="checkout-success-img">
            <img src={CarouselOne} alt="success" />
            

        </div>
        <div className="checkout-success-txt">

        <p>Your order has been cancelled.</p>
        </div>
    </div>
    </>
}
export default CheckoutCancel;