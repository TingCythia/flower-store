import React, { ChangeEvent, useState } from 'react'
import { CSSProperties } from '@material-ui/core/styles/withStyles'
import axios from "axios";


type formState = {
  email: string;
  name: string;
  message: string;
}



function Contact() {
  const formId = 'Ep9OxxMX';
  const formSparkUrl ='https://submit-form.com/${formId}';

  const initialFormState = {
    email: '',
    name: '',
    message: '',
  };

  const [formState, setFormState] = useState<formState>(initialFormState);

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      message: 'Test formspark submission',
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch(error) {
      console.log(error);
    }
  };

  const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    const formkey = id as keyof formState;
    const updateFormState = { ...formState };
    updateFormState[formkey] = value;
    setFormState(updateFormState);
  };

  
  return (
    <div className="h-full flex justify-center flex-col">
      <div className="w-2/3 m-auto p-8 shadow-lg">
        <h1 className="text-4xl font-bold flex item-center">

        <span>Contact Us</span>
      </h1>
      <form className='flex flex-col' onSubmit={submitForm}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
          onChange={updateFormControl}
           type="text" 
           id="name"
            value={formState.name} />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
          onChange={updateFormControl}
           type="text" 
           id="email"
            value={formState.email} />
        </div>

        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            className='border-2 p-2'
            onChange={updateFormControl}
            value= {formState.message}
            ></textarea>
        </div>

        <button className='my-2 bg-blue-700'>
          Submit

        </button>
      </form>  
    </div>
  </div>

  );
}




/*const Contact = () => {
  return (
<>
    <div style={boxStyle}><h3>Contact page</h3></div>
    <div style={boxStyle}>
    <p>Feel free to reach out to us if you have any questions.</p>

    </div>
</>
  
  )
}

const boxStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
}*/

export default Contact