import React from 'react';
import Button from '../Button';
import TextArea from '../TextArea';
import TextInput from '../TextInput';
import './style.css';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form>
        <div className="two-form">
          <TextInput type="text" placeholder="Name" />
          <TextInput type="email" placeholder="Email" />
        </div>
        <div className="row-form">
          <TextInput type="email" placeholder="Subject" />
        </div>
        <div className="row-form">
          <TextArea rows={8} placeholder="Type your message here..." />
        </div>
        <div className="btn">
          <Button
            type="submit"
            value="Submit"
            onClick={(e) => e.preventDefault()}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
