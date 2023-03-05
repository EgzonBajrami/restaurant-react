import Form from 'react-bootstrap/Form';
import {useState} from 'react';
const Toppings = ({data, addToppings}) =>{
    console.log(data);
    const [toppings, setToppings] = useState([''])
    console.log(toppings);
   
    return<>
       <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
            {data &&data.map((elem,index) =>(
                   <Form.Check 
                   key={index}
                   type={type}
                   id={`default-${type}`}
                   value={elem}
                   label={elem}
                   onChange={(e) => {
                    const tempToppings = [...toppings]
                 
                    if(tempToppings.includes(e.target.value)){
                      console.log(tempToppings.indexOf(e.target.value));
                      const currentIndex = tempToppings.indexOf(e.target.value);
                      tempToppings.splice(currentIndex,1);
                      console.log(tempToppings);
                      setToppings(tempToppings);
                    addToppings(tempToppings);
                      
                    }else{
                      tempToppings[index] = e.target.value;
                      setToppings(tempToppings);
                      addToppings(tempToppings);
                    }
                   
                  }}
                 />
       

            ))}
       
        
        </div>
      ))}
    </Form>
    </>
}
export default Toppings;