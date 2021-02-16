import './contact.sass';

import * as React from 'react';

import { wavingHandEmoji } from '@/data/images';
import { motion } from 'framer-motion';

function ContactUI() {
  return (
    <div className='contact'>
      <section className='contact__content'>
        <div className='contact__title'>
          <h2>
            Hello
            <br /> there
          </h2>
          <img
            alt='waving-hand-emoji'
            className='contact__emoji'
            src={wavingHandEmoji}
          />
        </div>
        <p className='contact__subtitle'>
          I'm Pavel. A freelance Frontend Developer based in St. Petersburg. I
          specialise in creating applications and functional interfaces using
          <b> React,</b> <b>Typescript, </b> and <b>Sass.</b>
        </p>
      </section>
      <section className='contact__links'>
        <menu className='contact__links-container'>
          <li className='contact__links-item'>
            <a href='mailto:pavelxmarkoff@gmail.com'>
              <span>Email</span>
            </a>
          </li>
          <li className='contact__links-item'>
            <a href='https://github.com/pxmarkoff' target='_blank'>
              <span>GitHub</span>
            </a>
          </li>
          <li className='contact__links-item contact__links-item--disabled'>
            <a>
              <span>CV</span>
            </a>
          </li>
        </menu>
      </section>
    </div>
  );
}

export default React.memo(ContactUI);
