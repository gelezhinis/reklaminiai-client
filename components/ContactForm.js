import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {FaAddressBook, FaPhone, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa';

import classes from './ContactForm.module.css';

const ContactForm = props => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // emailjs.sendForm(
    //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE, 
    //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE, 
    //   formRef.current, 
    //   process.env.NEXT_PUBLIC_EMAILJS_USER
    // )
    // .then((result) => {
    //     console.log(result.text);
    //     setDone(true);
    //     setName('');
    //     setSubject('');
    //     setEmail('');
    //     setMessage('');
    // })
    // .catch((error) => {
    //     console.log(error.text);
    // });
  }

  return(
    <div className={classes.contact}>
      <div className={classes.contact_wrapper}>
        <div className={classes.contact_left}>
          <h1 className={classes.contact_title}>Susisiekite su mumis.</h1>
          <div className={classes.contact_info}>
            {/* <div className={classes.contact_info_item}>
              <FaAddressBook />
              <h5>Karolis Balčiūnas</h5>
            </div> */}
            <div className={classes.contact_info_item}>
              <FaPhone />
              <h5>+370 687 36626</h5>
            </div>
            <div className={classes.contact_info_item}>
              <FaEnvelope />
              <h5>info@myprint.lt</h5>
              <h6>Testing... Works fine!</h6>
            </div>
            {/* <div className={classes.contact_info_item}>
              <FaMapMarkedAlt />
              <h5>Lelijų g. 16, 60000 Alytus</h5>
            </div> */}
          </div>
        </div>
        <div className={classes.contact_right}>
          <p className={classes.contact_desc}>
            Mielai prašome susisiekti su
            mumis bet kuriuo metu ir mes aptarsime viską kas Jūs domina.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" name="user_name" placeholder="Vardas" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" name="user_subject" placeholder="Tema" value={subject} onChange={e => setSubject(e.target.value)} />
            <input type="text" name="user_email" placeholder="El. Paštas" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea name="message" rows="5" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button className={classes.contact_button}>Siųsti</button>
            {done && <p className="thank">Ačiū kad kreipiatės, atsakysiu Jums kaip įmanoma greičiau.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;