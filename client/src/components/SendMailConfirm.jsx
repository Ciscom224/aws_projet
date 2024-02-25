import React from 'react';
import emailjs from '@emailjs/browser';

export const sendAuthMail = (userMail,code) => {
    const serviceId = "service_xuqr26r"
    const templateId = "template_kteg1hf"
    const publicKey = "NkwfG2aeiZPXgwkoW"
    
    const templateParams = {
        to_email:userMail,
        message:code,
    };

    emailjs
      .send(serviceId, templateId, templateParams,publicKey)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
};