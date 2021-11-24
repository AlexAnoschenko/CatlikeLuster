import { FC } from 'react';

import { useContact } from './hooks/useContact';
import { contacts } from './constants';

const Contacts: FC = () => {
  const { dict, isMobile } = useContact();

  return (
    <div
      className={`bg-bg-pages page pt-50px ${
        isMobile ? 'px-4' : 'px-50px'
      }`}
    >
      <div className='mb-6 text-5xl font-bold text-center'>
        {dict.contacts}
      </div>

      <div
        className={`${
          isMobile ? 'mb-10' : 'mb-20'
        } text-2xl text-center`}
      >
        {dict.contactsText}
      </div>

      <div className={`flex justify-center ${isMobile && 'w-max'}`}>
        <div className='w-min'>
          {contacts.map((contact) => (
            <a
              href={contact.link}
              target='_blank'
              rel='noreferrer'
              key={contact.name}
            >
              <div className='flex items-center mb-6'>
                <img
                  src={contact.icon}
                  alt='logo'
                  className='mr-4 w-contact-icon'
                />

                <div className='text-2xl font-bold'>
                  {contact.name}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
