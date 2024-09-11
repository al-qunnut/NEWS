import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const initialState = {
  Name:"", 
  Email:"", 
  Phone: "",
  Topic: "",
  Message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialState);

  const {Name, Email, Phone, Topic, Message} = form;

  const handleSubmission = (e) => {
    e.preventDefault();

    afterSubmission();
    console.log(form)

    setLoading(true);

    setTimeout(() => {
      setSuccessful(true);
      setLoading(false);
   
    setTimeout(() => {
      setSuccessful(false);
    }, 5000);
  }, 5000);
  };

  const [sucessful, setSuccessful] = useState(false);

  const handleOnChange = (e) => {
   setForm({...form, [e.target.name]: e.target.value})
  }
  
  const [loading, setLoading] = useState(false);

  const afterSubmission = () => {
    setForm({
      Name:"", 
      Email:"", 
      Phone: "",
      Topic: "",
      Message: "",
    })
  }
  return (
    <div>
      <Navigation />
      <div className="w-10/12 m-auto">
        <h2 className='text-2xl font-bold text-center'>Contact Us</h2>
        <p className='text-gray-500 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, soluta.</p>
        <div className="my-4">
          <form onSubmit={handleSubmission}>
            <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor='Name'>Name</label>
              <input type="text" 
                     id='Name' 
                     name='Name' 
                     className='bg-gray-200 w-full p-2 my-1 rounded-md' 
                     placeholder='Enter your name...'
                     required
                     onChange={handleOnChange}
                     value={Name}/>
            </div>
            <div className="flex flex-col">
              <label htmlFor='Email'>Email</label>
              <input type="email" 
                     id='Email' 
                     name='Email' 
                     className='bg-gray-200 w-full p-2 my-1 rounded-md' 
                     placeholder='Enter your email...'
                     required
                     onChange={handleOnChange}
                     value={Email}/>
            </div>
            <div className="flex flex-col">
              <label htmlFor='Phone'>Phone Number</label>
              <input type="number" 
                     id='Phone' 
                     name='Phone' 
                     className='bg-gray-200 w-full p-2 my-1 rounded-md' 
                     placeholder='Enter your phone number'
                     required
                     onChange={handleOnChange}
                     value={Phone}/>
            </div>
            <div className="flex flex-col">
              <label htmlFor='Topic'>Topic</label>
              <input type="text" 
                     id='Topic' 
                     name='Topic' 
                     className='bg-gray-200 w-full p-2 my-1 rounded-md' 
                     placeholder='Enter the topic name...'
                     required
                     onChange={handleOnChange}
                     value={Topic}/>
            </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor='Message'>Message</label>
              <textarea type="text" 
                     id='Message' 
                     name='Message' 
                     className='bg-gray-200 w-full p-2 my-1 rounded-md' 
                     placeholder='Enter your message...'
                     required
                     onChange={handleOnChange}
                     value={Message}
                     rows= {5}
                     cols= {10}
                     />
            </div>
            <div className="">
              {
                sucessful && (
                  <div className="text-green-700 font-bold text-xl text-center my-4 rounded-md p-4 bg-green-100">
                    Your message was successfully sent!✔
                  </div>
                )
              }
            </div>
            <button 
              className='bg-gray-900 text-white p-2 rounded-md my-4 w-full md:w-4/12'
              type='submit'
              disabled = {loading}
            >
                 { loading ? 'Sending...' : 'Send'} 
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact