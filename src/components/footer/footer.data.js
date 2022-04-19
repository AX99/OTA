import whatsapp from 'assets/images/icons/whatsapp.png';
import email from 'assets/images/icons/email.png';
import form from 'assets/images/icons/form.png';

export const menuItems = [
  {
    id: 1,
    title: 'Contact',
    items: [
      {
        path: 'https://wa.me/447840731249',
        icon: whatsapp,
        label: 'Whatsapp',
      },
      {
        path: 'mailto:hello@onetwelveagency.com?subject=Enquiry',
        icon: email,
        label: 'Email Us',
      },
      {
        path: '#!',
        icon: form,
        label: 'Contact Form',
      },
    ],
  },
];
