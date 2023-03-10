import {Form, Button} from 'react-bootstrap'
import {useState} from 'react';
const RegisterForm = ({submit}) =>{
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [password, setPassword] = useState()
    const [confPassword, setConfPassword] = useState()
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState()
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            firstName,
            lastName,
            email,
            age,
            password,
          }
          console.log(data);
          submit(data)
      
    }
    return <>
    <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                placeholder="First Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                placeholder="Last Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                required
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <input
                type="number"
                required
                min={1}
                className="form-control"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value)
                }}
                placeholder="Age"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <input
                type="password"
                required
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <input
                type="password"
                required
                className="form-control"
                value={confPassword}
                onChange={(e) => {
                  setConfPassword(e.target.value)
                }}
                placeholder="Confirm Password"
              />
            </Form.Group>

            <div className="submit">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
    </>
}
export default RegisterForm;