import React from 'react';
import SectionTitle from '../SectionTitle';
import TextInput from '../TextInput';
import './style.css';

const SubscriptionForm = () => {
  return (
    <div className="subscription-form">
      <SectionTitle text="Subscribe Form" />
      <form>
        <TextInput type="email" placeholder="Email Adress" />
        <input type="submit" value="Subscribe" />
      </form>
    </div>
  );
};

export default SubscriptionForm;
