import './TopPizzas.scss'
import Peperoni from '../../Assets/Peperoni.jpg'
import Mozzarella from '../../Assets/Mozzarella.jpg'
import React from 'react';
import Veggie from '../../Assets/Veggie.webp'
import Buffalo from '../../Assets/Buffalo.jpg'
import {useEffect} from 'react';
import ScrollReveal from 'scrollreveal';
const TopPizzas = () =>{
    useEffect(()=>{
        ScrollReveal().reveal('.top-pizzas-items',{
            
            delay:300
        })

    })

    const Pizza = [
        {   image:Peperoni,
            name:"Peperoni Pizza",
            about:"A History of America's Favorite Pizza Topping. Contrary to popular belief, pepperoni was not invented in Italy. It was actually created by Italian immigrants in New York City in the early 1900s. No wonder it's America's most popular pizza topping!",
            ingredients:['½ cup water','1 teaspoon dried oregano, crushed','1 teaspoon dried basil, crushed','½ teaspoon garlic powder','½ teaspoon onion powder','½ teaspoon sugar','½ teaspoon salt','¼ teaspoon black pepper'],
            toppings:['1 cup shredded mozzarella cheese, or more to taste','1 (6 ounce) package Pepperoni']
        },
        {   image:Mozzarella,
            name:"Mozzarella and Basil Pizza",
            about:"With a make-ahead dough and a simple sauce, this pizza is an option any night of the week. Just make the dough in the morning; then shape it an hour before you're ready to eat. If homemade dough is not your thing, just buy the premade dough at Trader Joe's or Whole Foods Market, and shape it as you would the scratch dough.",
            ingredients:['1 (8-ounce) ball Pizza Dough','½ cup Pizza Sauce','4 ounces fresh mozzarella cheese, sliced','12 fresh basil leaves'],
            toppings:['Basil leaves']

        },
        {   image:Veggie,
            name:"Veggie Pizza",
            about:"When serving this veggie pizza, I never have leftovers. You can use low-fat or nonfat sour cream for this dish if you'd like.",
            ingredients:['2 (8 ounce) packages refrigerated crescent rolls','1 cup sour cream','1 (8 ounce) package cream cheese, softened','1 (1 ounce) package ranch seasoning mix','1 teaspoon dried dill weed','¼ teaspoon garlic salt','1 ½ cups chopped fresh broccoli','½ cup halved and thinly-sliced radishes','1 small onion, finely chopped','1 red bell pepper, chopped'],
            toppings:['No toppings']
        },
        {   image:Buffalo,
            name:"Buffalo Pizza",
            about:"Got some leftover roasted chicken? This pizza is the PERFECT way to use it! If you don't, shredding rotisserie chicken is a great alternative. If neither of those options are available, it's easy to boil some chicken breasts and shred them for topping.",
            ingredients:['3 cooked chicken breasts, diced','1 (2 ounce) bottle hot sauce','2 tablespoons butter, melted','1 (8 ounce) bottle blue cheese salad dressing','1 (16 inch) prepared pizza crust','1 (16 inch) prepared pizza crust','1 (8 ounce) package shredded mozzarella cheese'],
            toppings:['No toppings']

        }
    ]

    return<>
    <div className="top-pizzas-wrapper">
        <div className="top-pizzas-title">
            <h3>Our top picks!</h3>
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
                <div className="pizza-icon-mobile">
                <img src={elem.image} alt="pizza" />
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
                <p className="ingre">Toppings:</p>
                <ul className="pizza-ingredients">
                   {elem.toppings.map((top,index)=>(
                    <li key={index}>{top}</li>
                   ))}
                </ul>
            </div>
            
              

        </div>
          ))}
        
    </div>
    </>
}
export default TopPizzas;