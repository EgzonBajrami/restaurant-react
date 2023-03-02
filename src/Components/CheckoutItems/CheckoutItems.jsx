import './CheckoutItems.scss'
import {useDispatch, useSelector} from 'react-redux';
import {removeOne,checkOut} from '../../Lib/store/slices/cart'
import {api,endpoints} from '../../Lib/Api';


const CheckoutItems = () =>{
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cart.data);
    console.log(cartItems);
    let data =[];
    for(let i=0; i<cartItems.length; i++){
        if(cartItems[i]!==''){
            data.push(cartItems[i]);
        }
    }
    console.log(data);
    const removeItem = (item)=>{
        console.log(item);
        dispatch(removeOne(item));
        window.location.reload();
    }
    const checkout = async(e)=>{
        e.preventDefault();
        console.log(data);
        const config ={
            data:data,
        }
        console.log(config.body);
        const result = await api.call(endpoints.check, config);
        console.log(result);
        if(result.success){
            dispatch(checkOut())
            window.location.replace(result.data.url);
          
            
        }

    }
    return <>
    <div className="checkout-items">

    <div className="checkout-items-wrapper">
  
    {data &&data.map((elem,index)=>(
   
        
        <div className="cart-wrapper" key={index}>
            <div className="cart-title">
                <h3>{elem.title}</h3>
                </div>
        <div className="icon-wrapper">
            <img src={process.env.REACT_APP_API_URL +elem.image} alt="pizza" />
        </div>
        <div className="price-container">
          <button onClick={()=>removeItem(elem._id)}>Remove</button>
            </div>
    </div>

       
    
   
        
    ))}
          
          </div>
    <div className="checkout-btn-wrapper">
    <button type="submit"
    onClick={checkout}>Checkout</button>

    </div>
  
        </div>
    </>
}
export default CheckoutItems;