import CheckoutItems from '../../Components/CheckoutItems/CheckoutItems';
import Footer from '../../Components/Footer/Footer';
import './CheckoutPage.scss';
const CheckoutPage = () =>{
    return <>
    <div className="checkout-wrapper">
        <CheckoutItems />
    </div>
    <div className="footer">
        <Footer />
    </div>
    </>
}
export default CheckoutPage;