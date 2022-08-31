import PropTypes from 'prop-types';
import { ContactItem } from './Contact.styled';

export const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <ContactItem>
      {name}: {number}{' '}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
