export const Contact = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <li>
      {name}: {number}{' '}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
