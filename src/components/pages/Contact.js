import React, { useState } from 'react';
// styling import
import '../../styles/pages_styles/Contact.css';
// helpers import
import { validateEmail } from '../../utils/helper.js';

// component to be exported
function Contact() {
    //create variables for state, and set value to an empty string
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  //error message state for if there is no input
  const [errorMessage, setErrorMessage] = useState('');
  //success message if the form is properly submitted
  const [submitSuccess, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    // e is the event that fires off when a change occurs
    // destructuring the event target
    const { target } = e;
    // setting the text input box by name
    const inputType = target.name;
    // setting value to whatever it is that's changed / typed in.
    const inputValue = target.value;

    //Depending on which input is being used, state is set for email, first name, last name, or message"
    if (inputType === 'email') {
        setEmail(inputValue);
    }

    if (inputType === 'firstName') {
        setFirstName(inputValue)
    }

    if (inputType === 'lastName') {
        setLastName(inputValue)
    }

    if (inputType ==='message') {
        setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    // This prevents the page from refreshing
    e.preventDefault();

    // ensuring the users input is a valid email structure, imported from helpers.js file in utils
    if (!validateEmail(email)) {

      setErrorMessage('Email is required');

      return;
    }

    // if the user successfully sends a message, then all fields are set to empy, and message is displayed
    setEmail('');
    setFirstName('');
    setLastName('');
    setMessage('');
    setSubmitMessage('Message Sent')


  };

  return (
    <div>
      <p>Contact</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <br/>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message here."
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
          <p className="success-text">{submitSuccess}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
