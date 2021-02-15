import './contact.sass';

import * as React from 'react';

function ContactUI() {
  return (
    <div className='contact'>
      <h1 className='contact__title'>Contact</h1>
      <h2 className='contact__subtitle'>This is Contact page</h2>
    </div>
  );
}

export default React.memo(ContactUI);
