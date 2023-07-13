import React from 'react';
import css from './ContactList.module.css';


const ContactList = ({ children }) => {
  return <ul className={css.contactList4}>{children}</ul>;
};

export default ContactList;