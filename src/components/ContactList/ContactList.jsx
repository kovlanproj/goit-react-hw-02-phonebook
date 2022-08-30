import { Contact } from './Contact';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact
          contact={contact}
          key={contact.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
