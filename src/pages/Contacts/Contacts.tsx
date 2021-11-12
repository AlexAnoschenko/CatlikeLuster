import { FC } from 'react';

import { contacts } from './constants';

const Contacts: FC = () => {
  return (
    <div className='bg-bg-pages page pt-50px px-50px'>
      <div className='mb-6 text-5xl font-bold text-center'>
        Contacts
      </div>

      <div className='mb-20 text-2xl text-center'>
        Delivery of kittens is possible anywhere in the world, please
        specify the delivery price and any other questions in the way.
      </div>

      <div className='flex justify-center'>
        <div className='w-min'>
          {contacts.map((contact) => (
            <a href={contact.link} target='_blank' rel='noreferrer'>
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
