import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toppings from '../Toppings/Toppings';
import './MenuModal.scss'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {add} from '../../Lib/store/slices/cart'
function MenuModal(props) {
    const [toppingsSubmit, setToppingsSubmit] = useState([]);
    const dispatcher = useDispatch();

    const [btnClass, setBtnClass] = useState('checkout-btn')
    const [added, setAdded] = useState(false);
    let total = props.data.price + (toppingsSubmit.length*0.5);
    const addToppings = async(data) =>{
      
        setToppingsSubmit(data);
        console.log(toppingsSubmit);
    }
    const addToCart = async(e) =>{
        e.preventDefault();
        let item = props.data;
        item.price = total;
        console.log(item);
        setAdded(true);
        setBtnClass('checkout-btn-added')
        dispatcher(add(item))
        setTimeout(()=>{
            window.location.reload();
        },3000)
    }
  return (
    <Modal
      {...props}
      size="lg"
      className="fix-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      <div className="modal-title-wrapper">
        <Modal.Title id="contained-modal-title-vcenter">
         
            <h4>{props.data.title}</h4>

      
 
        </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
    

       
        <div className="image-container-modal">
            <img src={process.env.REACT_APP_API_URL + props.data.image[0]} alt="pizza" />
        </div>
        <div className="modal-scroll-add">
        <div className="modal-description">
        <p>
         {props.data.description}
        </p>

        </div>
        <div className="toppings-wrapper">
            <p>Each toppings costs 0.50$.</p>
            <Toppings addToppings={addToppings}   data={props.data.ingredients} />
        </div>
        <div className="price-container">
            <p>Your total will be: {total}$</p>
        </div>
    
            <div className={btnClass}>
            <button disabled={added} onClick={addToCart}>Add to cart!</button>
        </div>
        </div>
     
        
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MenuModal;