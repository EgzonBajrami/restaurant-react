import './MenuPage.scss'
import pizzaMenu from '../../Assets/pizzaMenu.jpg'
import PizzaMenuContent from '../../Components/PizzaMenuContent/PizzaMenuContent';
import Footer from '../../Components/Footer/Footer';
const MenuPage = () =>{
    const pizza = 'pizza';
    const sandwiches ='sandwich';
    return <>
    <div className="menu-wrapper">
        <div className="pizza-icons">
            <img src={pizzaMenu} alt="pizza" />
          
        </div>
        <div className="pizza-txt">
                <p>Order now top quality pizza.</p>
            </div>
            <div>
                <PizzaMenuContent types={pizza} />
            </div>
            <div>
                <PizzaMenuContent types={sandwiches} />
            </div>
            <div className="footer">
                <Footer />
            </div>
    </div>
    </>
}
export default MenuPage;