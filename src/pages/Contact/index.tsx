import * as React from 'react';
import ContactUI from './UI';
import useDocumentSubtitle from '@/hooks/useDocumentSubtitle';

function Contact() {
  useDocumentSubtitle('Contact');

  return <ContactUI />;
}

export default Contact;
