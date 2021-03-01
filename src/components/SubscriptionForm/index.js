import React from 'react';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import TextInput from '../TextInput';
import './style.css';

const SubscriptionForm = () => {
  return (
    <div className="subscription-form">
      <SectionTitle text="Subscribe to our newsletter" />
      <form>
        <TextInput type="email" placeholder="Email Adress" />
        <Button type="submit" value="Subscribe" />
      </form>
    </div>
  );
};

export default SubscriptionForm;
