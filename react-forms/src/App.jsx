
import { useState } from 'react'
import './App.css'

function App() {

  const [field,setField] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Contact: ""
  })

  const [errors,setErrors] = useState({})
  const [submit,setSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(field))
    setSubmit(true)
  }

  const validate = (values) => {
    let errors = {}
    let regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm

    if(!values.FirstName){
      errors.FirstName = "First name is required"
    }

    if(!values.LastName){
      errors.LastName = "Last name is required"
    }

    if(!values.Email){
      errors.Email = "Email is required"
    }else if(!regex.test(values.Email)){
      errors.Email = "Invalid Email"
    }

    if(!values.Contact) {
      errors.Contact = "Contact is required"
    }else if(values.Contact.length < 10 || values.Contact.length > 10) {
      errors.Contact = "Invalid contact number"
    }

    return errors

  }

  return (
    <>
    <div id='form-container'>
    <h1 id='title'>Registration Form</h1>
      <form onSubmit={handleSubmit}>

        {Object.keys(errors).length === 0 && submit ? <h1 id='success'>Registration Successful</h1> : null }

        <div className='input-container'>
          <input type="text" placeholder='First name' value={field.FirstName} onChange={(e) => setField({...field,FirstName:e.target.value})} />
          <p>{errors.FirstName}</p>
        </div>
        
        <div className='input-container'>
          <input type="text" placeholder='Last name' value={field.LastName} onChange={(e) => setField({...field,LastName:e.target.value})} />
          <p>{errors.LastName}</p>
        </div>

        <div className='input-container'>
          <input type="email" placeholder='Email' value={field.Email} onChange={(e) => setField({...field,Email:e.target.value})} />
          <p>{errors.Email}</p>
        </div>

        <div className='input-container'>
          <input type="number" placeholder='Contact number' value={field.Contact} onChange={(e)=> setField({...field,Contact:e.target.value})} />
          <p>{errors.Contact}</p>
        </div>

        <button type='submit'>Register</button>
      </form>
    </div>
    </>
  )
}

export default App
