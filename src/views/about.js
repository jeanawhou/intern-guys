import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TextRows from '../components/TextRows';

const textRows = [
  {
    title: 'Our Vision',
    description:
      'Our vision is to democratize internships and be the number one talent platform to help create opportunities for each and every student.'
  },
  {
    title: 'Our Mission',
    description:
      'Intern Guys strives to provide a one-stop automated internship solution to help our customers launch their careers in the easiest, fastest, and smartest manner.'
  }
];

const about = () => {
  return (
    <div>
      <SectionTitle
        text="About us"
        subtitle="We are changing the way students approach Internships"
      />
      <TextRows rows={textRows} />
    </div>
  );
};

export default about;
