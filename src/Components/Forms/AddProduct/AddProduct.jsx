import {Form,Button} from 'react-bootstrap';

import {useState} from 'react';
import './AddProduct.scss'
import {useSelector} from 'react-redux';
import {api,endpoints} from '../../../Lib/Api';
import {getHeaderStructure} from '../../../Lib/helper.js'
import CreateImage from '../../CreateImage/CreateImage';


const AddProduct = () =>{
    const auth = useSelector((state)=>state.auth.data)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] =  useState(['']);
    const [price, setPrice] = useState('');
    const [section, setSection] = useState('');
    const [add,setAdd] = useState(false);
    const [postId, setPostId] = useState('');
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const data ={
            title,
            description,
            section,
            ingredients,
            price,
           
        }
        const config = {
            headers: getHeaderStructure(auth.token),
            
        }
        config.data = data;
        const result = await api.call(endpoints.addProduct, config);
        console.log(result);
        if(result.success){
          setAdd(true);
          setPostId(result.data._id);
        }
    }
    const handleEmailClick = async(e)=>{
        e.preventDefault();
        const tempEmails = [...ingredients];
        tempEmails.push('');
        setIngredients(tempEmails);
    }
    return <>
    {add ? (<>
    <CreateImage postId={postId} />
    </>):(


    <div className="form-container">
    <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title:</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                placeholder="Product title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <textarea
                type="text"
                rows="5"
                required
                className="form-control"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                placeholder="A short description about product!"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Section:</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={section}
                onChange={(e) => {
                  setSection(e.target.value)
                }}
                placeholder="Product section"
              />
            </Form.Group>
            {ingredients && ingredients.map((elem,index)=>{
    return (
        <>
            <div className="email-container">

<div className="email-form">


  <Form.Group className="mb-3">

<input
  type='text'
  required
  className="form-control"
  value={elem}
  onChange={(e) => {
    const tempEmail = [...ingredients]
    tempEmail[index] = e.target.value;
    setIngredients(tempEmail)
  }}
  placeholder="Add ingredient"
/>
</Form.Group>
</div>

</div>
        </>
    )

})}
<div className="btn-wrapper">


<Button className="button-form"
onClick={handleEmailClick}>Add more ingredients</Button>
</div>
<Form.Group className="mb-3">
              <Form.Label>Price:</Form.Label>
              <input
                type="number"
                required
                className="form-control"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
                placeholder="Product price"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>

            </Form>
    </div>
        )}
    </>
}
export default AddProduct;