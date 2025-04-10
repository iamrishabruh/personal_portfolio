import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hi, I'm Rishabh Chouhan";

  useEffect(() => {
    let currentIndex = 0;
    let timeout;

    // Add initial delay before starting the typing animation
    const startDelay = setTimeout(() => {
      const type = () => {
        if (currentIndex < fullText.length) {
          setText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(type, 100);
        } else {
          setIsTyping(false);
        }
      };

      type();
    }, 1500); // 1.5 second delay before starting

    return () => {
      clearTimeout(timeout);
      clearTimeout(startDelay);
    };
  }, []);

  return (
    <section className='section home' id='home'>
      <div className='home__container'>
        <h1 className='home__title'>
          <span className='home__typing'>{text}</span>
          {!isTyping && <span className='home__cursor'>|</span>}
        </h1>
        <p className='home__subtitle'>Full Stack Developer</p>
      </div>
    </section>
  );
};

export default Home; 