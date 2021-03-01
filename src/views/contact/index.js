import React from 'react';
import ContactForm from '../../components/ContactForm';
import SectionTitle from '../../components/SectionTitle';
import SubscriptionForm from '../../components/SubscriptionForm';
import './style.css';

const contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-section">
        <SectionTitle
          text="Contact"
          subtitle="For more info fill out the form or email us at contact@internguys.com"
        />
        <ContactForm />
      </div>
      <hr width="1" />
      <SubscriptionForm />
    </div>
  );
};

export default contact;
