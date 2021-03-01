import React from 'react';
import HalfScreenImage from '../../components/HalfScreenImage';
import SectionTitle from '../../components/SectionTitle';
import ChevronPageDown from '../../components/ChevronPageDown';

import Images from '../../Images';
import './style.css';
import Button from '../../components/Button';

const home = {
  title: `#1 Website for Internships`,
  description: `Finding internships has never been easier
Join Intern guys, your friendly neighborhood internship tool!`
};
const steps = [
  {
    title: 'Tell us about yourself',
    description: `We know finding internships is super hard, but never fret cause Intern guys is your guy!
    Make a bomb resume within minutes and get a cool profile. Already halfway there!`,
    image: Images.STEP_1
  },
  {
    title: `Search`,
    description: `Bored of scrolling through hundreds of positions that you don't fit in? Not able to find that one position you just were destined for? We got you!,
    Our smart algorithms scan through every position available, use your profile and provide you with recommended positions matched based on your skill sets and interest.`,
    image: Images.STEP_2
  },
  {
    title: 'Apply',
    description: `Four words - Autofill for the win! Get most of your application filled for you before you even get to type in your name.
    Applying with Intern Guys is all about speed and at the same time get customized suggestions for each question. Why? Because no one application is the same!`,
    image: Images.STEP_3
  },
  {
    title: 'Congratulations!',
    description: `Applied? Finally! But now every day is an anticipation “Did I get accepted or not?” right?
    No! With Intern Guys hear back within two days. Always. Thus, with Intern Guys now you can see your dream Internship acceptance letter within two days! Now one may ask what to do after this? Well of course... Party!!`,
    image: Images.STEP_3
  }
];

const sections = [
  {
    title: 'home'
  },
  { title: 'How does it work' }
];

const homepage = () => {
  return (
    <div>
      {sections
        ? sections.map((section, key) => {
            return (
              <div
                id={section.title === 'How does it work' && 'how-does-it-work'}
                key={key}
                className={`section ${section.title} ${
                  key % 2 === 0 ? 'odd' : 'even'
                }`}
              >
                {section.title !== 'home' && (
                  <>
                    <ChevronPageDown />
                    <SectionTitle
                      text={section.title}
                      subtitle={section.subtitle ? section.subtitle : undefined}
                    />
                  </>
                )}

                {section.title === 'home' && (
                  <HalfScreenImage
                    section="home"
                    text={home}
                    alt="intern guys stat"
                    image={
                      section.title === 'home' ? Images.DASHBOARD_WEB_STAT : ''
                    }
                    imagePos="right"
                  />
                )}

                {section.title === 'How does it work' && steps.length
                  ? steps.map((item, key) => {
                      return (
                        <>
                          <HalfScreenImage
                            idx={key}
                            key={key}
                            text={item}
                            image={item.image}
                          />
                        </>
                      );
                    })
                  : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default homepage;
