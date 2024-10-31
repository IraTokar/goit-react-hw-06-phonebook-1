import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { addContacts } from 'redux/contactsSlice';

import { Form, Input, Button } from './ContactsForm.styled';

const nameId = nanoid();
const numberId = nanoid();

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const anExistingContact = contacts.some(contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim());
  
  if (anExistingContact) {
    alert(`${name} is already in contacts`);
    return;
  }
  
  dispatch(addContacts({ name, number }));
  setName('');
  setNumber('');
  };
  
  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

return (
  <Form onSubmit = {handleSubmit}>
    <label htmlFor={nameId}>Name</label>
        <Input type="text" name="name" value={name} onChange={handleChange} required/>
        {/* <MessageError name="name" component="span" /> */}
    

    <label htmlFor={numberId}>Number</label>
        <Input type='tel' name="number" value={number} onChange={handleChange} required/>
        {/* <MessageError name="number" component="span" /> */}

      <Button type="submit">Add contact</Button>
    

  </Form>
)
};
  
export default ContactForm;



// import React from 'react';
// import * as Yup from 'yup';
// import {Formik} from 'formik';  
// import {FormContact, MessageError, FormField, Button} from './ContactsForm.styled';

// import { useSelector, useDispatch } from "react-redux";
// import { addContacts } from 'redux/contactsSlice';
// import { useFormik } from 'formik';
// import { getVisibleContacts } from 'redux/selectors';


// const quizSchema = Yup.object().shape({
//     name: Yup.string().min(3, 'Too Short!').required('Required'),
//     number: Yup.string().matches(/^[1-5]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}).required('Required'),
// });

// const ContactForm = () => {
//   const contacts = useSelector(getVisibleContacts);
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       number: '',
//     },
//     validationSchema: { quizSchema },
//     onSubmit: (values, action) => {
//       const payload = {
//         name: values.name,
//         number: values.number,
//       };
//       dispatch(addContacts(action))
//     }
    
// });

//   return (
//     <Formik formik= {formik}>

//       <FormContact>
//         <label htmlFor="name">Name</label>
//             <FormField type="text" name="name" />
//             <MessageError name="name" component="span" />
              

//         <label htmlFor="number">Number</label>
//             <FormField name="number" />
//             <MessageError name="number" component="span" />

//         <Button type="submit">Add contact</Button>
//       </FormContact>
//     </Formik>
//   );
// };




// export default ContactForm;

// // import { useState } from 'react';
// // import { nanoid } from 'nanoid';

// // import { useFormik } from 'formik';