import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'

export default function Form(){
        const [formValues, setFormValues] = useState({
        'name-input': '',
        'size-dropdown': '',
        'pepperoni': false,
        'sausage': false,
        'pineapple': false,
        'mushroom': false,
        'special-text': ''
    })
    const [userValid, setUserValid] = useState(false)
    const navigate = useNavigate()
    const onChange = evt => {
        evt.preventDefault()
        // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
        // a) pull the name of the input from the event object
        const name = evt.target.name
        // b) pull the value of the input from the event object
        const {value, type}= evt.target
        // c) use the `update` callback coming in through props
        const updatedValue = type === 'checkbox' ? evt.target.checked : value
setFormValues({... formValues, [name]: updatedValue})
      }

      const userSchema = yup.object().shape({
        'name-input': yup.string().required().min(2)
      })

const handleSubmit = async (evt) => {

        evt.preventDefault();

        console.log(formValues);

      }

      useEffect(async () => {
    const isValid = await userSchema.isValid(formValues)
setUserValid(isValid)

      }, [formValues])


return (
<span ><button onClick={() => navigate('/')}>Home</button>
<h1>This is pizza form</h1>
<form name="pizza-form" onSubmit={handleSubmit}>
    {!userValid && <div><h1 styles={'color: red'}>name must be at least 2 characters</h1></div>}
    <label>First Name : &nbsp;
    <input minLength={2} onChange={onChange} type="text" value={formValues.name} id="name-input" name="name-input"></input>
    </label></form>
    <div>
        <form onSubmit={handleSubmit} id="size-dropdown "name="size-dropdown">
<select onChange={onChange} id="size-dropdown" name="size-dropdown">
              <option value=""> --- Select Pizza Size --- </option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
          </select></form>
    </div>
    <div>
        <label> Pepperoni
    <input onChange={onChange} checked={formValues.pepperoni} type="checkbox" id="pepperoni" name="pepperoni"></input>
    </label>
    <label> Sausage
    <input onChange={onChange} checked={formValues.sausage} type="checkbox" name="sausage"></input>
    </label>
    <label> Pineapple
    <input onChange={onChange} checked={formValues.pineapple} type="checkbox" name="pineapple"></input>
    </label>
    <label> Mushroom
    <input onChange={onChange} checked={formValues.mushroom} type="checkbox" name="mushroom"></input>
    </label>
    </div>
    <div>
        <label>Special Requests
            <input type="text" id="special-text" name="special-text" onChange={onChange}></input>
        </label>
    </div>
    <form id="pizza-form" onSubmit={handleSubmit}>
    <button disabled={!userValid} onChange={onChange}name="order-button" id="order-button" type="submit">Place Order</button>
</form>

</span>
)
}