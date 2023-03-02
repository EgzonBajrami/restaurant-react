import './Sandwiches.scss'
import BuffaloSandwich from '../../Assets/BuffaloSandwich.jpg';
import Reuben from '../../Assets/Reuben.jpg'

import React from 'react';

const Sandwiches = () =>{

    const Pizza = [
        {   image:BuffaloSandwich,
            name:"Buffalo Chicken Sandwich",
            about:"Buffalo chicken with blue cheese and pepper jack meets grilled cheese! That spicy kick from the buffalo sauce, melted cheese, and the buttery crunchy bread makes for a filing sandwich.",
            ingredients:['1 ½ tablespoons Buffalo wing sauce','½ cup shredded cooked chicken','2 slices white bread','1 slice pepper Jack cheese,','3 tablespoons crumbled blue cheese','1 tablespoon butter, softened'],

        },
        {   image:Reuben,
            name:"Reuben Sandwich",
            about:"A Reuben sandwich is one of my family's fix-it-quick favorites. They are really delicious and easy to make. I like to serve them with big bowls of steaming vegetable soup and dill pickles on the side.",
            ingredients:['8 slices rye bread','½ cup Thousand Island dressing','8 slices Swiss cheese','8 slices deli sliced corned beef','1 cup sauerkraut, drained','2 tablespoons butter, softened'],


        },
    
    ]

    return<>
    <div className="top-pizzas-wrapper">
        <div className="top-pizzas-title">
            <h3>Our sandwiches!</h3>
        </div>  
         {Pizza && Pizza.map((elem,index)=>(
        <div className="top-pizzas-items" key={index}>
         

            
                
        

           
            <div className="pizza-icon">
                <img src={elem.image} alt="pizza" />
            </div>
            <div className="pizza-items">
                <div className="pizza-items-title">
                    <p>{elem.name}</p>
                </div>
                <div className="about-pizza">
                    <p>{elem.about}</p>
                </div>
                <p className="ingre">Ingredients:</p>
                <ul className="pizza-ingredients">
              {elem.ingredients.map((ingre,index)=>(
                <li key={index}>{ingre}</li>
              ))}

                </ul>
            
            </div>
            
              

        </div>
          ))}
        
    </div>
    </>
}
export default Sandwiches;