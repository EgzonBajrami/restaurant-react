import './PizzaMenuContent.scss'
import {api,endpoints} from '../../Lib/Api'
import {useEffect,useState,useRef} from 'react';
import Pagination from 'react-bootstrap/Pagination'
import MenuModal from '../MenuModal/MenuModal';

const PizzaMenuContent = ({types}) =>{
  const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState([]);
    const divRef = useRef(null);
    const [scrollHere, setScrollHere] = useState();
    const [id, setId] = useState('');


    useEffect(() => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setScrollHere(rect);
        console.log(rect.top, rect.right, rect.bottom, rect.left);
      }
    }, [divRef]);
 
  
    console.log(types);
    useEffect(()=>{
        const getData = async() =>{
            const config ={
                params:[types]
            }
            const result = await api.call(endpoints.getPizza, config);
            
            setData(result.data);

        }
        getData();
    },[types])
    const [itemOffset, setItemOffset] = useState(0);
 
    const endOffset = itemOffset + 6;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / 6);
    const [pageNr, setPageNr] = useState(1);
    const handlePageClick = (nr) => {
        if(nr>(data.length%6 +1)){
          
        
          setPageNr(nr);
          const newOffset = ((nr-1)*6)%data.length;
          console.log(
            `User requested page number ${nr-1}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
            
        }
    
      else  if(nr=>0){
            window.scrollTo({
                top: scrollHere.top,
                left: scrollHere.left,
                behavior: 'smooth'
              });
          console.log(nr);
          setPageNr(nr+1);
          const newOffset = (nr*6)%data.length;
          console.log(
            `User requested page number ${nr}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);

        }
        if(nr<0){
            window.scrollTo({
                top: scrollHere.top,
                left: scrollHere.left,
                behavior: 'smooth'
              });
        
          setPageNr(1);
          const newOffset = (0*6)%data.length;
          console.log(
            `User requested page number ${0}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);

        }
      
     
   
    };

    const active = pageNr;
    console.log(active);
    
let items = [];
console.log(items);
for (let number = 1; number <=pageCount; number++) {
    console.log(number);
  items.push(
    <Pagination.Item key={number} onClick={()=>{handlePageClick(number-1)}} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

    return <>
    <div className="pizza-wrapper" ref={divRef}>
        <div className="pizza-content-title">
            {types==="pizza" &&(<h3>Pizza Menu</h3>)}
            {types==="sandwich" &&(<h3>Sandwich Menu</h3>)}
        </div>
        <div className="pizzas-elements" >
            {currentItems &&currentItems.map((elem)=>(
              <>
             
                <div className="pizza-elem-wrapper" key={elem._id}
                onClick={()=>{
                  setModalShow(!modalShow);
                  
                  setId(elem._id);
                }}
                >
                     <div className="pizza-elem-title">
                            <p>{elem.title}</p>
                            </div>
                    <div className="pizza-elem-icon">
                        <img src={process.env.REACT_APP_API_URL +elem.image} alt="pizza" />
                        </div>
                       
                    </div>
                    {id===elem._id&&(
                   <MenuModal  show={modalShow}
                   onHide={() => {setModalShow(!modalShow)
                  setId('0')} }
                    data={elem} />

             )}
                    </>
            ))}

        </div>
        <div className="pagination-wrapper">

        <div>
    <Pagination>
    <Pagination.Prev onClick={()=>{handlePageClick(active-2)}} />
        {items}
        <Pagination.Next
        onClick={()=>{handlePageClick(active)}} /></Pagination>
    <br />
 
  </div>
        </div>
    </div>
    </>
}
export default PizzaMenuContent;