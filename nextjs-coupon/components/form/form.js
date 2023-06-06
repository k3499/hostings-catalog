import styles from "./form.module.css"
import React, { useState } from 'react';
import axios from 'axios'
import { useFormWithValidation } from '../../utils/formValidation';

export default function form({onSend}) {

  const [isRegisterFailed, setIsRegisterFailed] = useState(false);

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation({});

  const sendForm = async (evt) => {
    evt.preventDefault();
    const data = {
      email: evt.target.email.value,
      sitename: evt.target.sitename.value,
      link: evt.target.link.value,
      promokode: evt.target.promokode.value,
      description: evt.target.description.value,
    };

    const endpoint = 'http://localhost:1337/api/form-requests';
    
    axios.post(endpoint, { data })
    .then((res) => {
      if (res) {
        setIsRegisterFailed(false);
        // openInfoPopup(registerSuccessMessage);
        res.json()
      } else {
        setIsRegisterFailed(true);
        // openInfoPopup(failMessage);
        console.log("не получили данные ")
      }
    })
    .then(data => console.log(data))
    .catch((err) => {
      console.log(err.message);
    });
    //onSend(response)
    
    // if (isValid) {
    //   handleSubmit(values);
    // }
  };

  return (
    <form method="post" onSubmit={sendForm} noValidate>
        { console.log(errors) }
      <label htmlFor="email">Email</label>
      <input onChange={handleChange} type="email" id="email" name="email" required />
      <span id="name-input-error">
        {errors && errors.email && errors.email}
      </span>
      
      <label htmlFor="sitename">sitename</label>
      <input onChange={handleChange} type="text" id="sitename" name="sitename" required />
      <span id="name-input-error">
        {errors && errors.sitename && errors.sitename}
      </span>

      <label htmlFor="link">link</label>
      <input type="text" id="link" name="link" required />

      <label htmlFor="promokode">promokode</label>
      <input type="text" id="promokode" name="promokode" required />

      <label htmlFor="description">description</label>
      <input type="text" id="description" name="description" required />

      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
  )
}