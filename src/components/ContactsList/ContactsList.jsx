import { Contact } from './Contact';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
