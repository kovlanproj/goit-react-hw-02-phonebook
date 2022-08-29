export const Contact = ({ contact: { name, number } }) => {
  return (
    <li>
      {name}: {number} <button type="button">Delete</button>
    </li>
  );
};
